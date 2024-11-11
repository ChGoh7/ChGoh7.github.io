import{_ as e,c as r,b as n,o}from"./app-D9dBPeOe.js";const t={};function p(i,a){return o(),r("div",null,a[0]||(a[0]=[n('<blockquote><p>本书基于 Java 8 版本来教授当前 Java 编程的最优实践。</p></blockquote><p>我之前的 Java 书籍 <em>Thinking in Java, 4th Edition</em>（《Java编程思想 (第4版)》 Prentice Hall 2006）依然适用于 Java 5 编程，在此版本 Java 语言开始用作 Android 编程。此后，这门语言的许多地方发生了翻天覆地的变化，特别是 Java 8 的转变，以至于新的 Java 代码读起来的感觉也不尽相同。这也促使我时隔多年，创作了这本新书。</p><p>《On Java 8》旨在面向已具有编程基础的开发者们。对于初学者，可以先在 <a href="http://Code.org" target="_blank" rel="noopener noreferrer">Code.org</a> 或者 <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" rel="noopener noreferrer">可汗学院Khan Academy</a> 等网站补充必要的预备知识。同时，<a href="http://www.OnJava8.com" target="_blank" rel="noopener noreferrer">OnJava8.com</a> 上也有免费的 Thinking in C（《C编程思想》）专题知识。与几年前我们依赖印刷媒体时相比，像 YouTube、博客和 StackOverFlow 这样的网站使得寻找答案变得非常简单。如果将本书作为编程入门书籍，请结合这些学习途径努力坚持下去。同时，本书也适合想要扩展知识的专业程序员。</p><p>得益于《<em>Thinking in Java</em>》，我得以到世界各地演讲，我对此由衷感激。它为我的 <a href="http://www.reinventing-business.com" target="_blank" rel="noopener noreferrer">Reinventing Business</a> 项目在与人员及公司建立联系方面提供了宝贵的帮助。我最终撰写本书的原因之一就是想支持这一项目的研究，而下一个合乎逻辑的步骤似乎是实际创建一个所谓的蓝绿色组织（Teal Organization）。我希望本书可以成为该项目的一种众筹。</p><h2 id="教学目标" tabindex="-1"><a class="header-anchor" href="#教学目标"><span>教学目标</span></a></h2><p>每章讲授一个或一组相关的概念，并且不依赖于尚未介绍的特性。这样你就可以在现有的知识背景下，在继续向前学习之前，消化吸收每一部分内容。</p><p>本书的教学目标：</p><ol><li><p>循序渐进地呈现学习内容，使读者可以很容易地将每个知识点融会贯通；同时仔细地对特性的讲解进行排序，以使得你在看到对某个特性的运用之前，会先了解它。如果确有必要引入还未学习的知识概念，我会做个简短的介绍。</p></li><li><p>使用尽可能简单和简短的示例，方便读者理解。而不强求引入解决“现实世界”中问题的例子。因为我发现，通常初学者更乐于看到自己通晓示例的每个细节，而非明晰所解决的问题范畴。或许我会因这些“玩具示例”而被一些人所诟病，但是我乐意接受那些有利于为教育带来益处的种种事物，更希望读者们能因此保持饶有兴趣地学习。</p></li><li><p>向读者提供“我认为对理解这种程序设计语言来说很重要”的部分，而不是提供我所知道的所有事情。我认为信息的重要性是分层次结构的。绝大多数情况下，我们没必要弄清问题的所有本质。好比编程语言中的某些特性和实现细节，95% 的程序员都不需要去知道。这些细节除了会加重你的学习成本，还让你更觉得这门语言好复杂。如果你非要考虑这些细节，那么它还会迷惑该代码的阅读者/维护者，所以我主张选择简单的方法解决问题。</p></li><li><p>希望本书能为你打下坚实的基础，方便你将来学习更难的课程和书籍。</p></li></ol><h2 id="语言设计错误" tabindex="-1"><a class="header-anchor" href="#语言设计错误"><span>语言设计错误</span></a></h2><p>每种语言都有设计错误。当新手程序员涉足语言特性并猜测应用场景和使用方式时，他们体验到极大的不确定性和挫折感。承认错误令人尴尬，但这种糟糕的初学者经历比认识到你错在哪里还要糟糕。唉，每一种语言/库的设计错误都会永久地嵌入在 Java 的发行版中。</p><p>诺贝尔经济学奖得主约瑟夫·斯蒂格利茨（<em>Joseph Stiglitz</em>）有一套适用于这里的人生哲学，叫做“承诺升级理论”：继续犯错误的成本由别人承担，而承认错误的成本由自己承担。</p><p>看过我此前作品的读者们应该清楚，我一般倾向于指出这些错误。Java 拥有一批狂热的粉丝。他们把语言当成是阵营而不是纯粹的编程工具。我写过 Java 书籍，所以他们兀自认为我自然也是这个“阵营”的一份子。当我指出 Java 的这些错误时，会造成两种影响：</p><ol><li><p>早先许多错误“阵营”的人成为了牺牲品。最终，时隔多年后，大家都意识到这是个设计上的错误。然而错误已然成为 Java 历史的一部分了。</p></li><li><p>更重要的是，新手程序员并没有经历过“语言为何采用某种方式实现”的争议过程。特别是那些隐约察觉不对却依然说服自己“我必须要这么做”或“我只是没学明白”从而继续错下去的人。更糟糕的是，教授这些编程知识的老师们没能深入地去研究这里是否有设计上的错误，而是继续错误的解读。总之，通过了解语言设计上的错误，能让开发者们更好地理解和意识到错误的本质，从而更快地进步。</p></li></ol><p>对编程语言的设计错误理解至关重要，甚至影响程序员的开发效率。部分公司在开发过程中避免使用语言的某些功能特性。这些功能特性表面上看起来高大上，但是弄不好却可能出现意料之外的错误，影响整个开发进程。</p><p>已知的语言设计错误会给新的一门编程语言的作者提供参考。探索一门语言能做什么是很有趣的一件事，而语言设计错误能提醒你哪些“坑”是不能再趟的。多年以来，我一直感觉 Java 的设计者们有点脱离群众。Java 的有些设计错误错的太明显，我甚至怀疑设计者们到底是为出于服务用户还是其他动机设计了这些功能。Java 语言有许多臭名昭著的设计错误，很可能这也是诱惑所在。Java 似乎并不尊重开发者。为此我很长时间内不想与 Java 有任何瓜葛。很大程度上，这也是我不想碰 Java 的原因吧。</p><p>如今再审视 Java 8，我发现了许多变化。设计者们对于语言和用户的态度似乎发生了根本性上的改变。忽视用户投诉多年之后，Java 的许多功能和类库都已被搞砸了。</p><p>新功能的设计与以往有很大不同。掌舵者开始重视程序员的编程经验。新功能的开发都是在努力使语言变得更好，而非仅仅停留在快速堆砌功能而不去深入研究它们的含义。甚至有些新特性的实现方式非常优雅（至少在 Java 约束下尽可能优雅）。</p><p>我猜测可能是部分设计者的离开让他们意识到了这点。说真的，我没想到会有这些变化！因为这些原因，写这本书的体验要比以往好很多。Java 8 包含了一系列基础和重要的改进。遗憾的是，为了严格地“向后兼容”，我们不大可能看到戏剧性的变化，当然我希望我是错的。尽管如此，我很赞赏那些敢于自我颠覆，并为 Java 设定更好路线的人。第一次，对于自己所写的部分 Java 8 代码我终于可以说“赞！”</p><p>最后，本书所著时间似乎也还不错，因为 Java 8 引入的新功能已经强烈地影响了今后 Java 的编码方式。截止我在写这本书时，Java 9 似乎更专注于对语言底层的基础结构功能的重要更新，而非本书所关注的新编码方式。话说回来，得益于电子书出版形式的便捷，假如我发现本书有需要更新或添加的内容，我可以第一时间将新版本推送给现有读者。</p><h2 id="测试用例" tabindex="-1"><a class="header-anchor" href="#测试用例"><span>测试用例</span></a></h2><p>书中代码示例基于 Java 8 和 Gradle 编译构建，并且代码示例都保存在<a href="https://github.com/BruceEckel/OnJava8-Examples" target="_blank" rel="noopener noreferrer">这个自由访问的GitHub的仓库</a> 中。我们需要内置的测试框架，以便于在每次构建系统时自动运行。否则，你将无法保证自己代码的可靠性。为了实现这一点，我创建了一个测试系统来显示和验证大多数示例的输出结果。这些输出结果我会附加在示例结尾的代码块中。有时仅显示必要的那几行或者首尾行。利用这种方式来改善读者的阅读和学习体验，同时也提供了一种验证示例正确性的方法。</p><h2 id="受欢迎度" tabindex="-1"><a class="header-anchor" href="#受欢迎度"><span>受欢迎度</span></a></h2><p>Java的受欢迎程度具有重要意义。学习 Java 会让你更容易找到工作。相关的培训材料，课程和其他可用的学习资源也很多。对于使用Java的初创企业来说，招聘 Java 程序员相对容易。如果你真的不喜欢 Java 语言，那么最好不要使用它————仅仅为了找工作而使用它，并不是一个快乐的生活选择。作为一家公司，在技术选型前一定不要单单只考虑容易招聘Java 程序员。每种语言都有其适用的范围，有可能另一种编程语言更适用于你们的业务，来达到事半功倍的效果。如果你真的喜欢 Java，那么欢迎你。希望这本书能丰富你的编程经验！</p><h2 id="关于安卓" tabindex="-1"><a class="header-anchor" href="#关于安卓"><span>关于安卓</span></a></h2><p>本书基于 Java 8 版本。如果你是 Andriod 程序员，请务必学习 Java 5。在《On Java 8》出版的时候，我的另一本基于 Java 5 的著作 <em>Thinking in Java 4th Edition</em>（《Java编程思想》第四版）已经可以在<a href="http://www.OnJava8.com" target="_blank" rel="noopener noreferrer">www.OnJava8.com</a>上免费下载了。此外，还有许多其他专用于 Andriod 编程的资源。</p><h2 id="电子版权声明" tabindex="-1"><a class="header-anchor" href="#电子版权声明"><span>电子版权声明</span></a></h2><p>《On Java 8》仅提供电子版，并且仅通过 <a href="http://www.OnJava8.com" target="_blank" rel="noopener noreferrer">www.OnJava8.com</a> 提供。任何未经 <a href="mailto:mindviewinc@gmail.com" target="_blank" rel="noopener noreferrer">mindviewinc@gmail.com</a> 授权的其他来源或流传送机构都是非法的。本作品受版权保护！未经许可，请勿通过以任何方式分享或发布。你可以使用这些示例进行教学，只要不对本书非法重新出版。有关完整详细信息，请参阅示例分发中的 Copyright.txt 文件。对于视觉障碍者，电子版本有可搜索性，字体大小调整或文本到语音等诸多好处。</p><p>任何购买这本书的读者，还需要一台计算机来运行和写作代码。另外电子版在计算机上和移动设备上的显示效果俱佳，推荐使用平板设备阅读。相比购买传统纸质版的价格，平板电脑价格都足够便宜。在床上阅读电子版比看这样一本厚厚的实体书要方便得多。起初你可能会有些不习惯，但我相信很快你就会发现它带来的优点远胜过不适。我已经走过这个阶段，Google Play 图书的浏览器阅读体验非常好，包括在 Linux 和 iOS 设备上。作为一次尝试，我决定尝试通过 Google 图书进行出版。</p><p><strong>注意</strong>：在撰写本文时，通过 Google Play 图书网络浏览器应用阅读图书虽然可以忍受，但体验还是有点差强人意，我强烈推荐读者们使用平板电脑来阅读。</p><h2 id="版本说明" tabindex="-1"><a class="header-anchor" href="#版本说明"><span>版本说明</span></a></h2><p>本书采用 <a href="http://pandoc.org" target="_blank" rel="noopener noreferrer">Pandoc</a> 风格的 Markdown 编写，使用 Pandoc 生成 ePub v3 格式。</p><p>正文字体为 Georgia，标题字体为 Verdana。 代码字体使用的 Ubuntu Mono，因为它特别紧凑，单行能容纳更多的代码。 我选择将代码内联（而不是将列表放入图像，参照其他书籍），因为我觉得这个功能很重要：让代码块能适应字体大小得改变而改变（否则，买电子版，还图什么呢？）。</p><p>书中的提取，编译和测试代码示例的构建过程都是自动化的。所有自动化操作都是通过我在 Python 3 中编写的程序来实现的。</p><h2 id="封面设计" tabindex="-1"><a class="header-anchor" href="#封面设计"><span>封面设计</span></a></h2><p>《On Java 8》的封面是根据 W.P.A.（Works Progress Administration 1935年至1943年美国大萧条期间的一个巨大项目，它使数百万失业人员重新就业）的马赛克创作的。它还让我想起了《绿野仙踪》（<em>The Wizard of Oz</em>）系列丛书中的插图。 我的好朋友、设计师丹 <em>Daniel Will-Harris</em>（<a href="http://www.will-harris.com" target="_blank" rel="noopener noreferrer">www.will-harris.com</a>）和我都喜欢这个形象。</p><h2 id="感谢的人" tabindex="-1"><a class="header-anchor" href="#感谢的人"><span>感谢的人</span></a></h2><p>感谢 <em>Domain-Driven Design</em>（《领域驱动设计》 ）的作者 <em>Eric Evans</em> 建议书名，以及其他新闻组校对的帮助。</p><p>感谢 <em>James Ward</em> 为我开始使用 Gradle 工具构建这本书，以及他多年来的帮助和友谊。</p><p>感谢 <em>Ben Muschko</em> 在整理构建文件方面的工作，还有感谢 <em>Hans Dockter</em> 给 <em>Ben</em> 提供了时间。</p><p>感谢 <em>Jeremy Cerise</em> 和 <em>Bill Frasure</em> 来到开发商务聚会预订，并随后提供了宝贵的帮助。</p><p>感谢所有花时间和精力来科罗拉多州克雷斯特德比特（Crested Butte, Colorado）镇参加我的研讨会，开发商务聚会和其他活动的人！你们的贡献可能不容易看到，但却非常重要！</p><h2 id="献礼" tabindex="-1"><a class="header-anchor" href="#献礼"><span>献礼</span></a></h2><blockquote><p>谨以此书献给我敬爱的父亲 E. Wayne Eckel (1924.4.1 ~ 2016.11.23)。</p></blockquote><div style="page-break-after:always;"></div>',44)]))}const l=e(t,[["render",p],["__file","index.html.vue"]]),s=JSON.parse('{"path":"/notes/Java/89q4tgym/","title":"00-Preface","lang":"zh-CN","frontmatter":{"title":"00-Preface","createTime":"2024/09/02 22:10:59","permalink":"/notes/Java/89q4tgym/"},"headers":[],"readingTime":{"minutes":12.01,"words":3602},"git":{"updatedTime":1727067719000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/chgoh7?v=4","url":"https://github.com/chgoh7"}]},"filePathRelative":"notes/Java/OnJava8/00-Preface.md","bulletin":false}');export{l as comp,s as data};
