// Центральная настройка баланса и мира. Все числа — в метрах / секундах / процентах HP.
export const CFG = {
  // Рендер
  pixelScale: 0.48,        // bitmap в духе Obra Dinn
  fov: 68,
  camDist: 4.6,
  camDistCombat: 6.0,

  // Мир (улица)
  chunkSize: 48,
  viewChunks: 3,           // радиус подгрузки чанков вокруг игрока
  floorHeight: 3,

  // Игрок
  walkSpeed: 4.2,
  sprintSpeed: 7.0,
  crouchSpeed: 1.8,
  playerRadius: 0.38,
  playerHeight: 1.75,
  crouchHeight: 1.1,
  stepHeight: 0.45,
  gravity: 20,
  jumpVel: 6.5,
  groundAccel: 10,
  airAccel: 14,
  airWishCap: 2.4,
  bhopJumpBoost: 1.35,
  bhopMaxSpeed: 16,
  friction: 6,
  stopSpeed: 1.8,
  coyoteTime: 0.09,
  jumpBuffer: 0.09,
  flySpeed: 8.5,
  gozeDuration: 600,       // 10 минут реального времени, без таймера на экране
  maxHp: 100,
  hpRegenDelay: 8,
  hpRegenRate: 1.2,        // % в секунду

  // Оружие
  pistol: { damage: 34, rpm: 240, mag: 8, reload: 1.4, spread: 0.012, reserve: 56 },
  minigun: { damage: 26, rpm: 1200, spread: 0.045 },

  // Популяция
  class1MaxShare: 0.03,    // класс 1 — не более 3% от всех сущностей
  outsidePerChunk: [0, 3], // мин/макс сущностей (кл.1/2) на чанк
  class2Damage: 1,         // % HP за удар
  class3Damage: [3, 5],    // % HP за удар
  class3Speed: 3.3,
  class3Sight: 16,
  class3Hp: 70,

  // Призрак (класс 4)
  ghostBaseSpeed: 4.4,     // между ходьбой и бегом; спринт отталкивает, стоять нельзя
  ghostSprintSpeed: 2.6,
  ghostIdleSpeed: 7.2,
  ghostStartDistance: 14,
  ghostRetreatDistance: 42,
  ghostMinSurvive: 26,     // сек. до возможного отступления
  ghostLookBackAngle: 110, // градусов от направления бега
  ghostLookBackHold: 0.22, // сек. удержания взгляда назад, чтобы засчитать
  ghostInteriorChancePerSec: 0.012,
  ghostOutsideChancePerSec: 0.0015,

  // Преследователь (класс 5)
  stalkerSleep: [90, 240],
  stalkerFood: [40, 120],
  stalkerRandomChance: 0.0009,
  stalkerRandomAfter: 80,
  stalkerStealthLag: [5, 7],
  stalkerDamage: 22,
  stalkerDeathmatchLag: 1.6,
  deathmatchInitialMinions: 4,
  minionSpeed: [1.8, 2.4],
  minionDamage: [1.2, 2.0],

  // Арена
  arenaCount: [80, 400],
  arenaSize: 120,
  arenaMaxAlive: 80,
  arenaEntityHp: 28,
  arenaGruntSpeed: [1.45, 2.05],
  arenaDamage: [0.8, 1.4],
  arenaHitCooldown: 1.55,
  arenaSpawnPerSec: 3.2,
  elevatorArenaChance: 0.35,
  playerIframes: 0.55,

  // Бомба
  bombPlantTime: 3.2,
  bombFuse: 25,
};
