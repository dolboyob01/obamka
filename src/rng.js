// Детерминированный RNG: один и тот же чанк/подъезд всегда генерируется одинаково.
export function hash2(x, y, seed = 1337) {
  let h = (x | 0) * 374761393 + (y | 0) * 668265263 + seed * 2246822519;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return h >>> 0;
}

export function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Rng {
  constructor(seed) { this.f = mulberry32(seed >>> 0); }
  next() { return this.f(); }
  range(a, b) { return a + (b - a) * this.f(); }
  int(a, b) { return Math.floor(this.range(a, b + 1)); }
  chance(p) { return this.f() < p; }
  pick(arr) { return arr[Math.floor(this.f() * arr.length)]; }
}

// Глобальный недетерминированный рандом для геймплея
export const rnd = {
  range: (a, b) => a + (b - a) * Math.random(),
  int: (a, b) => Math.floor(a + (b - a + 1) * Math.random()),
  chance: (p) => Math.random() < p,
  pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
};
