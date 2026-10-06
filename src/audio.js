const asset = (file) => `${import.meta.env.BASE_URL}audio/${file}`;

// WebAudio: музыка из файлов + фоновый шум. Сэмплы и треки — из public/audio.
export class AudioSys {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.tracks = {};
    this.current = null;
    this.musicVolume = 0.8;
    this.sfxVolume = 0.9;
    this.unlocked = false;
    this.loops = {};
    this.buffers = {};
    this.pending = {
      shot: fetch(asset('shot.wav')).then(r => r.arrayBuffer()).catch(() => null),
      step: fetch(asset('step.wav')).then(r => r.arrayBuffer()).catch(() => null),
    };
  }

  unlock() {
    if (this.unlocked) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.connect(this.ctx.destination);
    this.sfxGain = this.ctx.createGain(); this.sfxGain.gain.value = this.sfxVolume; this.sfxGain.connect(this.master);
    this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = this.musicVolume; this.musicGain.connect(this.master);
    this.unlocked = true;
    this.noiseBuf = this._makeNoise(2);
    this._startWind();
    this._loadBuf('shot', asset('shot.wav'));
    this._loadBuf('step', asset('step.wav'));
    this._track('outside', asset('outside.mp3'), true);
    this._track('chase', asset('hunk_kunilingues.mp3'), true);
    this._track('arena', asset('lyudoyob.mp3'), true);
    this._track('choice', asset('deathmatch_choice.mp3'), true);
  }

  async _loadBuf(name, url) {
    try {
      const pre = this.pending[name] ? await this.pending[name] : null;
      const arr = pre || await (await fetch(url)).arrayBuffer();
      if (!arr) throw new Error('empty');
      this.buffers[name] = await this.ctx.decodeAudioData(arr.slice(0));
    } catch (e) {
      console.warn('sfx load failed', name, e);
    }
  }

  _playBuf(name, { vol = 1, rate = 1, dur = null } = {}) {
    const buf = this.buffers[name];
    if (!buf) return false;
    const ctx = this.ctx;
    const s = ctx.createBufferSource();
    s.buffer = buf;
    s.playbackRate.value = rate;
    const g = ctx.createGain();
    const now = ctx.currentTime;
    g.gain.setValueAtTime(vol, now);
    if (dur != null) g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    s.connect(g); g.connect(this.sfxGain);
    s.start();
    if (dur != null) s.stop(now + dur + 0.04);
    return true;
  }

  setVolumes(music, sfx) {
    this.musicVolume = music; this.sfxVolume = sfx;
    if (!this.unlocked) return;
    this.musicGain.gain.value = music;
    this.sfxGain.gain.value = sfx;
  }

  _track(name, url, loop) {
    const el = new Audio(url);
    el.loop = loop; el.preload = 'auto'; el.crossOrigin = 'anonymous';
    const t = { el, name, gain: this.ctx.createGain(), ok: true, src: null };
    t.gain.gain.value = 0;
    t.gain.connect(this.musicGain);
    try { t.src = this.ctx.createMediaElementSource(el); t.src.connect(t.gain); } catch (e) { }
    el.addEventListener('error', () => { t.ok = false; });
    this.tracks[name] = t;
  }

  playOutside(vol = 0.72, fade = 1.6) {
    if (!this.unlocked) return;
    if (this.current && this.current.name === 'outside') return;
    this.playMusic('outside', vol, fade);
  }

  // Запуск трека с плавным входом. Если файла нет (например, трек с Яндекс.Музыки не скачан) — синтезированный дрон.
  playMusic(name, vol = 1, fade = 1) {
    if (!this.unlocked) return;
    const t = this.tracks[name];
    this.stopMusic(0.6);
    if (!t || !t.ok) return;
    this.current = t;
    try { t.el.currentTime = 0; t.el.play().catch(() => {}); } catch (e) { }
    const now = this.ctx.currentTime;
    t.gain.gain.cancelScheduledValues(now);
    t.gain.gain.setValueAtTime(0.0001, now);
    t.gain.gain.linearRampToValueAtTime(vol, now + fade);
  }

  setMusicVolume(vol, ramp = 0.3) {
    if (!this.unlocked || !this.current || !this.current.gain) return;
    const g = this.current.gain.gain;
    g.cancelScheduledValues(this.ctx.currentTime);
    g.setValueAtTime(g.value, this.ctx.currentTime);
    g.linearRampToValueAtTime(vol, this.ctx.currentTime + ramp);
  }

  stopMusic(fade = 1) {
    if (!this.unlocked || !this.current) return;
    const cur = this.current; this.current = null;
    if (!cur.gain) return;
    const g = cur.gain.gain, now = this.ctx.currentTime;
    g.cancelScheduledValues(now); g.setValueAtTime(g.value, now); g.linearRampToValueAtTime(0.0001, now + fade);
    setTimeout(() => { if (this.current !== cur) { try { cur.el.pause(); } catch (e) { } } }, fade * 1000 + 50);
  }

  // ---------- Процедурные эффекты ----------
  _makeNoise(sec) {
    const ctx = this.ctx, buf = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  footstep(inside, crouch) {
    if (!this.unlocked) return;
    const vol = crouch ? 0.16 : inside ? 0.34 : 0.28;
    this._playBuf('step', { vol, rate: 0.9 + Math.random() * 0.18, dur: 0.55 });
  }
  pistol() { if (this.unlocked) this._playBuf('shot', { vol: 0.9, rate: 0.96 + Math.random() * 0.08 }); }
  minigun() { if (this.unlocked) this._playBuf('shot', { vol: 0.4, rate: 1.04 + Math.random() * 0.14, dur: 0.16 }); }
  reload() {}
  hitFlesh() {}
  playerHurt() {}
  entityDie() {}
  lunge() {}
  shit() {}
  bombArmed() {}
  bombTick() {}
  explosion() {}
  ding() {}
  elevatorHum() {}
  stalkerAlert() {}
  ghostAppear() {}
  gameOver() {}
  whoosh() {}
  fall() {}
  ui() {}
  heartbeat() {}
  carouselSqueak() {}

  // Ветер — бесконечный фильтрованный шум
  _startWind() {
    const ctx = this.ctx;
    const s = ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 320; f.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.value = 0.12;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.13;
    const lg = ctx.createGain(); lg.gain.value = 180; lfo.connect(lg); lg.connect(f.frequency); lfo.start();
    s.connect(f); f.connect(g); g.connect(this.sfxGain); s.start();
    this.wind = g;
  }
  setWind(v, ramp = 1) { if (this.wind) this.wind.gain.linearRampToValueAtTime(v, this.ctx.currentTime + ramp); }
}
