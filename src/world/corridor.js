import * as THREE from 'three';
import { Batch, M, tint, scaleUV, flatPlane } from './batch.js';
import { rnd } from '../rng.js';

// Бесконечный удлинённый коридор панельного дома для сценария побега от призрака.
// Игрок бежит вдоль +z. Сегменты генерируются впереди, уровень пола падает в "провалах".
const SEG = 20, W = 1.4, H = 2.8;

export class ChaseCorridor {
  constructor(scene, materials, statics) {
    this.scene = scene; this.materials = materials; this.statics = statics;
    this.group = new THREE.Group(); scene.add(this.group); this.group.visible = false;
    this.segments = new Map();
    this.level = 0; this.nextLevelChangeAt = Infinity;
    this.hole = null; // {z0,z1, fromLevel}
    this.lamps = [];
  }

  start() {
    this.group.visible = true;
    this.clearAll();
    this.level = 0; this.hole = null; this.plannedHoles = [];
    this.nextDropTimer = rnd.range(7, 13);
    for (let k = -2; k < 5; k++) this.buildSegment(k);
  }

  clearAll() {
    for (const [k, s] of this.segments) this.removeSegment(k);
    this.segments.clear();
    this.lamps.length = 0;
  }

  removeSegment(k) {
    const s = this.segments.get(k);
    if (!s) return;
    this.group.remove(s.mesh); s.mesh.geometry.dispose();
    this.statics.removeTag('cseg' + k);
    this.lamps = this.lamps.filter(l => l.seg !== k);
    this.segments.delete(k);
  }

  // Уровень пола для сегмента k
  levelOf(k) {
    let lvl = 0;
    for (const h of this.plannedHoles) if (k > h.seg) lvl -= 3.2;
    return lvl;
  }

  buildSegment(k) {
    if (this.segments.has(k)) return;
    const batch = new Batch();
    const z0 = k * SEG, z1 = z0 + SEG;
    const lvl = this.levelOf(k);
    const hole = this.plannedHoles.find(h => h.seg === k);
    const tag = 'cseg' + k;
    const wallTint = new THREE.Color().setHSL(0.1, 0.05, 0.55);
    const addBox = (x0, y0, zz0, x1, y1, zz1, mat, col = 0xffffff, solid = true) => {
      // стены без коллизии потолка: все грани
      const w = x1 - x0, h = y1 - y0, d = zz1 - zz0;
      const faces = [[w, h, 0, (x0 + x1) / 2, (y0 + y1) / 2, zz1], [w, h, Math.PI, (x0 + x1) / 2, (y0 + y1) / 2, zz0], [d, h, Math.PI / 2, x1, (y0 + y1) / 2, (zz0 + zz1) / 2], [d, h, -Math.PI / 2, x0, (y0 + y1) / 2, (zz0 + zz1) / 2]];
      for (const [fw, fh, yaw, px, py, pz] of faces) { if (fw < 0.01 || fh < 0.01) continue; const g = new THREE.PlaneGeometry(fw, fh); scaleUV(g, fw / 3, fh / 3); g.rotateY(yaw); g.translate(px, py, pz); batch.add(tint(g, col), mat); }
      if (w > 0.01 && d > 0.01) { batch.add(flatPlane(x0, zz0, x1, zz1, y1, true, 3, col), mat); batch.add(flatPlane(x0, zz0, x1, zz1, y0, false, 3, col), mat); }
      if (solid) this.statics.add(x0, y0, zz0, x1, y1, zz1, tag);
    };
    const bottom = lvl - 3.6;
    // стены (высокие, чтобы провал имел стенки)
    addBox(-W - 0.2, bottom, z0, -W, lvl + H, z1, M.WALLINT, wallTint);
    addBox(W, bottom, z0, W + 0.2, lvl + H, z1, M.WALLINT, wallTint);
    // пол
    if (hole) {
      addBox(-W, lvl - 0.2, z0, W, lvl, hole.z0, M.FLOORINT);
      // нижний коридор начинается под дырой
      addBox(-W, lvl - 3.4, hole.z0 - 2, W, lvl - 3.2, z1, M.FLOORINT);
      // потолок верхнего до дыры и потолок нижнего после
      addBox(-W, lvl + H, z0, W, lvl + H + 0.2, hole.z1, M.CEILINT, 0xffffff, false);
      addBox(-W, lvl - 3.2 + H, hole.z1, W, lvl - 3.2 + H + 0.2, z1, M.CEILINT, 0xffffff, true);
      // торцевая стена верхнего уровня за дырой
      addBox(-W, lvl - 0.2, hole.z1, W, lvl + H, hole.z1 + 0.2, M.WALLINT, wallTint);
    } else {
      addBox(-W, lvl - 0.2, z0, W, lvl, z1, M.FLOORINT);
      addBox(-W, lvl + H, z0, W, lvl + H + 0.2, z1, M.CEILINT, 0xffffff, false);
    }
    // двери, лампы, провода
    for (let z = z0 + 2; z < z1 - 1; z += 3.3) {
      for (const sx of [-1, 1]) {
        if (rnd.chance(0.7)) {
          const open = rnd.chance(0.15);
          const g = new THREE.PlaneGeometry(0.95, 2.1); g.rotateY(sx < 0 ? Math.PI / 2 : -Math.PI / 2); g.translate(sx * (W - 0.01), (hole && z > hole.z0 ? lvl - 3.2 : lvl) + 1.05, z);
          batch.add(tint(g, open ? 0x050505 : new THREE.Color().setHSL(0.07, 0.3, rnd.range(0.2, 0.45))), open ? M.DARK : M.DOOR);
        }
      }
    }
    for (let z = z0 + 3; z < z1; z += 6.5) {
      const ly = (hole && z > hole.z1 ? lvl - 3.2 : lvl) + H;
      const on = rnd.chance(0.6);
      addBox(-0.3, ly - 0.1, z - 0.2, 0.3, ly - 0.02, z + 0.2, M.LAMP, on ? new THREE.Color(0.75, 0.7, 0.5) : 0x202020, false);
      if (on) this.lamps.push({ x: 0, y: ly - 0.3, z, seg: k, flicker: rnd.chance(0.5) });
      // провисший провод
      const wire = new THREE.BoxGeometry(0.03, 0.03, 2.5); wire.translate(rnd.range(-0.8, 0.8), ly - 0.4 - rnd.range(0, 0.4), z + 1.5); batch.add(tint(wire, 0x111111), M.DARK);
    }
    const mesh = batch.build(this.materials);
    this.group.add(mesh);
    this.segments.set(k, { mesh, lvl, hole });
  }

  // Запланировать провал впереди игрока
  planDrop(playerZ) {
    const z0 = playerZ + rnd.range(6, 10);
    const seg = Math.floor(z0 / SEG);
    if (this.plannedHoles.some(h => h.seg === seg || h.seg === seg - 1)) return;
    // Дыра не должна пересекать границу сегмента
    const hz0 = Math.min(z0, (seg + 1) * SEG - 4.5), hz1 = hz0 + 3.4;
    this.plannedHoles.push({ seg, z0: hz0, z1: hz1 });
    // пересобрать сегменты от этого и дальше
    for (const k of [...this.segments.keys()]) if (k >= seg) this.removeSegment(k);
    const pk = Math.floor(playerZ / SEG);
    for (let k = pk - 3; k <= pk + 4; k++) this.buildSegment(k);
  }

  update(player, dt) {
    const pk = Math.floor(player.z / SEG);
    for (let k = pk - 3; k <= pk + 4; k++) if (!this.segments.has(k)) this.buildSegment(k);
    for (const k of [...this.segments.keys()]) if (k < pk - 4 || k > pk + 6) this.removeSegment(k);
    this.nextDropTimer -= dt;
    if (this.nextDropTimer <= 0) { this.nextDropTimer = rnd.range(8, 15); this.planDrop(player.z); return true; }
    return false;
  }

  floorLevelAt(z) { return this.levelOf(Math.floor(z / SEG)); }

  stop() { this.group.visible = false; this.clearAll(); }
}
