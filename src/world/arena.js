import * as THREE from 'three';
import { Batch, M, tint, scaleUV, flatPlane, boxGeo } from './batch.js';
import { CFG } from '../config.js';
import { rnd } from '../rng.js';

// Арена Deathmatch: огромный подвал-зал с колоннами. Выход — лифт в центре, появляется после победы.
export class Arena {
  constructor(scene, materials, statics) {
    this.scene = scene; this.materials = materials; this.statics = statics;
    this.group = new THREE.Group(); this.group.visible = false; scene.add(this.group);
    this.built = false;
    this.size = CFG.arenaSize;
  }

  build() {
    if (this.built) { this.group.visible = true; if (!this.beacon) this.buildBeacon(); this.addStatics(); return; }
    const S = this.size, h = 7;
    const batch = new Batch();
    batch.add(flatPlane(-S / 2, -S / 2, S / 2, S / 2, 0, true, 4, 0xffffff), M.ARENA);
    batch.add(flatPlane(-S / 2, -S / 2, S / 2, S / 2, h, false, 4, 0x555555), M.CEILINT);
    const wallCol = new THREE.Color(0.78, 0.68, 0.64);
    for (const [cx, cz, w, yaw] of [[0, -S / 2, S, 0], [0, S / 2, S, Math.PI], [S / 2, 0, S, -Math.PI / 2], [-S / 2, 0, S, Math.PI / 2]]) {
      const g = new THREE.PlaneGeometry(w, h); scaleUV(g, w / 3, h / 3); g.rotateY(yaw); g.translate(cx, h / 2, cz);
      batch.add(tint(g, wallCol), M.WALLINT);
    }
    this.columns = [];
    for (let x = -S / 2 + 15; x < S / 2; x += 20) for (let z = -S / 2 + 15; z < S / 2; z += 20) {
      if (Math.abs(x) < 6 && Math.abs(z) < 6) continue;
      const col = new THREE.CylinderGeometry(1.05, 1.15, h, 10);
      col.translate(x, h / 2, z);
      batch.add(tint(col, 0x8a7a7a), M.CONCRETE);
      this.columns.push({ x0: x - 1.1, y0: 0, z0: z - 1.1, x1: x + 1.1, y1: h, z1: z + 1.1 });
    }
    // красные лампы
    for (let x = -S / 2 + 10; x < S / 2; x += 20) for (let z = -S / 2 + 10; z < S / 2; z += 20) {
      const lamp = new THREE.SphereGeometry(0.35, 8, 6);
      lamp.translate(x, h - 0.2, z);
      batch.add(tint(lamp, new THREE.Color(1.0, 0.88, 0.7)), M.LAMP);
    }
    // груды хлама
    for (let i = 0; i < 25; i++) {
      const x = rnd.range(-S / 2 + 4, S / 2 - 4), z = rnd.range(-S / 2 + 4, S / 2 - 4);
      if (Math.hypot(x, z) < 10) continue;
      batch.add(boxGeo(x, 0, z, x + rnd.range(1, 3), rnd.range(0.4, 1.3), z + rnd.range(1, 3), 0x3a3030), M.DARK);
    }
    // лифт в центре (виден всегда, активен после победы)
    batch.add(boxGeo(-1.5, 0, 4, 1.5, 3.2, 6.5, 0x8a8a8a), M.CONCRETE);
    const ed = new THREE.PlaneGeometry(1.3, 2.2); ed.rotateY(Math.PI); ed.translate(0, 1.1, 3.99); batch.add(tint(ed, 0xffffff), M.ELEVATOR);
    this.columns.push({ x0: -1.5, y0: 0, z0: 4, x1: 1.5, y1: 3.2, z1: 6.5 });
    this.elevator = { x: 0, z: 3.2, y: 0 };

    const mesh = batch.build(this.materials);
    this.group.add(mesh);
    this.buildBeacon();
    this.built = true; this.group.visible = true;
    this.addStatics();
  }

  buildBeacon() {
    this.beacon = new THREE.Group();
    this.beacon.visible = false;
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xffe070, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false, fog: false });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.95, 6.8, 14, 1, true), beamMat);
    beam.position.set(0, 3.4, 3.2);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8), new THREE.MeshBasicMaterial({ color: 0xfff3c0, fog: false }));
    cap.position.set(0, 6.6, 3.2);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 2.7), new THREE.MeshBasicMaterial({ color: 0xfff2a8, transparent: true, opacity: 0.9, fog: false }));
    door.position.set(0, 1.35, 3.91); door.rotation.y = Math.PI;
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.1, 2.4, 28), new THREE.MeshBasicMaterial({ color: 0xffd060, side: THREE.DoubleSide, transparent: true, opacity: 0.75, fog: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.04, 3.2);
    this.beacon.add(beam, cap, door, ring);
    this.beacon.userData.beamMat = beamMat;
    this.group.add(this.beacon);
    this.beaconLight = new THREE.PointLight(0xffe8a0, 0, 36, 1.05);
    this.beaconLight.position.set(0, 3.4, 3.2);
    this.group.add(this.beaconLight);
    this.beaconTime = 0;
  }

  setBeacon(on) {
    if (this.beacon) this.beacon.visible = !!on;
    if (this.beaconLight) this.beaconLight.intensity = on ? 42 : 0;
  }

  update(dt) {
    if (!this.beacon?.visible) return;
    this.beaconTime += dt;
    const pulse = 0.28 + Math.sin(this.beaconTime * 4.2) * 0.16;
    if (this.beacon.userData.beamMat) this.beacon.userData.beamMat.opacity = pulse;
    if (this.beaconLight) this.beaconLight.intensity = 36 + Math.sin(this.beaconTime * 5) * 14;
  }

  addStatics() {
    const S = this.size, h = 7;
    this.statics.add(-S / 2, -0.4, -S / 2, S / 2, 0, S / 2, 'arena');
    for (const c of this.columns) this.statics.add(c.x0, c.y0, c.z0, c.x1, c.y1, c.z1, 'arena');
    this.statics.add(-S / 2 - 1, 0, -S / 2 - 1, S / 2 + 1, h, -S / 2, 'arena');
    this.statics.add(-S / 2 - 1, 0, S / 2, S / 2 + 1, h, S / 2 + 1, 'arena');
    this.statics.add(-S / 2 - 1, 0, -S / 2, -S / 2, h, S / 2, 'arena');
    this.statics.add(S / 2, 0, -S / 2, S / 2 + 1, h, S / 2, 'arena');
  }

  randomEdgePoint() {
    const S = this.size / 2 - 3, side = rnd.int(0, 3), t = rnd.range(-S, S);
    switch (side) { case 0: return { x: t, z: -S }; case 1: return { x: t, z: S }; case 2: return { x: -S, z: t }; default: return { x: S, z: t }; }
  }

  hide() { this.setBeacon(false); this.group.visible = false; this.statics.removeTag('arena'); }
}
