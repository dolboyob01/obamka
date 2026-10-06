import * as THREE from 'three';
import { CFG } from '../config.js';
import { hash2, Rng } from '../rng.js';
import { Batch, M, flatPlane } from './batch.js';
import { designBuilding, buildBuildingGeometry, buildRubbleGeometry, buildingBoxes } from './buildings.js';
import { buildCourtyard, buildTundra, buildStreet, makeCarouselRotor, makeSwingSeat } from './props.js';
import { buildMagma, buildKrasnoe } from './shops.js';
import { attachWorldKits, shopKitPlacement } from './kits.js';

export class OutdoorWorld {
  constructor(scene, materials, statics, textures, kits = null) {
    this.scene = scene;
    this.materials = materials;
    this.statics = statics;
    this.kits = kits;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.chunks = new Map();
    this.entrances = [];   // мировые координаты
    this.carousels = [];
    this.swings = [];
    this.destroyed = new Set();
    this.pending = [];
    this.size = CFG.chunkSize;
    this.windows = [];
    this.shops = [];
    this.sessionSeed = (Math.random() * 1e9) | 0;

    // Земля
    const gsize = 360;
    const gg = new THREE.PlaneGeometry(gsize, gsize); gg.rotateX(-Math.PI / 2);
    const uv = gg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * gsize / 6, uv.getY(i) * gsize / 6);
    const n = gg.attributes.position.count, cols = new Float32Array(n * 3).fill(1);
    gg.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    this.ground = new THREE.Mesh(gg, materials[M.GROUND]);
    this.ground.position.y = -0.01;
    this.group.add(this.ground);

    // Снег
    const sn = 1800, pos = new Float32Array(sn * 3);
    this.snowBox = 70;
    for (let i = 0; i < sn; i++) { pos[i * 3] = (Math.random() - 0.5) * this.snowBox; pos[i * 3 + 1] = Math.random() * 30; pos[i * 3 + 2] = (Math.random() - 0.5) * this.snowBox; }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.snow = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xd0d4d8, size: 0.05, sizeAttenuation: true, transparent: true, opacity: 0.7 }));
    this.snow.frustumCulled = false;
    this.group.add(this.snow);
    this.time = 0;
  }

  setVisible(v) { this.group.visible = v; }

  chunkType(cx, cz) {
    if (cx === 0 && cz === 0) return 'courtyard';
    // Кольцо вокруг двора: улицы на стороны света (выезд), дома по диагоналям (силуэт, не колодец).
    if (Math.abs(cx) <= 1 && Math.abs(cz) <= 1) {
      if ((cx === 0) !== (cz === 0)) return 'street';
      return 'building';
    }
    const h = hash2(cx, cz, 91) / 4294967296;
    if (h < 0.36) return 'building';
    if (h < 0.48) return 'courtyard';
    if (h < 0.70) return 'street';
    return 'tundra';
  }

  facingFor(cx, cz, rng) { return rng.int(0, 3); }

  // Поворот локальной точки чанка в мировую
  toWorld(cx, cz, k, lx, lz) {
    const c = this.size / 2, th = k * Math.PI / 2, cos = Math.cos(th), sin = Math.sin(th);
    const x = lx - c, z = lz - c;
    return { x: cx * this.size + c + x * cos + z * sin, z: cz * this.size + c - x * sin + z * cos };
  }
  rotDir(k, nx, nz) {
    const th = k * Math.PI / 2, cos = Math.cos(th), sin = Math.sin(th);
    return { x: nx * cos + nz * sin, z: -nx * sin + nz * cos };
  }

  update(player, dt, audio) {
    this.time += dt;
    const S = this.size;
    const pcx = Math.floor(player.x / S), pcz = Math.floor(player.z / S);
    const R = CFG.viewChunks;
    // Выгрузка
    for (const [key, ch] of this.chunks) {
      if (Math.abs(ch.cx - pcx) > R + 1 || Math.abs(ch.cz - pcz) > R + 1) this.unload(key);
    }
    // Подгрузка на ходу: до двух ближних чанков за кадр
    for (let n = 0; n < 2; n++) {
      let best = null, bd = Infinity;
      for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
        const cx = pcx + dx, cz = pcz + dz, key = cx + ',' + cz;
        if (this.chunks.has(key)) continue;
        const d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = [cx, cz]; }
      }
      if (!best) break;
      this.load(best[0], best[1]);
    }

    // Земля и снег следуют за игроком
    this.ground.position.x = Math.round(player.x / 6) * 6;
    this.ground.position.z = Math.round(player.z / 6) * 6;
    const pos = this.snow.geometry.attributes.position, B = this.snowBox;
    for (let i = 0; i < pos.count; i++) {
      let y = pos.getY(i) - dt * (1.6 + (i % 7) * 0.2);
      let x = pos.getX(i) + dt * 1.1 + Math.sin(this.time + i) * dt * 0.4;
      if (y < 0) y += 30;
      if (x > B / 2) x -= B;
      pos.setXYZ(i, x, y, pos.getZ(i));
    }
    pos.needsUpdate = true;
    this.snow.position.set(player.x, 0, player.z);

    // Карусели: крутятся и скрипят
    for (const car of this.carousels) {
      car.rotor.rotation.y += dt * 0.35;
      car.squeak -= dt;
      if (car.squeak <= 0) {
        car.squeak = 2 + Math.random() * 4;
        const d = Math.hypot(car.x - player.x, car.z - player.z);
        if (d < 60 && audio) audio.carouselSqueak(d);
      }
    }
    for (const s of this.swings) {
      s.phase += dt * 0.9;
      s.seat.rotation.z = Math.sin(s.phase) * 0.28;
    }
  }

  load(cx, cz) {
    const key = cx + ',' + cz, S = this.size;
    const rng = new Rng(hash2(cx, cz, 17));
    const type = this.chunkType(cx, cz);
    const batch = new Batch();
    const chunk = { cx, cz, key, type, group: new THREE.Group(), entrances: [], windows: [], shops: [], carousel: null };
    let boxes = [], k = 0, design = null;
    const modules = [];
    const shopKit = !!(this.kits?.has('shop_magma') && this.kits?.has('shop_kik'));
    const buildingKit = !!this.kits?.has('panel_wall');

    const takeShop = (shop) => {
      this.registerShop(chunk, cx, cz, type === 'building' ? k : 0, shop);
      if (shop?.kit) modules.push(shopKitPlacement(shop.kit, shop.x0, shop.z0, shop.x1, shop.z1, shop.front));
    };

    if (type === 'building') {
      k = this.facingFor(cx, cz, rng);
      design = designBuilding(rng, S);
      const rubble = this.destroyed.has(key);
      const winRng = new Rng(hash2(cx, cz, 771 + (this.sessionSeed || 0)));
      const built = rubble ? (buildRubbleGeometry(batch, design, rng), { windows: [] }) : buildBuildingGeometry(batch, design, rng, winRng, buildingKit ? modules : null);
      boxes = buildingBoxes(design, rubble);
      if (!rubble) {
        design.entrances.forEach((e, i) => {
          const w = this.toWorld(cx, cz, k, e.x, e.z), n = this.rotDir(k, e.nx, e.nz);
          chunk.entrances.push({ x: w.x, z: w.z, nx: n.x, nz: n.z, floors: e.floors, key: key + ':' + i, chunkKey: key, index: i, seed: hash2(cx, cz, 100 + i), lamp: e.lamp });
        });
        const gate = chunk.entrances[0];
        for (let i = 0; i < (built.windows || []).length; i++) {
          const w = built.windows[i];
          const p = this.toWorld(cx, cz, k, w.x, w.z), n = this.rotDir(k, w.nx, w.nz);
          chunk.windows.push({
            x: p.x, y: w.y, z: p.z, nx: n.x, nz: n.z, floor: w.floor,
            key: key + ':w' + i, chunkKey: key, entrance: gate,
            ambush: (hash2(cx, cz, 400 + i + (this.sessionSeed || 0)) % 5) === 0,
          });
        }
      }
      // немного пустыря вокруг дома
      const t = buildTundra(batch, new Rng(hash2(cx, cz, 5)), S, shopKit);
      boxes = boxes.concat(t.boxes.filter(b => !design.blocks.some(bl => b.x1 > bl.x0 - 3 && b.x0 < bl.x1 + 3 && b.z1 > bl.z0 - 3 && b.z0 < bl.z1 + 3)));
      for (const shop of t.shops || []) takeShop(shop);
    } else if (type === 'courtyard') {
      const r = buildCourtyard(batch, rng, S, false);
      boxes = r.boxes;
      if (cx === 0 && cz === 0) {
        const magma = buildMagma(batch, 5, 8, 20.5, 18.2, 'n', shopKit);
        const kik = buildKrasnoe(batch, 26.5, 8.2, 43, 17.6, 'n', shopKit);
        boxes.push(...magma.boxes, ...kik.boxes);
        this.registerShop(chunk, cx, cz, 0, magma);
        this.registerShop(chunk, cx, cz, 0, kik);
        if (magma.kit) modules.push(shopKitPlacement(magma.kit, magma.x0, magma.z0, magma.x1, magma.z1, magma.front));
        if (kik.kit) modules.push(shopKitPlacement(kik.kit, kik.x0, kik.z0, kik.x1, kik.z1, kik.front));
        modules.push(
          { name: 'dumpster', x: 21.2, y: 0, z: 19.4, yaw: 0.15 },
          { name: 'dumpster', x: 22.6, y: 0, z: 19.6, yaw: -0.08 },
          { name: 'bench', x: 23.4, y: 0, z: 26.2, yaw: 0.2 },
          { name: 'bench', x: 29.8, y: 0, z: 24.0, yaw: -0.7 },
          { name: 'yard_lamp', x: 17.8, y: 0, z: 27.2, yaw: 0 },
          { name: 'yard_lamp', x: 32.4, y: 0, z: 28.0, yaw: 0.2 },
        );
      } else if (rng.chance(0.55)) {
        const shopFn = rng.chance(0.5) ? buildMagma : buildKrasnoe;
        const x0 = rng.range(4, 8);
        const shop = shopFn(batch, x0, 2, x0 + 13, 11, rng.pick(['s', 'n']), shopKit);
        boxes.push(...shop.boxes);
        takeShop(shop);
      }
      const cw = this.toWorld(cx, cz, 0, r.carousel.x, r.carousel.z);
      const rotor = makeCarouselRotor(); rotor.position.set(cw.x, 0, cw.z);
      chunk.carousel = { rotor, x: cw.x, z: cw.z, squeak: Math.random() * 3 };
      this.carousels.push(chunk.carousel);
      this.scene.add(rotor);
      if (r.swing) {
        const sw = this.toWorld(cx, cz, 0, r.swing.x, r.swing.z);
        const seat = makeSwingSeat(); seat.position.set(sw.x, 0, sw.z);
        chunk.swing = { seat, phase: Math.random() * 6 };
        this.scene.add(seat);
        this.swings = this.swings || []; this.swings.push(chunk.swing);
      }
    } else if (type === 'street') {
      const st = buildStreet(batch, rng, S, shopKit);
      boxes = st.boxes;
      for (const shop of st.shops || []) takeShop(shop);
    } else {
      const tn = buildTundra(batch, rng, S, shopKit);
      boxes = tn.boxes;
      for (const shop of tn.shops || []) takeShop(shop);
    }

    // Широкие дороги между чанками — сетка улиц
    batch.add(flatPlane(0, S - 5.5, S, S, 0.006, true, 4, 0x3a3a3c), M.DARK);
    batch.add(flatPlane(S - 5.5, 0, S, S - 5.5, 0.006, true, 4, 0x3a3a3c), M.DARK);

    const mesh = batch.build(this.materials);
    const c = S / 2;
    if (mesh) { mesh.position.set(-c, 0, -c); chunk.group.add(mesh); }
    if (modules.length && this.kits) {
      const kitGroup = new THREE.Group();
      kitGroup.position.set(-c, 0, -c);
      attachWorldKits(kitGroup, modules, this.kits, this.materials);
      chunk.group.add(kitGroup);
    }
    chunk.group.rotation.y = k * Math.PI / 2;
    chunk.group.position.set(cx * S + c, 0, cz * S + c);
    this.group.add(chunk.group);

    for (const b of boxes) {
      const a = this.toWorld(cx, cz, k, b.x0, b.z0), d = this.toWorld(cx, cz, k, b.x1, b.z1);
      this.statics.add(Math.min(a.x, d.x), b.y0, Math.min(a.z, d.z), Math.max(a.x, d.x), b.y1, Math.max(a.z, d.z), key);
    }
    this.entrances.push(...chunk.entrances);
    this.windows.push(...chunk.windows);
    this.shops.push(...chunk.shops);
    this.chunks.set(key, chunk);
  }

  registerShop(chunk, cx, cz, rot, shop) {
    if (!shop?.door || !shop.kind) return;
    const p = this.toWorld(cx, cz, rot, shop.door.x, shop.door.z);
    chunk.shops.push({ kind: shop.kind, x: p.x, z: p.z, chunkKey: chunk.key });
  }

  unload(key) {
    const ch = this.chunks.get(key);
    if (!ch) return;
    this.group.remove(ch.group);
    ch.group.traverse(o => { if (o.geometry) o.geometry.dispose(); });
    if (ch.carousel) { this.scene.remove(ch.carousel.rotor); this.carousels = this.carousels.filter(c => c !== ch.carousel); }
    if (ch.swing) { this.scene.remove(ch.swing.seat); this.swings = this.swings.filter(s => s !== ch.swing); }
    this.statics.removeTag(key);
    this.entrances = this.entrances.filter(e => e.chunkKey !== key);
    this.windows = this.windows.filter(w => w.chunkKey !== key);
    this.shops = this.shops.filter(s => s.chunkKey !== key);
    this.chunks.delete(key);
  }

  // Перегенерировать чанк (после взрыва)
  destroyBuilding(chunkKey) {
    this.destroyed.add(chunkKey);
    if (this.chunks.has(chunkKey)) {
      const ch = this.chunks.get(chunkKey);
      this.unload(chunkKey);
      this.load(ch.cx, ch.cz);
    }
  }

  nearestWindow(x, y, z, maxD = 2.4) {
    let best = null, bd = maxD;
    for (const w of this.windows) {
      const d = Math.hypot(w.x - x, w.z - z) + Math.abs(w.y - y) * 0.55;
      if (d < bd) { bd = d; best = w; }
    }
    return best;
  }

  nearestKik(x, z, maxD = 2.2) {
    let best = null, bd = maxD;
    for (const s of this.shops) {
      if (s.kind !== 'kik') continue;
      const d = Math.hypot(s.x - x, s.z - z);
      if (d < bd) { bd = d; best = s; }
    }
    return best;
  }

  nearestEntrance(x, z, maxD = 1.6) {
    let best = null, bd = maxD;
    for (const e of this.entrances) {
      const d = Math.hypot(e.x + e.nx * 0.8 - x, e.z + e.nz * 0.8 - z);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  // Случайная точка на земле без коллизий возле игрока
  randomSpawnPoint(px, pz, rmin, rmax, tries = 12) {
    for (let i = 0; i < tries; i++) {
      const a = Math.random() * Math.PI * 2, r = rmin + Math.random() * (rmax - rmin);
      const x = px + Math.cos(a) * r, z = pz + Math.sin(a) * r;
      if (!this.statics.pointInside(x, 0.5, z) && !this.statics.pointInside(x, 1.5, z)) return { x, z };
    }
    return null;
  }
}
