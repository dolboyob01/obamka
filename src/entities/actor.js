import * as THREE from 'three';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { EntityRenderer as PrimitiveRenderer } from './models.js';

function clipKey(name) {
  const s = (name || '').toLowerCase();
  if (s.includes('idle') || s.includes('stand') || s.includes('tpose')) return s.includes('tpose') ? null : 'idle';
  if (s.includes('run')) return 'run';
  if (s.includes('walk')) return 'walk';
  return null;
}

function footLift(root) {
  root.updateWorldMatrix(true, true);
  const pos = new THREE.Vector3();
  let minY = 0;
  root.traverse((o) => {
    if (!o.isBone) return;
    o.getWorldPosition(pos);
    if (pos.y < minY) minY = pos.y;
  });
  return -minY;
}

function findBone(root, re) {
  let found = null;
  root.traverse((o) => { if (!found && o.isBone && re.test(o.name)) found = o; });
  return found;
}

function makeGun() {
  const gun = new THREE.Group();
  gun.name = 'gun';
  const gunMat = new THREE.MeshStandardMaterial({ color: 0x222226, roughness: 0.45, metalness: 0.35, envMapIntensity: 0.2 });
  const pistol = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.26), gunMat);
  pistol.name = 'pistol';
  pistol.position.set(0.02, -0.04, 0.12);
  const minigun = new THREE.Group();
  minigun.name = 'minigun';
  minigun.add(new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.36, 8), new THREE.MeshStandardMaterial({ color: 0x333338, roughness: 0.5, metalness: 0.4 })));
  minigun.children[0].rotation.x = Math.PI / 2;
  minigun.children[0].position.set(-0.18, 0.04, 0.08);
  for (let i = 0; i < 6; i++) {
    const a = i / 6 * Math.PI * 2;
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6), new THREE.MeshStandardMaterial({ color: 0x55555c, roughness: 0.4, metalness: 0.5 }));
    b.rotation.x = Math.PI / 2;
    b.position.set(-0.18 + Math.cos(a) * 0.09, 0.04 + Math.sin(a) * 0.09, 0.58);
    minigun.add(b);
  }
  minigun.visible = false;
  gun.add(pistol, minigun);
  return { gun, pistol, minigun };
}

const NPC_LOOKS = [
  { color: 0x3d4a32, hideGear: true, scale: 0.94 },
  { color: 0x6a3824, hideGear: true, scale: 1.08 },
  { color: 0x2a3344, hideGear: true, scale: 0.86 },
  { color: 0xc8b8a4, hideGear: false, scale: 1.0 },
  { color: 0x4a5560, hideGear: false, scale: 1.12 },
];
const GEAR_RE = /visor|goggle/i;
const JOINT_RE = /joint|skeleton/i;
const XBOT_RE = /beta_|xbot/i;

function rigYawOffset(root) {
  let xbot = false;
  root.traverse((o) => { if (XBOT_RE.test(o.name)) xbot = true; });
  return xbot ? 0 : Math.PI;
}

export class CharacterActor {
  constructor(gltf, opts = {}) {
    this.root = cloneSkinned(gltf.scene);
    this.baseScale = opts.scale ?? 1;
    this.yawOffset = opts.yawOffset ?? rigYawOffset(this.root);
    this.root.scale.setScalar(this.baseScale);
    this.lift = footLift(this.root);
    this.mixer = new THREE.AnimationMixer(this.root);
    this.actions = {};
    const clips = gltf.animations || [];
    for (const clip of clips) {
      const key = clipKey(clip.name);
      if (!key || this.actions[key]) continue;
      const act = this.mixer.clipAction(clip);
      act.enabled = true;
      act.setLoop(THREE.LoopRepeat, Infinity);
      this.actions[key] = act;
    }
    this.current = null;
    this.play('idle', 0);
    this.hand = findBone(this.root, /RightHand$/i) || findBone(this.root, /mixamorigRightHand/i);
    this.head = findBone(this.root, /Head$/i);
    const tint = opts.tint;
    const dress = opts.dress;
    const horror = !!opts.horror;
    const eyes = [];
    this.root.traverse((o) => {
      if (!o.isMesh || !o.material) return;
      o.frustumCulled = false;
      if (dress?.hideGear && GEAR_RE.test(o.name)) { o.visible = false; return; }
      o.material = Array.isArray(o.material) ? o.material.map((m) => m.clone()) : o.material.clone();
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (horror) {
          m.color?.set(0x0b0b0d);
          m.map = null;
          m.roughness = 0.92;
          m.metalness = 0;
          m.envMapIntensity = 0.12;
          m.emissive?.set(0x000000);
        } else if (dress) {
          m.map = null;
          m.normalMap = null;
          m.roughnessMap = null;
          m.metalnessMap = null;
          const joint = JOINT_RE.test(o.name);
          m.color?.set(joint ? (dress.joint ?? 0x1a1a1c) : (dress.color ?? 0x888888));
          m.roughness = joint ? 0.35 : 0.78;
          m.metalness = joint ? 0.45 : 0.04;
          m.envMapIntensity = joint ? 0.4 : 0.28;
        } else if (tint != null && m.color) {
          m.color.multiply(new THREE.Color(tint));
        }
        m.side = THREE.FrontSide;
      }
    });
    if (horror && this.head) {
      const eyeMat = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x8b0000, emissiveIntensity: 2.2, roughness: 1, name: 'eye' });
      for (const sx of [-1, 1]) {
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), eyeMat.clone());
        e.position.set(sx * 0.045, 0.06, 0.09);
        this.head.add(e);
        eyes.push(e);
      }
    }
    const { gun, pistol, minigun } = makeGun();
    if (opts.weapons) {
      if (this.hand) this.hand.add(gun);
      else this.root.add(gun);
    }
    this.root.userData = { actor: this, pistol, minigun, gun, eyes, body: this.root };
    this.play('idle', 0);
  }

  play(name, fade = 0.16) {
    const next = this.actions[name] || this.actions.idle || Object.values(this.actions)[0];
    if (!next || next === this.current) return;
    next.reset().setEffectiveWeight(1).play();
    if (this.current) this.current.crossFadeTo(next, fade, false);
    else next.fadeIn(fade);
    this.current = next;
  }

  setMove(speed, sprint, grounded) {
    if (!grounded && speed > 0.8) this.play('walk');
    else if (speed > 5.2 || (sprint && speed > 1.2)) this.play('run');
    else if (speed > 0.35) this.play('walk');
    else this.play('idle');
    if (this.current) this.current.setEffectiveTimeScale(sprint ? 1.15 : 1);
  }

  setScale(sx, sy = sx, sz = sx) {
    this.root.scale.set(sx, sy, sz);
  }

  update(dt) { this.mixer.update(dt); }
}

export function gltfFromMap(chars, name) {
  return chars?.get(name) || chars?.get('player') || null;
}

export function makePlayerActor(chars) {
  const gltf = gltfFromMap(chars, 'player');
  if (!gltf) return null;
  return new CharacterActor(gltf, { weapons: true, scale: 1 });
}

export function makeStalkerActor(chars) {
  const gltf = gltfFromMap(chars, 'stalker') || gltfFromMap(chars, 'player');
  if (!gltf) return null;
  return new CharacterActor(gltf, { horror: true, scale: 1, weapons: false });
}

export class SkinnedCrowd {
  constructor(scene, chars, capacity = 80) {
    this.scene = scene;
    this.capacity = capacity;
    this.protos = [];
    const player = chars?.get('player');
    for (let i = 0; i < NPC_LOOKS.length; i++) {
      const look = NPC_LOOKS[i];
      const g = chars?.get(`npc_${i}`) || player;
      if (g) this.protos.push({ gltf: g, dress: look, scale: look.scale ?? 1 });
    }
    if (!this.protos.length && player) {
      for (const look of NPC_LOOKS) this.protos.push({ gltf: player, dress: look, scale: look.scale ?? 1 });
    }
    this.pool = [];
  }

  acquire(variant) {
    if (!this.protos.length) return null;
    const proto = this.protos[variant % this.protos.length];
    const actor = new CharacterActor(proto.gltf, { dress: proto.dress, scale: proto.scale ?? 1, weapons: false });
    this.scene.add(actor.root);
    this.pool.push(actor);
    return actor;
  }

  update(entities, dt) {
    let i = 0;
    for (const e of entities) {
      if (e.dead) continue;
      if (i >= this.capacity) break;
      let a = this.pool[i];
      if (!a) a = this.acquire(e.variant ?? i);
      if (!a) continue;
      a.root.visible = true;
      a.root.position.set(e.pos.x, e.pos.y + a.lift, e.pos.z);
      a.root.rotation.y = e.yaw + a.yawOffset;
      const s = (e.scale || 1) * a.baseScale;
      a.root.scale.setScalar(s);
      a.setMove(e.moving ? (e.speed || 1.2) : 0, (e.speed || 0) > 4.5, true);
      a.update(dt);
      i++;
    }
    for (let k = i; k < this.pool.length; k++) this.pool[k].root.visible = false;
  }

  dispose(scene) {
    for (const a of this.pool) scene.remove(a.root);
    this.pool.length = 0;
  }
}

export function makeCrowd(scene, chars, capacity = 80) {
  if (chars && (chars.has('player') || chars.has('npc_0'))) return new SkinnedCrowd(scene, chars, capacity);
  return new PrimitiveRenderer(scene, 1100, null);
}
