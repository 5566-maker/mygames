# Third-Party Notices & Open Source Licenses

This project, **Self-hosted High Quality Web Game Arcade** (`game.yuewang.eu.cc`), integrates and adapts various high-quality open-source games and libraries. All games are operated under permissive open-source licenses (predominantly MIT License). All external advertising networks, trackers, commercial SDKs, and third-party remote CDN dependencies have been completely removed or localized.

---

## 1. High-Quality Featured Games

### 1.1 APEX FORMULA
- **Project Name:** APEX FORMULA (极速方程 3D)
- **Original Author:** BridgeMind
- **Repository:** https://github.com/bridge-mind/apex-formula
- **License:** MIT License
- **Asset License:** 100% Procedural Generation in Three.js (No external asset files)
- **Music / Audio:** Procedural Web Audio API sound synthesis
- **Modifications:** Integrated unified Game Shell navigation and orientation handling; stripped any external telemetry.

### 1.2 Turbo Kart Rush
- **Project Name:** Turbo Kart Rush (极速卡丁车 3D)
- **Original Author:** BridgeMind
- **Repository:** https://github.com/bridge-mind/turbo-kart-rush
- **License:** MIT License
- **Asset License:** 100% Procedural Generation in Three.js
- **Music / Audio:** Web Audio API sound synthesis
- **Modifications:** Integrated unified Game Shell; verified standalone static execution.

### 1.3 HexGL
- **Project Name:** HexGL (未来反重力竞速)
- **Original Author:** Thibaut Despoulain (BKcore)
- **Repository:** https://github.com/BKcore/HexGL
- **License:** MIT License
- **Asset License:** MIT (Original 3D meshes by Charnel, track textures by Nobiax)
- **Music / Audio:** Localized HTML5 Audio / Web Audio
- **Modifications:** Completely removed legacy Google Analytics script (`UA-26274524-4`), removed external social widgets, integrated modern unified Game Shell.

### 1.4 Operation Ironhold
- **Project Name:** Operation Ironhold (铁垒行动 3D)
- **Original Author:** StarKnightt (Prasenjit Nayak)
- **Repository:** https://github.com/StarKnightt/operation-ironhold
- **License:** MIT License
- **Asset License:** 100% Procedural textures and geometries in Three.js
- **Music / Audio:** Procedural Web Audio synthesized gunshots, ricochets, footsteps
- **Modifications:** Replaced CDNjs Three.js script with locally hosted `three.min.js`, integrated unified Game Shell, added safe area styling.

### 1.5 Dead Signal: Exclusion Zone
- **Project Name:** Dead Signal: Exclusion Zone (死亡信标：绝境撤离)
- **Original Author:** BridgeMind
- **Repository:** https://github.com/bridge-mind/claude-opus-5.5-zombies-game
- **License:** MIT License
- **Asset License:** 100% Procedural 3D assets in Three.js
- **Music / Audio:** Procedural audio synthesis
- **Modifications:** Built with Vite into a single self-contained bundle, integrated unified Game Shell.

### 1.6 Bridge Horror House
- **Project Name:** Bridge Horror House (古宅惊魂 3D)
- **Original Author:** BridgeMind
- **Repository:** https://github.com/bridge-mind/bridge-horror-house
- **License:** MIT License
- **Asset License:** 100% Procedural textures and 3D geometries
- **Music / Audio:** Procedural ambient wind, rain, thunder, and monster audio
- **Modifications:** Built into static assets with Vite, integrated unified Game Shell.

### 1.7 Neon Velocity 3D
- **Project Name:** Neon Velocity 3D (霓虹极速狂奔)
- **Original Author:** OpenSource Arcade Community
- **Repository:** https://github.com/5566-maker/mygames
- **License:** MIT License
- **Asset License:** Procedural Three.js geometries and shaders
- **Music / Audio:** Procedural Web Audio Synthwave bassline & SFX

### 1.8 Ragdoll Demolition 3D
- **Project Name:** Ragdoll Demolition 3D (物理拆迁大乱斗)
- **Original Author:** OpenSource Arcade Community
- **Repository:** https://github.com/5566-maker/mygames
- **License:** MIT License
- **Asset License:** Procedural Three.js & rigid body simulation
- **Music / Audio:** Web Audio procedural blast and crumbling SFX

### 1.9 Stick & Steel Arena 3D
- **Project Name:** Stick & Steel Arena 3D (刀剑竞技场 3D)
- **Original Author:** OpenSource Arcade Community
- **Repository:** https://github.com/5566-maker/mygames
- **License:** MIT License
- **Asset License:** Procedural Three.js meshes
- **Music / Audio:** Web Audio procedural combat clangs and horns

### 1.10 Crystal Defense 3D
- **Project Name:** Crystal Defense 3D (水晶守护者 3D)
- **Original Author:** OpenSource Arcade Community
- **Repository:** https://github.com/5566-maker/mygames
- **License:** MIT License
- **Asset License:** Procedural low-poly Three.js geometries
- **Music / Audio:** Web Audio procedural spell and projectile SFX

---

## 2. Core Libraries & Dependencies

### Three.js
- **License:** MIT License
- **Copyright:** (c) 2010-2026 Three.js Authors
- **Hosted:** Localized statically in `public/shared/vendor/` and game packages. Zero CDN dependencies.

---

## 3. Classic / Retro Games Suite
All 12 classic 2D canvas games (Toy Tower Defense, Magic Castle Rogue, Drive Mad 2D, Pixel Racer, Top-Down F1, Spaceship Shooter, Meteor Dodge, Candy Bricks, Happy Bee, Happy Snake, Animal Match, Whack-a-Mole) are original clean implementations licensed under the MIT License, utilizing pure Canvas 2D and Web Audio with zero external dependencies.
