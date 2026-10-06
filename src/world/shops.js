import * as THREE from 'three';
import { M, boxGeo, flatPlane, tint } from './batch.js';

const MAGMA_RED = 0xc41018;
const MAGMA_WALL = 0xc8c4bc;
const MAGMA_GLOW = new THREE.Color(1.0, 0.42, 0.1);
const KIK_RED = 0xb81414;
const KIK_BROWN = 0x5a3218;
const KIK_BROWN_LT = 0x6e4224;

function frontMeta(x0, z0, x1, z1, front) {
  if (front === 's') return { yaw: Math.PI, cx: (x0 + x1) / 2, cz: z0 - 0.16, w: x1 - x0, along: 'x' };
  if (front === 'n') return { yaw: 0, cx: (x0 + x1) / 2, cz: z1 + 0.16, w: x1 - x0, along: 'x' };
  if (front === 'w') return { yaw: -Math.PI / 2, cx: x0 - 0.16, cz: (z0 + z1) / 2, w: z1 - z0, along: 'z' };
  return { yaw: Math.PI / 2, cx: x1 + 0.16, cz: (z0 + z1) / 2, w: z1 - z0, along: 'z' };
}

function alongPoint(x0, z0, x1, z1, front, t) {
  if (front === 's') return { x: x0 + (x1 - x0) * t, z: z0 };
  if (front === 'n') return { x: x0 + (x1 - x0) * t, z: z1 };
  if (front === 'w') return { x: x0, z: z0 + (z1 - z0) * t };
  return { x: x1, z: z0 + (z1 - z0) * t };
}

function signBoard(w, h, yaw, x, y, z) {
  const g = new THREE.PlaneGeometry(w, h);
  g.rotateY(yaw);
  g.translate(x, y, z);
  return tint(g, 0xffffff);
}

function windowPane(w, h, yaw, x, y, z, color) {
  const g = new THREE.PlaneGeometry(w, h);
  g.rotateY(yaw);
  g.translate(x, y, z);
  return tint(g, color);
}

function apron(x0, z0, x1, z1, front, depth) {
  if (front === 's') return { x0, z0: z0 - depth, x1, z1: z0 };
  if (front === 'n') return { x0, z0: z1, x1, z1: z1 + depth };
  if (front === 'w') return { x0: x0 - depth, z0, x1: x0, z1 };
  return { x0: x1, z0, x1: x1 + depth, z1 };
}

function canopyBox(x0, z0, x1, z1, front, y0, y1, out) {
  if (front === 's') return boxGeo(x0, y0, z0 - out, x1, y1, z0 + 0.15, MAGMA_RED);
  if (front === 'n') return boxGeo(x0, y0, z1 - 0.15, x1, y1, z1 + out, MAGMA_RED);
  if (front === 'w') return boxGeo(x0 - out, y0, z0, x0 + 0.15, y1, z1, MAGMA_RED);
  return boxGeo(x1 - 0.15, y0, z0, x1 + out, y1, z1, MAGMA_RED);
}

function pylonAt(x0, z0, x1, z1, front) {
  if (front === 's') return { x0: x0 - 0.55, z0: z0 - 0.7, x1: x0 + 0.15, z1: z0 - 0.1 };
  if (front === 'n') return { x0: x1 - 0.15, z0: z1 + 0.1, x1: x1 + 0.55, z1: z1 + 0.7 };
  if (front === 'w') return { x0: x0 - 0.7, z0: z0 - 0.55, x1: x0 - 0.1, z1: z0 + 0.15 };
  return { x0: x1 + 0.1, z0: z1 - 0.15, x1: x1 + 0.7, z1: z1 + 0.55 };
}

// «Магма» — белый павильон у дома, красная лента, стела «М», как у Магнита
export function buildMagma(batch, x0, z0, x1, z1, front = 's', useKit = false) {
  const h = 3.7;
  const f = frontMeta(x0, z0, x1, z1, front);
  if (!useKit) {
    batch.add(boxGeo(x0, 0, z0, x1, h - 1.15, z1, MAGMA_WALL), M.DARK);
    batch.add(boxGeo(x0 - 0.04, h - 1.15, z0 - 0.04, x1 + 0.04, h, z1 + 0.04, MAGMA_RED), M.DARK);
    batch.add(flatPlane(x0 - 0.2, z0 - 0.2, x1 + 0.2, z1 + 0.2, h + 0.04, true, 4, 0x8a8a8a), M.ROOF);
    batch.add(boxGeo(x0 - 0.15, h, z0 - 0.15, x1 + 0.15, h + 0.22, z1 + 0.15, 0x9a9a9a), M.CONCRETE);
  }

  const sw = Math.min(f.w - 0.5, 12);
  batch.add(signBoard(sw, 1.05, f.yaw, f.cx, h - 0.56, f.cz), M.SIGN_MAGMA);

  const door = alongPoint(x0, z0, x1, z1, front, 0.5);
  if (!useKit) {
    batch.add(windowPane(1.6, 2.15, f.yaw, door.x + (f.along === 'x' ? 0 : (front === 'w' ? -0.06 : 0.06)), 1.15, door.z + (f.along === 'z' ? 0 : (front === 's' ? -0.06 : 0.06)), 0x141820), M.DARK);
    for (const t of [0.22, 0.78]) {
      const p = alongPoint(x0, z0, x1, z1, front, t);
      const ox = f.along === 'x' ? 0 : (front === 'w' ? -0.06 : 0.06);
      const oz = f.along === 'z' ? 0 : (front === 's' ? -0.06 : 0.06);
      batch.add(windowPane(2.4, 1.7, f.yaw, p.x + ox, 1.35, p.z + oz, MAGMA_GLOW), M.LAMP);
      batch.add(boxGeo(p.x - 0.08, 2.15, p.z - 0.08, p.x + 0.08, 2.22, p.z + 0.08, 0xffffaa), M.LAMP);
    }
    batch.add(canopyBox(x0 + 0.4, z0 + 0.4, x1 - 0.4, z1 - 0.4, front, 2.45, 2.58, 1.15), M.DARK);
  }

  const py = pylonAt(x0, z0, x1, z1, front);
  if (!useKit) {
    batch.add(boxGeo(py.x0, 0, py.z0, py.x1, 4.1, py.z1, MAGMA_RED), M.DARK);
    batch.add(boxGeo(py.x0 - 0.04, 2.55, py.z0 - 0.04, py.x1 + 0.04, 3.55, py.z1 + 0.04, 0xf2eee8), M.DARK);
    const acx = (x0 + x1) / 2 + 1.4, acz = (z0 + z1) / 2;
    batch.add(boxGeo(acx, h + 0.22, acz, acx + 1.3, h + 0.7, acz + 0.9, 0x6a6a6a), M.CONCRETE);
  }

  const ap = apron(x0, z0, x1, z1, front, 2.4);
  batch.add(flatPlane(ap.x0, ap.z0, ap.x1, ap.z1, 0.02, true, 3, 0x3a3a3c), M.DARK);

  return { boxes: [{ x0, y0: 0, z0, x1, y1: h, z1 }, { x0: py.x0, y0: 0, z0: py.z0, x1: py.x1, y1: 4.1, z1: py.z1 }], kind: 'magma', door: { x: door.x, z: door.z }, kit: useKit ? 'shop_magma' : null, x0, z0, x1, z1, front };
}

// «Красное и Коричневое» — полосатый алкопавильон, белые ленты заменены на коричневые
export function buildKrasnoe(batch, x0, z0, x1, z1, front = 's', useKit = false) {
  const h = 3.2;
  const f = frontMeta(x0, z0, x1, z1, front);
  if (!useKit) {
    const bands = [
      [0.00, 0.58, KIK_BROWN],
      [0.58, 1.16, KIK_RED],
      [1.16, 1.74, KIK_BROWN_LT],
      [1.74, 2.32, KIK_RED],
      [2.32, h, KIK_BROWN],
    ];
    for (const [y0, y1, c] of bands) batch.add(boxGeo(x0, y0, z0, x1, y1, z1, c), M.DARK);
    batch.add(flatPlane(x0 - 0.15, z0 - 0.15, x1 + 0.15, z1 + 0.15, h + 0.03, true, 4, 0x4a2a18), M.ROOF);
  }

  const sw = Math.min(f.w - 0.35, 11);
  const signZ = f.cz + (front === 's' ? -0.08 : front === 'n' ? 0.08 : 0) + (front === 'w' ? -0.08 : front === 'e' ? 0.08 : 0);
  batch.add(signBoard(sw, 1.05, f.yaw, f.cx, h + 0.42, signZ), M.SIGN_KIK);

  const door = alongPoint(x0, z0, x1, z1, front, 0.5);
  if (!useKit) {
    const ox = f.along === 'x' ? 0 : (front === 'w' ? -0.06 : 0.06);
    const oz = f.along === 'z' ? 0 : (front === 's' ? -0.06 : 0.06);
    batch.add(windowPane(1.35, 2.05, f.yaw, door.x + ox, 1.1, door.z + oz, 0x1a1010), M.DARK);
    for (const t of [0.2, 0.8]) {
      const p = alongPoint(x0, z0, x1, z1, front, t);
      batch.add(windowPane(1.9, 1.35, f.yaw, p.x + ox, 1.45, p.z + oz, new THREE.Color(0.82, 0.28, 0.1)), M.LAMP);
    }
  }

  const ap = apron(x0, z0, x1, z1, front, 1.8);
  batch.add(flatPlane(ap.x0, ap.z0, ap.x1, ap.z1, 0.02, true, 3, 0x2e2a28), M.DARK);

  return { boxes: [{ x0, y0: 0, z0, x1, y1: h, z1 }], kind: 'kik', door: { x: door.x, z: door.z }, kit: useKit ? 'shop_kik' : null, x0, z0, x1, z1, front };
}
