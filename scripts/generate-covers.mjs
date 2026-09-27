import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');

const covers = [
  {
    id: 'apex-formula',
    title: 'APEX FORMULA',
    sub: '120Hz HIGH-SPEED F1 RACING',
    badge: '3D · RACING',
    icon: '🏎️',
    gradient: ['#0f172a', '#1e1b4b', '#0284c7'],
    accent: '#38bdf8'
  },
  {
    id: 'turbo-kart-rush',
    title: 'TURBO KART RUSH',
    sub: 'DRIFT & ITEM BATTLE 3D',
    badge: '3D · KART',
    icon: '🏎️',
    gradient: ['#1e1b4b', '#4c1d95', '#f59e0b'],
    accent: '#fbbf24'
  },
  {
    id: 'hexgl',
    title: 'HexGL',
    sub: 'ANTI-GRAVITY SCI-FI RACING',
    badge: '3D · SCI-FI',
    icon: '🚀',
    gradient: ['#030712', '#0f172a', '#e11d48'],
    accent: '#f43f5e'
  },
  {
    id: 'operation-ironhold',
    title: 'OPERATION IRONHOLD',
    sub: 'TACTICAL WAREHOUSE FPS',
    badge: '3D · FPS',
    icon: '🎯',
    gradient: ['#0a0c0e', '#1c1917', '#44403c'],
    accent: '#f59e0b'
  },
  {
    id: 'dead-signal',
    title: 'DEAD SIGNAL',
    sub: 'ZOMBIE EXTRACTION SURVIVAL',
    badge: '3D · FPS',
    icon: '☣️',
    gradient: ['#0b101b', '#18181b', '#84cc16'],
    accent: '#a3e635'
  },
  {
    id: 'horror-house',
    title: 'HORROR HOUSE',
    sub: '3D FIRST-PERSON HAUNTED ESCAPE',
    badge: '3D · HORROR',
    icon: '🕯️',
    gradient: ['#09090b', '#1c1917', '#7f1d1d'],
    accent: '#ef4444'
  },
  {
    id: 'neon-runner',
    title: 'NEON VELOCITY',
    sub: 'CYBERPUNK SYNTHWAVE RUNNER',
    badge: '3D · RUNNER',
    icon: '⚡',
    gradient: ['#070b19', '#311042', '#06b6d4'],
    accent: '#22d3ee'
  },
  {
    id: 'ragdoll-sandbox',
    title: 'RAGDOLL DEMOLITION',
    sub: 'REAL-TIME 3D PHYSICS SANDBOX',
    badge: '3D · PHYSICS',
    icon: '💣',
    gradient: ['#0b0f19', '#1e293b', '#6366f1'],
    accent: '#818cf8'
  },
  {
    id: 'stick-brawler',
    title: 'STICK & STEEL',
    sub: 'GLADIATOR COMBAT ARENA 3D',
    badge: '3D · FIGHTING',
    icon: '⚔️',
    gradient: ['#0f0a1c', '#2e1065', '#d97706'],
    accent: '#f59e0b'
  },
  {
    id: 'crystal-defense',
    title: 'CRYSTAL DEFENSE',
    sub: 'TACTICAL 3D TOWER DEFENSE',
    badge: '3D · STRATEGY',
    icon: '💎',
    gradient: ['#0b1320', '#1e1b4b', '#0284c7'],
    accent: '#38bdf8'
  },
  {
    id: 'tower-defense',
    title: 'TOY TOWER DEFENSE',
    sub: 'CLASSIC TOWER DEFENSE',
    badge: 'RETRO · STRATEGY',
    icon: '🏰',
    gradient: ['#062817', '#064e3b', '#059669'],
    accent: '#10b981'
  },
  {
    id: 'rogue-defense',
    title: 'MAGIC CASTLE',
    sub: 'ROGUELIKE SPELL DEFENSE',
    badge: 'RETRO · ROGUE',
    icon: '⚡',
    gradient: ['#1c1033', '#4c1d95', '#7c3aed'],
    accent: '#8b5cf6'
  },
  {
    id: 'drive-mad',
    title: 'DRIVE MAD 2D',
    sub: 'SPRING SUSPENSION TRUCK',
    badge: 'RETRO · PHYSICS',
    icon: '🚙',
    gradient: ['#0c192c', '#1e3a8a', '#2563eb'],
    accent: '#3b82f6'
  },
  {
    id: 'pixel-racer',
    title: 'PIXEL RACER',
    sub: 'RETRO 3-LANE DODGER',
    badge: 'RETRO · RACING',
    icon: '🏎️',
    gradient: ['#2b0d0d', '#7f1d1d', '#dc2626'],
    accent: '#ef4444'
  },
  {
    id: 'f1-racer',
    title: 'TOP-DOWN F1',
    sub: 'CIRCUIT TIME TRIAL',
    badge: 'RETRO · RACING',
    icon: '🏁',
    gradient: ['#291804', '#78350f', '#d97706'],
    accent: '#f59e0b'
  },
  {
    id: 'spaceship',
    title: 'SPACESHIP SHOOTER',
    sub: 'VERTICAL BULLET HELL',
    badge: 'RETRO · ARCADE',
    icon: '✈️',
    gradient: ['#04202c', '#155e75', '#0891b2'],
    accent: '#06b6d4'
  },
  {
    id: 'meteor',
    title: 'METEOR DODGE',
    sub: 'ORBITAL STAR SURVIVAL',
    badge: 'RETRO · SURVIVAL',
    icon: '🚀',
    gradient: ['#29081e', '#831843', '#db2777'],
    accent: '#ec4899'
  },
  {
    id: 'brick-breaker',
    title: 'CANDY BRICKS',
    sub: 'BOUNCE & BREAKOUT',
    badge: 'RETRO · ARCADE',
    icon: '🧱',
    gradient: ['#2c1504', '#7c2d12', '#ea580c'],
    accent: '#f97316'
  },
  {
    id: 'sky-hopper',
    title: 'HAPPY BEE',
    sub: 'GENTLE SKY FLIGHT',
    badge: 'RETRO · CASUAL',
    icon: '🐝',
    gradient: ['#2c2404', '#713f12', '#ca8a04'],
    accent: '#eab308'
  },
  {
    id: 'snake',
    title: 'HAPPY SNAKE',
    sub: 'CLASSIC ARCADE WRAP',
    badge: 'RETRO · ARCADE',
    icon: '🐍',
    gradient: ['#09260d', '#14532d', '#16a34a'],
    accent: '#22c55e'
  },
  {
    id: 'memory',
    title: 'ANIMAL MATCH',
    sub: 'CARD PAIR PUZZLE',
    badge: 'RETRO · PUZZLE',
    icon: '🃏',
    gradient: ['#171336', '#312e81', '#4f46e5'],
    accent: '#6366f1'
  },
  {
    id: 'whack-mole',
    title: 'WHACK-A-MOLE',
    sub: 'SPEED & REFLEXES',
    badge: 'RETRO · ARCADE',
    icon: '🐭',
    gradient: ['#291a04', '#78350f', '#b45309'],
    accent: '#d97706'
  }
];

function generateCoverSVG(c, isHero = false) {
  const w = isHero ? 1920 : 1280;
  const h = isHero ? 820 : 720;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.gradient[0]}"/>
      <stop offset="50%" stop-color="${c.gradient[1]}"/>
      <stop offset="100%" stop-color="${c.gradient[2]}"/>
    </linearGradient>
    <radialGradient id="glow" cx="60%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${c.accent}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="overlay" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#060913" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#060913" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#060913" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>

  <!-- Cyber Grid Lines -->
  <g stroke="rgba(255,255,255,0.06)" stroke-width="1.5">
    <line x1="0" y1="${h * 0.25}" x2="${w}" y2="${h * 0.25}"/>
    <line x1="0" y1="${h * 0.5}" x2="${w}" y2="${h * 0.5}"/>
    <line x1="0" y1="${h * 0.75}" x2="${w}" y2="${h * 0.75}"/>
    <line x1="${w * 0.25}" y1="0" x2="${w * 0.25}" y2="${h}"/>
    <line x1="${w * 0.5}" y1="0" x2="${w * 0.5}" y2="${h}"/>
    <line x1="${w * 0.75}" y1="0" x2="${w * 0.75}" y2="${h}"/>
  </g>

  <!-- Giant Icon Backdrop -->
  <text x="${w * 0.75}" y="${h * 0.65}" font-size="${isHero ? 340 : 280}" text-anchor="middle" opacity="0.35" filter="drop-shadow(0 0 40px ${c.accent})">${c.icon}</text>

  <!-- Vignette overlay -->
  <rect width="${w}" height="${h}" fill="url(#overlay)"/>

  <!-- Content -->
  <g transform="translate(${isHero ? 120 : 64}, ${isHero ? h - 220 : h - 180})">
    <!-- Category Badge -->
    <rect width="130" height="34" rx="8" fill="rgba(255,255,255,0.12)" stroke="${c.accent}" stroke-width="1.5"/>
    <text x="65" y="22" font-family="-apple-system, sans-serif" font-size="13" font-weight="800" fill="${c.accent}" text-anchor="middle" letter-spacing="1.5">${c.badge}</text>

    <!-- Main Title -->
    <text x="0" y="90" font-family="-apple-system, 'Segoe UI', Roboto, sans-serif" font-size="${isHero ? 64 : 52}" font-weight="900" fill="#FFFFFF" letter-spacing="2" filter="drop-shadow(0 4px 16px rgba(0,0,0,0.8))">${c.title}</text>

    <!-- Subtitle -->
    <text x="0" y="130" font-family="-apple-system, sans-serif" font-size="16" font-weight="700" fill="#94A3B8" letter-spacing="2.5">${c.sub}</text>
  </g>
</svg>`;
}

covers.forEach(c => {
  const dir = path.join(gamesDir, c.id);
  if (fs.existsSync(dir)) {
    const coverSvg = generateCoverSVG(c, false);
    const heroSvg = generateCoverSVG(c, true);

    fs.writeFileSync(path.join(dir, 'cover.svg'), coverSvg);
    fs.writeFileSync(path.join(dir, 'hero.svg'), heroSvg);

    // Also write cover.webp / hero.webp as copy or link
    fs.writeFileSync(path.join(dir, 'cover.webp'), coverSvg);
    fs.writeFileSync(path.join(dir, 'hero.webp'), heroSvg);

    console.log(`✅ Generated artwork for ${c.id}`);
  }
});
