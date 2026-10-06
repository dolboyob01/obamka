import * as THREE from 'three';
import { M, boxGeo, flatPlane, tint } from './batch.js';
import { buildMagma, buildKrasnoe } from './shops.js';

// Возвращает { boxes:[...], carousel: {x,z} | null, lamps:[{x,z}] }
export function buildCourtyard(batch, rng, size, tight = false) {
  const c = size / 2, boxes = [], lamps = [];
  const rust = 0x5a3a2a, steel = 0x6a6a70, wood = 0x4a3a28;
  const spread = tight ? 8 : 16;

  // Качели: две П-образные стойки и перекладина, сиденье на цепях (сиденье — отдельный mesh)
  const sx = c - 6, sz = c + (tight ? 2 : rng.range(-3, 3));
  for (const dx of [-1.3, 1.3]) {
    batch.add(boxGeo(sx + dx - 0.06, 0, sz - 0.6, sx + dx + 0.06, 2.2, sz - 0.48, rust), M.DARK);
    batch.add(boxGeo(sx + dx - 0.06, 0, sz + 0.48, sx + dx + 0.06, 2.2, sz + 0.6, rust), M.DARK);
  }
  batch.add(boxGeo(sx - 1.4, 2.15, sz - 0.07, sx + 1.4, 2.27, sz + 0.07, rust), M.DARK);
  batch.add(boxGeo(sx - 0.03, 0.55, sz - 0.03, sx + 0.03, 2.15, sz + 0.03, steel), M.DARK);
  batch.add(boxGeo(sx - 0.03 + 0.5, 0.55, sz - 0.03, sx + 0.03 + 0.5, 2.15, sz + 0.03, steel), M.DARK);
  boxes.push({ x0: sx - 1.4, y0: 0, z0: sz - 0.6, x1: sx - 1.2, y1: 2.2, z1: sz + 0.6 }, { x0: sx + 1.2, y0: 0, z0: sz - 0.6, x1: sx + 1.4, y1: 2.2, z1: sz + 0.6 });
  // сиденье рисуется отдельным объектом (качается)

  // Карусель — центральная стойка статична, вращающаяся часть отдельным объектом
  const cx = c + 6, cz = c - (tight ? 1 : 0) + (tight ? 0 : rng.range(-4, 4));
  batch.add(boxGeo(cx - 0.1, 0, cz - 0.1, cx + 0.1, 0.9, cz + 0.1, steel), M.DARK);
  boxes.push({ x0: cx - 1.4, y0: 0, z0: cz - 1.4, x1: cx + 1.4, y1: 0.7, z1: cz + 1.4 });

  // Песочница с грибком
  const px = c + rng.range(-2, 2), pz = c - (tight ? 5 : 9) + rng.range(-1, 1);
  for (const [a, b, d, e] of [[-1.5, -1.5, 1.5, -1.3], [-1.5, 1.3, 1.5, 1.5], [-1.5, -1.5, -1.3, 1.5], [1.3, -1.5, 1.5, 1.5]])
    batch.add(boxGeo(px + a, 0, pz + b, px + d, 0.3, pz + e, wood), M.DARK);
  batch.add(flatPlane(px - 1.3, pz - 1.3, px + 1.3, pz + 1.3, 0.12, true, 3, 0x9a8a70), M.CONCRETE);
  batch.add(boxGeo(px - 0.08, 0, pz - 0.08, px + 0.08, 2.0, pz + 0.08, wood), M.DARK);
  batch.add(boxGeo(px - 1.2, 1.9, pz - 1.2, px + 1.2, 2.05, pz + 1.2, 0x7a3a3a), M.DARK);
  boxes.push({ x0: px - 1.5, y0: 0, z0: pz - 1.5, x1: px + 1.5, y1: 0.3, z1: pz + 1.5 });

  // Лавки
  for (let i = 0; i < 3; i++) {
    const bx = c + rng.range(-spread, spread), bz = c + rng.range(-spread, spread);
    batch.add(boxGeo(bx - 0.9, 0.4, bz - 0.2, bx + 0.9, 0.48, bz + 0.2, wood), M.DARK);
    batch.add(boxGeo(bx - 0.9, 0.5, bz + 0.18, bx + 0.9, 0.9, bz + 0.24, wood), M.DARK);
    batch.add(boxGeo(bx - 0.8, 0, bz - 0.15, bx - 0.7, 0.4, bz + 0.2, steel), M.DARK);
    batch.add(boxGeo(bx + 0.7, 0, bz - 0.15, bx + 0.8, 0.4, bz + 0.2, steel), M.DARK);
    boxes.push({ x0: bx - 0.9, y0: 0, z0: bz - 0.2, x1: bx + 0.9, y1: 0.9, z1: bz + 0.25 });
  }

  // Мёртвые деревья
  const trees = rng.int(3, 6);
  for (let i = 0; i < trees; i++) {
    const tx = c + rng.range(-spread - 2, spread + 2), tz = c + rng.range(-spread - 2, spread + 2);
    if (Math.hypot(tx - c, tz - c) < 5) continue;
    const h = rng.range(4, 7);
    batch.add(boxGeo(tx - 0.18, 0, tz - 0.18, tx + 0.18, h, tz + 0.18, 0x2a2420), M.DARK);
    for (let k = 0; k < 4; k++) {
      const a = rng.range(0, Math.PI * 2), l = rng.range(1, 2.4), y = h - rng.range(0.5, 2.5);
      const g = new THREE.BoxGeometry(0.1, 0.1, l); g.translate(0, 0, l / 2); g.rotateX(-rng.range(0.3, 0.9)); g.rotateY(a); g.translate(tx, y, tz);
      batch.add(tint(g, 0x2a2420), M.DARK);
    }
    boxes.push({ x0: tx - 0.2, y0: 0, z0: tz - 0.2, x1: tx + 0.2, y1: h, z1: tz + 0.2 });
  }

  // Фонарь (тусклый)
  const lx = c + rng.range(-10, 10), lz = c + rng.range(-10, 10);
  batch.add(boxGeo(lx - 0.1, 0, lz - 0.1, lx + 0.1, 6, lz + 0.1, 0x3a3a3a), M.DARK);
  const lit = rng.chance(0.6);
  batch.add(boxGeo(lx - 0.3, 5.8, lz - 0.1, lx + 0.5, 6.1, lz + 0.3, lit ? new THREE.Color(0.8, 0.7, 0.45) : 0x222222), M.LAMP);
  if (lit) lamps.push({ x: lx, z: lz, y: 5.8 });
  boxes.push({ x0: lx - 0.1, y0: 0, z0: lz - 0.1, x1: lx + 0.1, y1: 6, z1: lz + 0.1 });

  // Мусорные баки
  const mx = c + (tight ? 4 : rng.range(-18, 18)), mz = c + (tight ? 8 : 18);
  for (let i = 0; i < 3; i++) batch.add(boxGeo(mx + i * 1.3, 0, mz, mx + i * 1.3 + 1.1, 1.1, mz + 1.1, rng.pick([0x3a4a3a, 0x4a3a3a, 0x3a3a4a])), M.DARK);
  boxes.push({ x0: mx, y0: 0, z0: mz, x1: mx + 3.7, y1: 1.1, z1: mz + 1.1 });

  // Ковровая сушилка (турник)
  const kx = c - (tight ? 8 : 14), kz = c + (tight ? 7 : 10);
  batch.add(boxGeo(kx - 0.05, 0, kz, kx + 0.05, 2.1, kz + 0.1, steel), M.DARK);
  batch.add(boxGeo(kx + 2.5, 0, kz, kx + 2.6, 2.1, kz + 0.1, steel), M.DARK);
  batch.add(boxGeo(kx - 0.05, 2.0, kz, kx + 2.6, 2.1, kz + 0.1, steel), M.DARK);
  if (rng.chance(0.5)) batch.add(boxGeo(kx + 0.5, 0.6, kz - 0.02, kx + 2.1, 2.0, kz + 0.12, 0x5a3a3a), M.DARK);

  return { boxes, carousel: { x: cx, z: cz }, lamps, swing: { x: sx + 0.25, z: sz } };
}

// Вращающаяся часть карусели — отдельный объект, он анимируется
export function makeCarouselRotor() {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0x5a4a3a });
  const steel = new THREE.MeshLambertMaterial({ color: 0x6a6a70 });
  const disk = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.08, 8), mat); disk.position.y = 0.45; g.add(disk);
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2;
    const bar = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.6, 0.06), steel);
    bar.position.set(Math.cos(a) * 1.1, 0.78, Math.sin(a) * 1.1); g.add(bar);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.3), mat);
    seat.position.set(Math.cos(a) * 0.9, 0.7, Math.sin(a) * 0.9); seat.rotation.y = -a; g.add(seat);
  }
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.04, 6, 12), steel); ring.rotation.x = Math.PI / 2; ring.position.y = 1.05; g.add(ring);
  return g;
}

export function makeSwingSeat() {
  const g = new THREE.Group();
  const wood = new THREE.MeshLambertMaterial({ color: 0x4a3a28 });
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.08, 0.4), wood);
  seat.position.set(0, 0.54, 0);
  g.add(seat);
  return g;
}

// Пустырь: сугробы, кусты, столбы ЛЭП, брошенная машина
export function buildTundra(batch, rng, size, useKit = false) {
  const boxes = [];
  const n = rng.int(4, 9);
  for (let i = 0; i < n; i++) {
    const x = rng.range(3, size - 3), z = rng.range(3, size - 3);
    const kind = rng.next();
    if (kind < 0.45) {
      const r = rng.range(1.1, 2.3), h = r * 0.55;
      const g = new THREE.SphereGeometry(r, 8, 6);
      g.translate(x, h * 0.35, z);
      batch.add(tint(g, 0xc4c8cc), M.CONCRETE);
      boxes.push({ x0: x - r * 0.7, y0: 0, z0: z - r * 0.7, x1: x + r * 0.7, y1: h, z1: z + r * 0.7 });
    } else if (kind < 0.8) {
      // мёртвый куст
      for (let k = 0; k < 5; k++) {
        const g = new THREE.BoxGeometry(0.05, rng.range(0.6, 1.4), 0.05);
        g.translate(0, 0.5, 0); g.rotateZ(rng.range(-0.5, 0.5)); g.rotateX(rng.range(-0.5, 0.5)); g.translate(x, 0, z);
        batch.add(tint(g, 0x2e2822), M.DARK);
      }
    } else if (kind < 0.92) {
      // столб ЛЭП
      const pole = new THREE.CylinderGeometry(0.12, 0.16, 8, 8);
      pole.translate(x, 4, z);
      batch.add(tint(pole, 0x4a4a48), M.CONCRETE);
      batch.add(boxGeo(x - 1.2, 7.4, z - 0.08, x + 1.2, 7.55, z + 0.08, 0x3a3a3a), M.DARK);
      boxes.push({ x0: x - 0.15, y0: 0, z0: z - 0.15, x1: x + 0.15, y1: 8, z1: z + 0.15 });
    } else {
      // остов машины
      batch.add(boxGeo(x, 0.3, z, x + 4, 1.0, z + 1.7, rng.pick([0x5a4a3a, 0x3a3a4a, 0x6a5a2a])), M.DARK);
      batch.add(boxGeo(x + 1, 1.0, z + 0.1, x + 3, 1.5, z + 1.6, 0x1a1a1a), M.DARK);
      boxes.push({ x0: x, y0: 0, z0: z, x1: x + 4, y1: 1.5, z1: z + 1.7 });
    }
  }
  const shops = [];
  if (rng.chance(0.22)) {
    const sx = rng.range(4, size - 20), sz = rng.range(4, size - 14);
    const shopFn = rng.chance(0.5) ? buildMagma : buildKrasnoe;
    const shop = shopFn(batch, sx, sz, sx + 13, sz + 9, rng.pick(['s', 'n', 'w', 'e']), useKit);
    boxes.push(...shop.boxes);
    shops.push(shop);
  }
  // иногда — гаражи-ракушки
  if (rng.chance(0.4)) {
    const gx = rng.range(4, size - 20), gz = rng.range(4, size - 8);
    for (let i = 0; i < 4; i++) {
      batch.add(boxGeo(gx + i * 3.6, 0, gz, gx + i * 3.6 + 3.4, 2.4, gz + 6, rng.pick([0x4a4a4a, 0x5a4a3a, 0x3a4a5a])), M.CONCRETE);
    }
    boxes.push({ x0: gx, y0: 0, z0: gz, x1: gx + 14.2, y1: 2.4, z1: gz + 6 });
  }
  return { boxes, shops };
}

// Открытая улица: проезд, фонари, киоск — воздух между домами
export function buildStreet(batch, rng, size, useKit = false) {
  const boxes = [];
  const c = size / 2;
  batch.add(flatPlane(0, c - 4.2, size, c + 4.2, 0.012, true, 4, 0x353538), M.DARK);
  batch.add(flatPlane(0, c - 0.08, size, c + 0.08, 0.02, true, 8, 0x8a7a40), M.DARK);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const x = 8 + i * 14 + rng.range(-1, 1), z = c + side * 6.2;
      const pole = new THREE.CylinderGeometry(0.08, 0.1, 5.6, 8);
      pole.translate(x, 2.8, z);
      batch.add(tint(pole, 0x3a3a3a), M.DARK);
      const lamp = new THREE.SphereGeometry(0.22, 8, 6);
      lamp.translate(x, 5.55, z);
      const lit = rng.chance(0.55);
      batch.add(tint(lamp, lit ? new THREE.Color(1.0, 0.85, 0.5) : 0x222222), M.LAMP);
      boxes.push({ x0: x - 0.12, y0: 0, z0: z - 0.12, x1: x + 0.12, y1: 5.6, z1: z + 0.12 });
    }
  }
  const shops = [];
  if (rng.chance(0.72)) {
    const north = rng.chance(0.5);
    const kx = rng.range(6, size - 20);
    const kz = north ? c + 8.2 : c - 16.5;
    const front = north ? 's' : 'n';
    const shopFn = rng.chance(0.5) ? buildMagma : buildKrasnoe;
    const shop = shopFn(batch, kx, kz, kx + 13, kz + 8.5, front, useKit);
    boxes.push(...shop.boxes);
    shops.push(shop);
  }
  const t = buildTundra(batch, rng, size, useKit);
  boxes.push(...t.boxes.filter(b => b.z0 > c + 7 || b.z1 < c - 7));
  if (t.shops) shops.push(...t.shops);
  return { boxes, shops };
}
