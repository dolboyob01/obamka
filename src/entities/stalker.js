import { CFG } from '../config.js';
import { buildStalker } from './models.js';
import { rnd } from '../rng.js';

// Класс 5: Преследователь. Статусы: спит / ищет еду / ищет игрока. Во время охоты идёт по следу игрока с лагом.
export const STALKER_STATUS = { sleep: 'СПИТ', food: 'ИЩЕТ ЕДУ', hunt: 'ИЩЕТ ТЕБЯ' };

export class Stalker {
  constructor(scene) {
    this.scene = scene;
    this.mesh = buildStalker(); this.mesh.visible = false; scene.add(this.mesh);
    this.enabled = true;
    this.state = 'sleep';
    this.timer = rnd.range(CFG.stalkerSleep[0] * 0.5, CFG.stalkerSleep[1] * 0.6); // первый сон покороче
    this.mode = null;             // 'stealth' | 'deathmatch'
    this.lag = 6;
    this.cooldown = 0;
    this.pos = { x: 0, y: 0, z: 0 };
    this.foodWander = { x: 0, z: 0 };
    this.worldSince = 0;
    this.visibleTimer = 0;
  }

  setEnabled(v) {
    this.enabled = v;
    if (!v) { this.mesh.visible = false; if (this.state === 'hunt') this.reset(); }
  }

  reset() {
    this.state = 'sleep'; this.mode = null;
    this.timer = rnd.range(CFG.stalkerSleep[0], CFG.stalkerSleep[1]);
    this.mesh.visible = false;
  }

  startHunt(game) {
    this.state = 'hunt'; this.mode = null;
    game.audio.stalkerAlert();
    game.openHuntChoice();
  }

  chooseMode(mode, game) {
    this.mode = mode;
    this.lag = mode === 'stealth' ? rnd.range(CFG.stalkerStealthLag[0], CFG.stalkerStealthLag[1]) : CFG.stalkerDeathmatchLag;
    this.worldSince = game.time;
  }

  // Вызывать при смене мира игроком: сущность появится у входа с задержкой
  onWorldChange(game) { this.worldSince = game.time; this.mesh.visible = false; }

  update(dt, game) {
    if (!this.enabled) return;
    const p = game.player;
    if (this.state !== 'hunt') {
      this.timer -= dt;
      if (this.timer <= 0) {
        if (this.state === 'sleep') { this.state = 'food'; this.timer = rnd.range(CFG.stalkerFood[0], CFG.stalkerFood[1]); this.foodWander = { x: p.pos.x + rnd.range(-50, 50), z: p.pos.z + rnd.range(-50, 50) }; }
        else { this.startHunt(game); return; }
      }
      // Во время поиска еды — далёкий силуэт на улице
      if (this.state === 'food' && game.state === 'outside') {
        const d = Math.hypot(this.foodWander.x - p.pos.x, this.foodWander.z - p.pos.z);
        if (d < 30 || d > 70) { const a = rnd.range(0, Math.PI * 2); this.foodWander = { x: p.pos.x + Math.cos(a) * 48, z: p.pos.z + Math.sin(a) * 48 }; }
        const dx = this.foodWander.x - this.pos.x, dz = this.foodWander.z - this.pos.z, dd = Math.hypot(dx, dz);
        if (dd > 60) { this.pos.x = this.foodWander.x; this.pos.z = this.foodWander.z; }
        else if (dd > 0.5) { this.pos.x += dx / dd * 1.2 * dt; this.pos.z += dz / dd * 1.2 * dt; }
        this.pos.y = game.statics.groundAt(this.pos.x, this.pos.z, 0, 0.3);
        this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
        this.mesh.rotation.y = Math.atan2(dx, dz);
        this.mesh.visible = !game.statics.pointInside(this.pos.x, 1, this.pos.z);
      } else this.mesh.visible = false;
      return;
    }

    // ---- Охота ----
    if (!this.mode) return; // игрок ещё выбирает
    const trail = game.trail;
    const targetT = game.time - this.lag;
    if (game.time - this.worldSince < this.lag) {
      // ещё не вошла в этот мир: стоит у точки входа (первая точка следа)
      if (trail.length) { const t0 = trail[0]; this.pos.x = t0.x; this.pos.y = t0.y; this.pos.z = t0.z; }
      this.mesh.visible = game.time - this.worldSince > this.lag * 0.5 && trail.length > 0;
    } else {
      // точка следа, соответствующая моменту time - lag
      let pt = trail[0];
      for (let i = trail.length - 1; i >= 0; i--) if (trail[i].t <= targetT) { pt = trail[i]; break; }
      if (pt) {
        const k = Math.min(1, dt * 6);
        this.pos.x += (pt.x - this.pos.x) * k; this.pos.y += (pt.y - this.pos.y) * k; this.pos.z += (pt.z - this.pos.z) * k;
      }
      this.mesh.visible = true;
    }
    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z, dist = Math.hypot(dx, dz);
    this.mesh.position.set(this.pos.x, this.pos.y, this.pos.z);
    this.mesh.rotation.y = Math.atan2(dx, dz);
    this.cooldown -= dt;
    if (dist < 1.7 && Math.abs(p.pos.y - this.pos.y) < 2.2 && this.cooldown <= 0) {
      this.cooldown = 1.5;
      game.hurtPlayer(CFG.stalkerDamage, 'stalker');
      game.shake = 0.8;
    }
    // Deathmatch: "за каждым углом" — иногда возникает прямо впереди игрока
    if (this.mode === 'deathmatch') {
      this.ambush = (this.ambush || rnd.range(6, 11)) - dt;
      if (this.ambush <= 0) {
        this.ambush = rnd.range(6, 11);
        const f = p.forward, ax = p.pos.x + f.x * 7, az = p.pos.z + f.z * 7;
        if (!game.statics.pointInside(ax, p.pos.y + 1, az)) { this.pos.x = ax; this.pos.z = az; this.pos.y = p.pos.y; game.audio.whoosh(); }
      }
    }
  }
}
