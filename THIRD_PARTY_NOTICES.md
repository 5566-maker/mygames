# 第三方开源项目许可声明 (Third-Party Notices)

本项目「小小游戏厅」(Kids Arcade) 致力于为 4～6 岁儿童提供绝对安全、无广告、无内购、无隐私追踪的纯净游戏体验。

在项目设计与实现中，我们严格遵循开源许可证，剔除了所有第三方广告 SDK、追踪代码（如 Google Analytics、Facebook Pixel、AdSense 等）及外部不可靠 CDN，并针对幼儿操作习惯（大按钮、免读文字、温和防挫折机制）进行了针对性适配与重构。

---

## 许可清单与致谢

### 1. 普通塔防 (Toy Tower Defense)
- **参考项目**: `ISmiiukha/tower-defense` (https://github.com/ISmiiukha/tower-defense)
- **原作者**: ISmiiukha
- **许可证**: MIT License
- **处理方式**: 原项目采用 React 19 + TypeScript + Vite 重型框架。针对儿童及 Cloudflare Workers 静态托管场景，本项目参考其路径寻路与炮塔攻击数学模型，使用纯原生 Canvas / JavaScript 独立重构为轻量级、无依赖、触摸友好的玩具塔防。

### 2. 肉鸽塔防 (Rogue Defense)
- **参考项目**: `CNSleepybear/tower-defense-roguelike-afk` (https://github.com/CNSleepybear/tower-defense-roguelike-afk)
- **原作者**: CNSleepybear
- **许可证**: MIT License
- **处理方式**: 采用原项目 Canvas 自动战斗与多重弹道核心逻辑，移除了繁杂中文属性文字，将技能升级卡牌重构为低龄儿童直观易懂的大图标卡片（冰冻、连射、雷电、护盾），并集成至 Kids Arcade 统一外壳。

### 3. 疯狂卡车 (Drive Mad Buggy)
- **参考项目**: `md-abu-kayser/drive-mad` (https://github.com/md-abu-kayser/drive-mad)
- **原作者**: md-abu-kayser
- **许可证**: MIT License
- **处理方式**: 原仓库外链了第三方 OpenProcessing 远程 WASM，存在离线失效与版权不确定风险。本项目完全剔除外部 WASM，基于 Canvas 独立实现了一套弹簧悬挂物理特性的幼儿卡车越野小游戏，配备大号加速/刹车/平衡按键，不会轻易翻车丧命。

### 4. 像素赛车 (Pixel Racer)
- **参考项目**: `Elomami1976/pixel-racer` (https://github.com/Elomami1976/pixel-racer)
- **原作者**: Elomami1976
- **许可证**: MIT License
- **处理方式**: 适配原项目零依赖 Canvas 像素画风赛车，优化屏幕左/右触控分界，放宽碰撞判定，加入收集金星道具与防猝死缓冲。

### 5. 极速赛车 (F1 Racing)
- **参考项目**: `kazukiminemura/racing-game` (https://github.com/kazukiminemura/racing-game)
- **原作者**: Kazuki Minemura
- **许可证**: MIT License
- **处理方式**: 简化了对幼儿来说过于复杂的环形漂移转角力学，改为直观的触摸拖拽转向与大油门加速，增添欢呼音效。

### 6. 太空小飞机 (Spaceship Shooter)
- **参考项目**: `alfredang/spaceship-shooter-game` (https://github.com/alfredang/spaceship-shooter-game)
- **原作者**: Alfred Ang
- **许可证**: MIT License
- **处理方式**: 借鉴其单文件 Canvas 射击与 Web Audio 音效，去除暗黑硬核元素，改用明亮可爱的卡通太空战机造型，提供单指拖动跟随与自动射击。

### 7. 躲避陨石 (Meteor Dodge)
- **参考项目**: `codebyartcom/meteor-dodge-codebyart` (https://github.com/codebyartcom/meteor-dodge-codebyart)
- **原作者**: CodeByArt
- **许可证**: MIT License
- **处理方式**: 清理了原仓库中的外部推广链接与外链，保留单手拖拽火箭躲避陨石与收集能量星的核心机制。

### 8. 糖果打砖块 (Candy Brick Breaker)
- **参考项目**: `samecchang/BrickBreaker` (https://github.com/samecchang/BrickBreaker)
- **原作者**: samecchang
- **许可证**: MIT License
- **处理方式**: 采用 Canvas 单文件打砖块核心反射算法，增大底部挡板触摸区域，加入底部安全弹簧保护网，避免小球落地导致儿童沮丧。

### 9. 快乐小蜜蜂 (Sky Hopper)
- **参考项目**: `UsmanDanial04/Flappy-Bird-Game` (https://github.com/UsmanDanial04/Flappy-Bird-Game)
- **原作者**: Usman Danial
- **许可证**: MIT License
- **处理方式**: 严格规避 Flappy Bird 原版版权美术与音效风险，原创设计为「快乐小蜜蜂飞彩云」，增大穿越间隙，将硬核重力减半，引入 3 颗爱心生命系统。

### 10. 贪吃贪玩蛇 (Gentle Snake)
- **参考项目**: `LluisDam/snake-game-js` (https://github.com/LluisDam/snake-game-js)
- **原作者**: Lluis Dam
- **许可证**: MIT License
- **处理方式**: 采用其结构优秀的 Canvas 有限状态机代码，移除撞墙即死的挫败感，增加穿墙环绕与 3 颗心儿童保护模式，并增加大尺寸虚拟方向键盘与滑动控制。

### 11. 动物翻翻乐 (Memory Match)
- **参考项目**: `sen-ltd/memory-game` (https://github.com/sen-ltd/memory-game)
- **原作者**: SEN Ltd
- **许可证**: MIT License
- **处理方式**: 采用其纯原生 ES Module 记忆翻牌逻辑，锁定低龄专用的 2×3 (6张卡) 与 3×4 (12张卡) 模式，使用高对比度可爱动物与水果 Emoji。

### 12. 欢乐打地鼠 (Whack-a-Mole)
- **参考项目**: `OwPor/OwGames` (https://github.com/OwPor/OwGames)
- **原作者**: Ray Vincent Concepcion
- **许可证**: MIT License
- **处理方式**: 提取 Whack-a-Mole 模块，剥离 Tailwind 外部 CDN，内联自适应 CSS，增设 30 秒幼儿模式与大号触碰洞口，配合 Web Audio 合成锤击音效。

---

## 隐私与安全承诺
本项目不包含：
- 任何广告代码或广告联盟 SDK
- 任何统计追踪脚本 (Google Analytics, Baidu, Facebook Pixel, Umami 等)
- 任何外部字体/样式/脚本 CDN（全部采用系统字体与本地打包资源）
- 任何后端用户收集与网络请求
