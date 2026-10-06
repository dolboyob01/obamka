import * as THREE from 'three';
import { M, wallPlane, flatPlane, boxGeo, tint, scaleUV } from './batch.js';
import { CFG } from '../config.js';

// Палитра панелей: серый бетон с редкими выцветшими цветными вставками
const PANEL_TINTS = [0xb5b5b5, 0xa8a8a8, 0xbdbdb8, 0x9fa3a6, 0xb0aaa0, 0xa6adb5];
const ACCENTS = [0x7f95a8, 0xa8a07a, 0x8fa88a, 0xa88a7f, 0x9a8aa8];

// Описание дома в локальных координатах чанка [0,size]. Фасад с подъездами — на стороне z0 (нормаль -z).
export function designBuilding(rng, size) {
  const types = ['khrushch', 'nine', 'tower', 'fractal', 'lshape', 'wall', 'fractal'];
  const type = rng.pick(types);
  const c = size / 2;
  const blocks = [];
  const entrances = [];
  let floors;
  const F = CFG.floorHeight;
  const addBlock = (x0, z0, x1, z1, y0, fl, extra = {}) => { const b = { x0, z0, x1, z1, y0, y1: y0 + fl * F, floors: fl, ...extra }; blocks.push(b); return b; };

  if (type === 'khrushch') {
    floors = 5; const sections = rng.int(2, 3); const len = 12 * sections, depth = 12;
    const x0 = c - len / 2, z0 = c - depth / 2;
    const b = addBlock(x0, z0, x0 + len, z0 + depth, 0, floors);
    for (let i = 0; i < sections; i++) entrances.push({ x: x0 + 12 * i + 6, z: z0, block: b });
  } else if (type === 'nine') {
    floors = 9; const sections = rng.int(2, 3); const len = 14 * sections, depth = 12;
    const x0 = c - len / 2, z0 = c - depth / 2;
    const b = addBlock(x0, z0, x0 + len, z0 + depth, 0, floors);
    for (let i = 0; i < sections; i++) entrances.push({ x: x0 + 14 * i + 7, z: z0, block: b });
  } else if (type === 'tower') {
    floors = rng.int(12, 20); const w = rng.pick([15, 18]);
    const x0 = c - w / 2, z0 = c - w / 2;
    const b = addBlock(x0, z0, x0 + w, z0 + w, 0, floors);
    addBlock(x0 + 3, z0 + 3, x0 + w - 3, z0 + w - 3, floors * F, 1, { tech: true }); // техэтаж
    entrances.push({ x: c, z: z0, block: b });
  } else if (type === 'wall') {
    floors = rng.int(9, 12); const len = 36, depth = 10;
    const x0 = c - len / 2, z0 = c - depth / 2;
    const b = addBlock(x0, z0, x0 + len, z0 + depth, 0, floors);
    for (let i = 0; i < 3; i++) entrances.push({ x: x0 + 12 * i + 6, z: z0, block: b });
  } else if (type === 'lshape') {
    floors = rng.int(5, 9);
    const b1 = addBlock(c - 16, c - 6, c + 10, c + 6, 0, floors);
    const b2 = addBlock(c + 10, c - 6, c + 16, c + 14, 0, floors, { noFront: true });
    entrances.push({ x: c - 10, z: c - 6, block: b1 }, { x: c + 2, z: c - 6, block: b1 });
  } else {
    // Фрактальная соцреалистическая масса: основание и рекурсивно наставленные блоки
    floors = rng.int(6, 9);
    const len = rng.int(24, 30), depth = rng.int(14, 18);
    const x0 = c - len / 2, z0 = c - depth / 2;
    const base = addBlock(x0, z0, x0 + len, z0 + depth, 0, floors);
    const n = rng.int(2, 3);
    for (let i = 0; i < n; i++) entrances.push({ x: x0 + len * (i + 0.5) / n, z: z0, block: base });
    const grow = (p, depthLeft) => {
      if (depthLeft <= 0) return;
      const k = rng.int(1, 2);
      for (let i = 0; i < k; i++) {
        const sw = (p.x1 - p.x0) * rng.range(0.35, 0.65), sd = (p.z1 - p.z0) * rng.range(0.4, 0.75);
        const sx = p.x0 + rng.range(0, (p.x1 - p.x0) - sw), sz = p.z0 + rng.range(0, (p.z1 - p.z0) - sd);
        const fl = rng.int(2, 5);
        const child = addBlock(sx, sz, sx + sw, sz + sd, p.y1, fl, { noFront: true });
        grow(child, depthLeft - 1);
      }
    };
    grow(base, 2);
    // боковое крыло ниже
    if (rng.chance(0.6)) addBlock(x0 + len, z0 + 2, x0 + len + rng.int(6, 9), z0 + depth - 2, 0, Math.max(2, floors - rng.int(2, 4)), { noFront: true });
  }
  // Ориентируем подъезды наружу (-z)
  for (const e of entrances) { e.nx = 0; e.nz = -1; e.floors = e.block.floors; }
  return { type, blocks, entrances, floors };
}

// Кольцо панелек вокруг стартового двора — классический советский «колодец».
export function designDvorBuildings(rng, size) {
  const F = CFG.floorHeight;
  const blocks = [];
  const entrances = [];
  const add = (x0, z0, x1, z1, fl) => {
    const b = { x0, z0, x1, z1, y0: 0, y1: fl * F, floors: fl };
    blocks.push(b);
    return b;
  };
  const south = add(3, 1.2, size - 3, 11.0, 9);
  const north = add(3, size - 11.0, size - 3, size - 1.2, 9);
  const west = add(1.2, 11.0, 11.0, size - 11.0, rng.int(5, 9));
  const east = add(size - 11.0, 11.0, size - 1.2, size - 11.0, rng.int(9, 12));
  for (let i = 0; i < 3; i++) {
    const t = (i + 0.5) / 3;
    entrances.push({ x: 3 + (size - 6) * t, z: 11.0, nx: 0, nz: 1, floors: south.floors, block: south });
    entrances.push({ x: 3 + (size - 6) * t, z: size - 11.0, nx: 0, nz: -1, floors: north.floors, block: north });
  }
  for (let i = 0; i < 2; i++) {
    const t = (i + 0.5) / 2;
    entrances.push({ x: 11.0, z: 11.0 + (size - 22) * t, nx: 1, nz: 0, floors: west.floors, block: west });
    entrances.push({ x: size - 11.0, z: 11.0 + (size - 22) * t, nx: -1, nz: 0, floors: east.floors, block: east });
  }
  return { type: 'dvor', blocks, entrances, floors: 9 };
}

function porchAABB(e, along0, along1, perp0, perp1, y0, y1) {
  const nx = e.nx ?? 0, nz = e.nz ?? -1, px = -nz, pz = nx;
  const xs = [], zs = [];
  for (const a of [along0, along1]) for (const p of [perp0, perp1]) {
    xs.push(e.x + nx * a + px * p);
    zs.push(e.z + nz * a + pz * p);
  }
  return { x0: Math.min(...xs), z0: Math.min(...zs), x1: Math.max(...xs), z1: Math.max(...zs), y0, y1 };
}

const PANEL_W = 3, PANEL_H = 3;

function tilePanels(items, b, face, color) {
  const floors = Math.max(1, b.floors || Math.round((b.y1 - b.y0) / PANEL_H));
  let along0, length, axis, yaw, fixed;
  if (face === 's') { along0 = b.x0; length = b.x1 - b.x0; axis = 'x'; yaw = Math.PI; fixed = b.z0; }
  else if (face === 'n') { along0 = b.x0; length = b.x1 - b.x0; axis = 'x'; yaw = 0; fixed = b.z1; }
  else if (face === 'e') { along0 = b.z0; length = b.z1 - b.z0; axis = 'z'; yaw = Math.PI / 2; fixed = b.x1; }
  else { along0 = b.z0; length = b.z1 - b.z0; axis = 'z'; yaw = -Math.PI / 2; fixed = b.x0; }
  const cols = Math.max(1, Math.floor(length / PANEL_W));
  const used = cols * PANEL_W;
  const pad = (length - used) / 2;
  for (let col = 0; col < cols; col++) {
    const t = pad + col * PANEL_W + PANEL_W / 2;
    for (let row = 0; row < floors; row++) {
      items.push({
        name: 'panel_wall',
        x: axis === 'x' ? along0 + t : fixed,
        y: b.y0 + row * PANEL_H,
        z: axis === 'z' ? along0 + t : fixed,
        yaw,
      });
    }
  }
  return pad;
}

// Геометрия дома
export function buildBuildingGeometry(batch, design, rng, winRng = rng, modules = null) {
  const F = CFG.floorHeight;
  const tintBase = new THREE.Color(rng.pick(PANEL_TINTS));
  const accent = new THREE.Color(rng.pick(ACCENTS));
  const hasMosaic = rng.chance(0.35);
  const windows = [];
  const useKits = !!modules;

  for (const b of design.blocks) {
    const h = b.y1 - b.y0, w = b.x1 - b.x0, d = b.z1 - b.z0;
    const my = (b.y0 + b.y1) / 2;
    const facade = b.tech ? M.CONCRETE : M.FACADE;
    const col = b.tech ? 0x8a8a8a : tintBase;
    const endMat = b.tech ? M.CONCRETE : (hasMosaic && b.y0 === 0 && d < w * 0.85 ? M.MOSAIC : (rng.chance(0.5) ? M.CONCRETE : M.FACADE));
    if (useKits && !b.tech) {
      tilePanels(modules, b, 's', col);
      tilePanels(modules, b, 'n', col);
      if (endMat === M.MOSAIC) {
        batch.add(tint(scaleUV(new THREE.PlaneGeometry(d, h), 1, 1).rotateY(Math.PI / 2).translate(b.x1, my, (b.z0 + b.z1) / 2), 0xffffff), M.MOSAIC);
        batch.add(tint(scaleUV(new THREE.PlaneGeometry(d, h), 1, 1).rotateY(-Math.PI / 2).translate(b.x0, my, (b.z0 + b.z1) / 2), 0xffffff), M.MOSAIC);
      } else {
        tilePanels(modules, b, 'e', col);
        tilePanels(modules, b, 'w', col);
      }
    } else {
      batch.add(wallPlane((b.x0 + b.x1) / 2, my, b.z0, w, h, Math.PI, 3, col), facade);
      batch.add(wallPlane((b.x0 + b.x1) / 2, my, b.z1, w, h, 0, 3, col), facade);
      if (endMat === M.MOSAIC) {
        batch.add(tint(scaleUV(new THREE.PlaneGeometry(d, h), 1, 1).rotateY(Math.PI / 2).translate(b.x1, my, (b.z0 + b.z1) / 2), 0xffffff), M.MOSAIC);
        batch.add(tint(scaleUV(new THREE.PlaneGeometry(d, h), 1, 1).rotateY(-Math.PI / 2).translate(b.x0, my, (b.z0 + b.z1) / 2), 0xffffff), M.MOSAIC);
      } else {
        batch.add(wallPlane(b.x1, my, (b.z0 + b.z1) / 2, d, h, Math.PI / 2, 3, col), endMat);
        batch.add(wallPlane(b.x0, my, (b.z0 + b.z1) / 2, d, h, -Math.PI / 2, 3, col), endMat);
      }
    }
    // крыша
    batch.add(flatPlane(b.x0, b.z0, b.x1, b.z1, b.y1, true, 4, 0x777777), M.ROOF);
    // парапет
    batch.add(boxGeo(b.x0 - 0.1, b.y1, b.z0 - 0.1, b.x1 + 0.1, b.y1 + 0.5, b.z1 + 0.1, 0x9a9a9a), M.CONCRETE);

    // Вертикальные полосы балконов / цветные вставки
    if (!b.tech && w >= 12) {
      const stripes = rng.int(1, Math.floor(w / 8));
      for (let i = 0; i < stripes; i++) {
        const sx = b.x0 + 3 * rng.int(1, Math.floor(w / 3) - 2);
        const side = b.noFront || rng.chance(0.5) ? b.z1 : b.z0;
        const zz0 = side === b.z1 ? b.z1 : b.z0 - 0.9, zz1 = side === b.z1 ? b.z1 + 0.9 : b.z0;
        batch.add(boxGeo(sx, b.y0 + F, zz0, sx + 3, b.y1 - 0.5, zz1, rng.chance(0.4) ? accent : 0x9c9c9c), M.CONCRETE);
      }
    }
    // Светящиеся окна — в них можно влететь
    if (!b.tech) {
        const n = winRng.int(3, Math.min(12, Math.floor(w * h / 55)));
      for (let i = 0; i < n; i++) {
        const tx = winRng.int(0, Math.max(0, Math.floor(w / 3) - 1)), fl = winRng.int(0, Math.max(0, b.floors - 1));
        const wx = b.x0 + tx * 3 + 1.5, wy = b.y0 + fl * F + 1.55;
        const front = winRng.chance(0.5);
        const wz = front ? b.z0 : b.z1;
        const yaw = front ? Math.PI : 0;
        if (useKits) {
          modules.push({ name: 'window_lit', x: wx, y: wy, z: wz + (front ? -0.06 : 0.06), yaw });
        } else {
          const g = new THREE.PlaneGeometry(1.45, 1.55);
          g.rotateY(yaw); g.translate(wx, wy, front ? b.z0 - 0.04 : b.z1 + 0.04);
          batch.add(tint(g, new THREE.Color(0.95, 0.72, 0.28)), M.LAMP);
        }
        windows.push({ x: wx, y: wy, z: wz, nx: 0, nz: front ? -1 : 1, floor: fl });
      }
    }
    // Детали крыши
    if (rng.chance(0.7)) batch.add(boxGeo(b.x0 + 1.5, b.y1, b.z0 + 1.5, b.x0 + 3.5, b.y1 + 1.6, b.z0 + 3.5, 0x8a8a8a), M.CONCRETE);
    if (rng.chance(0.5)) batch.add(boxGeo((b.x0 + b.x1) / 2 - 0.08, b.y1, (b.z0 + b.z1) / 2 - 0.08, (b.x0 + b.x1) / 2 + 0.08, b.y1 + rng.range(3, 7), (b.z0 + b.z1) / 2 + 0.08, 0x222222), M.DARK);
    // орнаментальный пояс — намёк на республики (узбекский / азербайджанский бетон)
    if (!b.tech && rng.chance(0.5) && b.y0 === 0) {
      const by = b.y0 + F * Math.max(1, Math.floor(b.floors * 0.33));
      batch.add(boxGeo(b.x0 - 0.14, by, b.z0 - 0.14, b.x1 + 0.14, by + 0.55, b.z1 + 0.14, rng.pick([0x3a6a78, 0x6a5a3a, 0x4a6a5a])), M.MOSAIC);
    }
  }

  // Подъезды — ориентированы по нормали (nx, nz), наружу от стены
  for (const e of design.entrances) {
    const nx = e.nx ?? 0, nz = e.nz ?? -1;
    const yaw = Math.atan2(nx, nz);
    e.lamp = e.lamp ?? rng.chance(0.55);
    if (useKits) {
      modules.push({ name: 'entrance', x: e.x, y: 0, z: e.z, yaw });
    } else {
      const recess = new THREE.PlaneGeometry(1.6, 2.4); recess.rotateY(yaw); recess.translate(e.x + nx * 0.02, 1.2, e.z + nz * 0.02);
      batch.add(tint(recess, 0x080808), M.DARK);
      const door = new THREE.PlaneGeometry(1.2, 2.1); door.rotateY(yaw); door.translate(e.x + nx * 0.04, 1.1, e.z + nz * 0.04);
      batch.add(tint(door, 0xffffff), M.DOOR);
      const canopy = porchAABB(e, 0, 1.7, -1.6, 1.6, 2.55, 2.75);
      batch.add(boxGeo(canopy.x0, canopy.y0, canopy.z0, canopy.x1, canopy.y1, canopy.z1, 0x9a9a9a), M.CONCRETE);
      const step = porchAABB(e, 0, 1.5, -1.3, 1.3, 0, 0.18);
      batch.add(boxGeo(step.x0, step.y0, step.z0, step.x1, step.y1, step.z1, 0x8a8a8a), M.CONCRETE);
      const w1 = porchAABB(e, 1.4, 1.7, -1.6, -1.3, 0, 2.55);
      const w2 = porchAABB(e, 1.4, 1.7, 1.3, 1.6, 0, 2.55);
      batch.add(boxGeo(w1.x0, w1.y0, w1.z0, w1.x1, w1.y1, w1.z1, 0x8a8a8a), M.CONCRETE);
      batch.add(boxGeo(w2.x0, w2.y0, w2.z0, w2.x1, w2.y1, w2.z1, 0x8a8a8a), M.CONCRETE);
      const lamp = porchAABB(e, 0.7, 1.0, -0.15, 0.15, 2.4, 2.55);
      batch.add(boxGeo(lamp.x0, lamp.y0, lamp.z0, lamp.x1, lamp.y1, lamp.z1, e.lamp ? new THREE.Color(1.0, 0.82, 0.45) : 0x222222), M.LAMP);
      const plate = porchAABB(e, 0.02, 0.06, 0.75, 1.05, 1.9, 2.1);
      batch.add(boxGeo(plate.x0, plate.y0, plate.z0, plate.x1, plate.y1, plate.z1, 0x2a3a6a), M.DARK);
    }
  }
  return { windows };
}

// Руины после взрыва
export function buildRubbleGeometry(batch, design, rng) {
  for (const b of design.blocks) {
    if (b.y0 > 0) continue;
    batch.add(flatPlane(b.x0 - 2, b.z0 - 2, b.x1 + 2, b.z1 + 2, 0.02, true, 3, 0x1a1a1a), M.DARK);
    const n = rng.int(14, 24);
    for (let i = 0; i < n; i++) {
      const x = rng.range(b.x0, b.x1 - 3), z = rng.range(b.z0, b.z1 - 3);
      batch.add(boxGeo(x, 0, z, x + rng.range(1.5, 4), rng.range(0.5, 3.5), z + rng.range(1.5, 4), 0x6a6a6a), M.CONCRETE);
    }
    // остаток стены
    batch.add(boxGeo(b.x0, 0, b.z1 - 0.4, b.x0 + rng.range(4, 10), rng.range(4, 9), b.z1, 0x8a8a8a), M.FACADE);
  }
}

// Коллизии дома (список AABB в локальных координатах)
export function buildingBoxes(design, rubble = false) {
  const out = [];
  if (rubble) {
    for (const b of design.blocks) if (b.y0 === 0) out.push({ x0: b.x0 + 2, y0: 0, z0: b.z0 + 2, x1: b.x1 - 2, y1: 1.2, z1: b.z1 - 2 });
    return out;
  }
  for (const b of design.blocks) out.push({ x0: b.x0, y0: b.y0, z0: b.z0, x1: b.x1, y1: b.y1, z1: b.z1 });
  for (const e of design.entrances) {
    const step = porchAABB(e, 0, 1.5, -1.3, 1.3, 0, 0.18);
    const w1 = porchAABB(e, 1.4, 1.7, -1.6, -1.3, 0, 2.55);
    const w2 = porchAABB(e, 1.4, 1.7, 1.3, 1.6, 0, 2.55);
    out.push(step, w1, w2);
  }
  return out;
}
