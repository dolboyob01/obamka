import * as THREE from 'three';
import { CFG } from './config.js';
import { rnd } from './rng.js';
import { makeTextures } from './textures.js';
import { makeMaterials } from './world/batch.js';
import { StaticWorld } from './physics.js';
import { OutdoorWorld } from './world/chunks.js';
import { generateInterior } from './world/interior.js';
import { generateApartment } from './world/apartment.js';
import { ChaseCorridor } from './world/corridor.js';
import { Arena } from './world/arena.js';
import { Population } from './entities/population.js';
import { GhostChase } from './entities/ghost.js';
import { Stalker } from './entities/stalker.js';
import { Player } from './player.js';
import { Input } from './input.js';
import { AudioSys } from './audio.js';
import { UI } from './ui.js';
import { PostFX } from './postfx.js';

const FOG = {
  outside: { color: 0x8a9098, density: 0.010 },
  interior: { color: 0x0c0c10, density: 0.048 },
  chase: { color: 0x050506, density: 0.07 },
  arena: { color: 0x7a5850, density: 0.0035 },
  apartment: { color: 0x2c221c, density: 0.012 },
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CFG.fov, window.innerWidth / window.innerHeight, 0.1, 260);
    this.postfx = new PostFX(this.renderer);
    this.input = new Input(canvas);
    this.audio = new AudioSys();
    this.ui = new UI();
    this.textures = makeTextures();
    this.materials = makeMaterials(this.textures);
    this.statics = new StaticWorld();

    this.outdoor = new OutdoorWorld(this.scene, this.materials, this.statics, this.textures);
    this.corridor = new ChaseCorridor(this.scene, this.materials, this.statics);
    this.arena = new Arena(this.scene, this.materials, this.statics);
    this.population = new Population(this.scene);
    this.player = new Player(this.scene, this.camera);
    this.ghost = new GhostChase(this.scene, this.corridor);
    this.stalker = new Stalker(this.scene);

    // Свет: пасмурный день тундры — серый, но читаемый
    this.hemi = new THREE.HemisphereLight(0xc8ccd2, 0x5c5a56, 3.6); this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight(0x8a8e94, 1.55); this.scene.add(this.ambient);
    this.dir = new THREE.DirectionalLight(0xd4d8de, 2.15); this.dir.position.set(40, 80, 30); this.scene.add(this.dir);
    this.points = [];
    for (let i = 0; i < 5; i++) { const l = new THREE.PointLight(0xffd090, 0, 32, 1.2); this.scene.add(l); this.points.push(l); }
    this.muzzle = new THREE.PointLight(0xffc070, 0, 8, 2); this.scene.add(this.muzzle);

    this.state = 'start';
    this.menuOpen = false; this.choiceOpen = false; this.gozeOpen = false;
    this.gozeLeft = 0;
    this._wasFlying = false;
    this.time = 0; this.trail = []; this.trailTimer = 0;
    this.interiors = new Map(); this.apartments = new Map(); this.current = null; this.currentApt = null; this.interiorGroup = null;
    this.bombs = []; this.score = 0; this.shake = 0; this.fadeLevel = 0;
    this.savedOutside = { x: 0, z: 3, yaw: Math.PI };
    this.elevator = null; this.plant = 0; this.planting = false;
    this.worldTime = 0; this.heartbeat = 0; this.stats = { kills: 0, buildings: 0 };

    document.documentElement.classList.add('start-open');
    document.body.classList.add('start-open');
    this.setMode('outside');
    // центр стартового двора (чанк 0,0)
    this.savedOutside = { x: CFG.chunkSize / 2, z: CFG.chunkSize / 2 + 4, yaw: Math.PI };
    this.player.teleport(this.savedOutside.x, 0, this.savedOutside.z, Math.PI);
    this.bindUI();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight, false);
    this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix();
    this.postfx.resize();
  }

  bindUI() {
    const $ = (id) => document.getElementById(id);
    $('startBtn').onclick = () => this.startGame();
    $('resumeBtn').onclick = () => this.toggleMenu(false);
    $('stalkerBtn').onclick = () => {
      this.stalker.setEnabled(!this.stalker.enabled);
      $('stalkerBtn').textContent = 'ПРЕСЛЕДОВАТЕЛЬ: ' + (this.stalker.enabled ? 'ВКЛ' : 'ВЫКЛ');
      if (!this.stalker.enabled) this.endHuntMusic();
      this.audio.ui();
    };
    $('volMusic').oninput = (e) => this.audio.setVolumes(parseFloat(e.target.value), this.audio.sfxVolume);
    $('volSfx').oninput = (e) => this.audio.setVolumes(this.audio.musicVolume, parseFloat(e.target.value));
    $('sens').oninput = (e) => { this.input.sensitivity = 0.0022 * parseFloat(e.target.value); };
    const inv = $('invertY');
    if (inv) {
      inv.checked = this.input.invertY;
      inv.onchange = () => { this.input.invertY = inv.checked; localStorage.setItem('invertY', inv.checked ? '1' : '0'); this.audio.ui(); };
    }
    $('stealthBtn').onclick = () => this.chooseHunt('stealth');
    $('dmBtn').onclick = () => this.chooseHunt('deathmatch');
    $('restartBtn').onclick = () => location.reload();
    const gy = $('gozeYes'), gn = $('gozeNo');
    if (gy) gy.onclick = () => this.answerGoze(true);
    if (gn) gn.onclick = () => this.answerGoze(false);
    this.canvas.addEventListener('click', () => { if (this.isPlaying() && !this.menuOpen && !this.choiceOpen && !this.gozeOpen) this.input.lock(); });
  }

  isPlaying() { return ['outside', 'interior', 'chase', 'arena', 'apartment'].includes(this.state); }

  startGame() {
    this.audio.unlock();
    document.documentElement.classList.remove('start-open');
    document.body.classList.remove('start-open');
    this.ui.show('start', false);
    this.state = 'outside';
    this.outdoor.sessionSeed = (Math.random() * 1e9) | 0;
    for (const key of [...this.outdoor.chunks.keys()]) this.outdoor.unload(key);
    for (let i = 0; i < 20; i++) this.outdoor.update(this.player.pos, 0, null);
    this.input.lock();
    this.audio.playOutside(0.72, 1.2);
    this.ui.notify('Двор. Качели скрипят. Найди подъезд.', 5, 'calm');
    this.ui.setCrosshair(true);
  }

  toggleMenu(open) {
    if (!this.isPlaying()) return;
    this.menuOpen = open;
    this.ui.show('menu', open);
    if (open) this.input.unlock(); else this.input.lock();
  }

  // ---------- Миры ----------
  setMode(mode) {
    const f = FOG[mode];
    this.scene.fog = new THREE.FogExp2(f.color, f.density);
    this.scene.background = new THREE.Color(f.color);
    this.mode = mode;
    this.outdoor.setVisible(mode === 'outside');
    if (this.interiorGroup) this.interiorGroup.visible = mode === 'interior' || mode === 'apartment';
    if (mode !== 'chase') this.corridor.group.visible = false;
    if (mode !== 'arena') this.arena.group.visible = false;
    this.hemi.intensity = mode === 'outside' ? 3.6 : mode === 'arena' ? 3.8 : mode === 'apartment' ? 2.4 : mode === 'interior' ? 1.2 : 0.65;
    this.hemi.color.set(mode === 'arena' ? 0xf0c8b8 : mode === 'apartment' ? 0xe8d2b8 : 0xc8ccd2);
    this.ambient.intensity = mode === 'outside' ? 1.55 : mode === 'arena' ? 2.6 : mode === 'apartment' ? 1.15 : 0.32;
    this.dir.intensity = mode === 'outside' ? 2.15 : mode === 'arena' ? 2.0 : 0;
    this.statics.hasDefaultGround = true;
    this.statics.defaultGround = (mode === 'outside' || mode === 'arena') ? 0 : -1000;
    this.audio.setWind(mode === 'outside' ? 0.12 : 0.03);
  }

  switchWorld(mode) {
    this.statics.clear();
    this.trail.length = 0;
    this.population.clear(e => e.cls === 3 || e.cls === 'arena' || e.cls === 'minion' || mode !== 'outside');
    if (mode === 'outside') {
      // чанки перезагружаем, чтобы восстановить коллизии
      for (const key of [...this.outdoor.chunks.keys()]) this.outdoor.unload(key);
    }
    this.setMode(mode);
    this.stalker.onWorldChange(this);
    this.worldTime = 0;
    this.fadeLevel = 1;
    if (this.stalker.mode === 'deathmatch' && mode !== 'chase' && mode !== 'arena') setTimeout(() => this.spawnMinions(CFG.deathmatchInitialMinions), 1500);
  }

  enterInterior(entrance, arriveFloor = null) {
    this.savedOutside = { x: entrance.x + entrance.nx * 2.4, z: entrance.z + entrance.nz * 2.4, yaw: Math.atan2(entrance.nx, entrance.nz) };
    let it = this.interiors.get(entrance.key);
    if (!it) {
      it = generateInterior(entrance.seed, entrance.floors, this.materials);
      it.key = entrance.key; it.chunkKey = entrance.chunkKey; it.bombPlanted = false; it.entrance = entrance;
      this.interiors.set(entrance.key, it);
      if (this.interiors.size > 8) { const k = this.interiors.keys().next().value; if (k !== entrance.key) { const old = this.interiors.get(k); old.group.traverse(o => o.geometry?.dispose()); this.interiors.delete(k); } }
    }
    if (this.interiorGroup) this.scene.remove(this.interiorGroup);
    this.interiorGroup = it.group; this.scene.add(it.group);
    this.current = it;
    this.switchWorld('interior');
    this.state = 'interior';
    for (const b of it.boxes) this.statics.add(b.x0, b.y0, b.z0, b.x1, b.y1, b.z1, 'int');
    if (arriveFloor === null) this.player.teleport(it.playerStart.x, it.playerStart.y, it.playerStart.z, 0);
    else {
      const el = it.elevators.find(e => e.floor === arriveFloor) || it.elevators[0];
      this.player.teleport(el.x, el.y, el.z, el.floor === 0 ? -Math.PI / 2 : 0);
    }
    // Класс 3: игра на выживание начинается
    const spawns = [...it.spawns].sort(() => Math.random() - 0.5);
    const n = Math.min(spawns.length, rnd.int(5, 10));
    for (let i = 0; i < n; i++) {
      const s = spawns[i];
      if (Math.hypot(s.x - this.player.pos.x, s.z - this.player.pos.z) < 6 && Math.abs(s.y - this.player.pos.y) < 1) continue;
      this.population.spawn(3, s.x, s.y, s.z);
    }
    this.audio.stopMusic(1.2);
    this.ui.notify('Ты внутри. Они тоже.', 3.5, 'danger');
    if (it.bombPlanted) this.ui.notify('Бомба здесь уже заложена. Уходи.', 3, 'info');
  }

  exitToOutside(pos = this.savedOutside) {
    this.switchWorld('outside');
    this.state = 'outside';
    this.player.teleport(pos.x, pos.y ?? 0, pos.z, pos.yaw);
    this.player.crouch = false;
    if (this.player.weapon.kind === 'minigun' && this.stalker.mode !== 'deathmatch') this.player.setWeapon('pistol');
    // сразу подгружаем ближние чанки, чтобы не провалиться
    for (let i = 0; i < 9; i++) this.outdoor.update(this.player.pos, 0, null);
    this.audio.playOutside(0.72, 1.4);
  }

  enterApartment(win) {
    if (!win) return;
    this.savedOutside = { x: win.x + win.nx * 2.4, z: win.z + win.nz * 2.4, y: 0, yaw: Math.atan2(-win.nx, -win.nz) };
    let apt = this.apartments.get(win.key);
    if (!apt) {
      apt = generateApartment(win.key.split('').reduce((a, c) => a + c.charCodeAt(0), 1), this.materials);
      apt.window = win;
      this.apartments.set(win.key, apt);
    }
    apt.window = win;
    if (this.interiorGroup) this.scene.remove(this.interiorGroup);
    this.interiorGroup = apt.group; this.scene.add(apt.group);
    this.currentApt = apt;
    this.switchWorld('apartment');
    this.state = 'apartment';
    for (const b of apt.boxes) this.statics.add(b.x0, b.y0, b.z0, b.x1, b.y1, b.z1, 'apt');
    this.player.flying = false;
    this.player.teleport(apt.playerStart.x, apt.playerStart.y, apt.playerStart.z, apt.playerStart.yaw);
    this.population.clear(e => e.cls === 3);
    for (const s of apt.spawns) this.population.spawn(3, s.x, s.y, s.z);
    this.audio.stopMusic(0.8);
    if (win.ambush) {
      this.stalker.pos.x = apt.stalkerSpot.x; this.stalker.pos.y = 0; this.stalker.pos.z = apt.stalkerSpot.z;
      this.stalker.startHunt(this, { silent: true });
      this.stalker.worldSince = this.time - 20;
      this.ui.notify('ОН УЖЕ В КВАРТИРЕ. Беги в подъезд и вызови лифт.', 5.5, 'danger');
    } else {
      this.ui.notify('Чужая квартира. Ковёр. Запах борща.', 3.2, 'info');
    }
  }

  exitApartment(throughWindow) {
    const win = this.currentApt?.window;
    const hunting = this.stalker.state === 'hunt';
    if (throughWindow && win && this.gozeLeft > 0) {
      this.exitToOutside({ x: win.x + win.nx * 2.6, y: win.y - 0.95, z: win.z + win.nz * 2.6, yaw: Math.atan2(win.nx, win.nz) });
      this.player.flying = true;
      this.player.pos.y = Math.max(this.player.pos.y, win.y - 1.05);
      if (hunting) {
        this.stalker.aerial = true;
        this.stalker.pos.x = win.x; this.stalker.pos.y = win.y; this.stalker.pos.z = win.z;
        this.ui.notify('Он летит за тобой. Ищи подъезд и лифт.', 5, 'danger');
      }
    } else {
      this.exitToOutside();
    }
    this.currentApt = null;
  }

  endHuntMusic() {
    if (this.state === 'chase') return;
    if (this.state === 'outside') this.audio.playOutside(0.72, 1.2);
    else if (this.state === 'arena') this.audio.playMusic('arena', 0.75, 1);
    else this.audio.stopMusic(0.8);
  }

  enterKik() {
    if (this.stalker.state === 'hunt') {
      this.stalker.reset();
      this.endHuntMusic();
    }
    this.player.flying = false;
    this.gozeOpen = true;
    this.ui.show('goze', true);
    this.input.unlock();
  }

  answerGoze(yes) {
    if (!this.gozeOpen) return;
    this.gozeOpen = false;
    this.ui.show('goze', false);
    if (yes) {
      this.gozeLeft = CFG.gozeDuration;
      this.ui.notify('Гавваховый Гозе 60%. Q — полёт под гавваховыми гозе.', 4.5, 'info');
    }
    if (this.isPlaying()) this.input.lock();
  }

  // ---------- Побег от призрака ----------
  startChase() {
    this.chaseReturn = { state: this.state, pos: this.player.pos.clone(), yaw: this.player.yaw };
    this.switchWorld('chase');
    this.state = 'chase';
    this.corridor.start();
    this.player.teleport(0, 0.05, 0, 0);
    this.player.crouch = false; this.player.pitch = -0.1;
    this.population.renderer.update([]);
    this.ghost.start(this);
  }

  endChase(result) {
    if (result === 'eaten') { this.gameOver('Сущность съела тебя. Ты обернулся.'); return; }
    if (result === 'caught') { this.gameOver('Сущность догнала тебя. Беги быстрее.'); return; }
    this.corridor.stop();
    this.audio.stopMusic(1.2);
    const r = this.chaseReturn;
    if (r.state === 'interior' && this.current) {
      // Возвращаемся в тот же подъезд, но на случайный этаж
      const it = this.current;
      this.switchWorld('interior'); this.state = 'interior';
      this.interiorGroup.visible = true;
      for (const b of it.boxes) this.statics.add(b.x0, b.y0, b.z0, b.x1, b.y1, b.z1, 'int');
      const f = rnd.int(0, it.floors - 1);
      this.player.teleport(0, f * CFG.floorHeight, 6.5, Math.PI);
      const spawns = it.spawns.filter(s => s.floor !== f).sort(() => Math.random() - 0.5).slice(0, rnd.int(3, 6));
      for (const s of spawns) this.population.spawn(3, s.x, s.y, s.z);
    } else {
      this.exitToOutside({ x: r.pos.x, z: r.pos.z, yaw: r.yaw });
    }
    this.ui.notify('Ты не знаешь, как здесь оказался.', 4, 'calm');
  }

  // ---------- Преследователь ----------
  openHuntChoice() {
    this.choiceOpen = true; this.choiceTimer = 10;
    this.ui.show('choice', true);
    this.input.unlock();
    this.audio.playMusic('choice', 0.85, 0.5);
    this.ui.setStalker('hunt', true);
  }

  chooseHunt(mode) {
    if (!this.choiceOpen) return;
    this.choiceOpen = false;
    this.ui.show('choice', false);
    this.audio.stopMusic(0.8);
    this.stalker.chooseMode(mode, this);
    this.input.lock();
    if (this.state === 'outside') this.audio.playOutside(0.72, 1.2);
    if (mode === 'deathmatch') {
      this.player.setWeapon('minigun');
      this.spawnMinions(CFG.deathmatchInitialMinions);
      this.ui.notify('DEATHMATCH. Каждый убитый приведёт двоих.', 4, 'danger');
    } else {
      this.ui.notify('Уходи тихо. Он идёт по следу. Ищи лифт.', 4, 'info');
    }
  }

  spawnMinions(n) {
    if (this.stalker.mode !== 'deathmatch' || !this.isPlaying() || this.state === 'chase' || this.state === 'arena') return;
    const p = this.player.pos;
    let spawned = 0, tries = 0;
    while (spawned < n && tries < 60) {
      tries++;
      const a = Math.random() * Math.PI * 2, r = rnd.range(14, 24);
      const x = p.x + Math.cos(a) * r, z = p.z + Math.sin(a) * r;
      const g = this.statics.groundAt(x, z, p.y + 1.5, 0.3);
      if (g < p.y - 4 || g > p.y + 4) continue;
      if (this.statics.pointInside(x, g + 0.5, z) || this.statics.pointInside(x, g + 1.4, z)) continue;
      this.population.spawn('minion', x, g, z, { gruntSpeed: rnd.range(CFG.minionSpeed[0], CFG.minionSpeed[1]) });
      spawned++;
    }
  }

  // ---------- Лифт ----------
  callElevator() {
    this.player.frozen = true;
    this.elevator = { t: 3.4 };
    this.audio.elevatorHum(true);
    this.ui.prompt(null);
  }

  finishElevator() {
    this.audio.elevatorHum(false); this.audio.ding();
    this.player.frozen = false;
    this.stalker.reset();
    this.endHuntMusic();
    this.player.flying = false;
    this.population.clear(e => e.cls === 'minion');
    if (this.player.weapon.kind === 'minigun') this.player.setWeapon('pistol');
    if (rnd.chance(CFG.elevatorArenaChance)) { this.enterArena(); return; }
    // другой этаж этого или другого дома
    let target = this.current?.entrance;
    const others = this.outdoor.entrances.filter(e => e.key !== target?.key);
    if (others.length && rnd.chance(0.45)) target = rnd.pick(others);
    if (!target) target = this.current.entrance;
    const floors = target.floors;
    let floor = rnd.int(0, Math.max(0, Math.min(16, floors) - 1));
    this.enterInterior(target, floor);
    this.ui.notify(floor === 0 ? 'Первый этаж. Кажется.' : `Этаж ${floor + 1}`, 3, 'calm');
  }

  // ---------- Арена ----------
  enterArena() {
    this.switchWorld('arena');
    this.state = 'arena';
    this.arena.build();
    this.player.teleport(0, 0, -3, Math.PI);
    this.player.setWeapon('minigun');
    this.arenaTotal = rnd.int(CFG.arenaCount[0], CFG.arenaCount[1]);
    this.arenaRemaining = this.arenaTotal; this.arenaSpawned = 0; this.arenaAcc = 0; this.arenaWon = false;
    this.arena.setBeacon(false);
    this.audio.playMusic('arena', 0.75, 1);
    this.ui.notify(`DEATHMATCH. ИХ ${this.arenaTotal}. ПАТРОНЫ БЕСКОНЕЧНЫ.`, 5, 'danger');
  }

  updateArena(dt) {
    if (!this.arenaWon) {
      const alive = this.population.count('arena');
      this.arenaAcc += dt * CFG.arenaSpawnPerSec;
      while (this.arenaAcc >= 1 && alive + 1 <= CFG.arenaMaxAlive && this.arenaSpawned < this.arenaTotal) {
        this.arenaAcc -= 1; this.arenaSpawned++;
        const p = this.arena.randomEdgePoint();
        this.population.spawn('arena', p.x, 0, p.z, { gruntSpeed: rnd.range(CFG.arenaGruntSpeed[0], CFG.arenaGruntSpeed[1]) });
      }
      this.ui.arena(`ОСТАЛОСЬ: ${this.arenaRemaining}`);
      if (this.arenaRemaining <= 0) {
        this.arenaWon = true; this.audio.stopMusic(2);
        this.arena.setBeacon(true);
        this.ui.arena('ЛИФТ — СВЕТОВОЙ СТОЛБ В ЦЕНТРЕ');
        this.ui.notify('ПОБЕДА. Иди на жёлтый столб.', 5, 'calm');
      }
    } else {
      this.arena.update(dt);
    }
  }

  leaveArena() {
    this.arena.setBeacon(false);
    this.arena.hide();
    this.ui.arena(null);
    this.exitToOutside();
    this.ui.notify('Лифт выплюнул тебя обратно во двор.', 4, 'calm');
  }

  // ---------- Бомба ----------
  updateBombs(dt) {
    for (const b of this.bombs) {
      const before = b.t; b.t -= dt;
      if (b.t < 10 && Math.floor(before) !== Math.floor(b.t)) this.audio.bombTick();
      if (b.t <= 0) {
        b.done = true;
        this.audio.explosion(); this.shake = 1.6;
        const inside = this.state === 'interior' && this.current && this.current.chunkKey === b.chunkKey;
        if (inside) { this.gameOver('Ты подорвался на собственной бомбе.'); return; }
        this.outdoor.destroyBuilding(b.chunkKey);
        for (const [k, it] of [...this.interiors]) if (it.chunkKey === b.chunkKey) { it.group.traverse(o => o.geometry?.dispose()); this.interiors.delete(k); }
        this.score++; this.stats.buildings++;
        this.ui.setObjective(this.score);
        this.ui.notify('ДОМ СЛОЖИЛСЯ. +1', 4, 'danger');
      }
    }
    this.bombs = this.bombs.filter(b => !b.done);
    const mine = this.bombs.find(b => this.current && b.interiorKey === this.current.key);
    const anyBomb = this.bombs[0];
    this.ui.bomb(anyBomb ? `БОМБА: ${Math.ceil(anyBomb.t)}с — УХОДИ` : null);
  }

  plantBomb() {
    const it = this.current; it.bombPlanted = true;
    this.bombs.push({ chunkKey: it.chunkKey, interiorKey: it.key, t: CFG.bombFuse });
    this.audio.bombArmed();
    // визуальная "закладка" в углу
    const c = this.plantCorner;
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.3), new THREE.MeshLambertMaterial({ color: 0x4a2e14 }));
    m.position.set(c.x, c.y + 0.09, c.z); it.group.add(m);
    this.ui.notify('БОМБА ЗАЛОЖЕНА. 25 СЕКУНД.', 4, 'danger');
  }

  // ---------- Урон / смерть ----------
  hurtPlayer(pct, source) {
    if (this.state === 'gameover') return;
    this.player.damage(pct, this.audio);
    this.shake = Math.max(this.shake, 0.3);
    if (this.player.dead) {
      const reasons = { stalker: 'Преследователь догнал тебя.', 3: 'Тебя разорвали в подъезде.', 2: 'Забит насмерть во дворе.', arena: 'Арена победила.', minion: 'Deathmatch проигран.' };
      this.gameOver(reasons[source] || 'Ты умер.');
    }
  }

  gameOver(reason) {
    if (this.state === 'gameover') return;
    this.state = 'gameover';
    this.audio.stopMusic(1.5); this.audio.gameOver(); this.audio.elevatorHum(false);
    this.input.unlock();
    this.ui.prompt(null); this.ui.progress(null); this.ui.showChaseHint(false);
    this.ui.gameOver(reason, `Заминировано подъездов: ${this.score} · Убито сущностей: ${this.population.killed} · Время: ${Math.floor(this.time)}с`);
  }

  // ---------- Взаимодействие ----------
  updateInteraction(dt) {
    const p = this.player, pos = p.pos;
    let text = null, action = null;
    this.planting = false;
    if (this.state === 'outside') {
      const e = this.outdoor.nearestEntrance(pos.x, pos.z, 1.8);
      if (e) { text = 'E — войти в подъезд'; action = () => this.enterInterior(e); }
      const kik = this.outdoor.nearestKik(pos.x, pos.z, 2.3);
      if (!action && kik) {
        text = 'E — войти в Красное и Коричневое';
        action = () => this.enterKik();
      }
      const win = this.outdoor.nearestWindow(pos.x, pos.y + 1.15, pos.z, p.flying ? 2.9 : 2.3);
      if (!action && win && (p.flying || Math.abs((pos.y + 1.2) - win.y) < 1.8)) {
        text = 'E — влететь в окно';
        action = () => this.enterApartment(win);
      }
    } else if (this.state === 'apartment' && this.currentApt) {
      const apt = this.currentApt;
      if (Math.hypot(pos.x - apt.windowExit.x, pos.z - apt.windowExit.z) < 1.5) {
        text = p.flying ? 'E — вылететь в окно' : (this.gozeLeft > 0 ? 'E — к окну  ·  Q — полёт' : 'E — к окну');
        action = () => this.exitApartment(true);
      }
      if (Math.hypot(pos.x - apt.door.x, pos.z - apt.door.z) < 1.35) {
        text = 'E — в подъезд';
        action = () => {
          const gate = apt.window?.entrance || this.outdoor.entrances[0];
          if (gate) this.enterInterior(gate, apt.window?.floor ?? 0);
        };
      }
    } else if (this.state === 'interior' && this.current) {
      const it = this.current;
      if (Math.hypot(pos.x - it.exit.x, pos.z - it.exit.z) < 1.3 && Math.abs(pos.y) < 1) { text = 'E — выйти на улицу'; action = () => this.exitToOutside(); }
      for (const el of it.elevators) if (Math.hypot(pos.x - el.x, pos.z - el.z) < 1.3 && Math.abs(pos.y - el.y) < 1) { text = 'E — вызвать лифт'; action = () => this.callElevator(); }
      let corner = null, cd = 1.1;
      for (const c of it.corners) { const d = Math.hypot(pos.x - c.x, pos.z - c.z); if (d < cd && Math.abs(pos.y - c.y) < 0.8) { cd = d; corner = c; } }
      if (corner && !action) {
        if (it.bombPlanted) text = 'Здесь уже заложено';
        else if (!p.crouch) text = 'Присядь (C), чтобы заложить бомбу';
        else {
          text = 'Держи E — заложить бомбу';
          this.plantCorner = corner;
          if (this.input.down('KeyE')) {
            this.planting = true;
            if (this.plant === 0) this.audio.shit();
            this.plant += dt / CFG.bombPlantTime;
            if (this.plant >= 1) { this.plant = 0; this.planting = false; this.plantBomb(); text = null; }
          }
        }
      }
    } else if (this.state === 'arena' && this.arenaWon) {
      const el = this.arena.elevator;
      if (Math.hypot(pos.x - el.x, pos.z - el.z) < 1.6) { text = 'E — лифт'; action = () => this.leaveArena(); }
    }
    if (!this.planting) this.plant = 0;
    this.ui.progress(this.planting ? this.plant : null);
    this.ui.prompt(text);
    if (action && this.input.hit('KeyE')) action();
  }

  // ---------- Стрельба ----------
  updateShooting(dt, firing) {
    const w = this.player.weapon;
    this.muzzle.intensity *= Math.max(0, 1 - dt * 25);
    if (!firing) { if (w.kind === 'pistol' && this.input.mouseClicked && w.mag === 0) { if (w.reload()) this.audio.reload(); } return; }
    if (w.kind === 'pistol' && w.mag === 0 && this.input.mouseClicked) { if (w.reload()) this.audio.reload(); return; }
    const shots = w.tryFire(dt);
    for (let i = 0; i < shots; i++) {
      w.kind === 'minigun' ? this.audio.minigun() : this.audio.pistol();
      const dir = new THREE.Vector3(); this.camera.getWorldDirection(dir);
      dir.x += (Math.random() - 0.5) * w.cfg.spread * 2; dir.y += (Math.random() - 0.5) * w.cfg.spread * 2; dir.z += (Math.random() - 0.5) * w.cfg.spread * 2; dir.normalize();
      const hit = this.population.raycast(this.camera.position, dir, 200);
      if (hit) this.population.hurt(hit.entity, w.cfg.damage, this.ctx);
      this.muzzle.intensity = w.kind === 'minigun' ? 14 : 20;
      this.muzzle.position.copy(this.player.pos).add(new THREE.Vector3(Math.sin(this.player.modelYaw) * 0.6, 1.4, Math.cos(this.player.modelYaw) * 0.6));
      this.shake = Math.max(this.shake, w.kind === 'minigun' ? 0.12 : 0.18);
    }
  }

  // ---------- Свет ----------
  updateLights(dt) {
    const p = this.player.pos;
    let lamps = [];
    if (this.state === 'interior' && this.current) lamps = this.current.lamps.map(l => ({ ...l, color: 0xffd090, i: 9 }));
    else if (this.state === 'chase') lamps = this.corridor.lamps.map(l => ({ ...l, color: 0xffd090, i: 8 }));
    else if (this.state === 'outside') {
      for (const e of this.outdoor.entrances) if (e.lamp) lamps.push({ x: e.x + e.nx * 0.9, y: 2.3, z: e.z + e.nz * 0.9, color: 0xffd090, i: 7, flicker: false });
    } else if (this.state === 'apartment' && this.currentApt) {
      lamps = this.currentApt.lamps.map(l => ({ ...l, color: 0xffd8a0, i: 9 }));
    } else if (this.state === 'arena') {
      lamps.push({ x: p.x, y: 5.8, z: p.z, color: 0xffe8d0, i: 36, flicker: false });
      lamps.push({ x: p.x + 10, y: 6.2, z: p.z + 4, color: 0xffc8a0, i: 26, flicker: false });
      lamps.push({ x: p.x - 10, y: 6.2, z: p.z - 4, color: 0xffc8a0, i: 26, flicker: false });
      lamps.push({ x: 0, y: 6.4, z: 0, color: 0xfff4dc, i: this.arenaWon ? 48 : 32, flicker: false });
      lamps.push({ x: 0, y: 3.4, z: 3.2, color: 0xffe080, i: this.arenaWon ? 55 : 18, flicker: false });
    }
    lamps.sort((a, b) => (Math.hypot(a.x - p.x, a.z - p.z) + Math.abs(a.y - p.y) * 2) - (Math.hypot(b.x - p.x, b.z - p.z) + Math.abs(b.y - p.y) * 2));
    for (let i = 0; i < this.points.length; i++) {
      const L = this.points[i], l = lamps[i];
      if (!l) { L.intensity = 0; continue; }
      L.position.set(l.x, l.y, l.z); L.color.set(l.color);
      L.intensity = l.i * (l.flicker ? (Math.random() > 0.12 ? 1 : 0.15) * (0.85 + Math.sin(this.time * 17 + i) * 0.15) : 1);
    }
  }

  // ---------- Главный цикл ----------
  update(dt) {
    dt = Math.min(dt, 0.05);
    if (this.state === 'start' || this.state === 'gameover') { this.render(dt); this.input.flush(); return; }

    if (this.input.hit('Escape') && !this.choiceOpen && !this.gozeOpen) this.toggleMenu(!this.menuOpen);
    if (this.gozeOpen) {
      if (this.input.hit('KeyY')) this.answerGoze(true);
      else if (this.input.hit('KeyN')) this.answerGoze(false);
    }
    if (this.choiceOpen) {
      this.choiceTimer -= dt;
      this.ui.el.choiceTimer.textContent = Math.ceil(this.choiceTimer);
      if (this.input.hit('Digit1')) this.chooseHunt('stealth');
      else if (this.input.hit('Digit2')) this.chooseHunt('deathmatch');
      else if (this.choiceTimer <= 0) this.chooseHunt('stealth');
    }
    if (this.menuOpen || this.choiceOpen || this.gozeOpen) { this.render(dt); this.input.flush(); return; }
    if (!this.input.locked && this.isPlaying()) { /* ждём клика по канвасу */ }

    this.time += dt; this.worldTime += dt;
    const p = this.player;

    // Лифт
    if (this.elevator) {
      this.elevator.t -= dt;
      this.fadeLevel = Math.min(1, this.fadeLevel + dt * 0.8);
      this.shake = 0.08;
      if (this.elevator.t <= 0) { this.elevator = null; this.finishElevator(); }
    }

    // Контекст для ИИ
    this.ctx = {
      player: p, statics: this.statics, audio: this.audio, trail: this.trail, inside: this.state !== 'outside',
      onPlayerHit: (dmg, e) => this.hurtPlayer(dmg, e.cls),
      onLunge: () => { this.shake = Math.max(this.shake, 0.85); },
      onMinionDeath: () => { this.stats.kills++; this.spawnMinions(2); },
      onArenaDeath: () => { this.stats.kills++; this.arenaRemaining--; },
    };

    const combatCam = this.state === 'arena' || this.stalker.mode === 'deathmatch';
    if (this.gozeLeft > 0) {
      this.gozeLeft -= dt;
      if (this.gozeLeft <= 0) {
        this.gozeLeft = 0;
        p.flying = false;
        this._wasFlying = false;
        this.ui.notify('Ты протрезвел, если хочешь ещё полетать, иди в Красное и Коричневое', 6.5, 'info');
      }
    }
    const firing = p.update(dt, this.input, this.statics, this.audio, {
      inside: this.state !== 'outside' && this.state !== 'apartment', noFire: this.state === 'chase' || !!this.elevator,
      camDist: this.state === 'apartment' ? 2.15 : combatCam ? CFG.camDistCombat : CFG.camDist,
      canFly: this.gozeLeft > 0,
    });
    if (p.flyDenied) {
      p.flyDenied = false;
      this.ui.notify('Полёт закрыт. Иди в Красное и Коричневое.', 3.2, 'info');
    }
    if (p.flying !== this._wasFlying) {
      this._wasFlying = p.flying;
      this.ui.notify(p.flying ? 'Полёт. Лети к светящимся окнам.' : 'Полёт выключен.', 2.2, 'info');
    }
    if (p.landed) { if (!p.flying && p.landed > 6) this.hurtPlayer(Math.min(40, (p.landed - 6) * 6), 'fall'); p.landed = 0; }

    // След игрока
    this.trailTimer += dt;
    const last = this.trail[this.trail.length - 1];
    if (!last || this.trailTimer > 0.2 || Math.hypot(last.x - p.pos.x, last.z - p.pos.z) > 0.6) {
      this.trailTimer = 0; this.trail.push({ x: p.pos.x, y: p.pos.y, z: p.pos.z, t: this.time });
      if (this.trail.length > 400) this.trail.splice(0, this.trail.length - 400);
    }

    switch (this.state) {
      case 'outside':
        this.outdoor.update(p.pos, dt, this.audio);
        this.population.maintainOutside(this.outdoor, p.pos, dt);
        if (this.worldTime > 15 && !this.elevator && rnd.chance(CFG.ghostOutsideChancePerSec * dt)) { this.startChase(); break; }
        break;
      case 'interior':
        if (this.worldTime > 12 && !this.elevator && rnd.chance(CFG.ghostInteriorChancePerSec * dt)) { this.startChase(); break; }
        if (p.pos.y < -20) p.teleport(this.current.playerStart.x, 0, this.current.playerStart.z);
        break;
      case 'apartment':
        if (p.pos.y < -8 && this.currentApt) p.teleport(this.currentApt.playerStart.x, 0, this.currentApt.playerStart.z);
        break;
      case 'chase': {
        this.corridor.update(p.pos, dt);
        const r = this.ghost.update(dt, this);
        if (r) { this.endChase(r); }
        break;
      }
      case 'arena':
        this.updateArena(dt);
        if (p.pos.y < -20) p.teleport(0, 0, -3);
        break;
    }
    if (this.state === 'gameover') { this.render(dt); this.input.flush(); return; }

    if (this.state !== 'chase') {
      if (this.state !== 'arena') this.stalker.update(dt, this);
      this.population.update(dt, this.ctx);
      this.updateInteraction(dt);
      this.updateShooting(dt, firing);
    }
    this.updateBombs(dt);
    this.updateLights(dt);

    // Сердцебиение при малом HP
    if (p.hp < 30) { this.heartbeat -= dt; if (this.heartbeat <= 0) { this.heartbeat = 0.9; this.audio.heartbeat(); } }

    // HUD
    this.ui.setHp(p.hp, CFG.maxHp);
    this.ui.setAmmo(p.weapon);
    this.ui.setStalker(this.stalker.state, this.stalker.enabled);
    this.ui.setCrosshair(true, this.state === 'arena' || this.stalker.mode === 'deathmatch');

    // Тряска камеры
    if (this.shake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake * 0.25;
      this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.25;
      this.shake = Math.max(0, this.shake - dt * 1.8);
    }
    this.fadeLevel = Math.max(0, this.fadeLevel - dt * 1.4);
    this.render(dt);
    this.input.flush();
  }

  render(dt) {
    const u = this.postfx.material.uniforms;
    u.hurt.value = this.player.hurtFlash || 0;
    u.fade.value = this.elevator ? Math.min(1, this.fadeLevel) : this.fadeLevel;
    let pulse = this.ui.chaseIntensity;
    if (this.stalker.state === 'hunt' && this.stalker.mode && this.stalker.mesh.visible) {
      const d = Math.hypot(this.stalker.pos.x - this.player.pos.x, this.stalker.pos.z - this.player.pos.z);
      pulse = Math.max(pulse, Math.max(0, 1 - d / 12) * 0.8);
    }
    u.pulse.value = pulse;
    this.postfx.render(this.scene, this.camera, dt);
  }
}
