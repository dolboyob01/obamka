import { Game } from './game.js';

const canvas = document.getElementById('game');
const game = new Game(canvas);

let last = performance.now();
function loop(now) {
  const dt = (now - last) / 1000; last = now;
  try { game?.update(dt); } catch (e) { console.error(e); window.__lastError = String(e.stack || e); }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
