import { Game } from './game.js';
import { preloadAllKits, preloadChars } from './assets/gltf.js';
import { loadScanMaps, loadDuskEnv } from './assets/look.js';

const canvas = document.getElementById('game');
const kits = new Map();
const game = new Game(canvas, kits);
window.__obamka = game;

let last = performance.now();
function loop(now) {
  const dt = (now - last) / 1000; last = now;
  try { game?.update(dt); } catch (e) { console.error(e); window.__lastError = String(e.stack || e); }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

Promise.all([
  loadScanMaps(),
  loadDuskEnv(game.renderer, game.scene),
]).then(([maps, env]) => {
  game.applyLook(maps, env);
}).catch((err) => console.warn('[look] failed', err?.message || err));

preloadAllKits().then((loaded) => {
  for (const [name, scene] of loaded) kits.set(name, scene);
  if (game.outdoor?.chunks.size) {
    for (const key of [...game.outdoor.chunks.keys()]) game.outdoor.unload(key);
  }
}).catch((err) => {
  console.warn('[kits] preload failed', err?.message || err);
});

preloadChars().then((chars) => {
  if (chars.size) game.setChars(chars);
}).catch((err) => {
  console.warn('[chars] preload failed', err?.message || err);
});
