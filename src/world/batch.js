import * as THREE from 'three';
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Индексы материалов, общие для всех чанков/интерьеров
export const M = { FACADE: 0, CONCRETE: 1, ROOF: 2, DOOR: 3, MOSAIC: 4, LAMP: 5, DARK: 6, WALLINT: 7, FLOORINT: 8, CEILINT: 9, ELEVATOR: 10, GROUND: 11, ARENA: 12 };

export function makeMaterials(T) {
  const lam = (map, extra = {}) => new THREE.MeshLambertMaterial({ map, vertexColors: true, ...extra });
  const mats = [];
  mats[M.FACADE] = lam(T.facade);
  mats[M.CONCRETE] = lam(T.concrete);
  mats[M.ROOF] = lam(T.roof);
  mats[M.DOOR] = lam(T.door);
  mats[M.MOSAIC] = lam(T.mosaic);
  mats[M.LAMP] = new THREE.MeshBasicMaterial({ vertexColors: true });
  mats[M.DARK] = new THREE.MeshLambertMaterial({ vertexColors: true });
  mats[M.WALLINT] = lam(T.wallInt);
  mats[M.FLOORINT] = lam(T.floorInt);
  mats[M.CEILINT] = lam(T.ceilInt);
  mats[M.ELEVATOR] = lam(T.elevator);
  mats[M.GROUND] = lam(T.ground);
  mats[M.ARENA] = lam(T.arenaFloor);
  return mats;
}

export function tint(geo, color) {
  const c = color instanceof THREE.Color ? color : new THREE.Color(color);
  const n = geo.attributes.position.count;
  const cols = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  return geo;
}

export function scaleUV(geo, su, sv, ou = 0, ov = 0) {
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su + ou, uv.getY(i) * sv + ov);
  return geo;
}

// Стена-плоскость: центр (cx,cy,cz), ширина w, высота h, yaw — направление нормали (0 => +z)
export function wallPlane(cx, cy, cz, w, h, yaw, tile = 3, color = 0xffffff) {
  const g = new THREE.PlaneGeometry(w, h);
  scaleUV(g, w / tile, h / tile);
  g.rotateY(yaw);
  g.translate(cx, cy, cz);
  return tint(g, color);
}

// Горизонтальная плоскость (пол/потолок/крыша). up=true — нормаль вверх
export function flatPlane(x0, z0, x1, z1, y, up = true, tile = 3, color = 0xffffff) {
  const w = x1 - x0, d = z1 - z0;
  const g = new THREE.PlaneGeometry(w, d);
  scaleUV(g, w / tile, d / tile);
  g.rotateX(up ? -Math.PI / 2 : Math.PI / 2);
  g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
  return tint(g, color);
}

export function boxGeo(x0, y0, z0, x1, y1, z1, color = 0xffffff, tile = 3) {
  const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0);
  // грубое масштабирование UV по максимальному размеру
  const s = Math.max(x1 - x0, y1 - y0, z1 - z0) / tile;
  scaleUV(g, s, s);
  g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  return tint(g, color);
}

// Накопитель геометрии по материалам → один Mesh с группами
export class Batch {
  constructor() { this.byMat = new Map(); }
  add(geo, mat) {
    let arr = this.byMat.get(mat);
    if (!arr) { arr = []; this.byMat.set(mat, arr); }
    arr.push(geo);
  }
  build(materials) {
    const geos = [], mats = [];
    for (const [mat, arr] of this.byMat) {
      const g = BGU.mergeGeometries(arr, false);
      if (!g) continue;
      geos.push(g); mats.push(materials[mat]);
    }
    if (!geos.length) return null;
    const merged = BGU.mergeGeometries(geos, true);
    for (const g of geos) g.dispose();
    const mesh = new THREE.Mesh(merged, mats);
    mesh.frustumCulled = true;
    merged.computeBoundingSphere();
    return mesh;
  }
}
