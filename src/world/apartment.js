import * as THREE from 'three';
import { Batch, M, boxGeo, tint } from './batch.js';
import { Rng } from '../rng.js';

function addBox(batch, boxes, x0, y0, z0, x1, y1, z1, mat, color, solid = true) {
  batch.add(boxGeo(x0, y0, z0, x1, y1, z1, color), mat);
  if (solid) boxes.push({ x0, y0, z0, x1, y1, z1 });
}

// Квартира постсоветского двора: кухня, диван, ковёр на стене, выход в окно и в подъезд.
export function generateApartment(seed, materials) {
  const rng = new Rng(seed);
  const batch = new Batch();
  const boxes = [];
  const W = 9.2, D = 7.4, H = 2.75;
  const wall = new THREE.Color().setHSL(rng.range(0.06, 0.12), 0.18, rng.range(0.68, 0.8));
  const add = (x0, y0, z0, x1, y1, z1, mat = M.WALLINT, color = wall, solid = true) => addBox(batch, boxes, x0, y0, z0, x1, y1, z1, mat, color, solid);

  add(-0.2, -0.15, -0.2, W + 0.2, 0, D + 0.2, M.FLOORINT, 0xc9b48c);
  add(-0.2, H, -0.2, W + 0.2, H + 0.12, D + 0.2, M.CEILINT, 0xddd6c8);
  add(-0.2, 0, -0.2, 0, H, D + 0.2);
  add(W, 0, -0.2, W + 0.2, H, D + 0.2);
  add(-0.2, 0, D, W + 0.2, H, D + 0.2);
  add(-0.2, 0, -0.2, 3.4, H, 0);
  add(5.4, 0, -0.2, W + 0.2, H, 0);
  add(3.4, 2.15, -0.2, 5.4, H, 0);
  add(3.4, 0, -0.16, 5.4, 2.15, -0.08, M.DARK, 0x3a3428, true);

  const win = new THREE.PlaneGeometry(1.9, 1.5); win.translate(4.4, 1.35, -0.18);
  batch.add(tint(win, new THREE.Color(0.55, 0.48, 0.22)), M.LAMP);

  add(0.15, 0.9, D - 0.08, 2.4, 2.35, D - 0.02, M.MOSAIC, rng.pick([0x7a2a2a, 0x3a5a4a, 0x4a3a6a]), false);

  add(0.2, 0, 3.6, 3.1, 0.42, 4.8, M.DARK, 0x4a3a28);
  add(0.25, 0.42, 3.7, 3.05, 0.92, 4.55, M.DARK, 0x3a4a6a);
  add(0.2, 0.42, 4.55, 3.1, 1.15, 4.75, M.DARK, 0x3a4a6a);

  add(6.4, 0, 0.3, 7.3, 1.7, 1.1, M.DARK, 0xc8c8c4);
  add(7.5, 0, 0.3, 8.9, 0.85, 1.5, M.DARK, 0x3a3a3a);
  add(6.3, 0.85, 1.7, 8.9, 0.95, 3.4, M.DARK, 0x8a6a4a);
  add(6.4, 0, 1.8, 6.55, 0.85, 2.1, M.DARK, 0x5a3a22);
  add(8.6, 0, 2.9, 8.75, 0.85, 3.2, M.DARK, 0x5a3a22);

  add(W - 0.12, 0.4, 4.4, W - 0.02, 1.5, 6.2, M.DARK, 0x2a2a2a, false);

  add(W - 0.05, 0, 2.4, W + 0.02, 2.1, 3.5, M.DOOR, 0x5a3a28, false);

  add(4.1, H - 0.1, 3.4, 4.7, H - 0.02, 4.0, M.LAMP, new THREE.Color(0.85, 0.72, 0.45), false);

  const mesh = batch.build(materials);
  const group = new THREE.Group();
  if (mesh) group.add(mesh);
  return {
    group, boxes,
    windowExit: { x: 4.4, y: 0, z: 0.7 },
    door: { x: W - 0.8, y: 0, z: 2.95 },
    lamps: [
      { x: 4.4, y: H - 0.3, z: 3.7, flicker: rng.chance(0.25) },
      { x: 1.8, y: 1.8, z: 4.2, flicker: false },
      { x: 7.4, y: 1.7, z: 2.2, flicker: false },
    ],
    spawns: [{ x: 1.6, y: 0, z: 5.4 }, { x: 7.2, y: 0, z: 5.8 }, { x: 4.8, y: 0, z: 2.2 }],
    stalkerSpot: { x: 2.2, y: 0, z: 5.8 },
    playerStart: { x: 4.4, y: 0, z: 3.2, yaw: 0.4 },
  };
}
