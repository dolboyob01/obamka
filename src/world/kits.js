import * as THREE from 'three';
import { cloneKit, getKit, meshPrototype } from '../assets/gltf.js';

const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const _c = new THREE.Color();

function worldMat(src) {
  const map = src?.map || null;
  if (map) {
    map.colorSpace = THREE.SRGBColorSpace;
    map.generateMipmaps = true;
    map.minFilter = THREE.LinearMipmapLinearFilter;
    map.magFilter = THREE.LinearFilter;
    map.needsUpdate = true;
  }
  const color = src?.color ? src.color.clone() : new THREE.Color(0xc8c6be);
  const glow = /^(lamp|glow|eye)$/i.test(src?.name || '');
  if (glow) {
    return new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: src?.emissive?.clone?.() || new THREE.Color(0xffc56a),
      emissiveIntensity: Math.max(1.2, src?.emissiveIntensity || 0),
      emissiveMap: map,
      map,
      roughness: 1,
      metalness: 0,
      fog: true,
      side: THREE.DoubleSide,
      name: src?.name,
    });
  }
  return new THREE.MeshStandardMaterial({
    color: map ? new THREE.Color(0xffffff) : color,
    map,
    roughness: src?.roughness ?? 0.86,
    roughnessMap: src?.roughnessMap || null,
    metalness: 0,
    envMapIntensity: 0.5,
    fog: true,
    side: THREE.DoubleSide,
    name: src?.name,
  });
}

function addInstancedKit(parent, src, items) {
  if (!src || !items.length) return false;
  const tmp = src.clone(true);
  tmp.position.set(0, 0, 0);
  tmp.rotation.set(0, 0, 0);
  tmp.scale.set(1, 1, 1);
  tmp.updateMatrixWorld(true);
  let n = 0;
  tmp.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    if (g.attributes.color) g.deleteAttribute('color');
    g.computeVertexNormals();
    const nrm = g.attributes.normal;
    if (nrm) {
      for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, -nrm.getX(i), -nrm.getY(i), -nrm.getZ(i));
      nrm.needsUpdate = true;
    }
    g.computeBoundingSphere();
    const srcMat = Array.isArray(o.material) ? o.material[0] : o.material;
    addInstanced(parent, { geometry: g, material: srcMat }, items, worldMat(srcMat));
    n++;
  });
  return n > 0;
}

function addInstanced(parent, proto, items, material) {
  if (!proto?.geometry || !items.length) return null;
  const mat = (material || proto.material).clone();
  const im = new THREE.InstancedMesh(proto.geometry, mat, items.length);
  im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  im.frustumCulled = false;
  let useColor = false;
  for (const it of items) if (it.color != null) { useColor = true; break; }
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    _p.set(it.x, it.y, it.z);
    _e.set(0, it.yaw || 0, 0);
    _q.setFromEuler(_e);
    _s.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
    _m.compose(_p, _q, _s);
    im.setMatrixAt(i, _m);
    if (useColor) im.setColorAt(i, _c.set(it.color ?? 0xffffff));
  }
  if (useColor) im.instanceColor.needsUpdate = true;
  parent.add(im);
  return im;
}

export function attachWorldKits(parent, items, kits, materials) {
  if (!items?.length || !kits) return;
  const groups = new Map();
  for (const it of items) {
    let arr = groups.get(it.name);
    if (!arr) { arr = []; groups.set(it.name, arr); }
    arr.push(it);
  }
  for (const [name, arr] of groups) {
    const src = getKit(kits, name);
    if (!src) continue;
    if (name === 'entrance' || name === 'shop_magma' || name === 'shop_kik' || name === 'apt_kit') {
      for (const it of arr) {
        const g = cloneKit(src);
        g.position.set(it.x, it.y, it.z);
        g.rotation.y = it.yaw || 0;
        g.scale.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
        g.traverse((o) => {
          if (!o.isMesh || !o.material) return;
          const srcMat = Array.isArray(o.material) ? o.material[0] : o.material;
          o.material = worldMat(srcMat);
        });
        parent.add(g);
      }
      continue;
    }
    if (addInstancedKit(parent, src, arr)) continue;
    const proto = meshPrototype(src);
    if (!proto) continue;
    addInstanced(parent, proto, arr, proto.material);
  }
}

export function shopKitPlacement(name, x0, z0, x1, z1, front) {
  const w = x1 - x0, d = z1 - z0;
  const x = (x0 + x1) / 2, z = (z0 + z1) / 2;
  if (front === 's') return { name, x, y: 0, z, yaw: Math.PI, sx: w, sy: 1, sz: d };
  if (front === 'n') return { name, x, y: 0, z, yaw: 0, sx: w, sy: 1, sz: d };
  if (front === 'w') return { name, x, y: 0, z, yaw: -Math.PI / 2, sx: d, sy: 1, sz: w };
  return { name, x, y: 0, z, yaw: Math.PI / 2, sx: d, sy: 1, sz: w };
}
