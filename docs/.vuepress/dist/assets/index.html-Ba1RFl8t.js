import{_ as l,r as t,c as h,d as s,e as i,b as d,w as p,a as e,o as r}from"./app-DDPPmttC.js";const k={},c=e(`<p>[TOC]</p><h1 id="附录-文档注释" tabindex="-1"><a class="header-anchor" href="#附录-文档注释"><span>附录:文档注释</span></a></h1><p>编写代码文档的最大问题可能是维护该文档。如果文档和代码是分开的，每次更改代码时都要很繁琐地再去更改文档。解决方案似乎很简单：将代码链接到文档。最简单的方法是将所有内容放在同一个文件中。然而，要完成这个任务，需要一个特殊的注释语法来标记文档，以及一个工具将这些注释提取为有用的形式，这就是Java所做的。</p><p>提取注释的工具称为Javadoc，它是 JDK 安装的一部分。它使用Java编译器中的一些技术来寻找特殊的注释标记。它不仅提取由这些标记所标记的信息，还提取与注释相邻的类名或方法名。通过这种方式，您就可以用最少的工作量来生成合适的程序文档。</p><p>Javadoc的输出是一个html文件，可以用web浏览器查看它。有了Javadoc，就有一个简单的标准来创建文档，因此你可以期望所有Java库都有文档。</p><p>此外，你可以编写自己的Javadoc处理程序doclet，对javadoc处理的信息做特殊的处理（例如以不同的格式生成输出）。</p><p>以下是对Javadoc基础知识的介绍和概述。在 JDK 文档中可以找到完整的描述。</p><h2 id="句法规则" tabindex="-1"><a class="header-anchor" href="#句法规则"><span>句法规则</span></a></h2><p>所有Javadoc指令都发生在以 <code>/**</code> 开头(但仍然以 <code>*/</code>)结尾)的注释中。使用Javadoc有两种主要方法：嵌入HTML或使用“doc标签”。独立的doc标签是以 <strong>@</strong> 开头并且放在注释行的开头的指令(注释行开头的<code>*</code>将被忽略)。内联的doc标签可以出现在Javadoc注释的任何位置，它也以 <code>@</code> 开头，但被花括号包围。</p><p>有三种类型的注释文档，它们对应于注释前面的元素:类、字段或方法。也就是说，类注释出现在类定义之前，字段注释出现在字段定义之前，方法注释出现在方法定义之前。举个简单的例子:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// javadoc/Documentation1.java</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/** 一个类注释 */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Documentation1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /** 一个属性注释 */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /** 一个方法注释 */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=s("strong",null,"公共成员",-1),v=s("strong",null,"继承访问权限成员",-1),g=s("strong",null,"私有成员",-1),u=s("strong",null,"包访问权限成员",-1),m=s("strong",null,"公共成员",-1),A=s("strong",null,"继承访问权限成员",-1),D=s("strong",null,"-private",-1),y=s("strong",null,"私有成员",-1),b=e(`<p>要通过Javadoc处理前面的代码，命令是：</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">javadoc Documentation1.java</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将产生一组HTML文件。如果你在浏览器中打开index.html，将看到输出的结果与其他Java文档具有相同的标准格式，因此使用者对这种格式很熟悉，并可以轻松地浏览你的类。</p><h2 id="内嵌-html" tabindex="-1"><a class="header-anchor" href="#内嵌-html"><span>内嵌 HTML</span></a></h2><p>Javadoc不作修改地将HTML代码传递到生成的HTML文档。这使你可以充分利用HTML。但是这样做的主要目的是让你格式化代码，例如：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// javadoc/Documentation2.java</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/** &lt;pre&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* System.out.println(new Date());</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;/pre&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">*/</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Documentation2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以像在其他任何Web文档中一样使用HTML来格式化说明中的文字：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// javadoc/Documentation3.java</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/** You can &lt;em&gt;even&lt;/em&gt; insert a list:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;ol&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;li&gt; Item one</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;li&gt; Item two</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;li&gt; Item three</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">* &lt;/ol&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">*/</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Documentation3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，在文档注释中，Javadoc会删除行首的星号以及前导空格。 Javadoc重新格式化了所有内容，使其符合文档的标准外观。不要将<code>&lt;h1&gt;</code> 和<code>&lt;hr&gt;</code> 之类的标题用作嵌入式HTML，因为Javadoc会插入自己的标题，你插入的标题将对其产生干扰。</p><p>所有类型的注释文档（类，字段和方法）都可以支持嵌入式HTML。</p><h2 id="示例标签" tabindex="-1"><a class="header-anchor" href="#示例标签"><span>示例标签</span></a></h2><p>以下是一些可用于代码文档的Javadoc标记。在尝试使用Javadoc进行任何认真的操作之前，请查阅JDK文档中的Javadoc参考，以了解使用Javadoc的所有不同方法。</p><h3 id="see" tabindex="-1"><a class="header-anchor" href="#see"><span>@see</span></a></h3><p>这个标签可以将其它的类链接到本文档中。Javadoc 用 <code>@see</code> 标签产生链接到其它类的的HTML。格式为：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">see</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> classname</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">see</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fully</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">qualified</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">classname</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">see</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fully</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">qualified</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">classname#method</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个都向生成的文档中添加超链接的“另请参阅”条目。 Javadoc 不会检查超链接的有效性。</p>`,16),B=s("a",{class:"header-anchor",href:"#"},[s("span")],-1),C=[B],E=s("p",null,"和 @see 非常相似，不同之处在于它可以内联使用，并使用标签作为超链接文本，而不是“另请参阅”。",-1),_=s("a",{class:"header-anchor",href:"#-1"},[s("span")],-1),f=[_],J=s("p",null,"生成文档根目录的相对路径。对于显式超链接到文档树中的页面很有用。",-1),j=s("a",{class:"header-anchor",href:"#-2"},[s("span")],-1),x=[j],w=e(`<p>将文档从此类的最近基类继承到当前文档注释中。</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>@version</span></a></h3><p>其形式为：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">version</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> version</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">information</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 version-information 是你认为适合包含的任何重要信息。当在Javadoc命令行上放置 -version 标志时，特别在生成的HTML文档中用于生成version信息。</p><h3 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>@author</span></a></h3><p>其形式为：</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>@author author-information</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>author-information 大概率是你的名字，但是一样可以包含你的 email 地址或者其他合适的信息。当在 Javadoc 命令行上放置 -author 标志的时候，在生成的HTML文档中特别注明了作者信息。</p><p>你可以对作者列表使用多个作者标签，但是必须连续放置它们。所有作者信息都集中在生成的HTML中的单个段落中。</p><h3 id="since" tabindex="-1"><a class="header-anchor" href="#since"><span>@since</span></a></h3><p>此标记指示此代码的版本开始使用特定功能。例如，它出现在HTML Java文档中，以指示功能首次出现的JDK版本。</p><h3 id="param" tabindex="-1"><a class="header-anchor" href="#param"><span>@param</span></a></h3><p>这将生成有关方法参数的文档：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">param</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> parameter</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name description</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 <code>parameter-name</code> 是方法参数列表中的标识符， <code>description</code> 是可以在后续行中继续的文本。当遇到新的文档标签时，这个说明被视为结束。<code>@param</code>标签可以使用任意次，大概每个参数使用一次。</p><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return"><span>@return</span></a></h3><p>这记录了返回值：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> description</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中description给出了返回值的含义。它可延续到后面的行内。</p><h3 id="throws" tabindex="-1"><a class="header-anchor" href="#throws"><span>@throws</span></a></h3><p>一个方法可以产生许多不同类型的异常，所有这些异常都需要描述。异常标记的形式为：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">throws</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fully</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">qualified</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">class</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">name description</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><em>fully-qualified-class-name</em> 给出异常类的确切名称，并且 description （可在后面的行内继续展开）告诉你为什么这个特定类型的异常会在方法调用后出现。</p><h3 id="deprecated" tabindex="-1"><a class="header-anchor" href="#deprecated"><span>@deprecated</span></a></h3><p>表示已被改进的功能取代的功能。deprecated 标记建议你不要再使用此功能，因为将来它有可能被删除。使用标记为 <code>@deprecated</code> 的方法会使编译器发出警告。在Java 5中，<code>@deprecated</code> Javadoc 标记被 <code>@Deprecated</code> <em>注解</em> 取代（在<a href="">注解</a>一章中进行了描述）。</p><h2 id="文档示例" tabindex="-1"><a class="header-anchor" href="#文档示例"><span>文档示例</span></a></h2><p><strong>objects/HelloDate.java</strong> 是带有文档注释的例子。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// javadoc/HelloDateDoc.java</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/** The first On Java 8 example program.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * Displays a String and today&#39;s date.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@author</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> Bruce Eckel</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@author</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> www.MindviewInc.com</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@version</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> 5.0</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> HelloDateDoc</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    /** Entry point to class &amp; application.</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@param</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> array of String arguments</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     * </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">@throws</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> exceptions</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> No exceptions thrown</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     */</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Hello, it&#39;s: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">        System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Date</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">/* Output:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Hello, it&#39;s:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">Tue May 09 06:07:27 MDT 2017</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在Java标准库的源代码中找到许多Javadoc注释文档的示例。</p><div style="page-break-after:always;"></div>`,31);function T(H,a){const n=t("RouteLink");return r(),h("div",null,[c,s("p",null,[i("Javadoc仅处理 "),o,i(" 和 "),v,i(" 的注释文档。 默认情况下，将忽略对 "),g,i(" 和"),u,i("的注释（请参阅"),d(n,{to:"/07-Implementation-Hiding.html"},{default:p(()=>[i('"隐藏实现"')]),_:1}),i("一章），并且你将看不到任何输出。 这是有道理的，因为从客户端程序员的视角看，在文件外部只有 "),m,i(" 和 "),A,i(" 是可用的。 你可以使用 "),D,i(" 标志来包含 "),y,i("。")]),b,s("h3",{onLink:a[0]||(a[0]=()=>{}),"package.class#member":"",label:"",id:"",tabindex:"-1"},C,32),E,s("h3",{"on:docRoot":a[1]||(a[1]=()=>{}),id:"-1",tabindex:"-1"},f,32),J,s("h3",{"on:inheritDoc":a[2]||(a[2]=()=>{}),id:"-2",tabindex:"-1"},x,32),w])}const L=l(k,[["render",T],["__file","index.html.vue"]]),F=JSON.parse(`{"path":"/notes/JavaSE/1qnm5pgi/","title":"Appendix-Javadoc","lang":"zh-CN","frontmatter":{"title":"Appendix-Javadoc","createTime":"2024/09/02 22:11:00","permalink":"/notes/JavaSE/1qnm5pgi/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"句法规则","slug":"句法规则","link":"#句法规则","children":[]},{"level":2,"title":"内嵌 HTML","slug":"内嵌-html","link":"#内嵌-html","children":[]},{"level":2,"title":"示例标签","slug":"示例标签","link":"#示例标签","children":[{"level":3,"title":"@see","slug":"see","link":"#see","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"","slug":"-1","link":"#-1","children":[]},{"level":3,"title":"","slug":"-2","link":"#-2","children":[]},{"level":3,"title":"@version","slug":"version","link":"#version","children":[]},{"level":3,"title":"@author","slug":"author","link":"#author","children":[]},{"level":3,"title":"@since","slug":"since","link":"#since","children":[]},{"level":3,"title":"@param","slug":"param","link":"#param","children":[]},{"level":3,"title":"@return","slug":"return","link":"#return","children":[]},{"level":3,"title":"@throws","slug":"throws","link":"#throws","children":[]},{"level":3,"title":"@deprecated","slug":"deprecated","link":"#deprecated","children":[]}]},{"level":2,"title":"文档示例","slug":"文档示例","link":"#文档示例","children":[]}],"readingTime":{"minutes":6.44,"words":1932},"git":{"createdTime":1725289289000,"updatedTime":1725289289000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"notes/JavaSE/OnJava8/Appendix-Javadoc.md"}`);export{L as comp,F as data};
