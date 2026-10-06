import { CFG } from './config.js';

// Простейший статический мир из AABB-боксов. Этого достаточно для панелек, лестниц и коридоров.
export class StaticWorld {
  constructor() {
    this.boxes = [];
    this.defaultGround = 0;      // уровень земли, если под игроком нет боксов (улица)
    this.hasDefaultGround = true;
    this.cell = 16;
    this.grid = new Map();
  }

  clear() { this.boxes.length = 0; this.grid.clear(); }

  add(x0, y0, z0, x1, y1, z1, tag = null) {
    const b = { x0: Math.min(x0, x1), y0: Math.min(y0, y1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), y1: Math.max(y0, y1), z1: Math.max(z0, z1), tag };
    this.boxes.push(b);
    const c = this.cell;
    for (let gx = Math.floor(b.x0 / c); gx <= Math.floor(b.x1 / c); gx++)
      for (let gz = Math.floor(b.z0 / c); gz <= Math.floor(b.z1 / c); gz++) {
        const k = gx + ',' + gz;
        let arr = this.grid.get(k);
        if (!arr) { arr = []; this.grid.set(k, arr); }
        arr.push(b);
      }
    return b;
  }

  // Удалить все боксы с данным тегом (для выгрузки чанков)
  removeTag(tag) {
    this.boxes = this.boxes.filter(b => b.tag !== tag);
    for (const [k, arr] of this.grid) {
      const f = arr.filter(b => b.tag !== tag);
      if (f.length) this.grid.set(k, f); else this.grid.delete(k);
    }
  }

  near(x, z, r) {
    const c = this.cell, out = [];
    const seen = new Set();
    for (let gx = Math.floor((x - r) / c); gx <= Math.floor((x + r) / c); gx++)
      for (let gz = Math.floor((z - r) / c); gz <= Math.floor((z + r) / c); gz++) {
        const arr = this.grid.get(gx + ',' + gz);
        if (!arr) continue;
        for (const b of arr) if (!seen.has(b)) { seen.add(b); out.push(b); }
      }
    return out;
  }

  // Высота пола под точкой (x,z) при текущей высоте ног feetY: самый высокий бокс, чей верх не выше feetY+step.
  groundAt(x, z, feetY, radius = 0.3, step = CFG.stepHeight) {
    let g = this.hasDefaultGround ? this.defaultGround : -Infinity;
    for (const b of this.near(x, z, radius + 1)) {
      if (x + radius <= b.x0 || x - radius >= b.x1 || z + radius <= b.z0 || z - radius >= b.z1) continue;
      if (b.y1 <= feetY + step && b.y1 > g) g = b.y1;
    }
    return g;
  }

  // Потолок над точкой
  ceilingAt(x, z, headY, radius = 0.3) {
    let c = Infinity;
    for (const b of this.near(x, z, radius + 1)) {
      if (x + radius <= b.x0 || x - radius >= b.x1 || z + radius <= b.z0 || z - radius >= b.z1) continue;
      if (b.y0 >= headY - 0.01 && b.y0 < c) c = b.y0;
    }
    return c;
  }

  // Двигает цилиндр (x,z,radius; ноги на feetY, высота h) на dx,dz с разрешением по осям
  move(pos, dx, dz, radius, feetY, h, step = CFG.stepHeight) {
    const lo = feetY + step, hi = feetY + h;
    const boxes = this.near(pos.x + dx, pos.z + dz, radius + Math.abs(dx) + Math.abs(dz) + 1);
    // X
    let nx = pos.x + dx;
    for (const b of boxes) {
      if (b.y1 <= lo || b.y0 >= hi) continue;
      if (pos.z + radius <= b.z0 || pos.z - radius >= b.z1) continue;
      if (nx + radius > b.x0 && nx - radius < b.x1) {
        nx = dx > 0 ? b.x0 - radius - 0.001 : b.x1 + radius + 0.001;
      }
    }
    pos.x = nx;
    // Z
    let nz = pos.z + dz;
    for (const b of boxes) {
      if (b.y1 <= lo || b.y0 >= hi) continue;
      if (pos.x + radius <= b.x0 || pos.x - radius >= b.x1) continue;
      if (nz + radius > b.z0 && nz - radius < b.z1) {
        nz = dz > 0 ? b.z0 - radius - 0.001 : b.z1 + radius + 0.001;
      }
    }
    pos.z = nz;
  }

  // Точка внутри какого-либо бокса (для камеры)
  pointInside(x, y, z) {
    for (const b of this.near(x, z, 1))
      if (x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1 && z > b.z0 && z < b.z1) return true;
    return false;
  }

  // Пересечение отрезка a→b с боксами (slab-метод). Возвращает t∈[0,1] первого входа или 1.
  segmentHit(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    let best = 1;
    const r = Math.max(Math.abs(dx), Math.abs(dz)) + 1;
    for (const b of this.near((ax + bx) / 2, (az + bz) / 2, r)) {
      let t0 = 0, t1 = 1;
      const axes = [[ax, dx, b.x0, b.x1], [ay, dy, b.y0, b.y1], [az, dz, b.z0, b.z1]];
      let ok = true;
      for (const [o, d, lo, hi] of axes) {
        if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) { ok = false; break; } continue; }
        let ta = (lo - o) / d, tb = (hi - o) / d;
        if (ta > tb) { const tmp = ta; ta = tb; tb = tmp; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        if (t0 > t1) { ok = false; break; }
      }
      if (ok && t0 < best) best = t0;
    }
    return best;
  }

  // Грубая проверка прямой видимости (шаги по 0.5 м)
  lineOfSight(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const d = Math.hypot(dx, dy, dz);
    const n = Math.ceil(d / 0.6);
    for (let i = 1; i < n; i++) {
      const t = i / n;
      if (this.pointInside(ax + dx * t, ay + dy * t, az + dz * t)) return false;
    }
    return true;
  }
}
