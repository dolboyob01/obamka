import * as THREE from 'three';
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng } from '../rng.js';
import { cloneKit } from '../assets/gltf.js';

// Сборка гуманоида: цилиндры и сферы, не кубы.
function colored(g, color, x, y, z, rx = 0, ry = 0, rz = 0, pivotY = 0) {
  if (pivotY) g.translate(0, -pivotY, 0);
  if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
  g.translate(x, y, z);
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const cols = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return g;
}
function box(w, h, d, color, x, y, z, rx = 0, ry = 0, rz = 0, pivotY = 0) {
  return colored(new THREE.BoxGeometry(w, h, d), color, x, y, z, rx, ry, rz, pivotY);
}
function cyl(rt, rb, h, color, x, y, z, rx = 0, ry = 0, rz = 0, pivotY = 0) {
  return colored(new THREE.CylinderGeometry(rt, rb, h, 12), color, x, y, z, rx, ry, rz, pivotY);
}
function ball(r, color, x, y, z, rx = 0, ry = 0, rz = 0) {
  return colored(new THREE.SphereGeometry(r, 12, 8), color, x, y, z, rx, ry, rz, 0);
}

export function buildHumanoid(p, pose, colors) {
  const parts = [];
  const legH = 0.85, torsoH = 0.62, hunch = p.hunch || 0;
  const lL = legH * (p.legL || 1), lR = legH * (p.legR || 1);
  const baseY = Math.max(lL, lR);
  const swing = pose.swing || 0;
  parts.push(cyl(0.11, 0.09, lL, colors.pants, -0.15, baseY, 0, swing, 0, 0, lL / 2));
  parts.push(cyl(0.11, 0.09, lR, colors.pants, 0.15, baseY, 0, -swing, 0, 0, lR / 2));
  const tw = 0.5 * (p.torsoW || 1);
  parts.push(box(tw, torsoH, 0.28, colors.shirt, 0, baseY + torsoH / 2, -hunch * 0.3, hunch, 0, 0));
  const aL = 0.75 * (p.armL || 1), aR = 0.75 * (p.armR || 1);
  const shoulderY = baseY + torsoH - 0.05;
  parts.push(cyl(0.07, 0.06, aL, colors.skin, -tw / 2 - 0.08, shoulderY, -hunch * 0.3, -swing * 0.8 + (pose.armsUp || 0), 0, 0.08, aL / 2));
  parts.push(cyl(0.07, 0.06, aR, colors.skin, tw / 2 + 0.08, shoulderY, -hunch * 0.3, swing * 0.8 + (pose.armsUp || 0), 0, -0.08, aR / 2));
  if (p.extraArm) parts.push(cyl(0.055, 0.045, aR * 0.8, colors.skin, 0.05, shoulderY - 0.1, 0.18, 0.9 + swing, 0, 0.3, aR * 0.4));
  const hs = p.headScale || 1, neck = p.neck || 0;
  const headY = shoulderY + 0.1 + neck + 0.17 * hs;
  parts.push(ball(0.17 * hs, colors.skin, p.headOff || 0, headY, -hunch * 0.5 + (p.headZ || 0), hunch * 0.5, 0, p.headTilt || 0));
  if (neck > 0) parts.push(cyl(0.055, 0.05, neck + 0.1, colors.skin, 0, shoulderY + 0.1 + neck / 2, -hunch * 0.4));
  parts.push(ball(0.035 * hs, colors.eye, (p.headOff || 0) - 0.07 * hs, headY + 0.03, 0.15 * hs + (p.headZ || 0) - hunch * 0.5));
  parts.push(ball(0.035 * hs, colors.eye, (p.headOff || 0) + 0.07 * hs * (p.eyeAsym || 1), headY + 0.03 + (p.eyeDrop || 0), 0.15 * hs + (p.headZ || 0) - hunch * 0.5));
  if (colors.hair) parts.push(ball(0.18 * hs, colors.hair, p.headOff || 0, headY + 0.12 * hs, (p.headZ || 0) - hunch * 0.5));
  const g = BGU.mergeGeometries(parts, false);
  g.computeBoundingSphere();
  return g;
}

// 6 вариантов искажённых существ
export const VARIANTS = (() => {
  const rng = new Rng(4242);
  const skins = ['#8a7a6a', '#9a8a7a', '#7a6a60', '#a08a78', '#6f6a66', '#8e8276'];
  const shirts = ['#3a3a44', '#4a3a3a', '#2e3a3a', '#55504a', '#3a2e3a', '#44443a', '#6a2a2a'];
  const pants = ['#2a2a30', '#3a3030', '#26262a', '#403a30'];
  const defs = [
    { headScale: 1.45, neck: 0.05, armL: 1, armR: 1, hunch: 0.1 },                       // гидроцефал
    { headScale: 0.8, armL: 1.6, armR: 1.55, hunch: 0.35, legL: 0.9, legR: 0.9 },        // длиннорукий сутулый
    { headScale: 1, armL: 1, armR: 0.5, legL: 1, legR: 0.7, headTilt: 0.4 },             // ассиметрия, хромой
    { headScale: 1.1, neck: 0.35, torsoW: 0.75, armL: 1.1, armR: 1.1 },                  // длинная шея
    { headScale: 1, extraArm: true, torsoW: 1.2, hunch: 0.15, eyeAsym: 1.6, eyeDrop: -0.06 }, // третья рука
    { headScale: 1.2, headOff: 0.12, headZ: 0.05, armL: 1.25, armR: 0.9, legL: 1.15, legR: 1.15, hunch: 0.25 }, // смещённая голова
  ];
  return defs.map((p, i) => ({
    p,
    colors: { skin: skins[i % skins.length], shirt: shirts[rng.int(0, shirts.length - 1)], pants: pants[rng.int(0, pants.length - 1)], eye: '#0a0a0a', hair: rng.chance(0.5) ? '#1a1a1a' : null },
  }));
})();

// Инстансированный рендер множества существ: на вариант — 2 кадра (шаг A / шаг B) + стойка
export class EntityRenderer {
  constructor(scene, capacity = 1100, kits = null) {
    this.capacity = capacity;
    this.meshes = []; // [variant][frame]
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    const frames = [{ swing: 0.5 }, { swing: -0.5 }, { swing: 0 }];
    for (let vi = 0; vi < VARIANTS.length; vi++) {
      const v = VARIANTS[vi];
      const row = [];
      for (let fi = 0; fi < frames.length; fi++) {
        const g = buildHumanoid(v.p, frames[fi], v.colors);
        const im = new THREE.InstancedMesh(g, mat, capacity);
        im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        im.count = 0; im.frustumCulled = false;
        scene.add(im); row.push(im);
      }
      this.meshes.push(row);
    }
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._p = new THREE.Vector3();
    this._counts = [];
  }

  // entities: массив объектов { pos:{x,y,z}, yaw, variant, anim(фаза 0..1), moving, scale }
  update(entities, _dt) {
    for (const row of this.meshes) for (const im of row) im.count = 0;
    for (const e of entities) {
      if (e.dead) continue;
      const row = this.meshes[e.variant % this.meshes.length];
      const frame = e.moving ? (Math.floor(e.anim * 2) % 2) : 2;
      const im = row[frame];
      if (im.count >= this.capacity) continue;
      const bob = e.moving ? Math.abs(Math.sin(e.anim * Math.PI * 2)) * 0.05 : 0;
      this._p.set(e.pos.x, e.pos.y + bob, e.pos.z);
      this._q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, e.yaw);
      const s = e.scale || 1;
      this._s.set(s, s, s);
      this._m.compose(this._p, this._q, this._s);
      im.setMatrixAt(im.count++, this._m);
    }
    for (const row of this.meshes) for (const im of row) im.instanceMatrix.needsUpdate = true;
  }

  dispose(scene) { for (const row of this.meshes) for (const im of row) { scene.remove(im); } }
}

// --------- Призрак (класс 4) ----------
export function buildGhost() {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0x5a5c62, transparent: true, opacity: 0.55, depthWrite: false, fog: true });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.55, 2.4, 8), mat); body.position.y = 1.5; g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 6), mat); head.position.y = 2.95; g.add(head);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), eyeMat); e.position.set(sx * 0.1, 3.0, 0.26); g.add(e); }
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 5), eyeMat); mouth.position.set(0, 2.78, 0.24); mouth.scale.set(1.4, 0.7, 0.6); g.add(mouth);
  for (let i = 0; i < 6; i++) {
    const t = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.12, 0.9 + Math.random() * 0.7, 5), mat);
    t.position.set((Math.random() - 0.5) * 0.8, 0.35, (Math.random() - 0.5) * 0.35);
    t.userData.phase = Math.random() * 6; g.add(t);
  }
  const arms = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.4, 6), mat); arms.rotation.z = Math.PI / 2; arms.position.y = 2.4; g.add(arms);
  g.userData.mat = mat;
  return g;
}

function wireStalker(root) {
  const eyes = [];
  let body = null;
  root.traverse((o) => {
    if (o.name === 'body') body = o;
    if (o.name === 'eyeL' || o.name === 'eyeR' || o.material?.name === 'eye') eyes.push(o);
  });
  if (!body) body = root.children[0];
  for (const e of eyes) {
    if (e.material) e.material = e.material.clone();
  }
  root.userData = { eyes, body };
  return eyes.length > 0;
}

// --------- Преследователь (класс 5) ----------
export function buildStalker(kits) {
  const kit = kits?.get('stalker');
  if (kit) {
    const g = cloneKit(kit, true);
    if (wireStalker(g)) return g;
  }
  const g = new THREE.Group();
  const body = new THREE.Group();
  body.name = 'body';
  const mat = new THREE.MeshLambertMaterial({ color: 0x0b0b0d });
  const legs = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 1.8, 8), mat); legs.position.y = 0.9; body.add(legs);
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.38, 1.15, 8), mat); torso.position.y = 2.35; body.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), mat); head.position.y = 3.2; body.add(head);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x8b0000 });
  const eyes = [];
  for (const sx of [-1, 1]) {
    const a = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.05, 2.35, 6), mat); a.position.set(sx * 0.46, 1.7, 0.04); body.add(a);
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), eyeMat);
    e.position.set(sx * 0.1, 3.26, 0.26); body.add(e); eyes.push(e);
  }
  body.scale.setScalar(5);
  g.add(body);
  g.userData = { eyes, body };
  return g;
}

function wirePlayer(root) {
  const map = {};
  root.traverse((o) => { if (o.name) map[o.name] = o; });
  root.userData = {
    legL: map.legL, legR: map.legR, armL: map.armL, armR: map.armR,
    torso: map.torso, head: map.head, cap: map.cap, visor: map.visor,
    chain: map.chain, pistol: map.pistol, minigun: map.minigun, gun: map.gun,
  };
  const u = root.userData;
  if (u.minigun) u.minigun.visible = false;
  if (u.pistol) u.pistol.visible = true;
  return u.legL && u.legR && u.armL && u.armR && u.torso && u.head && u.gun && u.pistol && u.minigun;
}

// --------- Игрок (отдалённо напоминает CJ) ----------
export function buildPlayer(kits) {
  const kit = kits?.get('player');
  if (kit) {
    const g = cloneKit(kit, true);
    if (wirePlayer(g)) return g;
  }
  const g = new THREE.Group();
  const skin = new THREE.MeshLambertMaterial({ color: 0x7a4e34 });
  const shirt = new THREE.MeshLambertMaterial({ color: 0xf2f0e8 });
  const pants = new THREE.MeshLambertMaterial({ color: 0x2c3d5c });
  const shoe = new THREE.MeshLambertMaterial({ color: 0xe8e8e0 });
  const hair = new THREE.MeshLambertMaterial({ color: 0x0c0c0c });
  const gold = new THREE.MeshLambertMaterial({ color: 0xc9a227 });
  const gunMat = new THREE.MeshLambertMaterial({ color: 0x222226 });
  const mk = (mesh, x, y, z) => { mesh.position.set(x, y, z); return mesh; };
  const legL = new THREE.Group(); legL.name = 'legL'; legL.position.set(-0.14, 0.9, 0);
  legL.add(mk(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.85, 8), pants), 0, -0.42, 0));
  legL.add(mk(new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), shoe), 0, -0.86, 0.06));
  const legR = new THREE.Group(); legR.name = 'legR'; legR.position.set(0.14, 0.9, 0);
  legR.add(mk(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.85, 8), pants), 0, -0.42, 0));
  legR.add(mk(new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), shoe), 0, -0.86, 0.06));
  const torso = mk(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.62, 10), shirt), 0, 1.22, 0);
  torso.name = 'torso';
  const chain = mk(new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.018, 6, 12), gold), 0, 1.42, 0.08);
  chain.name = 'chain';
  chain.rotation.x = 0.9;
  const armL = new THREE.Group(); armL.name = 'armL'; armL.position.set(-0.32, 1.48, 0);
  armL.add(mk(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.7, 8), skin), 0, -0.32, 0));
  const armR = new THREE.Group(); armR.name = 'armR'; armR.position.set(0.32, 1.48, 0);
  armR.add(mk(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.7, 8), skin), 0, -0.32, 0));
  const head = mk(new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), skin), 0, 1.74, 0);
  head.name = 'head';
  const cap = mk(new THREE.Mesh(new THREE.SphereGeometry(0.21, 10, 8, 0, Math.PI * 2, 0, Math.PI * 0.55), hair), 0, 1.8, 0);
  cap.name = 'cap';
  const visor = mk(new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.03, 0.12), hair), 0, 1.88, 0.14);
  visor.name = 'visor';
  g.add(legL, legR, torso, chain, armL, armR, head, cap, visor);
  const gun = new THREE.Group(); gun.name = 'gun'; gun.position.set(0, -0.58, 0.12);
  const pistol = mk(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.26), gunMat), 0, 0, 0.1);
  pistol.name = 'pistol';
  const minigun = new THREE.Group();
  minigun.name = 'minigun';
  minigun.add(mk(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.36, 8), new THREE.MeshLambertMaterial({ color: 0x333338 })), -0.18, 0.04, 0.08));
  minigun.children[0].rotation.x = Math.PI / 2;
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const b = mk(new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6), new THREE.MeshLambertMaterial({ color: 0x55555c })), -0.18 + Math.cos(a) * 0.09, 0.04 + Math.sin(a) * 0.09, 0.58);
    b.rotation.x = Math.PI / 2; minigun.add(b);
  }
  minigun.visible = false;
  gun.add(pistol, minigun);
  armR.add(gun);
  g.userData = { legL, legR, armL, armR, torso, head, cap, visor, chain, pistol, minigun, gun };
  return g;
}
