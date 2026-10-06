export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();   // нажатые в этом кадре
    this.dx = 0; this.dy = 0;
    this.mouseDown = false;
    this.mouseClicked = false;
    this.locked = false;
    this.sensitivity = 0.0022;
    this.invertY = true;
    try { this.invertY = localStorage.getItem('invertY') !== '0'; } catch (_) {}

    window.addEventListener('keydown', e => {
      if (e.repeat) return;
      this.keys.add(e.code); this.pressed.add(e.code);
      if (['Space', 'Tab', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ'].includes(e.code)) e.preventDefault();
    });
    window.addEventListener('keyup', e => this.keys.delete(e.code));
    window.addEventListener('blur', () => { this.keys.clear(); this.mouseDown = false; });
    document.addEventListener('mousemove', e => {
      if (!this.locked) return;
      this.dx += e.movementX; this.dy += e.movementY;
    });
    canvas.addEventListener('mousedown', e => { if (e.button === 0) { this.mouseDown = true; this.mouseClicked = true; } });
    window.addEventListener('mouseup', e => { if (e.button === 0) this.mouseDown = false; });
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === canvas; });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
  }

  lock() { if (!this.locked) this.canvas.requestPointerLock?.(); }
  unlock() { if (this.locked) document.exitPointerLock?.(); }

  down(code) { return this.keys.has(code); }
  hit(code) { return this.pressed.has(code); }

  // Вызывать в конце кадра
  flush() { this.pressed.clear(); this.dx = 0; this.dy = 0; this.mouseClicked = false; }
}
