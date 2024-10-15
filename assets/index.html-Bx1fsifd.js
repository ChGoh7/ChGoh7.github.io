import{_ as t,c as e,a,o as n}from"./app-CtRQcGt5.js";const l={};function s(o,i){return n(),e("div",null,i[0]||(i[0]=[a('<h2 id="整体研发流程" tabindex="-1"><a class="header-anchor" href="#整体研发流程"><span>整体研发流程</span></a></h2><div class="vp-steps"><ol><li><p>团队共同确认目标和规划,开会讨论，产出目标和规划文档</p></li><li><p>产品调研和需求分析，产出调研报告和需求分析文档或需求规格说明书</p></li><li><p>产品调研和需求分析，产出调研报告和需求分析文档或规格说明</p></li><li><p>需求评审，开需求评审会，明确要做的需求和工作，评估工作量并明确工作时间节点。</p></li></ol><p>需求确认检查，部分可能遇到的问题：</p><p>（1）需求说明清晰吗？有没有可能造成误解？</p><p>（2）需求的来源（如人员、规则、文档）弄清了吗？需求的最终说明是否已经根据或对照最初来源检查过？</p><p>（3）需求是否用定量的术语界定？（越关键性的需求越要采用定量的方式陈述）</p><p>（4）其他哪些需求和此需求相关？是否已经使用交叉索引矩阵或其他机制清楚地加以说明？</p><p>（5）需求是否违背某个系统领域的约束？</p><p>（6）需求是否可测试？如果可以，能否说明检验需求的测试（有时称为确认准则)？</p><p>（7）对已经创建的任何系统模型，需求是否可追溯？</p><p>（8）对整体系统/产品目标，需求是否可追溯？</p><p>（9）规格说明<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 的构造方式是否有助于理解、轻松引用和翻译成更技术性的工作产品？</p><p>（10）对已创建的规格说明是否建立了索引？</p><p>（11）和系统性能、行为及运行特征相关的需求说明是否清楚？哪些需求是隐含出现的？</p><ol start="5"><li>方案设计产出方案设计文档，比如数据库表设计、页面设计、接口设计等</li><li>开发阶段，包括各自开发、单元测试、前后端联调等</li><li>测试和验收，包括研发自测、产品验收、组内验收等</li><li>代码提交，提交可上线的代码，需要由负责人审查，通过后可合并</li><li>部署上线，将代码发布到服务器上，组内进行上线通知并更新上线文档，上线后需要自行验证</li><li>产品迭代，持续收集用户对新功能的反馈、并进行数据分析，从而验证改动效果，便于下一轮的更新迭代。</li></ol></div><details class="hint-container details"><summary>沟通</summary><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>沟通</strong></p><p>在技术活动开始前，和客户（或其他利益相关者）进行沟通和协作。目的是理解利益相关者的项目目标，并收集需求以定义软件特性和功能。</p></div></details><details class="hint-container details"><summary>策划</summary><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>策划</strong></p><p>策划活动就好比地图，称为软件项目计划，用以指导团队的项目旅程，它定义和描述了软件工程工作，包括需要执行的技术任务、可能的风险、资源需求、工作产品和工作进度计划。</p></div></details><details class="hint-container details"><summary>建模</summary><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>建模</strong></p><p>一个描述项目构想的草图，用以理解整个项目的体系结构、不同构件如何结合以及其他特性。如果有需要，可以将草图不断细化，以更好理解问题并找到解决方案。</p></div></details><details class="hint-container details"><summary>构建</summary><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>构建</strong></p><p>对所做设计进行构建，包含编码和测试。</p></div></details><details class="hint-container details"><summary>部署</summary><div class="hint-container note"><p class="hint-container-title">注</p><p><strong>部署</strong></p><p>软件（ 全部或者部分增量 ）交付给用户，用户对其评测并给出反馈意见。</p></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对于许多项目来说，随着项目的开展，框架活动可以迭代运用，以上五个活动会不断重复。每次项目迭代都会产生一个 <strong>软件增量（ software increment ）</strong>，每个软件增量实现了部分软件特性和功能。随着每次软件增量的产生，软件逐渐完善。</p><p>以上<strong>产品迭代</strong>就相当于于部分增量，在用户使用过程中收集反馈，进行增量迭代。</p><p>详细参考<a href="https://chgoh7.site/notes/JavaEE/glv0cp3d/#%E8%BD%AF%E4%BB%B6%E8%BF%87%E7%A8%8B" target="_blank" rel="noopener noreferrer">软件过程</a>的软件工程过程框架</p></div><h2 id="开发规范" tabindex="-1"><a class="header-anchor" href="#开发规范"><span>开发规范</span></a></h2><h3 id="开发前注意事项" tabindex="-1"><a class="header-anchor" href="#开发前注意事项"><span>开发前注意事项</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>确保自己充分理解了业务和需求，需要先进行整体的方案设计；尤其是对于重要需求和核心业务，必须先跟组内成员核对方案并通过后，才能下手开发，避免重复工作。</p></div><ul><li>先熟悉项目再开发，建议阅读项目文档、项目代码、接口文档、前端组件文档等。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>慎重引入新的依赖或类库、或者升级版本，重大依赖变更需要和组内其他成员确认。</p></div><ul><li>熟悉团队已实现的功能和代码，尽量复用，避免重复开发。</li><li>熟悉团队内部的研发规范，并在 IDE 中进行相应的配置，比如前端配置 ESLint、Prettier 等代码规范插件。</li></ul><h3 id="开发中注意事项" tabindex="-1"><a class="header-anchor" href="#开发中注意事项"><span>开发中注意事项</span></a></h3><ol><li>开发新功能时，确保从项目仓库拉取 <strong>最新主分支</strong> 的代码。</li></ol><div class="hint-container caution"><p class="hint-container-title">警告</p><p>每个功能都要新建自己的分支进行开发，<strong>千万不要直接修改主分支的代码</strong>！注意分支名称要使用英文、足够语义化，不要和其他人的混淆。</p></div><ol start="3"><li><p>开发时，尽量复用现有的功能、模块、类、方法、对象代码。有现成的代码，就不要再重复编写。如无法复用，可以适当通过注释说明。</p></li><li><p>开发时，遵循团队内部的研发规范，尽量参考现有项目代码的写法，尤其是不要使用和原项目不一致的格式、命名、写法，避免特立独行。</p></li><li><p>开发过程中，有任何不明确的地方，不要凭空猜测，及时去联系项目的其他成员或负责人确认。</p></li><li><p>开发过程中，每隔一段时间（比如 1 - 3 天）可以使用 <code>git pull</code> 同步一下最新的主分支代码，防止合并代码冲突。</p></li><li><p>开发过程中，注意整体时间进度的把控，先完成再完美，有风险时及时反馈。</p></li><li><p>开发时，需要格外注意对异常情况的捕获和处理。</p></li><li><p>每个分支尽量保证纯净，尽量减少每次开发和提交时改动的代码量。建议每次开分支只改一个功能、Bug 或模块，不要把多个不相关的功能写在一起，并且非必要不修改。</p></li></ol><div class="hint-container caution"><p class="hint-container-title">警告</p><p>完成部分功能开发后，一定要自测！自测时，可以 Mock 假数据。<strong>注意一定不要在线上测试、一定不要影响线上数据！</strong></p></div><h2 id="代码提交规范" tabindex="-1"><a class="header-anchor" href="#代码提交规范"><span>代码提交规范</span></a></h2><ul><li>只有通过测试和产品验收的代码，才能够发起合并到主分支的 PR 请求。在这之前可以提交到自己的分支。</li></ul><div class="hint-container caution"><p class="hint-container-title">警告</p><p>发起合并到主分支的 PR 前，<strong>一定要完整阅读 3 遍自己的代码</strong>，避免不规范的写法和无意义的改动。</p></div><ul><li>每次合并尽量只专注于一个功能或改动，避免多个功能耦合在一起合并，提高审查效率并降低改动风险。</li><li>每次提交时，需要在 commit 信息中提供代码改动说明，还可以通过关联需求文档、测试用例、方案文档、效果截图等方式进行补充说明。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>commit 信息可参考<a href="https://www.conventionalcommits.org/zh-hans" target="_blank" rel="noopener noreferrer">《约定式提交》文档</a>，但不做强制要求。</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>除非特殊情况，否则所有的代码必须经过至少一位项目负责人 Code Review 审核通过后，才能合并；并且只有合并到主分支的代码才允许发布上线。</p></div><p>​</p><h2 id="上线规范" tabindex="-1"><a class="header-anchor" href="#上线规范"><span>上线规范</span></a></h2><h3 id="上线前注意事项" tabindex="-1"><a class="header-anchor" href="#上线前注意事项"><span>上线前注意事项</span></a></h3><ul><li><p>上线前，除了严格验证功能特性能否正常运行、并符合需求外，还要格外关注程序的：</p><ul><li><p>健壮性。比如给用户友好的错误提示、输入校验。</p></li><li><p>安全性。防止越权操作、输入校验。</p></li><li><p>稳定性。尽量保证调用 100% 成功，如果有几率失败，要考虑重试或容错策略。</p></li></ul></li><li><p>除非特殊情况，只有经过产品验证的功能、通过代码审核的主分支代码才允许发布上线。</p></li><li><p>除非特殊情况，尽量在工作日上线（建议周二 ~ 周四），保证上线后出了问题时能够及时修复。</p></li></ul><h3 id="上线后注意事项" tabindex="-1"><a class="header-anchor" href="#上线后注意事项"><span>上线后注意事项</span></a></h3><div class="hint-container caution"><p class="hint-container-title">警告</p><p>上线后，一定要再次进行完整流程的测试，尤其要重点关注权限相关的功能测试。</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>上线后，一定要在群内及时同步上线信息，周知相关的成员，如果遇到问题第一时间反馈。</p></div><ol start="3"><li>首次上线后，需要即时配置监控告警。</li><li>上线验证通过、并经过内部群成员确认后，可以在外部用户群发布版本更新公告。</li><li>上线后，即时更新项目的更新记录文档。</li><li>注意，上线不是终点。上线后的一段时间（至少一周内），一定要持续观察自己负责的功能是否正常运行、持续接受用户反馈、通过数据分析来观察新功能的效果，期间有任何问题都需要即时修复处理，并且准备好下一期的改进迭代。</li></ol><h2 id="附录a-术语表" tabindex="-1"><a class="header-anchor" href="#附录a-术语表"><span>附录A：术语表</span></a></h2><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2><ul><li><em>Software engineering a practitioner&#39;s approach</em>（软件工程：实践者的研究方法）</li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><code>规格说明</code> 每个项目有不同的规格说明特性。在某些情况下，规格说明是指收集到的用户场景或其他一些事物。在另一些情况下，规格说明可以包括用户场景、模型和说明性文档。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',38)]))}const p=t(l,[["render",s],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/notes/ProjectGuide/5puthy8r/","title":"项目开发规范","lang":"zh-CN","frontmatter":{"title":"项目开发规范","createTime":"2024/08/30 00:38:02","icon":"clarity:info-standard-line","permalink":"/notes/ProjectGuide/5puthy8r/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"整体研发流程","slug":"整体研发流程","link":"#整体研发流程","children":[]},{"level":2,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[{"level":3,"title":"开发前注意事项","slug":"开发前注意事项","link":"#开发前注意事项","children":[]},{"level":3,"title":"开发中注意事项","slug":"开发中注意事项","link":"#开发中注意事项","children":[]}]},{"level":2,"title":"代码提交规范","slug":"代码提交规范","link":"#代码提交规范","children":[]},{"level":2,"title":"上线规范","slug":"上线规范","link":"#上线规范","children":[{"level":3,"title":"上线前注意事项","slug":"上线前注意事项","link":"#上线前注意事项","children":[]},{"level":3,"title":"上线后注意事项","slug":"上线后注意事项","link":"#上线后注意事项","children":[]}]},{"level":2,"title":"附录A：术语表","slug":"附录a-术语表","link":"#附录a-术语表","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"readingTime":{"minutes":8.28,"words":2484},"git":{"createdTime":1725012333000,"updatedTime":1728306732000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":5},{"name":"client1","email":"client1@qq.com","commits":1}]},"filePathRelative":"notes/ProjectGuide/核心/01-项目开发规范.md"}`);export{p as comp,c as data};
