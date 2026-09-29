# Hero Siege Wiki · 内容总计划(全貌 × 排产 × 素材映射)

> 📅 本文件 2026-09-25 由 `hero-siege-content-roadmap.md` + `hero-siege-publishing-plan.md` 合并而成并取代两者,一份文档管全:① **游戏内容全貌**与四栏目定位(什么该存在);② **分批搭建日历**(什么时候发、怎么发);③ **素材映射**——每篇待建页挂真实可溯的 YouTube / 官方素材(视频 ID 直达)。
> 站点:**Hero Siege Wiki · herosiegehelper.com** · en 单语 · AnvilWiki 模板(Astro 5 + Cloudflare Pages)
> 现状(2026-09-25 核对):**20 篇全部上线,draft 清零**(guides 15 / bosses 3 / items 1 / codes 1)——首批 12 篇 09-15/16 上线,B1 职业矩阵 6 篇 09-25 发布;已定口径:**写完即发**(数值取官方 PN / 头部创作者源,后核后改)
> 周节奏:周一批内写作 → 周中发布 → 周末 GSC 复盘;周中固定巡检 playherosiege.com 新闻区(7.0.x 补丁)
> 素材底座:`seo-reports/hero-siege-material-sources.md`(117 条视频 + 官方源,yt-dlp 20 组查询去重;youtube-content-gen 式管道:字幕 → 结构化提取 → MDX)
> 配套文档:`seo-reports/hero-siege-launch-plan.md`(建站口径与 apply-template 答案表)· `seo-reports/game-pipeline.md`(选品决策)
> 产线技能:anvil-new-article(单页深写,Step 0 视频字幕提取)· anvil-batch-articles(同构批量)· anvil-update-codes(码)· anvil-refresh(保鲜)

---

## 一、站点定位与内容模型

### 1.1 定位声明

为 Hero Siege 玩家提供**赛季新鲜**的攻略/构筑/Boss/物品 wiki——打官方 wiki.gg 停更 21 个月(1153 文停在 S5,主页最后编辑 2024-12-12)的空窗,内容全部对齐当前 **S10 "Ebontharn"**(2026-08-21 上线,补丁 7.0.x 系)。

- **不追逐**:职业/物品全图鉴(wiki.gg 存量优势,复制无意义)
- **主攻**:S9/S10 新系统(Incarnation Tree、Ether Tree、Relic Storage、新市场、3 新 Uber Boss)+ 赛季循环内容(tier list、开荒、刷金)+ codes 长尾
- **诚实文案红线**:不写 "updated daily by community",只写 "Updated for Season 10"——只承诺能做到的

### 1.2 四板块

| 板块 | 对应游戏的什么内容 | 页面形态(模板能力) | 长期定位 |
|---|---|---|---|
| **Bosses** | 所有 boss 级战斗:九大 Act 关底 Boss + Uber 层(经典三杰 → 现代层 → S10 新三杰) | `boss` 结构化数据卡(HP/弱点/抗性/位置/推荐等级)+ 阶段式打法 H2 + 视频/画廊 | **结构化 Boss 数据库**。大站(Mobalytics/MetaRoad)做 tier list 但不做逐 boss 卡——错位竞争点 |
| **Guides** | 玩法攻略主力:新手、赛季机制、三大系统树(Ether/Incarnation/Talent)、虫洞、刷金、市场、职业构筑与 tier list | 问题式 H2 + 40-60 词 Quick Answer + FAQ + 内链网 | **流量主战场**。常青页 + 赛季页双层,吃最大搜索盘 |
| **Items** | 物品图鉴:1000+ uniques 按 Satanic/Set/Heroic/Angelic/Unholy 分层 + rune words + relics | 数据表 + 逐件页 + 市场价值注记 | **选择性数据库**。不穷举,按 meta 相关性做 100-200 页;最重投入、护城河最深 |
| **Codes** | 兑换码(游戏内聊天 `#` 兑换;官方发码稀少) | `codes:` frontmatter(Active/Expired 自动分区)+ CodeBlock 一键复制 + FAQPage | **低频高意图长尾**。单页常青,竞争近零,是站点信任度的展示窗 |

### 1.3 内容双层模型(赛季制游戏的核心打法)

Hero Siege 是赛季制 live-service:同一关键词的"正确答案"随赛季变。所有内容按两层管理:

| 层 | 内容 | 维护节奏 | 例子 |
|---|---|---|---|
| **常青层 evergreen** | 机制/系统/boss 模式/兑换流程——跨赛季不变的部分 | 写好即可;patch 触碰才更新 `lastModified` | 虫洞机制、Incarnation 树结构、Boss 阶段打法、codes 兑换教程 |
| **赛季层 seasonal** | 数值/排名/开荒/经济——每赛季重写 | **每赛季一轮**:新页或大刷新,必带 `gameVersion` 徽章 | S10 tier list、league starters、赛季经济节奏、新 Uber 打法 |

**赛季流量生命周期**(每赛季重复):① 赛季前(公告~上线)"What's coming in Season N" 预览词抢首发 → ② 首周 league starter / best class 开荒词(流量峰值,布局最大)→ ③ 赛季中 endgame 词(wormhole、Uber、farming、market)长尾积累 → ④ 赛季末盘点/对比词 + 下一赛季预埋。

### 1.4 保鲜纪律

对齐 `anvil-refresh` 审计:codes 页 >7 天必看、分类 >90 天标过期;**每个 7.0.x 平衡补丁 = tier list/构筑文的 `lastModified` 更新点**;S11 预热按 S9→S10 间隔 ≈4.7 个月预估 2027-01 上线,赛季前 2 周(约 2026-12 下旬)启动预览词。

---

## 二、游戏内容全貌(游戏里有什么 → 站上已建/待建什么)

> 图例:✅ = 已上线(2026-09-25);素材缩写:**PN** = 官方 patch notes(playherosiege.com 新闻区)· **YT** = 素材库视频(括号内为 YouTube 视频 ID,见 `seo-reports/hero-siege-material-sources.md`)· **IG** = 进游戏实测(数值终审)。待建页的批次归属见第四节日历。

### 2.1 Bosses(已建 3,目标 ~20 页)

**游戏全貌**:boss 分三层——① **九大 Act 关底 boss**(campaign,Act 1-9;Act 9 为 S10 新增终盘);② **Uber 层**:经典三杰 Damien / Reaper / Sung Lee → 现代层 Gabriel / Amun Ra / Luna → S10 新三杰 **Phantom Leviathan / Captain Grimtide / Blood Maiden**;③ **难度变体**(Inferno 全 Act 通关路线)。页面形态:`boss` 数据卡 + 阶段式打法 + 视频/画廊。**定位:结构化 Boss 数据库**——逐 boss 卡是大站不做的错位竞争点。

已建 ✅:

| 页面 | slug |
|---|---|
| S10 三新 Uber 总览 | hero-siege-uber-bosses-guide |
| 九大 Act 关底总览 | hero-siege-act-bosses-guide |
| 经典 Uber 三杰合页 | hero-siege-classic-uber-bosses |

待建:

| 批次 | 页面(目标词) | slug | 素材 |
|---|---|---|---|
| B4 | 现代层三 Uber 合页(hero siege amun ra / uber luna) | hero-siege-gabriel-amun-ra-luna | YT:amaggixz(IwLbEBtuPPQ)+ imortilize Uber Luna(DwBK086D_CU) |
| B4 | S10 新三杰逐 boss 单页 ×3,带独立 boss 卡(hero siege phantom leviathan…) | hero-siege-phantom-leviathan / -captain-grimtide / -blood-maiden | YT:JuxtAPoser 三新 Uber(zW19irbJpu4)+ imortilize(DwBK086D_CU)+ IG 补卡 |
| B7 | 经典三杰拆单页 ×3(hero siege uber damien / reaper / sung lee) | hero-siege-damien-boss / -reaper-boss / -sung-lee-boss | YT:Benderdin(X58xZcymvb0)拆分 + IG 补卡 |
| B7 | 现代层拆单页 ×3(gabriel / amun-ra / luna) | hero-siege-gabriel-boss / -amun-ra-boss / -luna-boss | B4 合页素材拆分 + amaggixz(IwLbEBtuPPQ) |
| B7 | Act 关底精选单页 ×5(按热度先 Act 1/3/5/7/9,含 Act 9 终盘 Cthulhu 型专页) | hero-siege-act-1-boss 等 | YT:Jcob 九 Act Inferno 实战(qffIoObV9xw)+ Sleepy Cat Boss 通用教学(b-VKVjSAVhY)+ IG 补卡 |
| B9 | Inferno 难度全 Act 通关路线(hero siege inferno acts) | hero-siege-inferno-acts-guide | YT:Jcob(qffIoObV9xw)+ IG |

### 2.2 Guides(已建 15,目标 ~40 页,流量主战场)

**游戏全貌**:Hero Siege 的玩法系统树——① **三棵成长树**:职业技能树 + **Talent 树**(S10 +600 节点)+ **Ether Tree**(S10 +100 节点 + Ether Quests)+ **Incarnation Tree**(S9 引入,1600+ 节点,100 级解锁);② **endgame 双轨**:虫洞无限爬层(社区打到 WH137)+ Uber Boss;③ **经济环**:Tarethiel Market(S10 rework)+ 刷金 + 采矿业 + Chaos Towers;④ **进阶系统**:Codex of Eternity(自定义词缀区,刷 Angelic)、relics(可升 10 级,S10 加 Relic Storage)、难度阶梯(Normal→Nightmare(S10 rework)→Hell→Inferno);⑤ **职业**:wiki.gg 记 22 个(S5 时点,S10 现值待核)——已知名单含 Viking、Pyromancer、Amazon、Marksman、Butcher、Bard、Pirate、Prophet、Demon Spawn、Paladin、Nomad、Stormweaver、Marauder、Plague Doctor、Shield Lancer、Jötunn(S10 起转免费四职业)等。

已建 ✅:

| 页面 | slug |
|---|---|
| 新手/回坑 | hero-siege-beginner-guide |
| S10 赛季总览 | hero-siege-season-10-guide |
| S10 职业 tier list | hero-siege-class-tier-list |
| Ether Tree | hero-siege-ether-tree-guide |
| Incarnation Tree | hero-siege-incarnation-tree-guide |
| 虫洞 | hero-siege-wormhole-guide |
| 刷金 | hero-siege-gold-farming-guide |
| 市场/交易 | hero-siege-market-guide |
| League starters | hero-siege-league-starter-builds |
| 职业构筑 6 篇(B1) | hero-siege-viking-build / -marksman-build / -pyromancer-build / -paladin-build / -nomad-build / -stormweaver-build |

待建:

| 批次 | 页面(目标词) | slug | 素材 |
|---|---|---|---|
| B2 | Codex of Eternity(hero siege codex) | hero-siege-codex-guide | YT:Sleepy Cat(gHH9XjC9d90 教程 + WqEmmQBQDWs 刷 Angelic) |
| B2 | Relics 详解(hero siege relics) | hero-siege-relics-guide | YT:Protein(Rkff1_HX01Q)+ DonTheCrown(CsmgVzJxphE);备用 Beard Maps(_vyHNslSNig)/ Jexl(2OCvWKSKc04) |
| B2 | 难度推进 · S10 Nightmare rework(hero siege difficulty) | hero-siege-difficulty-guide | PN + YT:Sleepy Cat Normal→Hell 推进(ipLaS3s8CNg) |
| B2 | 采矿业(hero siege mining) | hero-siege-mining-guide | YT:ItsAdiar(YlI6x0pCJ0g)+ AyAyo(iJSFAdlHUzw) |
| B5 | 转免费四职业构筑(hero siege marauder build 等,**新闻钩子**) | hero-siege-marauder-build / -plague-doctor-build / -shield-lancer-build / -jotunn-build | 钩子源:Mobalytics(S10 起免费);机制待 IG/PN 核 |
| B5 | Butcher / Bard / Amazon 构筑 | hero-siege-butcher-build / -bard-build / -amazon-build | YT:JuxtAPoser Butcher(e3WuTPYYerI)+ Jcob Bard(qffIoObV9xw)+ Amazon 官方 trailer 沿革(g75lotaqqrs) |
| B8 | 全职业收尾:Prophet / Demon Spawn / Pirate / Illusionist 及名单其余 | 先 IG 核当前全职业名单再定 slugs | YT:Demon Spawn leveling(um8KYkkUcWc);其余职业矩阵同模板反重复 |
| B9 | 升级 1-100 快线(hero siege leveling guide) | hero-siege-leveling-guide | YT:DonTheCrown(p0Lix1Dn6A8)+ Sleepy Cat(hcLj04ph3vM) |
| 滚动 | 赛季层:S11 tier list / S11 starters / 新系统页(每赛季一轮替换) | — | PN |

### 2.3 Items(已建 1,目标 ~25-40 页,选择性数据库)

**游戏全貌**:loot 分随机词缀装备 + **1000+ 手工 uniques**,稀有度阶梯普通 → … → **Satanic / Set / Heroic / Angelic / Unholy**(顶部两级是社区刷 "first Angelic" 的 holy grail);S10 新增 24 件;配套系统 **runes / rune words**(类 Diablo 镶嵌配方)、**relics**(可升 10 级 + S10 Relic Storage)、augments / glyphs;获取靠掉落 + 市场(Tarethiel Market,S10 rework)。**定位:选择性数据库**——不穷举,按 meta 相关性做,与职业矩阵 1:1 挂 BiS 页。

已建 ✅:

| 页面 | slug |
|---|---|
| uniques / rune words 总览 | hero-siege-uniques-overview |

待建:

| 批次 | 页面(目标词) | slug | 素材 |
|---|---|---|---|
| B3 | 五档分层总览 ×5(hero siege angelic items 等) | hero-siege-angelic-items / -unholy-items / -satanic-items / -set-items / -heroic-items | wiki.gg 纠错参照 + IG + YT:Squid RPG first Angelic(18rmIPXk-_g) |
| B3 | BiS 起步 2 篇(hero siege viking bis 等) | hero-siege-viking-bis / -marksman-bis | 对应职业构筑视频源(Graxy_TV DM-4icNrU1w / JuxtAPoser 44HjYn2y0i4) |
| B6 | BiS 补全(先补 B1 六职业余量 4 篇,再随 B5 新职业扩展) | hero-siege-pyromancer-bis 等 | 职业矩阵对应视频源 |
| B6 | Rune words 逐条页 ×5-10(hero siege runewords) | hero-siege-runewords(总页)+ 高频条目 | IG + wiki.gg 纠错参照 |
| B10 | 明星单件页 ×8-15(市场价高热度大者先)· 套装页 · Relics/Augments/Glyphs 专页 ×3 | hero-siege-<item-name> | IG + 市场观察 + GSC 数据回流;YT:Craft & Upgrade(WuYgkqMe8uY)+ Codex 刷 Angelic(WqEmmQBQDWs) |

### 2.4 Codes(已建 1,单页常青)

**游戏全貌**:兑换码在游戏内**聊天输入 `#`** 呼出兑换窗;官方发码稀少、无固定节奏,渠道为官方 Discord / Facebook / X(均在登录墙内,人工核对)。已知历史码 `HHEBGIFT`(2023 前后 FB 礼包,已过期);**现役活跃码:截至 2026-09 中旬无确认**——页面诚实标注。

已建 ✅:

| 页面 | slug |
|---|---|
| all-codes 总页(诚实标注无活跃码) | all-codes |

维护(滚动,无新页):**官方渠道出码 → anvil-update-codes 即时更新**;每赛季核对一次;过期码转 expired 表吃 "is X still working" 长尾。

---

## 三、产线与红线

### 3.1 产线映射(哪类页走哪条线)

| 页面类型 | 产线 | 要点 |
|---|---|---|
| 系统深度页、赛季页、总览页、boss 单页 | **anvil-new-article**(单页深写) | Step 0 视频字幕 → 结构化提取 → MDX;数值红线 |
| 同构批量页(职业构筑/BiS/tier 总览/rune words) | **anvil-batch-articles**(csv → `pnpm bulk-new-posts` → 统一模板逐篇填 → 全批验收) | 同批反重复(开头句式/小节命名/表头不得模板化复用,防 doorway pages);清单里无素材支撑的词不做 |
| codes 更新 | **anvil-update-codes** | 只认官方渠道;过期即转 expired |
| 周期保鲜 | **anvil-refresh** | codes>7d、分类>90d;7.0.x 平衡补丁 = tier/构筑刷新触发器 |

素材优先序:**官方 patch notes(playherosiege.com 新闻区)> 素材库 117 条视频(已核实标题/频道/时长)> 进游戏实测(数值终审)**。

### 3.2 每批标准 SOP

```
1. 写作   anvil-new-article(单页深写)/ 同构批手写+反重复;数值"社区报告/待核验"措辞
2. 门禁   pnpm check-content && pnpm typecheck && pnpm build && pnpm check-links
3. 封面   pnpm gen-covers(1200×675,自动接线 frontmatter image)
4. 构建   SITE_URL=https://herosiegehelper.com pnpm build
5. 发布   env -u http_proxy -u https_proxy -u HTTP_PROXY -u HTTPS_PROXY npx wrangler pages deploy
6. 提交   pnpm submit-indexnow(新 URL 推 Bing/Yandex/Seznam)
7. 复盘   上线 7 天看 GSC 展示/查询;高展示低点击的页改 title/description
```

### 3.3 红线(违反即废稿)

1. **禁止编造**:数值、掉率、兑换码、boss 名单——没有官方源/实测就不写定值;写完即发口径下,无官方源的数值用"社区报告/待核验"措辞。
2. wiki.gg / fandom 只作纠错参照,**禁止复制文本**(演绎/重复内容风险)。
3. 他人视频字幕只做事实参考,正文完全重写;嵌入原视频/官方预告为合规做法。
4. 内链只指真实存在的页面;批量后 `check-content` + `build` + `check-links` 三门禁必绿;正文 ≥3 条站内链接,tags 只从词汇表取(现役 15 个:`builds` `classes` `season-10` `systems` `endgame` `beginner` `tier-list` `farming` `economy` `items` `codes` `boss` `uber` `campaign` `patch-notes`)。
5. 视频/官方案例先核后引:转载镜头优先官方频道(panicartstudios)与素材库 E 组无解说长视频;他人实况嵌入须注明出处。

---

## 四、分批搭建日历(每批 = 一周)

> 各批页面明细与素材在 §2 各表(按批次列取用)。B3+ 的顺序在每批 GSC 复盘后允许按数据调整。

| 批次 | 周期 | 主题 | 页面构成 | 状态 |
|---|---|---|---|---|
| **B1** | 09-22 当周 | **职业构筑矩阵 Ⅰ** | guides ×6:Viking / Marksman / Pyromancer / Paladin / Nomad / Stormweaver(§2.2 已建表) | ✅ 2026-09-25 已发布 |
| **B2** | 2026-09-28 当周 | **系统深化** | guides ×4:Codex / Relics / Difficulty / Mining(§2.2) | ✅ 2026-09-29 已发布 |
| **B3** | 第 3 周 | **Items 分层总览 + BiS 起步** | items ×5 分层 + BiS ×2(§2.3) | ✅ 2026-09-29 已发布(提前) |
| **B4** | 第 4 周 | **Bosses P2** | bosses ×4:现代层合页 + S10 新三杰逐 boss(§2.1) | ✅ 2026-09-29 已发布(提前) |
| **B5** | 第 5 周 | **职业矩阵 Ⅱ**(新闻钩子) | guides ×7:转免费四职业 + Butcher / Bard / Amazon(§2.2) | ✅ 2026-09-29 已发布(提前) |
| **B6** | 第 6 周 | **BiS 补全 + rune words** | items:BiS 余量 4 + runewords 总页与高频条目(§2.3) | 待启动 |
| **B7** | 第 7-8 周 | **补全:逐 Boss 深化** | bosses ×11:经典三杰拆卡 ×3 + 现代层拆卡 ×3 + Act 关底精选 ×5 含 Act 9 专页(§2.1) | 待启动 |
| **B8** | 第 9 周 | **补全:全职业收尾** | guides ×~7:Prophet / Demon Spawn / Pirate / Illusionist 等(IG 先核名单再定 slugs)(§2.2) | 待启动 |
| **B9** | 第 10 周 | **补全:流程与机制参考层** | guides ×~7:Act 分段 walkthrough ×3(1-3 / 4-6 / 7-9)+ attributes + crafting + hardcore&coop + leveling(§2.1/2.2) | 待启动 |
| **B10** | 第 11 周+ | **补全:物品深水区** | items ×10-15 滚动:明星单件 / 套装 / relics-augments-glyphs(§2.3) | 待启动 |
| 滚动 | 随时 | codes 出码即更 / 7.0.x 平衡补丁 → tier+构筑刷新 `lastModified` / **S11 预热**(预估 2027-01,赛季前 2 周即 2026-12 下旬启动预览词) | §2.4 | 常态 |

### 补全批次(B7-B10)的定位说明

B1-B6 跑完 ≈ 57 页,**能撑起四栏目骨架,但按「意图全覆盖」标准还有四个缺口**:① Boss 只有合页没有逐 boss 卡(wiki 与博客的分界线);② 全职业矩阵缺 ~7 个;③ **Act 分段 walkthrough 整层空白**(新手大流量词);④ 物品的套装/打造/明星单件深水区。B7-B10 逐周补齐后,成熟态 ~90-110 页,即转入「保鲜 + 按 GSC 数据扩页」模式。优先级原则不变:每篇立项必须有素材来源与真实搜索意图,不为凑"完整"造薄页。

### 已收口决策

- **`classes` 第 5 分类:不开**(2026-09-25 评审)——职业构筑页已按 `/guides/` URL 发布并推过索引,迁移分类等于 URL 重置收录;职业矩阵归 Guides 轨,`guides/<class>-build` 路径长期保留。

---

## 五、KPI 与调整机制

- **每批 +7 天**:GSC「效果」看新页展示量与查询词;把"有展示无点击"的页列入 title/description 优化清单
- **每批 +14 天**:对比收录数(GSC 页面索引报告);若某主题收录快、排名升,下一批加码同主题
- **每周**: `anvil-refresh` 保鲜扫描 + 补丁巡检;balance 改动 = tier/构筑刷新触发器
- **数据回流**:GSC 查询词中出现计划外的高展示词 → 插队立项(插 B 队列,不另开批次)
- **复查挂钩**:与 `seo-reports/game-pipeline.md` 复查节奏同步;约 2026-10-06 复查 wiki.gg 是否复活——若复活,差异轴从「停更补位」转向「结构化快答 + 赛季时效」

## 六、总量与优先级总览

| 板块 | 已建 | 待建(按批) | 成熟态 |
|---|---|---|---|
| Bosses | 3 | B4 ×4 → B7 ×11 → B9 ×1 | ~10-20 |
| Guides | 15 | B2 ×4 → B5 ×7 → B8 ×~7 → B9 ×~7 → 每赛季 3-5 滚动 | ~40 |
| Items | 1 | B3 ×7 → B6 ×5+ → B10 ×10-15 | ~25-40 |
| Codes | 1 | 0(常青单页滚动维护) | 1 |
| **合计** | **20** | **B1-B6 ≈ +37 → B7-B10 ≈ +40** | **~90-110** |

执行顺序进展(2026-09-29 更新):首批 14 篇转正上线(09-15/16)→ B1 职业矩阵 6 篇(09-25)→ **B2+B3+B4+B5 共 22 篇于 09-29 一次性提前发布**(站点 42 篇:guides 26 / bosses 7 / items 8 / codes 1),B6-B10 按日历推进,每批 GSC 复盘后允许调序。注意:字幕提取通道本轮被 YouTube 限流(429),B2/B3/B4/B5 依「素材库已核实元数据 + 社区报告措辞」口径产出——B4 逐 boss 页与 B5 免费四职业页的机制细节留了复查钩子,字幕恢复后走 anvil-refresh 补深。

## 七、B2 启动前一次性检查(2026-09-25 列,做完勾掉)

- [x] **git 提交整树**——2026-09-26 已完成(2 个 commit 推送至 zx5bb285/AnvilWiki,站点源码首次入库)
- [ ] codes 页保鲜核对——`lastModified` 2026-09-15 已超 7 天红线,走一遍 codes 核对流程(无新码也确认一次诚实口径)
- [ ] GSC 确认——资源已验证 + sitemap 已提交(KPI 机制的依赖;另 `PUBLIC_CF_BEACON_TOKEN` 仍为空,CF Web Analytics 未开,建议一并填上)

## 八、与其他文档的关系

- `seo-reports/hero-siege-material-sources.md`:117 条视频完整表(本文件只挂每页主素材 ID)+ 官方一手源 + 竞争参照 + 受阻与未测声明
- `seo-reports/hero-siege-launch-plan.md`:建站口径、apply-template 18 项答案表、首批 12 篇映射
- `seo-reports/game-pipeline.md`:选品决策管理表(Hero Siege 的入选依据与复查日)
