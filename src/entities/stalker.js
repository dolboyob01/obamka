import { CFG } from '../config.js';
import { buildStalker } from './models.js';
import { makeStalkerActor } from './actor.js';
import { rnd } from '../rng.js';

// Класс 5: Преследователь. Статусы: спит / бродит / ищет игрока.
export const STALKER_STATUS = {
  sleep: 'СПИТ',
  food: 'ИЩЕТ ЕДУ',
  belenka: 'Идёт за Беленькой',
  dodep: 'Ищет на додеп',
  hunt: 'ИЩЕТ ТЕБЯ',
};
const WANDER = ['food', 'belenka', 'dodep'];

export class Stalker {
  constructor(scene, kits = null, chars = null) {
    this.scene = scene;
    this.actor = makeStalkerActor(chars);
    this.mesh = this.actor ? this.actor.root : buildStalker(kits);
    this.mesh.visible = false; scene.add(this.mesh);
    this.enabled = true;
    this.state = 'sleep';
    this.timer = rnd.range(CFG.stalkerSleep[0] * 0.7, CFG.stalkerSleep[1] * 0.9);
    this.mode = null;
    this.lag = 6;
    this.cooldown = 0;
    this.pos = { x: 0, y: 0, z: 0 };
    this.foodWander = { x: 0, z: 0 };
    this.worldSince = 0;
    this.visibleTimer = 0;
    this.aerial = false;
    this.haloT = 0;
  }

  setChars(chars) {
    if (this.actor) return;
    const a = makeStalkerActor(chars);
    if (!a) return;
    this.scene.remove(this.mesh);
    this.actor = a;
    this.mesh = a.root;
    this.mesh.visible = false;
    this.scene.add(this.mesh);
  }

  setEnabled(v) {
    this.enabled = v;
    if (!v) { this.mesh.visible = false; if (this.state === 'hunt') this.reset(); }
  }

  reset() {
    this.state = 'sleep'; this.mode = null; this.aerial = false;
    this.timer = rnd.range(CFG.stalkerSleep[0], CFG.stalkerSleep[1]);
    this.mesh.visible = false;
  }

  startHunt(game, { aerial = false, silent = false } = {}) {
    this.state = 'hunt';
    this.aerial = aerial;
    this.chooseMode('stealth', game);
    game.audio.playHunt();
    if (!silent) game.ui.notify('ТЕБЯ ПРЕСЛЕДУЮТ', 5.5, 'danger');
  }

  chooseMode(mode, game) {
    this.mode = mode;
    this.lag = mode === 'stealth' ? rnd.range(CFG.stalkerStealthLag[0], CFG.stalkerStealthLag[1]) : CFG.stalkerDeathmatchLag;
    this.worldSince = game.time;
  }

  onWorldChange(game) { this.worldSince = game.time; if (!this.aerial) this.mesh.visible = false; }

  pulseEyes(dt) {
    this.haloT += dt;
    const u = this.mesh.userData;
    if (!u?.eyes) return;
    const glow = 0.42 + Math.sin(this.haloT * 3.4) * 0.22;
    for (const e of u.eyes) e.material.color.setRGB(0.55 + glow, 0.0, 0.0);
  }

  update(dt, game) {
    if (!this.enabled) return;
    const p = game.player;
    this.pulseEyes(dt);
    const indoor = game.state === 'apartment';
    if (this.actor) {
      if (indoor) this.actor.setScale(1);
      else this.actor.setScale(4.2, 6.4, 4.2);
      const moving = this.state === 'hunt' || WANDER.includes(this.state);
      this.actor.setMove(moving && this.mesh.visible ? (this.state === 'hunt' ? 3.2 : 1.4) : 0, this.state === 'hunt', true);
      this.actor.update(dt);
    } else {
      const body = this.mesh.userData.body || this.mesh.children[0];
      if (body) body.scale.setScalar(indoor ? 1 : 5);
    }

    if (this.state !== 'hunt') {
      this.timer -= dt;
      const randomNow = game.worldTime > CFG.stalkerRandomAfter && rnd.chance(CFG.stalkerRandomChance * dt);
      if (this.timer <= 0 || randomNow) {
        if (!randomNow && (this.state === 'sleep' || WANDER.includes(this.state))) {
          if (this.state === 'sleep' || rnd.chance(0.72)) {
            this.state = rnd.pick(WANDER);
            this.timer = rnd.range(CFG.stalkerFood[0], CFG.stalkerFood[1]);
            this.foodWander = { x: p.pos.x + rnd.range(-50, 50), z: p.pos.z + rnd.range(-50, 50) };
          } else { this.startHunt(game); return; }
        } else { this.startHunt(game); return; }
      }
      if (WANDER.includes(this.state) && game.state === 'outside') {
        const d = Math.hypot(this.foodWander.x - p.pos.x, this.foodWander.z - p.pos.z);
        if (d < 30 || d > 70) { const a = rnd.range(0, Math.PI * 2); this.foodWander = { x: p.pos.x + Math.cos(a) * 48, z: p.pos.z + Math.sin(a) * 48 }; }
        const dx = this.foodWander.x - this.pos.x, dz = this.foodWander.z - this.pos.z, dd = Math.hypot(dx, dz);
        if (dd > 60) { this.pos.x = this.foodWander.x; this.pos.z = this.foodWander.z; }
        else if (dd > 0.5) { this.pos.x += dx / dd * 1.2 * dt; this.pos.z += dz / dd * 1.2 * dt; }
        this.pos.y = game.statics.groundAt(this.pos.x, this.pos.z, 0, 0.3);
        this.mesh.position.set(this.pos.x, this.pos.y + (this.actor?.lift || 0), this.pos.z);
        this.mesh.rotation.y = Math.atan2(dx, dz) + (this.actor?.yawOffset ?? 0);
        this.mesh.visible = !game.statics.pointInside(this.pos.x, 1, this.pos.z);
      } else this.mesh.visible = false;
      return;
    }

    if (!this.mode) return;
    if (this.aerial) {
      const dx = p.pos.x - this.pos.x, dy = p.pos.y - this.pos.y, dz = p.pos.z - this.pos.z;
      const dist = Math.hypot(dx, dy, dz) || 1;
      const spd = 9.2;
      this.pos.x += dx / dist * spd * dt;
      this.pos.y += dy / dist * spd * dt;
      this.pos.z += dz / dist * spd * dt;
      this.mesh.visible = true;
      this.mesh.position.set(this.pos.x, this.pos.y + (this.actor?.lift || 0) * this.mesh.scale.y, this.pos.z);
      this.mesh.rotation.y = Math.atan2(dx, dz) + (this.actor?.yawOffset ?? 0);
      this.cooldown -= dt;
      if (dist < 4.6 && this.cooldown <= 0) {
        this.cooldown = 1.5;
        game.hurtPlayer(CFG.stalkerDamage, 'stalker');
        game.shake = 0.8;
      }
      return;
    }

    const trail = game.trail;
    const targetT = game.time - this.lag;
    if (game.time - this.worldSince < this.lag) {
      if (trail.length) { const t0 = trail[0]; this.pos.x = t0.x; this.pos.y = t0.y; this.pos.z = t0.z; }
      this.mesh.visible = game.time - this.worldSince > this.lag * 0.5 && trail.length > 0;
    } else {
      let pt = trail[0];
      for (let i = trail.length - 1; i >= 0; i--) if (trail[i].t <= targetT) { pt = trail[i]; break; }
      if (pt) {
        const k = Math.min(1, dt * 6);
        this.pos.x += (pt.x - this.pos.x) * k; this.pos.y += (pt.y - this.pos.y) * k; this.pos.z += (pt.z - this.pos.z) * k;
      }
      this.mesh.visible = true;
    }
    const dx = p.pos.x - this.pos.x, dz = p.pos.z - this.pos.z, dist = Math.hypot(dx, dz);
    this.mesh.position.set(this.pos.x, this.pos.y + (this.actor?.lift || 0) * this.mesh.scale.y, this.pos.z);
    this.mesh.rotation.y = Math.atan2(dx, dz) + (this.actor?.yawOffset ?? 0);
    this.cooldown -= dt;
    const hitR = game.state === 'apartment' ? 1.55 : 4.4;
    if (dist < hitR && Math.abs(p.pos.y - this.pos.y) < 9 && this.cooldown <= 0) {
      this.cooldown = 1.5;
      game.hurtPlayer(CFG.stalkerDamage, 'stalker');
      game.shake = 0.8;
    }
  }
}
