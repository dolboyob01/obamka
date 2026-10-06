import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const KIT_FILES = [
  'panel_wall', 'window_lit', 'window_dark', 'entrance',
  'shop_magma', 'shop_kik', 'apt_kit',
  'dumpster', 'ac_unit', 'bench', 'yard_lamp',
];

export const CHAR_FILES = ['player', 'npc_0', 'npc_1', 'npc_2', 'npc_3', 'npc_4', 'stalker'];

const cache = new Map();
let loader = null;

function getLoader() {
  if (!loader) loader = new GLTFLoader();
  return loader;
}

function kitUrl(name) {
  return `${import.meta.env.BASE_URL}models/${name}.glb`;
}

function charUrl(name) {
  return `${import.meta.env.BASE_URL}models/chars/${name}.glb`;
}

function asArray(m) { return Array.isArray(m) ? m : [m]; }

function prepareMaps(root) {
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    for (const m of asArray(o.material)) {
      const map = m?.map;
      if (!map) continue;
      map.colorSpace = THREE.SRGBColorSpace;
      map.generateMipmaps = true;
      map.minFilter = THREE.LinearMipmapLinearFilter;
      map.magFilter = THREE.LinearFilter;
      map.needsUpdate = true;
    }
  });
}

export function toStandard(root) {
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const converted = asArray(o.material).map((m) => {
      if (!m || m.isMeshBasicMaterial) return m;
      const glow = /^(eye|lamp|glow)$/i.test(m.name || '');
      if (glow) {
        return new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: m.emissive ? m.emissive.clone() : new THREE.Color(0xffc56a),
          emissiveIntensity: Math.max(1.2, m.emissiveIntensity || 1),
          map: m.map || null,
          roughness: 1,
          metalness: 0,
          fog: true,
          name: m.name,
          side: THREE.DoubleSide,
        });
      }
      if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
        m.envMapIntensity = m.envMapIntensity ?? 0.5;
        m.metalness = Math.min(m.metalness ?? 0, 0.08);
        m.side = THREE.DoubleSide;
        return m;
      }
      return new THREE.MeshStandardMaterial({
        color: m.color ? m.color.clone() : new THREE.Color(0xffffff),
        map: m.map || null,
        roughness: 0.86,
        metalness: 0,
        envMapIntensity: 0.5,
        transparent: m.transparent,
        opacity: m.opacity,
        side: THREE.DoubleSide,
        fog: true,
        name: m.name,
      });
    });
    o.material = Array.isArray(o.material) ? converted : converted[0];
  });
  return root;
}

export function cloneKit(root, uniqueMats = false) {
  const c = root.clone(true);
  if (uniqueMats) {
    c.traverse((o) => {
      if (!o.isMesh || !o.material) return;
      o.material = Array.isArray(o.material) ? o.material.map((m) => m.clone()) : o.material.clone();
    });
  }
  return c;
}

export function findNamed(root, name) {
  let found = null;
  root.traverse((o) => { if (o.name === name) found = o; });
  return found;
}

export function meshPrototype(root) {
  if (!root) return null;
  const geos = [];
  let material = null;
  const tmp = root.clone(true);
  tmp.updateMatrixWorld(true);
  tmp.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    const mat0 = Array.isArray(o.material) ? o.material[0] : o.material;
    if (mat0?.color) {
      const n = g.attributes.position.count;
      const cols = new Float32Array(n * 3);
      const r = mat0.color.r, gc = mat0.color.g, b = mat0.color.b;
      for (let i = 0; i < n; i++) { cols[i * 3] = r; cols[i * 3 + 1] = gc; cols[i * 3 + 2] = b; }
      g.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    } else if (g.attributes.color) {
      g.deleteAttribute('color');
    }
    geos.push(g);
    if (!material) material = mat0;
  });
    if (!geos.length) return null;
    const geometry = geos.length === 1 ? geos[0] : (BGU.mergeGeometries(geos, false) || geos[0]);
  if (!geometry) return null;
  if (geometry.attributes.normal) {
    const nrm = geometry.attributes.normal;
    for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, -nrm.getX(i), -nrm.getY(i), -nrm.getZ(i));
    nrm.needsUpdate = true;
  }
  geometry.computeBoundingSphere();
  return { geometry, material: material.clone() };
}

export function namedGeometry(root, name) {
  const node = findNamed(root, name);
  if (!node) return null;
  if (node.isMesh) {
    const g = node.geometry.clone();
    node.updateWorldMatrix(true, false);
    g.applyMatrix4(node.matrixWorld);
    g.computeBoundingSphere();
    return g;
  }
  const proto = meshPrototype(node);
  return proto?.geometry || null;
}

function loadKit(name, ms = 12000) {
  return Promise.race([
    getLoader().loadAsync(kitUrl(name)),
    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}

function loadCharFile(name, ms = 20000) {
  return Promise.race([
    getLoader().loadAsync(charUrl(name)),
    new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}

export async function preloadChars() {
  const chars = new Map();
  await Promise.all(CHAR_FILES.map(async (name) => {
    try {
      const gltf = await loadCharFile(name);
      toStandard(gltf.scene);
      prepareMaps(gltf.scene);
      gltf.scene.updateMatrixWorld(true);
      chars.set(name, gltf);
    } catch (err) {
      console.warn('[chars] skip', name, err?.message || err);
    }
  }));
  return chars;
}

export async function preloadAllKits() {
  const kits = new Map();
  await Promise.all(KIT_FILES.map(async (name) => {
    try {
      const gltf = await loadKit(name);
      toStandard(gltf.scene);
      prepareMaps(gltf.scene);
      gltf.scene.updateMatrixWorld(true);
      kits.set(name, gltf.scene);
      cache.set(name, gltf.scene);
    } catch (err) {
      console.warn('[kits] skip', name, err?.message || err);
    }
  }));
  return kits;
}

export function getKit(kits, name) {
  return kits?.get(name) || cache.get(name) || null;
}
