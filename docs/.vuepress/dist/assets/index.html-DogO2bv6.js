import{_ as i,c as l,o as e,a}from"./app-DDPPmttC.js";const t="/assets/image-20240903215051378-DESpVbTz.png",n={},s=a('<h2 id="软件工程" tabindex="-1"><a class="header-anchor" href="#软件工程"><span>软件工程</span></a></h2><p>软件工程包括过程、一系列方法（实践）和大量工具，专业人员借由这些来构建高质量的计算机软件</p><p>​ ——《软件工程 实践者的研究方法》</p><h3 id="定义软件工程学科" tabindex="-1"><a class="header-anchor" href="#定义软件工程学科"><span>定义软件工程学科</span></a></h3><img src="'+t+'" alt="image-20240903215051378" style="zoom:80%;"><p>软件工程是：</p><ol><li>将系统化的、规范的、可量化的方法应用于软件的开发、运行和维护，即将工程化方法应用于软件；</li><li>对第一条所描述方法的研究 ——IEEE</li></ol><h3 id="软件过程" tabindex="-1"><a class="header-anchor" href="#软件过程"><span>软件过程</span></a></h3><p>软件工程是工作产品构建时所执行的一系列活动、动作和任务的集合，活动（ activity ）主要实现宽泛的目标 （ 如与利益相关者进行沟通 ），与应用领域、项目大小、结果复杂性或者实施软件工程的重要程度没有直接关系。动作（ action，如体系结构设计）包含了主要工作产品（ 如体系结构设计模型 ）生产过程中的一系列任务。任务（ task）关注小而明确的目标，能够产生实际产品（如构建一个单元测试）。</p><h4 id="过程框架" tabindex="-1"><a class="header-anchor" href="#过程框架"><span>过程框架</span></a></h4><p><strong>过程框架（ process framework ）<strong>定义了若干个</strong>框架活动（ framework activity ）</strong>，为实现完成的软件工程过程建立了基础。</p><p>这些框架可以广泛运用于所有软件开发项目，无论项目的规模和复杂性。</p><p>框架还包含一些<strong>普适性活动（ umbrella activity ）</strong></p><p>通用的软件工程过程框架通常包含以下 5 个活动：</p><ol><li><p>沟通：在技术活动开始前，和客户（或其他利益相关者）进行沟通和协作。目的是理解利益相关者的项目目标，并收集需求以定义软件特性和功能。</p></li><li><p>策划：策划活动就好比地图，称为软件项目计划，用以指导团队的项目旅程，它定义和描述了软件工程工作，包括需要执行的技术任务、可能的风险、资源需求、工作产品和工作进度计划。</p></li><li><p>建模：一个描述项目构想的草图，用以理解整个项目的体系结构、不同构件如何结合以及其他特性。如果有需要，可以将草图不断细化，以更好理解问题并找到解决方案。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>总体来说就是利用模型来理解软件需求，并完成这些需求的软件设计。</p></div></li><li><p>构建：对所做设计进行构建，包含编码和测试。</p></li><li><p>部署：软件（ 全部或者部分增量 ）交付给用户，用户对其评测并给出反馈意见。</p></li></ol><div class="hint-container note"><p class="hint-container-title">注</p><p>对于许多项目来说，随着项目的开展，框架活动可以迭代运用，以上五个活动会不断重复。每次项目迭代都会产生一个 <strong>软件增量（ software increment ）</strong>，每个软件增量实现了部分软件特性和功能。随着每次软件增量的产生，软件逐渐完善。</p></div><details class="hint-container details"><summary>利益相关者</summary><p>在项目成功中分享利益的人，包括业务经理、最终用户、软件工程师、支持人员等。</p></details><h4 id="普适性活动" tabindex="-1"><a class="header-anchor" href="#普适性活动"><span>普适性活动</span></a></h4><p>软件工程过程框架活动由很多普适性活动补充实现。这些普适性活动贯穿项目始终，帮助软件团队管理和控制项目进度、质量、变更和风险。</p><p>典型的普适性活动包含：</p><ol><li>软件项目跟踪和控制：项目组根据计划来评估项目进度，并且采取必要的措施保证项目按进度计划执行。</li><li>风险管理：对可能影响项目成果或者产品质量的风险进行评估。</li><li>软件质量保证：确定和执行保证软件质量的活动。</li><li>技术评审：评估软件工程产品，尽量在错误传播到下一个活动之前发现并清除错误。</li><li>测量：定义和收集过程、项目以及产品的度量，以帮助团队在发布软件时满足利益相关者的要求。测量可以和其他框架活动和普适性活动配合使用。</li><li>软件配置管理：在整个软件过程中管理变更所带来的影响。</li><li>可复用管理：定义工作产品复用的标准（ 包括软件构件 ），并且建立构件复用机制。</li><li>工作产品的准备和生产：包括生产产品（ 建模、文档、日志、表格、列表等 ）所必须的活动。</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>上述的普适性活动在后续详细讨论</p></div><h4 id="过程的适应性调整" tabindex="-1"><a class="header-anchor" href="#过程的适应性调整"><span>过程的适应性调整</span></a></h4><p>软件工程过程不是教条的法则，也不要求软件团队机械性地执行，而应该是灵活可适应的（ 软件所解决的问题、项目特点、开发团队和组织文化等进行适应性调整 ）。</p><p>不同项目采用的项目过程可能有很大不同，主要体现为：</p><ul><li>活动、动作和任务的总体流程以及相互依赖关系。</li><li>在每一个框架活动中，动作和任务细化的程度。</li><li>工作产品的定义和要求的程度。</li><li>质量保证活动应用的方式。</li><li>项目跟踪和控制活动应用的方式。</li><li>过程描述的详细程度和严谨程度。</li><li>客户和利益相关者对项目的参与程度。</li><li>软件团队所赋予的自主权。</li><li>队伍组织和角色的明确程度。</li></ul><h3 id="软件工程实践" tabindex="-1"><a class="header-anchor" href="#软件工程实践"><span>软件工程实践</span></a></h3><p>上几节讨论到通用的框架活动包含：沟通、策划、建模、构建和部署这些一般性的活动和普适性活动构成了软件工程工作的体系结构的轮廓。</p><p>下面将讨论如何在事件中融入这些活动：</p><h4 id="实践的精髓" tabindex="-1"><a class="header-anchor" href="#实践的精髓"><span>实践的精髓</span></a></h4><p>计算机发明之前，一本经典著作《How to Solve it》这本书提到了解决我们日常问题的精髓：</p><ol><li>理解问题（ 沟通和分析 ）</li><li>策划解决方案（ 建模和软件设计 ）</li><li>实施计划（ 代码生成 ）</li><li>检查结果的正确性（ 测试和质量保证 ）</li></ol><p>这些通常也是软件开发的常识性步骤，更本质的是：</p><p><strong>理解问题</strong></p><div class="hint-container note"><p class="hint-container-title">注</p><p>一般要考虑如下问题：</p><ul><li>谁会从问题的解决中获益？（ 谁是利益相关者？）</li><li>哪些是未知的？（ 哪些数据、功能和特性是解决问题所必须的？ ）</li><li>问题是否可以划分？（ 是否可以描述为更小的、更容易理解的问题？ ）</li><li>问题可以图形化描述吗？（ 可以建立分析模型吗？ ）</li></ul></div><p><strong>策划解决方案</strong>：理解了问题后，慢下来进行一些设计。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>一般要考虑如下问题：</p><ul><li>以前是否遇到类似的问题？（ 在潜在的解决方案中是否可以识别一些模式？是否已经有软件实现了所需要的数据、功能和特性？ ）</li><li>类似问题是否解决过？（ 如果是，解决方案包含元素是否可以复用？ ）</li><li>可以定义子问题吗？（ 如果可以，子问题是否已有解决方案？ ）</li><li>能用一种可以很快实现的方式来描述解决方案吗？能构建出设计模型吗？</li></ul></div><p><strong>实施计划</strong>：前面的策划设计后，可能存在没有想到的解决方法，也可能在该过程发现更好的解决方法。但是这个计划可以保证在实施过程中不至迷失方向。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>需要考虑的是：</p><ul><li>解决方案和计划一致吗？源码是否可追溯到设计模型？</li><li>解决方案的每个组成部分是否可以证明正确？设计和代码是否经过评审？或者采用更好的方式，算法是否经过正确性证明？</li></ul></div><p><strong>检查结果</strong>：不能保证解决方案是最完美的，但是可以保证设计足够的测试来发现尽可能多的错误。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>需要解决的是：</p><ul><li>能否测试解决方案的每个部分？是否实现了合理的测试策略？</li><li>解决方案是否产生了与所要求的数据、功能和特性一致的结果？是否按照项目利益相关者的需求进行了确认？</li></ul></div><h3 id="通用原则" tabindex="-1"><a class="header-anchor" href="#通用原则"><span>通用原则</span></a></h3>',42),p=[s];function o(c,r){return e(),l("div",null,p)}const h=i(n,[["render",o],["__file","index.html.vue"]]),m=JSON.parse(`{"path":"/notes/JavaEE/glv0cp3d/","title":"index","lang":"zh-CN","frontmatter":{"title":"index","createTime":"2024/09/03 21:32:42","permalink":"/notes/JavaEE/glv0cp3d/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"软件工程","slug":"软件工程","link":"#软件工程","children":[{"level":3,"title":"定义软件工程学科","slug":"定义软件工程学科","link":"#定义软件工程学科","children":[]},{"level":3,"title":"软件过程","slug":"软件过程","link":"#软件过程","children":[]},{"level":3,"title":"软件工程实践","slug":"软件工程实践","link":"#软件工程实践","children":[]},{"level":3,"title":"通用原则","slug":"通用原则","link":"#通用原则","children":[]}]}],"readingTime":{"minutes":7.08,"words":2124},"git":{"createdTime":1725376651000,"updatedTime":1726820556000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":3}]},"filePathRelative":"notes/JavaEE/00 软件工程/index.md"}`);export{h as comp,m as data};
