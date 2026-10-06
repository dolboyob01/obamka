import * as THREE from 'three';
import { Rng } from './rng.js';

// Все текстуры генерируются на canvas в низком разрешении — ничего не грузится с диска.
function canvasTex(size, draw, repeat = true, w, h) {
  const c = document.createElement('canvas');
  c.width = w || size; c.height = h || size;
  const ctx = c.getContext('2d');
  draw(ctx, c.width, c.height);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function noise(ctx, size, rng, base, amp, step = 2) {
  for (let y = 0; y < size; y += step)
    for (let x = 0; x < size; x += step) {
      const v = base + (rng.next() - 0.5) * amp;
      ctx.fillStyle = `rgb(${v | 0},${v | 0},${(v + 3) | 0})`;
      ctx.fillRect(x, y, step, step);
    }
}

export function makeTextures() {
  const rng = new Rng(777);
  const T = {};

  // Фасад: панель 3×3 м без нарисованного окна — окно ставится мешем.
  T.facade = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 142, 22, 2);
    ctx.fillStyle = '#5a5c5e';
    ctx.fillRect(0, 0, s, 2); ctx.fillRect(0, 0, 2, s);
    ctx.fillStyle = 'rgba(40,40,44,0.5)';
    for (let i = 0; i < 5; i++) { const x = rng.int(4, s - 4); ctx.fillRect(x, rng.int(0, 20), 1, rng.int(10, 40)); }
  });

  T.facadeLit = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 140, 22, 2);
    ctx.fillStyle = '#4a4c4e'; ctx.fillRect(0, 0, s, 2); ctx.fillRect(0, 0, 2, s);
    ctx.fillStyle = '#8f7a3a'; ctx.fillRect(18, 16, 28, 30);
    ctx.fillStyle = '#3a3b40'; ctx.fillRect(31, 16, 2, 30); ctx.fillRect(18, 30, 28, 2);
    ctx.fillStyle = '#6a6c70'; ctx.fillRect(16, 46, 32, 2);
  });

  // Глухая бетонная панель
  T.concrete = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 142, 20, 2);
    ctx.fillStyle = '#4a4c4e'; ctx.fillRect(0, 0, s, 2); ctx.fillRect(0, 0, 2, s);
    ctx.fillStyle = 'rgba(30,30,34,0.35)';
    for (let i = 0; i < 6; i++) ctx.fillRect(rng.int(0, s), rng.int(0, s), rng.int(2, 10), rng.int(1, 3));
  });

  // Крыша — рубероид
  T.roof = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 48, 14, 2);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    for (let i = 0; i < 20; i++) ctx.fillRect(rng.int(0, s), rng.int(0, s), rng.int(3, 12), 1);
  });

  // Грязный снег / тундра
  T.ground = canvasTex(256, (ctx, s) => {
    noise(ctx, s, rng, 178, 26, 2);
    for (let i = 0; i < 60; i++) {
      const v = rng.int(100, 140);
      ctx.fillStyle = `rgba(${v},${v - 8},${v - 16},0.5)`;
      ctx.fillRect(rng.int(0, s), rng.int(0, s), rng.int(2, 10), rng.int(1, 4));
    }
    // колея
    ctx.fillStyle = 'rgba(90,85,80,0.4)';
    ctx.fillRect(0, 40, s, 5); ctx.fillRect(0, 60, s, 5);
  });

  // Стена подъезда: низ — масляная краска, верх — побелка
  T.wallInt = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 170, 24, 2);
    const col = rng.pick(['#3f5a4a', '#3b4f66', '#5a4a3a', '#4e5f3f']);
    ctx.fillStyle = col; ctx.fillRect(0, 28, s, 36);
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(0, 28, s, 2);
    // надписи/грязь
    ctx.fillStyle = 'rgba(20,20,20,0.5)';
    for (let i = 0; i < 8; i++) ctx.fillRect(rng.int(0, s), rng.int(30, s), rng.int(2, 9), rng.int(1, 2));
    for (let i = 0; i < 4; i++) ctx.fillRect(rng.int(0, s), rng.int(0, 26), rng.int(1, 3), rng.int(4, 16));
  });

  // Пол подъезда — бетон/плитка
  T.floorInt = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 78, 20, 2);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    for (let i = 0; i < s; i += 16) { ctx.fillRect(i, 0, 1, s); ctx.fillRect(0, i, s, 1); }
  });

  T.ceilInt = canvasTex(32, (ctx, s) => { noise(ctx, s, rng, 120, 26, 2); });

  // Дверь квартиры (дерматин)
  T.door = canvasTex(32, (ctx, s) => {
    const col = rng.pick(['#4a2a22', '#3a2a1a', '#2a2a2a', '#5a3a2a']);
    ctx.fillStyle = col; ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    for (let i = 0; i < 20; i++) ctx.fillRect(rng.int(0, s), rng.int(0, s), 1, 1);
    ctx.fillStyle = '#9a8a5a'; ctx.fillRect(22, 16, 3, 2); // ручка
    ctx.fillStyle = '#1a1a1a'; ctx.fillRect(0, 0, s, 1); ctx.fillRect(0, 0, 1, s); ctx.fillRect(s - 1, 0, 1, s);
  });

  // Дверь лифта
  T.elevator = canvasTex(32, (ctx, s) => {
    noise(ctx, s, rng, 95, 16, 2);
    ctx.fillStyle = '#222'; ctx.fillRect(15, 0, 2, s);
    ctx.fillStyle = 'rgba(90,60,40,0.5)';
    for (let i = 0; i < 10; i++) ctx.fillRect(rng.int(0, s), rng.int(0, s), rng.int(1, 4), rng.int(1, 3));
  });

  // Пол арены
  T.arenaFloor = canvasTex(64, (ctx, s) => {
    noise(ctx, s, rng, 88, 18, 2);
    ctx.fillStyle = 'rgba(120,20,20,0.35)';
    for (let i = 0; i < 12; i++) ctx.fillRect(rng.int(0, s), rng.int(0, s), rng.int(3, 14), rng.int(2, 8));
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    for (let i = 0; i < s; i += 32) { ctx.fillRect(i, 0, 1, s); ctx.fillRect(0, i, s, 1); }
  });

  // Вывеска «Магма» — пародия на красный «Магнит»: красное поле, белая «М», название
  T.signMagma = canvasTex(64, (ctx, w, h) => {
    ctx.fillStyle = '#c41018';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(0,0,0,0.18)';
    for (let i = 0; i < 18; i++) ctx.fillRect(rng.int(0, w), rng.int(0, h), rng.int(2, 16), 1);
    ctx.fillStyle = '#f4f0ea';
    ctx.beginPath(); ctx.arc(h * 0.52, h * 0.5, h * 0.36, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#c41018';
    ctx.font = `900 ${Math.floor(h * 0.52)}px Arial, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('М', h * 0.52, h * 0.54);
    ctx.fillStyle = '#fff8f2';
    ctx.font = `800 ${Math.floor(h * 0.46)}px Arial, sans-serif`;
    ctx.textAlign = 'left';
    ctx.fillText('МАГМА', h * 1.05, h * 0.54);
  }, false, 512, 128);

  // Вывеска «Красное и Коричневое» — красно-коричневые плашки как у КиБ
  T.signKik = canvasTex(64, (ctx, w, h) => {
    ctx.fillStyle = '#b81414'; ctx.fillRect(0, 0, w * 0.48, h);
    ctx.fillStyle = '#5a3218'; ctx.fillRect(w * 0.48, 0, w * 0.52, h);
    ctx.fillStyle = '#1a0c08'; ctx.fillRect(w * 0.48 - 3, 0, 6, h);
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    for (let i = 0; i < 14; i++) ctx.fillRect(rng.int(0, w), rng.int(0, h), rng.int(3, 18), 1);
    ctx.fillStyle = '#f6f1ea';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `800 ${Math.floor(h * 0.28)}px Arial, sans-serif`;
    ctx.fillText('КРАСНОЕ', w * 0.24, h * 0.38);
    ctx.font = `700 ${Math.floor(h * 0.18)}px Arial, sans-serif`;
    ctx.fillText('и', w * 0.24, h * 0.68);
    ctx.font = `800 ${Math.floor(h * 0.22)}px Arial, sans-serif`;
    ctx.fillText('КОРИЧНЕВОЕ', w * 0.74, h * 0.5);
  }, false, 512, 128);

  // Мозаика соцреализма для торцов домов
  T.mosaic = canvasTex(128, (ctx, s) => {
    noise(ctx, s, rng, 110, 20, 2);
    const cols = ['#3a6a7a', '#7a4a3a', '#3a5a7a', '#8a7a3a', '#3a6a4a', '#5a3a6a', '#9a9a9a'];
    for (let y = 8; y < s - 8; y += 4)
      for (let x = 8; x < s - 8; x += 4) {
        if (rng.chance(0.55)) { ctx.fillStyle = rng.pick(cols); ctx.fillRect(x, y, 4, 4); }
      }
  });

  return T;
}
