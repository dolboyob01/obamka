import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const base = () => import.meta.env.BASE_URL;

function prepColor(t) {
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

function prepData(t) {
  t.colorSpace = THREE.NoColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.anisotropy = 8;
  t.needsUpdate = true;
  return t;
}

async function tryTex(loader, file, prep) {
  try {
    const t = await loader.loadAsync(`${base()}textures/scan/${file}`);
    return prep(t);
  } catch {
    return null;
  }
}

export async function loadScanMaps() {
  const loader = new THREE.TextureLoader();
  const pair = async (diff, rough) => ({
    map: await tryTex(loader, diff, prepColor),
    roughnessMap: await tryTex(loader, rough, prepData),
  });
  const [concrete, plaster, asphalt, snow, brick, metal, roof, wood] = await Promise.all([
    pair('concrete_diff.jpg', 'concrete_rough.jpg'),
    pair('plaster_diff.jpg', 'plaster_rough.jpg'),
    pair('asphalt_diff.jpg', 'asphalt_rough.jpg'),
    pair('snow_diff.jpg', 'snow_rough.jpg'),
    pair('brick_diff.jpg', 'brick_rough.jpg'),
    pair('metal_diff.jpg', 'metal_rough.jpg'),
    pair('roof_diff.jpg', 'roof_rough.jpg'),
    pair('wood_diff.jpg', 'wood_rough.jpg'),
  ]);
  return { concrete, plaster, asphalt, snow, brick, metal, roof, wood };
}

export function applyScanMaps(textures, materials, maps) {
  if (!maps) return;
  const set = (texKey, matIndex, pair, repeat = 1) => {
    if (!pair?.map) return;
    pair.map.repeat.set(repeat, repeat);
    if (pair.roughnessMap) pair.roughnessMap.repeat.set(repeat, repeat);
    textures[texKey] = pair.map;
    const mat = materials[matIndex];
    if (!mat) return;
    mat.map = pair.map;
    if (pair.roughnessMap) {
      mat.roughnessMap = pair.roughnessMap;
      mat.roughness = 1;
    } else mat.roughness = 0.86;
    mat.metalness = 0;
    mat.vertexColors = true;
    mat.needsUpdate = true;
  };
  // M: FACADE 0, CONCRETE 1, ROOF 2, MOSAIC 4, WALLINT 7, FLOORINT 8, CEILINT 9, GROUND 11, ARENA 12
  set('facade', 0, maps.concrete);
  set('concrete', 1, maps.concrete);
  set('roof', 2, maps.roof);
  set('mosaic', 4, maps.brick);
  set('wallInt', 7, maps.plaster);
  set('floorInt', 8, maps.asphalt);
  set('ceilInt', 9, maps.plaster);
  set('ground', 11, maps.snow, 1);
  set('arenaFloor', 12, maps.asphalt, 8);
  if (maps.metal?.map) {
    textures.metal = maps.metal.map;
    textures.metalRough = maps.metal.roughnessMap;
  }
  if (maps.wood?.map) textures.wood = maps.wood.map;
}

export async function loadDuskEnv(renderer, scene) {
  try {
    const hdr = await new RGBELoader().loadAsync(`${base()}env/dusk.hdr`);
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromEquirectangular(hdr).texture;
    pmrem.dispose();
    scene.environment = env;
    if ('environmentIntensity' in scene) scene.environmentIntensity = 0.42;
    return { hdr, env };
  } catch (err) {
    console.warn('[look] HDRI skip', err?.message || err);
    return null;
  }
}
