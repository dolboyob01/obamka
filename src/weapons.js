import { CFG } from './config.js';

// Пистолет: магазин + запас. Пулемёт: бесконечные патроны, раскрутка стволов.
export class Weapon {
  constructor(kind) {
    this.kind = kind;
    const c = kind === 'minigun' ? CFG.minigun : CFG.pistol;
    this.cfg = c;
    this.cooldown = 0;
    this.mag = c.mag || Infinity;
    this.reserve = c.reserve ?? Infinity;
    this.reloading = 0;
    this.spin = 0; // для пулемёта
  }

  get infinite() { return this.kind === 'minigun'; }

  update(dt, firing) {
    this.cooldown = Math.max(0, this.cooldown - dt);
    if (this.reloading > 0) {
      this.reloading -= dt;
      if (this.reloading <= 0) {
        const need = this.cfg.mag - this.mag, take = Math.min(need, this.reserve);
        this.mag += take; this.reserve -= take; this.reloading = 0;
      }
    }
    if (this.kind === 'minigun') this.spin = Math.max(0, Math.min(1, this.spin + (firing ? dt * 2.5 : -dt * 1.2)));
  }

  canReload() { return this.kind === 'pistol' && this.reloading <= 0 && this.mag < this.cfg.mag && this.reserve > 0; }
  reload() { if (this.canReload()) { this.reloading = this.cfg.reload; return true; } return false; }

  // Возвращает число выстрелов, которые надо произвести в этом кадре
  tryFire(dt) {
    if (this.reloading > 0) return 0;
    if (this.kind === 'minigun' && this.spin < 0.35) return 0;
    if (this.cooldown > 0) return 0;
    if (this.mag <= 0) return 0;
    const interval = 60 / this.cfg.rpm;
    this.cooldown = interval;
    if (!this.infinite) this.mag--;
    return 1;
  }

  addAmmo(n) { if (!this.infinite) this.reserve += n; }
}
