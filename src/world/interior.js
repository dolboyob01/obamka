import * as THREE from 'three';
import { Batch, M, tint, scaleUV, flatPlane } from './batch.js';
import { Rng } from '../rng.js';

const F = 3; // высота этажа

// Бокс с корректной текстурой на каждой грани (тайл 3 м)
function texBox(batch, mat, x0, y0, z0, x1, y1, z1, color = 0xffffff, tile = 3) {
  const w = x1 - x0, h = y1 - y0, d = z1 - z0, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, cz = (z0 + z1) / 2;
  const faces = [
    [w, h, 0, cx, cy, z1], [w, h, Math.PI, cx, cy, z0],
    [d, h, Math.PI / 2, x1, cy, cz], [d, h, -Math.PI / 2, x0, cy, cz],
  ];
  for (const [fw, fh, yaw, px, py, pz] of faces) {
    if (fw < 0.01 || fh < 0.01) continue;
    const g = new THREE.PlaneGeometry(fw, fh); scaleUV(g, fw / tile, fh / tile); g.rotateY(yaw); g.translate(px, py, pz);
    batch.add(tint(g, color), mat);
  }
  if (w > 0.01 && d > 0.01) {
    batch.add(flatPlane(x0, z0, x1, z1, y1, true, tile, color), mat);
    batch.add(flatPlane(x0, z0, x1, z1, y0, false, tile, color), mat);
  }
}

export function generateInterior(seed, floorsWanted, materials) {
  const rng = new Rng(seed);
  const floors = Math.max(4, Math.min(16, floorsWanted || 5));
  const H = floors * F;
  const batch = new Batch();
  const boxes = [];
  const add = (x0, y0, z0, x1, y1, z1, mat = M.WALLINT, color = 0xffffff, solid = true, tile = 3) => {
    texBox(batch, mat, x0, y0, z0, x1, y1, z1, color, tile);
    if (solid) boxes.push({ x0, y0, z0, x1, y1, z1 });
  };
  const wallTint = new THREE.Color().setHSL(rng.range(0, 1), 0.08, rng.range(0.6, 0.85));
  const CW = 13;     // половина длины коридора
  const out = { floors, boxes, elevators: [], corners: [], spawns: [], lamps: [], windows: [] };

  // ---------- Холл первого этажа ----------
  // пол холла
  add(-3.2, -0.2, -0.2, 3.2, 0, 5, M.FLOORINT, 0xffffff);
  // передняя стена с дверным проёмом
  add(-3.2, 0, -0.2, -0.7, F, 0, M.WALLINT, wallTint);
  add(0.7, 0, -0.2, 3.2, F, 0, M.WALLINT, wallTint);
  add(-0.7, 2.2, -0.2, 0.7, F, 0, M.WALLINT, wallTint);
  // дверь подъезда изнутри — тёмный проём (выход)
  const exitPlane = new THREE.PlaneGeometry(1.4, 2.2); exitPlane.translate(0, 1.1, -0.1); batch.add(tint(exitPlane, 0x08090a), M.DARK);
  boxes.push({ x0: -0.7, y0: 0, z0: -0.2, x1: 0.7, y1: 2.2, z1: -0.05 }); // закрытая дверь (выход — через E)
  out.exit = { x: 0, z: 0.9, y: 0 };
  out.playerStart = { x: 0, z: 2.6, y: 0, yaw: 0 };
  // боковые стены холла
  add(-3.4, 0, -0.2, -3.2, F, 5, M.WALLINT, wallTint);
  add(3.2, 0, -0.2, 3.4, F, 5, M.WALLINT, wallTint);
  // почтовые ящики
  add(-3.2, 0.8, 1.0, -2.9, 1.7, 3.0, M.DARK, 0x3a4a5a);
  // лампа холла
  add(-0.3, F - 0.12, 2.3, 0.3, F - 0.02, 2.7, M.LAMP, new THREE.Color(0.8, 0.75, 0.55), false);
  out.lamps.push({ x: 0, y: F - 0.3, z: 2.5, flicker: rng.chance(0.5) });
  // лифтовая шахта (все этажи)
  add(1.2, -0.2, 2.5, 3.2, H + 0.2, 4.8, M.WALLINT, wallTint);
  // дверь лифта на 1 этаже (западная грань шахты)
  const ed0 = new THREE.PlaneGeometry(1.2, 2.1); ed0.rotateY(-Math.PI / 2); ed0.translate(1.19, 1.05, 3.6); batch.add(tint(ed0, 0xffffff), M.ELEVATOR);
  out.elevators.push({ x: 0.6, z: 3.6, y: 0, floor: 0 });
  // кнопка
  add(1.17, 1.2, 4.3, 1.2, 1.3, 4.4, M.LAMP, new THREE.Color(0.8, 0.3, 0.2), false);
  out.corners.push({ x: -2.7, y: 0, z: 0.4 }, { x: 2.7, y: 0, z: 0.4 }, { x: -2.7, y: 0, z: 2.2 });

  // ---------- Этажи ----------
  for (let f = 0; f < floors; f++) {
    const y = f * F;
    // пол коридора + площадки
    add(-CW - 0.2, y - 0.2, 4.8, CW + 0.2, y, 8.2, M.FLOORINT);
    // южная стена коридора (с проёмом в холл на 1 этаже)
    if (f === 0) {
      add(-CW - 0.2, y, 4.8, -3.2, y + F, 5, M.WALLINT, wallTint);
      add(3.2, y, 4.8, CW + 0.2, y + F, 5, M.WALLINT, wallTint);
    } else {
      add(-CW - 0.2, y, 4.8, CW + 0.2, y + F, 5, M.WALLINT, wallTint);
      // дверь лифта на этаже
      const ed = new THREE.PlaneGeometry(1.2, 2.1); ed.translate(2.1, y + 1.05, 5.01); batch.add(tint(ed, 0xffffff), M.ELEVATOR);
      add(1.4, y + 1.2, 5.0, 1.5, y + 1.3, 5.03, M.LAMP, new THREE.Color(0.8, 0.3, 0.2), false);
      out.elevators.push({ x: 2.1, z: 5.7, y, floor: f });
    }
    // северная стена коридора с проёмом на лестницу
    add(-CW - 0.2, y, 8, -1.8, y + F, 8.2, M.WALLINT, wallTint);
    add(1.8, y, 8, CW + 0.2, y + F, 8.2, M.WALLINT, wallTint);
    // торцы коридора с окнами
    add(-CW - 0.4, y, 4.8, -CW - 0.2, y + F, 8.2, M.WALLINT, wallTint);
    add(CW + 0.2, y, 4.8, CW + 0.4, y + F, 8.2, M.WALLINT, wallTint);
    for (const sx of [-1, 1]) {
      const win = new THREE.PlaneGeometry(1.6, 1.4); win.rotateY(sx < 0 ? Math.PI / 2 : -Math.PI / 2); win.translate(sx * (CW + 0.19), y + 1.7, 6.5);
      batch.add(tint(win, new THREE.Color(0.3, 0.33, 0.38)), M.LAMP);
      out.windows.push({ x: sx * CW, y: y + 1.7, z: 6.5 });
      // батарея
      add(sx * (CW + 0.1) - 0.1, y + 0.3, 6.0, sx * (CW + 0.1) + 0.1, y + 0.9, 7.0, M.DARK, 0x7a7a70, false);
    }
    // двери квартир
    for (let i = 0; i < 3; i++) for (const sx of [-1, 1]) {
      const dx = sx * (4.6 + i * 3.1);
      for (const [zz, yaw] of [[5.01, 0], [7.99, Math.PI]]) {
        const open = rng.chance(0.12);
        const g = new THREE.PlaneGeometry(0.95, 2.1); g.rotateY(yaw); g.translate(dx, y + 1.05, zz);
        batch.add(tint(g, open ? 0x050505 : new THREE.Color().setHSL(0.07, 0.3, rng.range(0.25, 0.5))), open ? M.DARK : M.DOOR);
      }
      if (i === 1) out.spawns.push({ x: dx, y, z: 6.5, floor: f });
    }
    if (f > 0) out.spawns.push({ x: 0, y, z: 6.5, floor: f });
    // лампы
    for (const lx of [-9, 0, 9]) {
      const on = rng.chance(0.65);
      add(lx - 0.3, y + F - 0.12, 6.3, lx + 0.3, y + F - 0.02, 6.7, M.LAMP, on ? new THREE.Color(0.8, 0.75, 0.55) : 0x202020, false);
      if (on) out.lamps.push({ x: lx, y: y + F - 0.3, z: 6.5, flicker: rng.chance(0.4) });
    }
    // углы коридора
    out.corners.push({ x: -CW + 0.4, y, z: 5.4 }, { x: CW - 0.4, y, z: 5.4 }, { x: -CW + 0.4, y, z: 7.6 }, { x: CW - 0.4, y, z: 7.6 });

    // ---------- Лестничный марш между f и f+1 ----------
    if (f < floors - 1) {
      // стены лестничной клетки
      add(-2.0, y, 8, -1.8, y + F, 12.7, M.WALLINT, wallTint);
      add(1.8, y, 8, 2.0, y + F, 12.7, M.WALLINT, wallTint);
      add(-2.0, y, 12.5, 2.0, y + F, 12.7, M.WALLINT, wallTint);
      const win = new THREE.PlaneGeometry(1.6, 1.2); win.rotateY(Math.PI); win.translate(0, y + 2.2, 12.49);
      batch.add(tint(win, new THREE.Color(0.3, 0.33, 0.38)), M.LAMP);
      // разделитель между маршами
      add(-0.2, y - 0.2, 8, 0.2, y + F, 11, M.WALLINT, wallTint);
      // марш A: вверх по +z, x∈[0.2,1.8]
      for (let s = 0; s < 10; s++) {
        const sy = y + s * 0.15, sz = 8 + s * 0.3;
        add(0.2, y - 0.2, sz, 1.8, sy + 0.15, sz + 0.3, M.FLOORINT, 0xffffff, true, 1.5);
      }
      // промежуточная площадка
      add(-1.8, y + 1.3, 11, 1.8, y + 1.5, 12.5, M.FLOORINT, 0xffffff, true, 1.5);
      // марш B: вверх по -z, x∈[-1.8,-0.2]
      for (let s = 0; s < 10; s++) {
        const sy = y + 1.5 + s * 0.15, sz = 11 - s * 0.3;
        add(-1.8, y - 0.2, sz - 0.3, -0.2, sy + 0.15, sz, M.FLOORINT, 0xffffff, true, 1.5);
      }
      // перила
      add(-1.8, y + 1.5, 11.0, -1.7, y + 2.4, 12.5, M.DARK, 0x3a3a3a, false);
      out.corners.push({ x: -1.4, y: y + 1.5, z: 12.1 }, { x: 1.4, y: y + 1.5, z: 12.1 });
    } else {
      // Выход на крышу закрыт: глухая стена
      add(-2.0, y, 8, 2.0, y + F, 8.4, M.WALLINT, wallTint);
    }
  }
  // Потолок над всем
  add(-CW - 0.4, H, -0.2, CW + 0.4, H + 0.2, 12.7, M.CEILINT);
  // Межэтажные перекрытия над холлом (чтобы не видеть небо)
  add(-3.4, F, -0.2, 3.4, F + 0.2, 4.8, M.CEILINT);
  // Невидимые стены лестничной клетки на всю высоту (чтобы не вылететь)
  boxes.push({ x0: -2.2, y0: 0, z0: 8, x1: -2.0, y1: H, z1: 12.7 }, { x0: 2.0, y0: 0, z0: 8, x1: 2.2, y1: H, z1: 12.7 }, { x0: -2.2, y0: 0, z0: 12.7, x1: 2.2, y1: H, z1: 12.9 });

  const mesh = batch.build(materials);
  const group = new THREE.Group();
  if (mesh) group.add(mesh);
  out.group = group;
  return out;
}
