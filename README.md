# 小小游戏厅 (Kids Arcade) 🎮👶

专为 **4～6 岁低龄儿童**量身定制的纯净、安全、无广告、可离线游玩的 Web / PWA 小游戏集合站。

- 🚀 **部署方案**: Cloudflare Workers + Workers Static Assets
- 📦 **配置规范**: `wrangler.jsonc` (`assets: { "directory": "./dist" }`)
- 🔒 **儿童隐私保障**: 0 广告、0 广告 SDK、0 统计追踪、0 外部依赖 CDN、0 社交系统、0 账号充值
- 📱 **移动端全适配**: iPhone (Dynamic Island / 刘海屏适配)、iPad、Android 手机和平板，支持触摸与防误触
- ⚡ **离线就绪 (PWA)**: Service Worker 自动离线缓存，断网也能畅玩

---

## 🎪 第一期 12 款小游戏全景

| # | 游戏名称 | 类别 | 核心机制 | 适合低龄特点 | 开源许可 / 来源状态 |
|---|---|---|---|---|---|
| 1 | 🏰 **玩具塔防** | 塔防 | 点空地建塔、升级、自动射击、1x/2x倍速 | 简化资源计算，可爱史莱姆，大按钮 | 基于 `ISmiiukha/tower-defense` 模型轻量化重构 (MIT) |
| 2 | ⚡ **魔法城堡** | 肉鸽塔防 | 挂机射击、波次胜利选魔法大卡片 | 纯大图标技能选择（闪电/寒冰/火球/护盾） | 基于 `CNSleepybear/...` 移除文字繁杂项 (MIT) |
| 3 | 🚙 **疯狂大脚车** | 物理赛车 | 倒车/前进大踏板、弹簧悬挂越野 | 彻底剥离外部远程 WASM，防翻车缓冲 | 原创独立 2D 悬挂物理引擎重写 (MIT) |
| 4 | 🏎️ **像素赛车** | 街机赛车 | 点击左侧向左、点击右侧向右 | 左右分区极简控制，3颗心生命，收集金星 | 基于 `Elomami1976/pixel-racer` 适配 (MIT) |
| 5 | 🏁 **极速F1赛车** | 赛车 | 滑动或大按键转向、草地减速、3圈计数 | 避免硬碰撞挫败，草地软减速，挥旗庆祝 | 基于 `kazukiminemura/racing-game` 简化 (MIT) |
| 6 | ✈️ **太空小飞机** | 飞行射击 | 单指拖动飞机、自动射击、三连射升级 | 卡通治愈风，无血腥，大Boss对决 | 基于 `alfredang/spaceship-shooter-game` 调优 (MIT) |
| 7 | 🚀 **躲避陨石** | 敏捷躲避 | 单手自由拖动火箭、躲陨石、接星星 | 剔除推广外链，圆润陨石，星星金币提示 | 基于 `codebyartcom/meteor-dodge-codebyart` 优化 (MIT) |
| 8 | 🧱 **糖果打砖块** | 经典弹球 | 手指滑动大号挡板、彩虹糖果砖块 | 底部增设「安全弹簧网」，掉球自动弹回 | 基于 `samecchang/BrickBreaker` 护眼优化 (MIT) |
| 9 | 🐝 **快乐小蜜蜂** | 飞翔跳跃 | 点击屏幕任意位置煽动翅膀、穿过彩云 | 规避原版版权风险，超宽安全云洞，3条命 | 原创独立实现，超平缓幼儿重力 (MIT) |
| 10 | 🐍 **贪吃贪玩蛇** | 益智贪吃 | 屏幕大方向键 + 滑动操控、吃水果 | 撞墙不暴毙！闪烁扣心并安全穿墙，3条命 | 基于 `LluisDam/snake-game-js` 增加防挫保护 (MIT) |
| 11 | 🃏 **动物翻翻乐** | 记忆翻牌 | 2×3 宝宝入门模式 & 3×4 进阶模式 | 🐶🐱🐰🐼 高对比可爱动物/水果 Emoji | 基于 `sen-ltd/memory-game` 纯静态实现 (MIT) |
| 12 | 🐭 **欢乐打地鼠** | 反应打击 | 3×3 巨型草洞、30秒/60秒计时 | 纯触屏大目标打击，Web Audio 清脆锤击声 | 基于 `OwPor/OwGames` 剥离 CDN 并适配 (MIT) |

---

## 🛠️ 技术架构

```
mygames/
├── dist/                      # 构建产物 (Cloudflare Workers Static Assets 目录)
├── public/                    # 静态源码
│   ├── index.html             # 游戏大厅主页 (含2秒长按家长闸门、PWA注册)
│   ├── manifest.webmanifest   # PWA 安装清单
│   ├── sw.js                  # Service Worker 离线缓存脚本
│   ├── icons/                 # 矢量高清图标与 Favicon
│   ├── shared/                # 统一游戏底座 (game-shell)
│   │   ├── game-shell.css     # 统一安全边距、弹窗、大按钮样式
│   │   └── game-shell.js      # Web Audio 音频合成器、全屏、生命记录、返回大厅
│   └── games/                 # 12 款独立可运行的小游戏目录
├── src/
│   └── worker.ts              # Cloudflare Worker 代理与严苛儿童安全 CSP 响应头
├── scripts/
│   ├── build.mjs              # 静态打包输出脚本
│   └── dev.mjs                # 本地 0 依赖极速开发服务器
├── package.json
├── wrangler.jsonc             # 最新 Cloudflare Workers Static Assets 配置
└── THIRD_PARTY_NOTICES.md     # 严格的第三方许可与版权声明
```

---

## 🚀 本地开发与调试

本项目采用纯原生技术栈，无需庞大编译链：

```bash
# 1. 安装依赖
npm install

# 2. 启动本地实时开发预览服务器
npm run dev
```

打开浏览器访问：`http://localhost:3000`

---

## ☁️ 构建与部署到 Cloudflare Workers

本项目使用 Cloudflare 推荐的最新 **Workers Static Assets** 模式：

```bash
# 1. 打包静态资源至 dist/
npm run build

# 2. 部署到 Cloudflare
npx wrangler deploy
```

部署完成后，你将获得一个默认运行地址：
`https://kids-arcade.<your-subdomain>.workers.dev`

---

## 🌐 绑定自定义域名 `game.yuewang.eu.cc`

在 Cloudflare 控制台中将自定义域名绑定到该 Worker：

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** -> 点击刚刚部署的 **kids-arcade**
3. 选择 **Settings** (设置) -> **Domains & Routes** (网域与路由)
4. 点击 **Add** (添加) -> 选择 **Custom Domain** (自定义网域)
5. 输入计划绑定的域名：`game.yuewang.eu.cc`
6. 点击确定，Cloudflare 会自动完成 DNS 记录解析与自动 SSL 证书颁发。

---

## 🛡️ 儿童安全与隐私保障

- **无第三方脚本**: 不拉取任何外部 Google Analytics、Facebook Pixel、热力图或广告 SDK。
- **无外部字体/资源 CDN**: 严格杜绝从公共 CDN 请求 JavaScript 或 WebFont，避免网络阻塞或追踪隐患。
- **Web Audio 纯合成音效**: 所有按钮点击音、金币音、激光音、通关欢呼乐均由浏览器内置 Web Audio API 动态合成，0 音频文件体积，0 网络加载等待。
- **家长控制门禁**: 首页齿轮 ⚙️ 需持续长按 **2 秒** 方可呼出设置面板，包含游戏显隐管理、声音总开关与成绩清空，防止幼儿误触。
- **本地存储**: 得分与星星仅保存于设备 `localStorage` 中，绝不向任何远程服务器传输个人数据。
