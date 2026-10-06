import { CFG } from '../config.js';
import { rnd } from '../rng.js';
import { makeCrowd } from './actor.js';

// Классы: 1 — безобидные, 2 — непредсказуемые, 3 — агрессивные (в домах), 'arena' — бойцы арены, 'minion' — волны Deathmatch
export class Population {
  constructor(scene, kits = null, chars = null) {
    this.scene = scene;
    this.renderer = makeCrowd(scene, chars, CFG.arenaMaxAlive);
    this.entities = [];
    this.spawnedTotal = 0;
    this.class1Total = 0;
    this.killed = 0;
  }

  setChars(chars) {
    this.renderer.dispose?.(this.scene);
    this.renderer = makeCrowd(this.scene, chars, CFG.arenaMaxAlive);
  }

  clear(filter = () => true) { this.entities = this.entities.filter(e => !filter(e)); }
  alive() { return this.entities.filter(e => !e.dead); }
  count(cls) { let n = 0; for (const e of this.entities) if (!e.dead && e.cls === cls) n++; return n; }

  spawn(cls, x, y, z, extra = {}) {
    const e = {
      cls, variant: rnd.int(0, 4), pos: { x, y, z }, yaw: rnd.range(0, Math.PI * 2),
      hp: cls === 3 ? CFG.class3Hp : cls === 'arena' ? CFG.arenaEntityHp : cls === 'minion' ? 55 : 40,
      state: 'idle', timer: rnd.range(0.5, 3), anim: Math.random(), moving: false, dead: false,
      speed: 0, home: { x, z }, target: null, cooldown: 0, scale: rnd.range(0.92, 1.08), trailIdx: 0, lostTimer: 0,
      lungeCooldown: rnd.range(2, 10), twitch: rnd.range(0, 10),
      ...extra,
    };
    this.entities.push(e);
    this.spawnedTotal++;
    if (cls === 1) this.class1Total++;
    return e;
  }

  // Можно ли спавнить безобидного (не более 3% от всех когда-либо появившихся сущностей)
  canSpawnClass1() { return (this.class1Total + 1) / (this.spawnedTotal + 1) <= CFG.class1MaxShare; }

  // ---------- Улица ----------
  maintainOutside(world, player, dt) {
    const near = this.entities.filter(e => (e.cls === 1 || e.cls === 2) && !e.dead);
    for (const e of near) if (Math.hypot(e.pos.x - player.x, e.pos.z - player.z) > 95) e.dead = true;
    const want = 16;
    if (near.length < want && rnd.chance(dt * 1.5)) {
      const cls = this.canSpawnClass1() && rnd.chance(0.5) ? 1 : 2;
      let p = null, loiter = false;
      if (cls === 2 && rnd.chance(0.5) && world.entrances.length) {
        const ents = world.entrances.filter(e => { const d = Math.hypot(e.x - player.x, e.z - player.z); return d > 18 && d < 70; });
        if (ents.length) { const en = rnd.pick(ents); p = { x: en.x + en.nx * 2.6 + rnd.range(-1.5, 1.5), z: en.z + en.nz * 2.6 + rnd.range(-0.5, 1) }; loiter = true; }
      }
      if (!p) p = world.randomSpawnPoint(player.x, player.z, 24, 60);
      if (p) this.spawn(cls, p.x, 0, p.z, { loiter, loiterYaw: Math.atan2(player.x - p.x, player.z - p.z) });
    }
    this.pruneDead();
  }

  pruneDead() { this.entities = this.entities.filter(e => !e.dead); }

  // ---------- Общий апдейт ----------
  // ctx: { player, statics, audio, trail, inside, onPlayerHit(dmg), onMinionDeath(e), arena }
  update(dt, ctx) {
    const P = ctx.player.pos;
    for (const e of this.entities) {
      if (e.dead) continue;
      e.cooldown -= dt; e.timer -= dt; e.twitch += dt;
      const dx = P.x - e.pos.x, dz = P.z - e.pos.z, dist = Math.hypot(dx, dz), dy = P.y - e.pos.y;
      switch (e.cls) {
        case 1: this.updateHarmless(e, dt, ctx, dist, dx, dz); break;
        case 2: this.updateUnpredictable(e, dt, ctx, dist, dx, dz, dy); break;
        case 3: this.updateAggressive(e, dt, ctx, dist, dx, dz, dy); break;
        case 'arena': case 'minion': this.updateGrunt(e, dt, ctx, dist, dx, dz, dy); break;
      }
      if (e.moving) e.anim = (e.anim + dt * e.speed * 0.55) % 1;
    }
    this.renderer.update(this.entities, dt);
  }

  // Шаг к точке с коллизией и полом
  stepTo(e, tx, tz, speed, dt, statics, radius = 0.33) {
    const dx = tx - e.pos.x, dz = tz - e.pos.z, d = Math.hypot(dx, dz);
    if (d < 0.05) { e.moving = false; return 0; }
    const nx = dx / d, nz = dz / d, step = Math.min(d, speed * dt);
    const bx = e.pos.x, bz = e.pos.z;
    statics.move(e.pos, nx * step, nz * step, radius, e.pos.y, 1.7);
    const g = statics.groundAt(e.pos.x, e.pos.z, e.pos.y, radius * 0.8);
    e.pos.y += (g - e.pos.y) * Math.min(1, dt * 12);
    const moved = Math.hypot(e.pos.x - bx, e.pos.z - bz);
    e.moving = moved > 0.001;
    e.speed = speed;
    const want = Math.atan2(nx, nz);
    let dd = want - e.yaw; while (dd > Math.PI) dd -= Math.PI * 2; while (dd < -Math.PI) dd += Math.PI * 2;
    e.yaw += dd * Math.min(1, dt * 8);
    return moved;
  }

  faceTo(e, x, z, dt) {
    const want = Math.atan2(x - e.pos.x, z - e.pos.z);
    let dd = want - e.yaw; while (dd > Math.PI) dd -= Math.PI * 2; while (dd < -Math.PI) dd += Math.PI * 2;
    e.yaw += dd * Math.min(1, dt * 5);
  }

  wander(e, dt, ctx, dist) {
    const P = ctx.player.pos;
    if (dist < 4) { e.moving = false; this.faceTo(e, P.x, P.z, dt); e.timer = Math.min(e.timer, 1); return; }
    if (e.loiter) { e.moving = false; e.yaw += (e.loiterYaw - e.yaw) * dt; return; }
    if (e.timer <= 0) {
      e.timer = rnd.range(2, 6);
      e.target = rnd.chance(0.3) ? null : { x: e.home.x + rnd.range(-10, 10), z: e.home.z + rnd.range(-10, 10) };
    }
    if (e.target) {
      const m = this.stepTo(e, e.target.x, e.target.z, 1.1, dt, ctx.statics);
      if (m < 0.002 || Math.hypot(e.target.x - e.pos.x, e.target.z - e.pos.z) < 0.4) e.target = null;
    } else e.moving = false;
    // подёргивание головы
    if (Math.sin(e.twitch * 7) > 0.98) e.yaw += rnd.range(-0.6, 0.6);
  }

  updateHarmless(e, dt, ctx, dist, dx, dz) { this.wander(e, dt, ctx, dist); }

  updateUnpredictable(e, dt, ctx, dist, dx, dz, dy) {
    const P = ctx.player.pos;
    e.lungeCooldown -= dt;
    if (e.state === 'idle') {
      this.wander(e, dt, ctx, dist);
      if (e.lungeCooldown <= 0 && dist < 10 && Math.abs(dy) < 2.5) {
        // Внезапный выпад: вероятность растёт вблизи, также провоцируется, если игрок повернулся спиной
        const facingAway = (ctx.player.forward.x * -dx + ctx.player.forward.z * -dz) > 0;
        const p = (dist < 4 ? 0.6 : 0.18) * (facingAway ? 1.6 : 1) * dt;
        if (rnd.chance(p) && ctx.statics.lineOfSight(e.pos.x, e.pos.y + 1.2, e.pos.z, P.x, P.y + 1.2, P.z)) {
          e.state = 'lunge'; e.timer = 2.2; ctx.audio?.lunge(); ctx.onLunge?.();
        }
      }
    } else if (e.state === 'lunge') {
      this.stepTo(e, P.x, P.z, 10.5, dt, ctx.statics);
      if (dist < 1.2) {
        ctx.onPlayerHit(CFG.class2Damage, e);
        e.state = 'retreat'; e.timer = 2.5; e.target = { x: e.pos.x - dx * 3, z: e.pos.z - dz * 3 };
      } else if (e.timer <= 0) { e.state = 'retreat'; e.timer = 2; e.target = { x: e.pos.x - dx, z: e.pos.z - dz }; }
    } else if (e.state === 'retreat') {
      if (e.target) this.stepTo(e, e.target.x, e.target.z, 3.5, dt, ctx.statics);
      if (e.timer <= 0) { e.state = 'idle'; e.lungeCooldown = rnd.range(8, 22); e.target = null; e.loiter = false; }
    }
  }

  updateAggressive(e, dt, ctx, dist, dx, dz, dy) {
    const P = ctx.player.pos, S = ctx.statics;
    const sees = dist < CFG.class3Sight && Math.abs(dy) < 4 && S.lineOfSight(e.pos.x, e.pos.y + 1.3, e.pos.z, P.x, P.y + 1.2, P.z);
    if (e.state === 'idle') {
      // Шаркает на месте
      if (e.timer <= 0) { e.timer = rnd.range(1, 4); e.target = rnd.chance(0.5) ? { x: e.home.x + rnd.range(-3, 3), z: e.home.z + rnd.range(-1, 1) } : null; }
      if (e.target) { if (this.stepTo(e, e.target.x, e.target.z, 0.7, dt, S) < 0.001) e.target = null; } else e.moving = false;
      if (sees || (dist < 3.5 && Math.abs(dy) < 2)) { e.state = 'chase'; e.lostTimer = 0; e.trailIdx = -1; ctx.audio?.ghostAppear(); }
    } else if (e.state === 'chase') {
      // Следование по хлебным крошкам игрока, чтобы огибать углы и подниматься по лестнице
      const trail = ctx.trail;
      if (sees) { e.lostTimer = 0; e.trailIdx = trail.length - 1; }
      else e.lostTimer += dt;
      let tx = P.x, tz = P.z;
      if (!sees && trail.length) {
        // ищем ближайшую видимую точку следа, двигаясь к более свежим
        let idx = Math.max(0, e.trailIdx);
        for (let i = trail.length - 1; i >= Math.max(0, trail.length - 60); i--) {
          const t = trail[i];
          if (Math.abs(t.y - e.pos.y) < 2.2 && S.lineOfSight(e.pos.x, e.pos.y + 1.2, e.pos.z, t.x, t.y + 1.2, t.z)) { idx = Math.max(idx, i); break; }
        }
        e.trailIdx = idx;
        const t = trail[Math.min(idx, trail.length - 1)];
        tx = t.x; tz = t.z;
        if (Math.hypot(tx - e.pos.x, tz - e.pos.z) < 0.5 && idx < trail.length - 1) e.trailIdx++;
      }
      if (dist > 1.0 || Math.abs(dy) > 1.5) this.stepTo(e, tx, tz, CFG.class3Speed, dt, S);
      else { e.moving = false; this.faceTo(e, P.x, P.z, dt); }
      if (dist < 1.25 && Math.abs(dy) < 1.6 && e.cooldown <= 0) {
        e.cooldown = 1.1;
        ctx.onPlayerHit(rnd.range(CFG.class3Damage[0], CFG.class3Damage[1]), e);
      }
      if (e.lostTimer > 12 || dist > 40) { e.state = 'idle'; e.home = { x: e.pos.x, z: e.pos.z }; }
    }
  }

  updateGrunt(e, dt, ctx, dist, dx, dz, dy) {
    const P = ctx.player.pos;
    if (dist > 1.15) this.stepTo(e, P.x, P.z, e.gruntSpeed || 2.0, dt, ctx.statics, 0.3);
    else { e.moving = false; this.faceTo(e, P.x, P.z, dt); }
    if (dist < 1.25 && Math.abs(dy) < 1.8 && e.cooldown <= 0) {
      const arena = e.cls === 'arena';
      e.cooldown = arena ? CFG.arenaHitCooldown : 1.45;
      ctx.onPlayerHit(arena ? rnd.range(CFG.arenaDamage[0], CFG.arenaDamage[1]) : rnd.range(CFG.minionDamage[0], CFG.minionDamage[1]), e);
    }
  }

  // ---------- Стрельба ----------
  // Луч: origin, dir (нормализован). Возвращает ближайшую сущность и расстояние.
  raycast(o, d, maxDist = 200) {
    let best = null, bt = maxDist;
    for (const e of this.entities) {
      if (e.dead) continue;
      const r = 0.5 * (e.scale || 1), h = 1.9 * (e.scale || 1);
      // пересечение луча с вертикальным цилиндром
      const ox = o.x - e.pos.x, oz = o.z - e.pos.z;
      const a = d.x * d.x + d.z * d.z;
      if (a < 1e-6) continue;
      const b = 2 * (ox * d.x + oz * d.z), c = ox * ox + oz * oz - r * r;
      const disc = b * b - 4 * a * c;
      if (disc < 0) continue;
      const t = (-b - Math.sqrt(disc)) / (2 * a);
      if (t < 0 || t > bt) continue;
      const y = o.y + d.y * t;
      if (y < e.pos.y || y > e.pos.y + h) continue;
      bt = t; best = e;
    }
    return best ? { entity: best, dist: bt } : null;
  }

  hurt(e, dmg, ctx) {
    e.hp -= dmg;
    ctx.audio?.hitFlesh();
    // Выстрел будит агрессивных и провоцирует непредсказуемых
    if (e.cls === 3 && e.state === 'idle') { e.state = 'chase'; e.trailIdx = -1; }
    if (e.cls === 2 && e.state === 'idle') { e.state = 'lunge'; e.timer = 2.2; ctx.audio?.lunge(); }
    if (e.hp <= 0) {
      e.dead = true; this.killed++;
      ctx.audio?.entityDie();
      if (e.cls === 'minion' && ctx.onMinionDeath) ctx.onMinionDeath(e);
      if (e.cls === 'arena' && ctx.onArenaDeath) ctx.onArenaDeath(e);
    }
  }
}
