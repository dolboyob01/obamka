import * as THREE from 'three';
import { CFG } from './config.js';
import { buildPlayer } from './entities/models.js';
import { Weapon } from './weapons.js';

export class Player {
  constructor(scene, camera) {
    this.scene = scene; this.camera = camera;
    this.pos = new THREE.Vector3(0, 0, 0); // ноги
    this.vy = 0;
    this.yaw = Math.PI; this.pitch = -0.15;    // камера
    this.modelYaw = Math.PI;
    this.hp = CFG.maxHp;
    this.crouch = false; this.sprint = false; this.moving = false; this.grounded = true;
    this.speed = 0; this.velocity = new THREE.Vector3();
    this.vx = 0; this.vz = 0;
    this.coyote = 0; this.jumpBuf = 0;
    this.lastDamage = 0; this.animPhase = 0; this.aimTimer = 0;
    this.camDist = CFG.camDist; this.camDistCur = CFG.camDist;
    this.iframes = 0;
    this.model = buildPlayer(); scene.add(this.model);
    this.pistol = new Weapon('pistol'); this.minigun = new Weapon('minigun');
    this.weapon = this.pistol;
    this.frozen = false;     // отключить управление (лифт, катсцены)
    this.stepAcc = 0;
    this.dead = false;
    this.forward = new THREE.Vector3(0, 0, 1);
    this.fallStart = null;
  }

  setWeapon(kind) {
    this.weapon = kind === 'minigun' ? this.minigun : this.pistol;
    this.model.userData.pistol.visible = kind !== 'minigun';
    this.model.userData.minigun.visible = kind === 'minigun';
  }

  teleport(x, y, z, yaw) {
    this.pos.set(x, y, z); this.vy = 0; this.vx = 0; this.vz = 0;
    if (yaw !== undefined) { this.yaw = yaw; this.modelYaw = yaw; }
    this.camDistCur = 0.5;
    this.fallStart = null;
    this.coyote = 0; this.jumpBuf = 0;
  }

  get height() { return this.crouch ? CFG.crouchHeight : CFG.playerHeight; }
  get eyeY() { return this.pos.y + this.height - 0.15; }

  damage(amount, audio) {
    if (this.dead || this.iframes > 0) return;
    this.hp = Math.max(0, this.hp - amount);
    this.lastDamage = 0;
    this.iframes = CFG.playerIframes;
    audio?.playerHurt();
    this.hurtFlash = 1;
    if (this.hp <= 0) this.dead = true;
  }

  update(dt, input, statics, audio, opts = {}) {
    this.lastDamage += dt;
    this.iframes = Math.max(0, this.iframes - dt);
    this.hurtFlash = Math.max(0, (this.hurtFlash || 0) - dt * 2);
    this.camDist = opts.camDist || CFG.camDist;
    if (this.lastDamage > CFG.hpRegenDelay && this.hp < CFG.maxHp && !this.dead) this.hp = Math.min(CFG.maxHp, this.hp + CFG.hpRegenRate * dt);

    // Камера
    if (!this.frozen && !opts.noLook) {
      this.yaw -= input.dx * input.sensitivity;
      const ySign = input.invertY ? -1 : 1;
      this.pitch = Math.max(-1.25, Math.min(0.9, this.pitch - input.dy * input.sensitivity * ySign));
    }
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    this.forward.set(fx, 0, fz);

    // Приседание — переключатель
    if (!this.frozen && (input.hit('ControlLeft') || input.hit('KeyC'))) {
      if (this.crouch) { // встать можно, если нет потолка
        const c = statics.ceilingAt(this.pos.x, this.pos.z, this.pos.y + CFG.crouchHeight, CFG.playerRadius);
        if (c - this.pos.y > CFG.playerHeight + 0.05) this.crouch = false;
      } else this.crouch = true;
    }
    this.sprint = !this.frozen && input.down('ShiftLeft') && !this.crouch;

    let wx = 0, wz = 0;
    if (!this.frozen) {
      if (input.down('KeyW')) { wx += fx; wz += fz; }
      if (input.down('KeyS')) { wx -= fx; wz -= fz; }
      if (input.down('KeyD')) { wx += -fz; wz += fx; }
      if (input.down('KeyA')) { wx -= -fz; wz -= fx; }
    }
    const wlen = Math.hypot(wx, wz);
    this.moving = wlen > 0.01;
    if (this.moving) { wx /= wlen; wz /= wlen; this.lastMove = { x: wx, z: wz }; }
    const wish = this.crouch ? CFG.crouchSpeed : this.sprint ? CFG.sprintSpeed : CFG.walkSpeed;
    const mv = this.lastMove || { x: fx, z: fz };

    if (!this.frozen && input.hit('Space')) this.jumpBuf = CFG.jumpBuffer;
    else this.jumpBuf = Math.max(0, this.jumpBuf - dt);
    if (this.grounded) this.coyote = CFG.coyoteTime;
    else this.coyote = Math.max(0, this.coyote - dt);

    let justJumped = false;
    if (!this.frozen && !this.crouch && this.jumpBuf > 0 && this.coyote > 0) {
      this.vy = CFG.jumpVel;
      this.grounded = false;
      this.coyote = 0;
      this.jumpBuf = 0;
      justJumped = true;
    } else if (!this.frozen && !this.crouch && this.grounded && input.down('Space')) {
      this.vy = CFG.jumpVel;
      this.grounded = false;
      justJumped = true;
    }

    if (this.grounded && !justJumped) {
      const sp = Math.hypot(this.vx, this.vz);
      if (sp > 0.05) {
        const drop = Math.max(sp, CFG.stopSpeed) * CFG.friction * dt;
        const nt = Math.max(0, sp - drop) / sp;
        this.vx *= nt; this.vz *= nt;
      } else { this.vx = 0; this.vz = 0; }
      this.accelerate(wx, wz, wish, CFG.groundAccel, dt);
    } else {
      this.accelerate(wx, wz, Math.min(wish, CFG.airWishCap), CFG.airAccel, dt);
    }

    const before = this.pos.clone();
    const ox = this.pos.x, oz = this.pos.z;
    statics.move(this.pos, this.vx * dt, this.vz * dt, CFG.playerRadius, this.pos.y, this.height);
    if (Math.abs(this.pos.x - (ox + this.vx * dt)) > 0.002) this.vx = 0;
    if (Math.abs(this.pos.z - (oz + this.vz * dt)) > 0.002) this.vz = 0;

    this.vy -= CFG.gravity * dt;
    let ny = this.pos.y + this.vy * dt;
    const ground = statics.groundAt(this.pos.x, this.pos.z, this.pos.y, CFG.playerRadius * 0.8);
    const ceil = statics.ceilingAt(this.pos.x, this.pos.z, this.pos.y + this.height * 0.5, CFG.playerRadius);
    if (ny + this.height >= ceil) { ny = ceil - this.height - 0.01; this.vy = Math.min(0, this.vy); }
    if (ny <= ground && !justJumped) {
      if (!this.grounded && this.fallStart !== null && this.fallStart - ground > 1.5) { audio?.fall(); this.landed = this.fallStart - ground; }
      ny = ground; this.vy = 0; this.grounded = true; this.fallStart = null;
    } else {
      if (this.grounded) this.fallStart = this.pos.y;
      this.grounded = false;
    }
    this.pos.y = ny;
    this.velocity.subVectors(this.pos, before).divideScalar(Math.max(dt, 1e-4));
    this.speed = Math.hypot(this.vx, this.vz);

    // Шаги
    if (this.moving && this.grounded) {
      this.stepAcc += this.speed * dt;
      const stride = this.crouch ? 1.0 : this.sprint ? 2.2 : 1.6;
      if (this.stepAcc > stride) { this.stepAcc = 0; audio?.footstep(opts.inside, this.crouch); }
      this.animPhase += dt * this.speed * 1.4;
    } else this.animPhase += 0;

    // Оружие
    const firing = !this.frozen && input.mouseDown && !opts.noFire;
    this.weapon.update(dt, firing);
    if (firing) this.aimTimer = 0.6;
    this.aimTimer -= dt;
    if (!this.frozen && input.hit('KeyR') && this.weapon.reload()) audio?.reload();

    // Поворот модели
    const wantYaw = this.aimTimer > 0 || opts.faceCamera ? this.yaw : (this.moving ? Math.atan2(mv.x, mv.z) : this.modelYaw);
    let d = wantYaw - this.modelYaw; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2;
    this.modelYaw += d * Math.min(1, dt * 12);

    this.updateModel(dt);
    this.updateCamera(statics, dt);
    return firing;
  }

  updateModel(dt) {
    const m = this.model, u = m.userData;
    m.position.copy(this.pos);
    m.rotation.y = this.modelYaw;
    const sw = this.moving ? Math.sin(this.animPhase * 2.2) * (this.sprint ? 0.9 : 0.6) : 0;
    u.legL.rotation.x = sw; u.legR.rotation.x = -sw;
    const aiming = this.aimTimer > 0;
    u.armL.rotation.x = aiming ? -1.3 : -sw * 0.8;
    u.armR.rotation.x = aiming ? -1.45 : sw * 0.8;
    u.armR.rotation.z = aiming ? 0 : -0.05;
    u.gun.rotation.x = aiming ? 0 : 0.6;
    // присед: опускаем корпус и сгибаем ноги
    const cr = this.crouch ? 1 : 0;
    this._cr = (this._cr ?? 0) + (cr - (this._cr ?? 0)) * Math.min(1, dt * 10);
    const drop = -0.55 * this._cr;
    u.torso.position.y = 1.22 + drop; u.head.position.y = 1.74 + drop; u.cap.position.y = 1.8 + drop;
    if (u.visor) u.visor.position.y = 1.88 + drop;
    if (u.chain) u.chain.position.y = 1.42 + drop;
    u.armL.position.y = 1.5 + drop; u.armR.position.y = 1.5 + drop;
    u.legL.position.y = 0.9 + drop * 0.5; u.legR.position.y = 0.9 + drop * 0.5;
    u.legL.scale.y = u.legR.scale.y = 1 - 0.45 * this._cr;
    u.torso.rotation.x = 0.35 * this._cr;
    m.visible = !this.hideModel;
  }

  accelerate(wx, wz, wishSpeed, accel, dt) {
    if (wishSpeed <= 0 || (wx === 0 && wz === 0)) return;
    const current = this.vx * wx + this.vz * wz;
    const add = wishSpeed - current;
    if (add <= 0) return;
    let acc = accel * wishSpeed * dt;
    if (acc > add) acc = add;
    this.vx += acc * wx;
    this.vz += acc * wz;
  }

  updateCamera(statics, dt) {
    const pitch = this.pitch, yaw = this.yaw;
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(-Math.cos(yaw), 0, Math.sin(yaw));
    const pivot = new THREE.Vector3(this.pos.x, this.eyeY, this.pos.z).addScaledVector(right, -0.5);
    // расстояние камеры с учётом стен
    let dist = this.camDist;
    const end = pivot.clone().addScaledVector(dir, -this.camDist);
    const t = statics.segmentHit(pivot.x, pivot.y, pivot.z, end.x, end.y, end.z);
    if (t < 1) dist = Math.max(0.35, t * this.camDist - 0.3);
    this.camDistCur += (dist - this.camDistCur) * Math.min(1, dt * (dist < this.camDistCur ? 25 : 5));
    const camPos = pivot.clone().addScaledVector(dir, -this.camDistCur);
    this.camera.position.copy(camPos);
    this.camera.lookAt(pivot.clone().addScaledVector(dir, 12));
    // лёгкое покачивание при беге
    if (this.moving && this.grounded) this.camera.position.y += Math.sin(this.animPhase * 2.2) * 0.03 * (this.sprint ? 1.5 : 1);
    this.hideModel = this.camDistCur < 0.7;
  }
}
