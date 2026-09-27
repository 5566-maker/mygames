# Third-Party Notices & Open Source Licenses

This project, **Self-hosted High Quality Web Game Arcade** (`game.yuewang.eu.cc`), is a 100% iPad and Mobile Touch-Native arcade platform. All games operate under permissive open-source licenses (predominantly MIT License). All external advertising networks, trackers, commercial SDKs, and third-party remote CDN dependencies have been completely removed or localized.

---

## 1. iPad & Mobile Touch-Native Games

### 1.1 Stack 3D (3D 叠叠乐)
- **Engine / Tech:** Three.js (ES Module), WebGL, Web Audio API
- **License:** MIT License
- **Controls:** 100% One-Tap Touch Native (iPad screen touch / mouse click)
- **Asset License:** 100% Procedural geometries and dynamic lighting

### 1.2 Fruit Slice (水果切切切)
- **Engine / Tech:** HTML5 Canvas, Multi-touch Pointer Events, Web Audio API
- **License:** MIT License
- **Controls:** Multi-touch blade trail slicing across iPad screen
- **Asset License:** Procedural vector rendering & emojis

### 1.3 2048 Master (经典 2048)
- **Engine / Tech:** HTML5 DOM / CSS Grid, Touch Gestures, Web Audio API
- **License:** MIT License (based on Gabriele Cirulli's 2048)
- **Controls:** 4-directional touch swipe gesture & accessible on-screen buttons

### 1.4 Air Hockey Table (极速气垫球)
- **Engine / Tech:** HTML5 Canvas, Elastic Physics Engine, Web Audio API
- **License:** MIT License
- **Controls:** Direct touch drag for mallets (Single-player AI & 2-Player iPad Tabletop)

### 1.5 Gem Match-3 (宝石消消乐)
- **Engine / Tech:** HTML5 Canvas, Match-3 Grid Engine, Particle Cascade
- **License:** MIT License
- **Controls:** Touch tap / drag adjacent gems to swap

### 1.6 Bubble Shooter (炫彩泡泡龙)
- **Engine / Tech:** HTML5 Canvas, Raycasting Reflection Trajectory, BFS Cluster Pop
- **License:** MIT License
- **Controls:** Touch drag dotted aiming line with wall reflection, release to fire

### 1.7 Piano Tiles (魔法钢琴块)
- **Engine / Tech:** HTML5 Canvas, Web Audio Polyphonic Synthesizer
- **License:** MIT License
- **Controls:** Multi-touch lane tapping on iPad

### 1.8 Helix Jump 3D (3D 螺旋球)
- **Engine / Tech:** Three.js (ES Module), 3D Cylinder & Sector Geometry, Gravity Physics
- **License:** MIT License
- **Controls:** Single finger horizontal drag to rotate 3D helix tower

---

## 2. Touch-Optimized Classic Games

### 2.1 Toy Tower Defense (玩具塔防)
- **Engine / Tech:** HTML5 Canvas 2D, Pathfinding & Tower Targeting
- **License:** MIT License
- **Controls:** Touch tap to build and upgrade towers

### 2.2 Magic Castle (魔法城堡防守)
- **Engine / Tech:** HTML5 Canvas 2D, Roguelike Ability System
- **License:** MIT License
- **Controls:** Touch spell cards and roguelike upgrade selection

### 2.3 Drive Mad 2D (疯狂大脚车)
- **Engine / Tech:** HTML5 Canvas 2D, Spring Suspension Physics
- **License:** MIT License
- **Controls:** Large on-screen touch pedals (forward / backward)

### 2.4 Pixel Racer (像素赛车)
- **Engine / Tech:** HTML5 Canvas 2D, 3-Lane Highway Traffic
- **License:** MIT License
- **Controls:** Large left/right touch buttons

### 2.5 Top-Down F1 (极速F1赛车)
- **Engine / Tech:** HTML5 Canvas 2D, Circuit Lap Physics
- **License:** MIT License
- **Controls:** Left/right steering & throttle touch buttons

### 2.6 Spaceship Shooter (太空小飞机)
- **Engine / Tech:** HTML5 Canvas 2D, Bullet Hell & Boss Fights
- **License:** MIT License
- **Controls:** Smooth touch drag following finger anywhere on screen

### 2.7 Meteor Dodge (躲避陨石)
- **Engine / Tech:** HTML5 Canvas 2D, Orbital Physics
- **License:** MIT License
- **Controls:** Smooth touch drag dodging meteors

### 2.8 Candy Bricks (糖果打砖块)
- **Engine / Tech:** HTML5 Canvas 2D, Breakout Physics
- **License:** MIT License
- **Controls:** Touch drag paddle at bottom of screen

### 2.9 Happy Bee (快乐小蜜蜂)
- **Engine / Tech:** HTML5 Canvas 2D, Flappy Flight Physics
- **License:** MIT License
- **Controls:** One-tap anywhere on screen to flap wings

### 2.10 Happy Snake (贪吃贪玩蛇)
- **Engine / Tech:** HTML5 Canvas 2D, Grid Snake
- **License:** MIT License
- **Controls:** Swipe gestures & on-screen touch D-pad

### 2.11 Animal Match (动物翻翻乐)
- **Engine / Tech:** HTML5 DOM, Flip Animation
- **License:** MIT License
- **Controls:** Touch tap cards to flip

### 2.12 Whack-a-Mole (欢乐打地鼠)
- **Engine / Tech:** HTML5 Canvas 2D, Reflex Timing
- **License:** MIT License
- **Controls:** Fast touch tap on emerging moles

---

## 3. Core Libraries & Dependencies

- **Three.js (`v0.186.1`):** MIT License (https://github.com/mrdoob/three.js) - Localized in `/shared/three.module.js` with zero remote CDN calls.
- **Web Audio API:** W3C Standard, procedural synthesis.
