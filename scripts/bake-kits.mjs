import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Blob } from 'node:buffer';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';

globalThis.Blob = Blob;
class FileReaderPolyfill {
  result = null;
  onload = null;
  onerror = null;
  onloadend = null;
  readAsArrayBuffer(blob) {
    Promise.resolve(blob.arrayBuffer()).then((buf) => {
      this.result = buf;
      this.onload?.({ target: this });
      this.onloadend?.({ target: this });
    }).catch((err) => this.onerror?.(err));
  }
  readAsDataURL(blob) {
    Promise.resolve(blob.arrayBuffer()).then((buf) => {
      this.result = 'data:application/octet-stream;base64,' + Buffer.from(buf).toString('base64');
      this.onload?.({ target: this });
      this.onloadend?.({ target: this });
    }).catch((err) => this.onerror?.(err));
  }
}
globalThis.FileReader = FileReaderPolyfill;

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'models');
mkdirSync(OUT, { recursive: true });

function lam(color, name = '') {
  return new THREE.MeshStandardMaterial({ color, name, roughness: 1, metalness: 0 });
}
function basic(color, name = '') {
  return new THREE.MeshBasicMaterial({ color, name });
}

function mesh(geo, mat, x = 0, y = 0, z = 0, name = '') {
  const o = new THREE.Mesh(geo, mat);
  o.position.set(x, y, z);
  o.name = name;
  o.castShadow = false;
  o.receiveShadow = false;
  return o;
}

function colored(g, color) {
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const cols = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return g;
}

function boxAt(w, h, d, color, x, y, z) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(x, y, z);
  return colored(g, color);
}

function cylAt(rt, rb, h, segs, color, x, y, z, rx = 0, ry = 0, rz = 0) {
  const g = new THREE.CylinderGeometry(rt, rb, h, segs);
  if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
  g.translate(x, y, z);
  return colored(g, color);
}

function sphAt(r, ws, hs, color, x, y, z) {
  const g = new THREE.SphereGeometry(r, ws, hs);
  g.translate(x, y, z);
  return colored(g, color);
}

function merge(parts) {
  const g = BGU.mergeGeometries(parts.filter(Boolean), false);
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}

function buildPlayer() {
  const skin = lam(0x7a4e34, 'skin');
  const shirt = lam(0xf2f0e8, 'shirt');
  const pants = lam(0x2c3d5c, 'pants');
  const shoe = lam(0xe8e8e0, 'shoe');
  const hair = lam(0x0c0c0c, 'hair');
  const gold = lam(0xc9a227, 'gold');
  const gunMat = lam(0x222226, 'gun');
  const gunDark = lam(0x333338, 'gunDark');
  const barrel = lam(0x55555c, 'barrel');

  const root = new THREE.Group();
  root.name = 'player';

  const legL = new THREE.Group(); legL.name = 'legL'; legL.position.set(-0.14, 0.9, 0);
  legL.add(mesh(new THREE.CylinderGeometry(0.105, 0.09, 0.52, 12), pants, 0, -0.22, 0));
  legL.add(mesh(new THREE.CylinderGeometry(0.095, 0.085, 0.38, 12), pants, 0, -0.64, 0.02));
  const shoeL = mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), shoe, 0, -0.9, 0.06);
  shoeL.scale.set(1, 1, 1);
  legL.add(shoeL);

  const legR = new THREE.Group(); legR.name = 'legR'; legR.position.set(0.14, 0.9, 0);
  legR.add(mesh(new THREE.CylinderGeometry(0.105, 0.09, 0.52, 12), pants, 0, -0.22, 0));
  legR.add(mesh(new THREE.CylinderGeometry(0.095, 0.085, 0.38, 12), pants, 0, -0.64, 0.02));
  legR.add(mesh(new THREE.BoxGeometry(0.16, 0.1, 0.28), shoe, 0, -0.9, 0.06));

  const torso = new THREE.Group(); torso.name = 'torso'; torso.position.set(0, 1.22, 0);
  torso.add(mesh(new THREE.CylinderGeometry(0.23, 0.27, 0.62, 14), shirt, 0, 0, 0));
  torso.add(mesh(new THREE.BoxGeometry(0.48, 0.18, 0.12), shirt, 0, 0.18, 0.16)); // jacket placket
  torso.add(mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), gold, 0, 0.06, 0.22));

  const chain = mesh(new THREE.TorusGeometry(0.16, 0.02, 8, 16), gold, 0, 1.42, 0.08);
  chain.name = 'chain';
  chain.rotation.x = 0.9;

  const armL = new THREE.Group(); armL.name = 'armL'; armL.position.set(-0.32, 1.48, 0);
  armL.add(mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.38, 12), shirt, 0, -0.12, 0));
  armL.add(mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.38, 12), skin, 0, -0.48, 0));
  armL.add(mesh(new THREE.SphereGeometry(0.055, 10, 8), skin, 0, -0.68, 0.02));

  const armR = new THREE.Group(); armR.name = 'armR'; armR.position.set(0.32, 1.48, 0);
  armR.add(mesh(new THREE.CylinderGeometry(0.075, 0.065, 0.38, 12), shirt, 0, -0.12, 0));
  armR.add(mesh(new THREE.CylinderGeometry(0.065, 0.055, 0.38, 12), skin, 0, -0.48, 0));
  armR.add(mesh(new THREE.SphereGeometry(0.055, 10, 8), skin, 0, -0.68, 0.02));

  const head = new THREE.Group(); head.name = 'head'; head.position.set(0, 1.74, 0);
  head.add(mesh(new THREE.SphereGeometry(0.2, 14, 12), skin, 0, 0, 0));
  head.add(mesh(new THREE.SphereGeometry(0.035, 8, 6), skin, 0, -0.02, 0.18)); // nose
  head.add(mesh(new THREE.SphereGeometry(0.04, 8, 6), skin, -0.18, 0.02, 0));
  head.add(mesh(new THREE.SphereGeometry(0.04, 8, 6), skin, 0.18, 0.02, 0));

  const cap = mesh(new THREE.SphereGeometry(0.215, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, 0, 1.8, 0);
  cap.name = 'cap';
  const visor = mesh(new THREE.BoxGeometry(0.36, 0.035, 0.14), hair, 0, 1.88, 0.15);
  visor.name = 'visor';

  const gun = new THREE.Group(); gun.name = 'gun'; gun.position.set(0, -0.58, 0.12);
  const pistol = new THREE.Group(); pistol.name = 'pistol';
  pistol.add(mesh(new THREE.BoxGeometry(0.07, 0.12, 0.26), gunMat, 0, 0, 0.1));
  pistol.add(mesh(new THREE.BoxGeometry(0.05, 0.16, 0.08), gunMat, 0, -0.08, 0.0));
  const minigun = new THREE.Group(); minigun.name = 'minigun';
  minigun.add(mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.36, 10), gunDark, -0.18, 0.04, 0.08));
  minigun.children[0].rotation.x = Math.PI / 2;
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const b = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6), barrel, -0.18 + Math.cos(a) * 0.09, 0.04 + Math.sin(a) * 0.09, 0.58);
    b.rotation.x = Math.PI / 2;
    minigun.add(b);
  }
  gun.add(pistol, minigun);
  armR.add(gun);

  root.add(legL, legR, torso, chain, armL, armR, head, cap, visor);
  return root;
}

function buildStalker() {
  const mat = lam(0x0b0b0d, 'body');
  const claw = lam(0x1a1210, 'claw');
  const eyeMat = basic(0x8b0000, 'eye');
  const root = new THREE.Group(); root.name = 'stalker';
  const body = new THREE.Group(); body.name = 'body';

  body.add(mesh(new THREE.CylinderGeometry(0.22, 0.3, 1.85, 12), mat, 0, 0.92, 0));
  body.add(mesh(new THREE.CylinderGeometry(0.26, 0.4, 1.2, 12), mat, 0, 2.38, 0));
  // ribs
  for (let i = 0; i < 4; i++) {
    body.add(mesh(new THREE.TorusGeometry(0.32 + i * 0.02, 0.03, 6, 12), mat, 0, 1.95 + i * 0.22, 0.02));
  }
  body.add(mesh(new THREE.SphereGeometry(0.3, 12, 10), mat, 0, 3.22, 0.02));
  // jaw
  body.add(mesh(new THREE.BoxGeometry(0.22, 0.08, 0.18), claw, 0, 3.02, 0.18));

  const eyes = [];
  for (const sx of [-1, 1]) {
    const arm = mesh(new THREE.CylinderGeometry(0.07, 0.045, 2.4, 8), mat, sx * 0.48, 1.7, 0.04);
    body.add(arm);
    const hand = mesh(new THREE.SphereGeometry(0.08, 8, 6), claw, sx * 0.48, 0.52, 0.08);
    body.add(hand);
    for (let k = 0; k < 3; k++) {
      const f = mesh(new THREE.BoxGeometry(0.03, 0.22, 0.03), claw, sx * (0.44 + k * 0.04), 0.36, 0.16);
      f.rotation.x = 0.5;
      body.add(f);
    }
    const e = mesh(new THREE.SphereGeometry(0.095, 10, 8), eyeMat, sx * 0.1, 3.28, 0.27, sx < 0 ? 'eyeL' : 'eyeR');
    body.add(e);
    eyes.push(e);
  }
  root.add(body);
  return root;
}

function buildHumanoid(p, pose, colors) {
  const parts = [];
  const segs = 12;
  const legH = 0.85, torsoH = 0.62, hunch = p.hunch || 0;
  const lL = legH * (p.legL || 1), lR = legH * (p.legR || 1);
  const baseY = Math.max(lL, lR);
  const swing = pose.swing || 0;
  const addCyl = (rt, rb, h, color, x, y, z, rx = 0, ry = 0, rz = 0, pivotY = 0) => {
    const g = new THREE.CylinderGeometry(rt, rb, h, segs);
    if (pivotY) g.translate(0, -pivotY, 0);
    if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
    g.translate(x, y, z);
    parts.push(colored(g, color));
  };
  const addBall = (r, color, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const g = new THREE.SphereGeometry(r, segs, 8);
    if (rx || ry || rz) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, ry, rz)));
    g.translate(x, y, z);
    parts.push(colored(g, color));
  };
  const addBox = (w, h, d, color, x, y, z, rx = 0) => {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rx) g.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(rx, 0, 0)));
    g.translate(x, y, z);
    parts.push(colored(g, color));
  };
  addCyl(0.115, 0.09, lL, colors.pants, -0.15, baseY, 0, swing, 0, 0, lL / 2);
  addCyl(0.115, 0.09, lR, colors.pants, 0.15, baseY, 0, -swing, 0, 0, lR / 2);
  addBall(0.09, colors.pants, -0.15, 0.08, 0.04);
  addBall(0.09, colors.pants, 0.15, 0.08, 0.04);
  const tw = 0.5 * (p.torsoW || 1);
  addBox(tw, torsoH, 0.3, colors.shirt, 0, baseY + torsoH / 2, -hunch * 0.3, hunch);
  const aL = 0.75 * (p.armL || 1), aR = 0.75 * (p.armR || 1);
  const shoulderY = baseY + torsoH - 0.05;
  addCyl(0.075, 0.06, aL, colors.skin, -tw / 2 - 0.08, shoulderY, -hunch * 0.3, -swing * 0.8 + (pose.armsUp || 0), 0, 0.08, aL / 2);
  addCyl(0.075, 0.06, aR, colors.skin, tw / 2 + 0.08, shoulderY, -hunch * 0.3, swing * 0.8 + (pose.armsUp || 0), 0, -0.08, aR / 2);
  if (p.extraArm) addCyl(0.055, 0.045, aR * 0.8, colors.skin, 0.05, shoulderY - 0.1, 0.18, 0.9 + swing, 0, 0.3, aR * 0.4);
  const hs = p.headScale || 1, neck = p.neck || 0;
  const headY = shoulderY + 0.1 + neck + 0.17 * hs;
  addBall(0.175 * hs, colors.skin, p.headOff || 0, headY, -hunch * 0.5 + (p.headZ || 0), hunch * 0.5, 0, p.headTilt || 0);
  if (neck > 0) addCyl(0.055, 0.05, neck + 0.1, colors.skin, 0, shoulderY + 0.1 + neck / 2, -hunch * 0.4);
  addBall(0.036 * hs, colors.eye, (p.headOff || 0) - 0.07 * hs, headY + 0.03, 0.16 * hs + (p.headZ || 0) - hunch * 0.5);
  addBall(0.036 * hs, colors.eye, (p.headOff || 0) + 0.07 * hs * (p.eyeAsym || 1), headY + 0.03 + (p.eyeDrop || 0), 0.16 * hs + (p.headZ || 0) - hunch * 0.5);
  if (colors.hair) addBall(0.185 * hs, colors.hair, p.headOff || 0, headY + 0.12 * hs, (p.headZ || 0) - hunch * 0.5);
  return merge(parts);
}

const NPC_DEFS = [
  { headScale: 1.45, neck: 0.05, armL: 1, armR: 1, hunch: 0.1 },
  { headScale: 0.8, armL: 1.6, armR: 1.55, hunch: 0.35, legL: 0.9, legR: 0.9 },
  { headScale: 1, armL: 1, armR: 0.5, legL: 1, legR: 0.7, headTilt: 0.4 },
  { headScale: 1.1, neck: 0.35, torsoW: 0.75, armL: 1.1, armR: 1.1 },
  { headScale: 1, extraArm: true, torsoW: 1.2, hunch: 0.15, eyeAsym: 1.6, eyeDrop: -0.06 },
  { headScale: 1.2, headOff: 0.12, headZ: 0.05, armL: 1.25, armR: 0.9, legL: 1.15, legR: 1.15, hunch: 0.25 },
];
const NPC_SKINS = ['#8a7a6a', '#9a8a7a', '#7a6a60', '#a08a78', '#6f6a66', '#8e8276'];
const NPC_SHIRTS = ['#3a3a44', '#4a3a3a', '#2e3a3a', '#55504a', '#3a2e3a', '#44443a'];
const NPC_PANTS = ['#2a2a30', '#3a3030', '#26262a', '#403a30', '#2a2a30', '#303028'];

function buildNpc(i) {
  const p = NPC_DEFS[i];
  const colors = { skin: NPC_SKINS[i], shirt: NPC_SHIRTS[i], pants: NPC_PANTS[i], eye: '#0a0a0a', hair: i % 2 ? '#1a1a1a' : null };
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, name: 'npc', roughness: 1, metalness: 0 });
  const g = new THREE.Group(); g.name = `npc_${i}`;
  const a = new THREE.Mesh(buildHumanoid(p, { swing: 0.5 }, colors), mat); a.name = 'stepA';
  const b = new THREE.Mesh(buildHumanoid(p, { swing: -0.5 }, colors), mat); b.name = 'stepB';
  const c = new THREE.Mesh(buildHumanoid(p, { swing: 0 }, colors), mat); c.name = 'idle';
  g.add(a, b, c);
  return g;
}

function buildPanelWall() {
  // Origin: bottom-center of outer face, facing +Z. Thickness goes -Z (into the building).
  const parts = [];
  const concrete = 0xd0d0cc;
  const joint = 0x8a8c90;
  const dark = 0x3a3c42;
  const sill = 0x9aa0a4;
  parts.push(boxAt(3.0, 3.0, 0.28, concrete, 0, 1.5, -0.14));
  // panel joints
  parts.push(boxAt(3.02, 0.04, 0.3, joint, 0, 0.02, -0.14));
  parts.push(boxAt(3.02, 0.04, 0.3, joint, 0, 2.98, -0.14));
  parts.push(boxAt(0.04, 3.0, 0.3, joint, -1.49, 1.5, -0.14));
  parts.push(boxAt(0.04, 3.0, 0.3, joint, 1.49, 1.5, -0.14));
  // window niche
  parts.push(boxAt(1.35, 1.5, 0.12, dark, 0, 1.55, 0.04));
  parts.push(boxAt(1.45, 0.08, 0.18, sill, 0, 0.78, 0.06));
  parts.push(boxAt(0.06, 1.5, 0.16, sill, -0.7, 1.55, 0.05));
  parts.push(boxAt(0.06, 1.5, 0.16, sill, 0.7, 1.55, 0.05));
  parts.push(boxAt(1.45, 0.06, 0.16, sill, 0, 2.32, 0.05));
  const geo = merge(parts);
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, name: 'panel', roughness: 1, metalness: 0 }));
  m.name = 'panel_wall';
  const root = new THREE.Group(); root.name = 'panel_wall';
  root.add(m);
  return root;
}

function buildWindow(lit) {
  const frame = 0x4a4c50;
  const pane = lit ? 0xf2b848 : 0x14161a;
  const parts = [];
  parts.push(boxAt(1.55, 1.65, 0.06, frame, 0, 0, 0));
  parts.push(boxAt(1.32, 1.42, 0.04, pane, 0, 0, 0.03));
  parts.push(boxAt(0.05, 1.42, 0.05, frame, 0, 0, 0.04));
  parts.push(boxAt(1.32, 0.05, 0.05, frame, 0, 0, 0.04));
  const geo = merge(parts);
  const mat = lit
    ? new THREE.MeshBasicMaterial({ vertexColors: true, name: 'lamp' })
    : new THREE.MeshStandardMaterial({ vertexColors: true, name: 'dark', roughness: 1, metalness: 0 });
  const m = new THREE.Mesh(geo, mat);
  m.name = lit ? 'window_lit' : 'window_dark';
  const root = new THREE.Group(); root.name = m.name;
  root.add(m);
  return root;
}

function buildEntrance() {
  // Origin at ground, door center, facing +Z (outward).
  const conc = lam(0x9a9a9a, 'concrete');
  const dark = lam(0x080808, 'dark');
  const door = lam(0x4a2a22, 'door');
  const lamp = basic(0xffd073, 'lamp');
  const plate = lam(0x2a3a6a, 'plate');
  const root = new THREE.Group(); root.name = 'entrance';
  root.add(mesh(new THREE.BoxGeometry(1.7, 2.45, 0.08), dark, 0, 1.22, 0.02));
  root.add(mesh(new THREE.BoxGeometry(1.15, 2.15, 0.08), door, 0, 1.1, 0.08));
  root.add(mesh(new THREE.BoxGeometry(0.08, 0.18, 0.05), lam(0x9a8a5a), 0.42, 1.15, 0.14));
  root.add(mesh(new THREE.BoxGeometry(3.2, 0.22, 1.75), conc, 0, 2.65, 0.85));
  root.add(mesh(new THREE.BoxGeometry(2.6, 0.18, 1.5), conc, 0, 0.09, 0.75));
  root.add(mesh(new THREE.BoxGeometry(0.3, 2.55, 0.3), conc, -1.45, 1.27, 1.55));
  root.add(mesh(new THREE.BoxGeometry(0.3, 2.55, 0.3), conc, 1.45, 1.27, 1.55));
  root.add(mesh(new THREE.BoxGeometry(0.3, 0.16, 0.3), lamp, 0, 2.48, 0.85));
  root.add(mesh(new THREE.BoxGeometry(0.32, 0.22, 0.06), plate, 0.9, 2.0, 0.12));
  return root;
}

function buildShopMagma() {
  // Unit box centered on XZ, Y in meters. Front +Z. Scale xz to footprint.
  const wall = lam(0xc8c4bc, 'wall');
  const red = lam(0xc41018, 'red');
  const roof = lam(0x8a8a8a, 'roof');
  const conc = lam(0x9a9a9a, 'concrete');
  const glow = basic(0xff6b1a, 'lamp');
  const dark = lam(0x141820, 'dark');
  const white = lam(0xf2eee8, 'white');
  const root = new THREE.Group(); root.name = 'shop_magma';
  root.add(mesh(new THREE.BoxGeometry(1, 2.55, 1), wall, 0, 1.275, 0));
  root.add(mesh(new THREE.BoxGeometry(1.04, 1.15, 1.04), red, 0, 3.125, 0));
  root.add(mesh(new THREE.BoxGeometry(1.08, 0.08, 1.08), roof, 0, 3.74, 0));
  root.add(mesh(new THREE.BoxGeometry(1.06, 0.22, 1.06), conc, 0, 3.86, 0));
  // door + windows on +Z
  root.add(mesh(new THREE.BoxGeometry(0.12, 2.15, 0.04), dark, 0, 1.15, 0.52));
  root.add(mesh(new THREE.BoxGeometry(0.16, 1.7, 0.04), glow, -0.28, 1.35, 0.52));
  root.add(mesh(new THREE.BoxGeometry(0.16, 1.7, 0.04), glow, 0.28, 1.35, 0.52));
  // canopy
  root.add(mesh(new THREE.BoxGeometry(0.92, 0.13, 0.18), red, 0, 2.52, 0.58));
  // pylon
  root.add(mesh(new THREE.BoxGeometry(0.05, 4.1, 0.08), red, 0.54, 2.05, 0.58));
  root.add(mesh(new THREE.BoxGeometry(0.07, 1.0, 0.1), white, 0.54, 3.05, 0.58));
  // AC
  root.add(mesh(new THREE.BoxGeometry(0.1, 0.48, 0.1), conc, 0.12, 4.1, 0.05));
  return root;
}

function buildShopKik() {
  const brown = lam(0x5a3218, 'brown');
  const red = lam(0xb81414, 'red');
  const brownLt = lam(0x6e4224, 'brownLt');
  const roof = lam(0x4a2a18, 'roof');
  const glow = basic(0xd1471a, 'lamp');
  const dark = lam(0x1a1010, 'dark');
  const root = new THREE.Group(); root.name = 'shop_kik';
  const bands = [
    [0.00, 0.58, brown],
    [0.58, 1.16, red],
    [1.16, 1.74, brownLt],
    [1.74, 2.32, red],
    [2.32, 3.2, brown],
  ];
  for (const [y0, y1, mat] of bands) {
    root.add(mesh(new THREE.BoxGeometry(1, y1 - y0, 1), mat, 0, (y0 + y1) / 2, 0));
  }
  root.add(mesh(new THREE.BoxGeometry(1.06, 0.08, 1.06), roof, 0, 3.27, 0));
  root.add(mesh(new THREE.BoxGeometry(0.1, 2.05, 0.04), dark, 0, 1.1, 0.52));
  root.add(mesh(new THREE.BoxGeometry(0.14, 1.35, 0.04), glow, -0.3, 1.45, 0.52));
  root.add(mesh(new THREE.BoxGeometry(0.14, 1.35, 0.04), glow, 0.3, 1.45, 0.52));
  return root;
}

function buildAptKit() {
  const wood = lam(0x4a3a28, 'wood');
  const cloth = lam(0x3a4a6a, 'cloth');
  const fridge = lam(0xc8c8c4, 'fridge');
  const stove = lam(0x3a3a3a, 'stove');
  const table = lam(0x8a6a4a, 'table');
  const leg = lam(0x5a3a22, 'leg');
  const carpet = lam(0x7a2a2a, 'carpet');
  const tv = lam(0x2a2a2a, 'tv');
  const lamp = basic(0xd9b873, 'lamp');
  const door = lam(0x5a3a28, 'door');
  const root = new THREE.Group(); root.name = 'apt_kit';

  // sofa
  root.add(mesh(new THREE.BoxGeometry(2.9, 0.42, 1.2), wood, 1.65, 0.21, 4.2));
  root.add(mesh(new THREE.BoxGeometry(2.8, 0.5, 0.85), cloth, 1.65, 0.67, 4.12));
  root.add(mesh(new THREE.BoxGeometry(2.9, 0.73, 0.2), cloth, 1.65, 0.78, 4.65));
  root.add(mesh(new THREE.BoxGeometry(0.18, 0.55, 0.9), cloth, 0.32, 0.7, 4.15));
  root.add(mesh(new THREE.BoxGeometry(0.18, 0.55, 0.9), cloth, 2.98, 0.7, 4.15));
  // wall carpet
  root.add(mesh(new THREE.BoxGeometry(2.25, 1.45, 0.04), carpet, 1.275, 1.625, 7.35));
  // fridge / stove / table
  root.add(mesh(new THREE.BoxGeometry(0.9, 1.7, 0.8), fridge, 6.85, 0.85, 0.7));
  root.add(mesh(new THREE.BoxGeometry(0.08, 0.28, 0.04), lam(0x888888), 7.28, 0.9, 1.12));
  root.add(mesh(new THREE.BoxGeometry(1.4, 0.85, 1.2), stove, 8.2, 0.425, 0.9));
  root.add(mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 10), lam(0x222), 7.85, 0.88, 0.7));
  root.add(mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 10), lam(0x222), 8.45, 0.88, 0.7));
  root.add(mesh(new THREE.BoxGeometry(2.6, 0.1, 1.7), table, 7.6, 0.9, 2.55));
  root.add(mesh(new THREE.BoxGeometry(0.12, 0.85, 0.12), leg, 6.48, 0.42, 1.95));
  root.add(mesh(new THREE.BoxGeometry(0.12, 0.85, 0.12), leg, 8.68, 0.42, 3.05));
  root.add(mesh(new THREE.BoxGeometry(0.12, 0.85, 0.12), leg, 6.48, 0.42, 3.05));
  root.add(mesh(new THREE.BoxGeometry(0.12, 0.85, 0.12), leg, 8.68, 0.42, 1.95));
  // tv
  root.add(mesh(new THREE.BoxGeometry(0.08, 1.1, 1.8), tv, 9.1, 0.95, 5.3));
  // door slab
  root.add(mesh(new THREE.BoxGeometry(0.06, 2.1, 1.1), door, 9.18, 1.05, 2.95));
  // ceiling lamp
  root.add(mesh(new THREE.BoxGeometry(0.6, 0.08, 0.6), lamp, 4.4, 2.68, 3.7));
  return root;
}

async function exportGLB(object, name) {
  const exporter = new GLTFExporter();
  const data = await exporter.parseAsync(object, { binary: true, maxTextureSize: 256 });
  const buf = Buffer.from(data);
  const path = join(OUT, `${name}.glb`);
  writeFileSync(path, buf);
  console.log(name, buf.length, 'bytes');
}

const jobs = [
  ['player', buildPlayer],
  ['stalker', buildStalker],
  ['panel_wall', buildPanelWall],
  ['window_lit', () => buildWindow(true)],
  ['window_dark', () => buildWindow(false)],
  ['entrance', buildEntrance],
  ['shop_magma', buildShopMagma],
  ['shop_kik', buildShopKik],
  ['apt_kit', buildAptKit],
];
for (let i = 0; i < 6; i++) jobs.push([`npc_${i}`, () => buildNpc(i)]);

for (const [name, fn] of jobs) {
  await exportGLB(fn(), name);
}
console.log('baked', jobs.length, 'kits ->', OUT);
