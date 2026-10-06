import { CFG } from '../config.js';
import { buildGhost } from './models.js';
import { rnd } from '../rng.js';

// Класс 4: сущность-дух. Сценарий побега по бесконечному коридору.
// Правила: беги вперёд; не оборачивайся. 1 оборот — ближе и громче, 2 — съедена.
export class GhostChase {
  constructor(scene, corridor) {
    this.scene = scene; this.corridor = corridor;
    this.mesh = buildGhost(); this.mesh.visible = false; scene.add(this.mesh);
    this.active = false;
    this.time = 0;
  }

  start(game) {
    this.active = true; this.lookBacks = 0; this.holdBack = 0; this.turnedForward = true;
    this.survived = 0; this.boost = 0; this.ending = 0; this.z = -CFG.ghostStartDistance; this.time = 0;
    this.sway = 0;
    this.mesh.visible = true;
    game.audio.ghostAppear();
    game.audio.playMusic('chase', 0.55, 1.2);
    game.ui.notify('НЕ ОБОРАЧИВАЙСЯ. БЕГИ.', 4, 'danger');
    game.ui.showChaseHint(true);
  }

  // Возвращает 'eaten' | 'escaped' | null
  update(dt, game) {
    if (!this.active) return null;
    const p = game.player;
    this.time += dt; this.survived += dt;
    if (this.ending > 0) {
      this.ending -= dt;
      this.mesh.userData.mat.opacity = Math.max(0, this.ending / 2 * 0.55);
      game.audio.setMusicVolume(Math.max(0, this.ending / 2 * 0.4), 0.2);
      if (this.ending <= 0) { this.finish(game); return 'escaped'; }
      return null;
    }

    // Призрак догоняет; чем быстрее и увереннее бег — тем дальше сущность
    const dist = p.pos.z - this.z;
    const confident = p.moving && p.sprint && p.grounded;
    let speed = confident ? CFG.ghostSprintSpeed : p.moving ? CFG.ghostBaseSpeed : CFG.ghostIdleSpeed;
    if (dist > 28 && !confident) speed += 0.7;
    if (this.boost > 0) speed += 2.4;
    this.z += speed * dt;

    // Оборачивание: камера смотрит против направления бега (+z)
    let yaw = p.yaw % (Math.PI * 2); if (yaw > Math.PI) yaw -= Math.PI * 2; if (yaw < -Math.PI) yaw += Math.PI * 2;
    const lookingBack = Math.abs(yaw) > CFG.ghostLookBackAngle * Math.PI / 180;
    if (lookingBack) {
      this.holdBack += dt;
      if (this.holdBack > CFG.ghostLookBackHold && this.turnedForward) {
        this.turnedForward = false;
        this.lookBacks++;
        if (this.lookBacks >= 2) { this.finish(game); return 'eaten'; }
        // Первый раз: сущность становится ближе, музыка громче
        this.z = p.pos.z - Math.max(2.5, dist * 0.4);
        this.boost = 4;
        game.audio.ghostAppear();
        game.ui.notify('ОНА БЛИЖЕ. ЕЩЁ РАЗ — И ВСЁ.', 3.5, 'danger');
        game.shake = 0.6;
      }
    } else { this.holdBack = 0; if (Math.abs(yaw) < 1.0) this.turnedForward = true; }
    this.boost = Math.max(0, this.boost - dt);

    const d = p.pos.z - this.z;
    if (d < 0.9) { this.finish(game); return 'caught'; }

    // Громкость: ближе — громче; после оборота — ещё громче
    const vol = Math.min(1, Math.max(0.2, 1.05 - d / 32) + (this.boost > 0 ? 0.35 : 0));
    game.audio.setMusicVolume(vol, 0.25);
    game.ui.setChaseIntensity(Math.max(0, 1 - d / 20));

    // Отступление: продержался достаточно и оторвался
    if ((this.survived > CFG.ghostMinSurvive && d > CFG.ghostRetreatDistance * 0.6) || d > CFG.ghostRetreatDistance) {
      this.ending = 2; game.ui.notify('Она отстала…', 3, 'calm');
    }

    // Визуал
    this.sway += dt;
    const lvl = this.corridor.floorLevelAt(this.z);
    this.mesh.position.set(Math.sin(this.sway * 1.7) * 0.4, lvl + 0.1 + Math.sin(this.sway * 3) * 0.12, this.z);
    this.mesh.rotation.y = 0;
    this.mesh.userData.mat.opacity = Math.min(0.85, 0.35 + (1 - Math.min(1, d / 20)) * 0.5);
    for (const c of this.mesh.children) if (c.userData.phase !== undefined) { c.rotation.x = Math.sin(this.sway * 4 + c.userData.phase) * 0.5; c.rotation.z = Math.cos(this.sway * 3 + c.userData.phase) * 0.3; }
    return null;
  }

  finish(game) {
    this.active = false; this.mesh.visible = false;
    game.ui.showChaseHint(false); game.ui.setChaseIntensity(0);
  }
}
