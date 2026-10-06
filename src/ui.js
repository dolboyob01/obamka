import { STALKER_STATUS } from './entities/stalker.js';

const $ = (id) => document.getElementById(id);

export class UI {
  constructor() {
    this.el = {
      hpFill: document.querySelector('#hp .fill'), ammo: $('ammo'), objective: $('objective'), stalker: $('stalker'),
      prompt: $('prompt'), progress: $('progress'), progressFill: document.querySelector('#progress div'),
      notify: $('notify'), chasehint: $('chasehint'), arena: $('arena'), bomb: $('bomb'), fade: $('fade'),
      start: $('start'), menu: $('menu'), choice: $('choice'), choiceTimer: $('choiceTimer'), gameover: $('gameover'),
      goReason: $('goReason'), goStats: $('goStats'), stalkerBtn: $('stalkerBtn'), crosshair: $('crosshair'),
    };
    this.chaseIntensity = 0;
  }

  setHp(v, max) { this.el.hpFill.style.width = Math.max(0, v / max * 100) + '%'; this.el.hpFill.style.background = v < 30 ? '#c02020' : '#8a1a1a'; }
  setAmmo(w) {
    if (w.kind === 'minigun') this.el.ammo.innerHTML = '∞<small>ПУЛЕМЁТ</small>';
    else this.el.ammo.innerHTML = (w.reloading > 0 ? '…' : w.mag) + ' / ' + w.reserve + '<small>ПМ' + (w.mag === 0 && w.reserve > 0 ? ' — R' : '') + '</small>';
  }
  setObjective(n) { this.el.objective.textContent = 'ЗАМИНИРОВАНО ПОДЪЕЗДОВ: ' + n; }
  setStalker(state, enabled) {
    if (!enabled) { this.el.stalker.className = 'hud sleep'; this.el.stalker.innerHTML = 'ПРЕСЛЕДОВАТЕЛЬ<b>ОТКЛЮЧЁН</b>'; return; }
    this.el.stalker.className = 'hud ' + state;
    this.el.stalker.innerHTML = 'ПРЕСЛЕДОВАТЕЛЬ<b>' + STALKER_STATUS[state] + '</b>';
  }
  prompt(text) { this.el.prompt.style.display = text ? 'block' : 'none'; if (text) this.el.prompt.textContent = text; }
  progress(v) { this.el.progress.style.display = v === null ? 'none' : 'block'; if (v !== null) this.el.progressFill.style.width = (v * 100) + '%'; }
  notify(text, dur = 3, kind = 'info') {
    const d = document.createElement('div'); d.className = 'note ' + kind; d.textContent = text;
    this.el.notify.appendChild(d);
    requestAnimationFrame(() => d.classList.add('show'));
    setTimeout(() => { d.classList.remove('show'); setTimeout(() => d.remove(), 400); }, dur * 1000);
  }
  showChaseHint(v) { this.el.chasehint.style.display = v ? 'block' : 'none'; }
  setChaseIntensity(v) { this.chaseIntensity = v; }
  arena(text) { this.el.arena.style.display = text ? 'block' : 'none'; if (text) this.el.arena.textContent = text; }
  bomb(text) { this.el.bomb.style.display = text ? 'block' : 'none'; if (text) this.el.bomb.textContent = text; }
  fade(v) { this.el.fade.style.opacity = v; }
  show(name, v) { this.el[name].classList.toggle('show', v); }
  setCrosshair(v, combat = false) {
    this.el.crosshair.style.display = v ? 'block' : 'none';
    this.el.crosshair.classList.toggle('combat', !!combat);
  }
  gameOver(reason, stats) { this.el.goReason.textContent = reason; this.el.goStats.textContent = stats; this.show('gameover', true); }
}
