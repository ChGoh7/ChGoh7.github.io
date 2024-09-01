import{_ as s,c as i,o as a,a as e}from"./app-CZr7wq8r.js";const t={},n=e(`<h2 id="_10-1-枚举" tabindex="-1"><a class="header-anchor" href="#_10-1-枚举"><span>10.1 枚举</span></a></h2><p>把具体的对象一一列举出来的类，就称为 枚举类（enumeration）</p><p>实现方法：</p><ol><li>自定义枚举</li><li><code>enum</code> 关键字枚举</li></ol><h3 id="_10-1-1-自定义枚举" tabindex="-1"><a class="header-anchor" href="#_10-1-1-自定义枚举"><span>10.1.1 自定义枚举</span></a></h3><ol><li>构造器私有化</li><li>去掉 set 方法（可保留 get），防止属性被修改。因为枚举对象值通常为只读</li><li>在类内部直接创建固定对象。使用 <code>final</code> + <code>static</code> 共同修饰，对象名通常全部大写。</li><li>枚举对象按照需要可以有多个属性</li></ol><h3 id="_10-1-2-enum-关键字" tabindex="-1"><a class="header-anchor" href="#_10-1-2-enum-关键字"><span>10.1.2 <code>enum</code> 关键字</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">enum</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Example</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> RED</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">小红</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> BLUE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">小蓝</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 11</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> YELLOW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //这句话要放在前面，第三个是无参</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> private</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> private</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> private</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Example</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">     this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">     this</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>用关键字 <code>enum</code> 替代 <code>class</code></li><li>用 <code>常量名.(形参列表);</code> 代替创建对象（放在前面）。多个对象的场合，用 <code>,</code> 间隔。</li><li>如果使用 <code>enum</code> 枚举，要求将常量对象写在前面</li></ol><h4 id="_10-1-2-1-使用细节" tabindex="-1"><a class="header-anchor" href="#_10-1-2-1-使用细节"><span>#10.1.2.1 使用细节</span></a></h4><ol><li><p>当我们用 <code>enum</code> 关键字开发一个枚举类时，默认会继承 java.lang.Enum 类，而且是一个 <code>final</code> 类。</p><p>这样，我们就能使用 Enum 中的相关方法。</p><p><strong>也正因为如此，<mark><code>enum</code> 类不能继承其他类，亦不能被其它类继承</mark></strong></p><p>不过，<mark><code>enum</code> 类和其他类一样，可以实现接口</mark>。</p></li><li><p>传统的 <code>public ststic final RED(&quot;小红&quot;, 10);</code> 简化为 <code>RED(&quot;小红&quot;, 10);</code></p></li><li><p>如果使用无参构造器创建枚举对象，则 实参列表 和 <code>( )</code> 都能省略</p></li></ol><h4 id="_10-1-2-2-enum-类中的常用方法" tabindex="-1"><a class="header-anchor" href="#_10-1-2-2-enum-类中的常用方法"><span>#10.1.2.2 <code>Enum</code> 类中的常用方法</span></a></h4><ul><li><code>valueOf</code>：将字符串转换成枚举对象。要求字符串必须是已有的常量名，否则报异常。</li><li><code>values</code>：返回一个数组 <code>Example[]</code>，其中包含定义的所有枚举对象</li><li><code>getDeclaringClass</code>：得到枚举常量所属的 <code>class</code></li><li><code>name</code>：得到当前枚举常量的名称。建议优先用 <code>toString</code></li><li><code>ordinal</code>：输出该枚举对象的次序/编号（从 0 开始编号。如上例 <code>BLUE.ordinal = 1</code>）</li><li><code>compareTo</code>：比较两个枚举常量的编号（调用常量编号 减去 传入常量编号）</li><li><code>clone</code>：<mark>枚举类不能 <code>clone</code>，所以，这是一个只会抛出异常的方法</mark></li></ul><h3 id="_10-1-3-enumeration接口" tabindex="-1"><a class="header-anchor" href="#_10-1-3-enumeration接口"><span>10.1.3 Enumeration接口</span></a></h3><blockquote><p>Enumeration接口中定义了一些方法，通过这些方法可以枚举（一次获得一个）对象集合中的元素。这种传统接口已被迭代器取代，虽然Enumeration 还未被遗弃，但在现代代码中已经被很少使用了。尽管如此，它还是使用在诸如Vector和Properties这些传统类所定义的方法中，除此之外，还用在一些API类，并且在应用程序中也广泛被使用。 下表总结了一些Enumeration声明的方法：</p></blockquote><table><thead><tr><th>1</th><th><strong>boolean hasMoreElements( )</strong> 测试此枚举是否包含更多的元素。</th></tr></thead><tbody><tr><td>2</td><td><strong>Object nextElement( )</strong> 如果此枚举对象至少还有一个可提供的元素，则返回此枚举的下一个元素。</td></tr></tbody></table><h4 id="实例" tabindex="-1"><a class="header-anchor" href="#实例"><span>实例</span></a></h4><p>以下实例演示了Enumeration的使用：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Vector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> java</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Enumeration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> EnumerationTester</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">   public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[])</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Enumeration</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> days</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      Vector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Vector</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Sunday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Monday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Tuesday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Wednesday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Thursday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Friday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Saturday</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      days </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> dayNames</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">elements</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      while</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">days</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">hasMoreElements</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()){</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">         System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">days</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">nextElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">   }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Sunday</span></span>
<span class="line"><span>Monday</span></span>
<span class="line"><span>Tuesday</span></span>
<span class="line"><span>Wednesday</span></span>
<span class="line"><span>Thursday</span></span>
<span class="line"><span>Friday</span></span>
<span class="line"><span>Saturday</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-2-注解" tabindex="-1"><a class="header-anchor" href="#_10-2-注解"><span>10.2 注解</span></a></h2><p>注解（Annotation）也被称为元数据（Metadata）。用于修饰 包、类、方法、属性、构造器、局部变量 等数据信息</p><p>和注释一样，注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入在代码中的补充信息</p><p>在 JavaSE 中，注解的使用目的比较简单，例如 标记过时的功能，忽略警告 等。在 JavaEE 中注解占据了更重要的角色，例如用于配置应用程序的任何切面，代替 JavaEE 旧版中所遗留的繁冗代码和 XML 配置等。</p><ol><li><p>使用 <code>@Annotation</code> 时要在前面增加 <code>@</code> 符号，并把该注解当成一个修饰符使用。用于修饰它支持的程序元素。</p></li><li><p>三个基本的 <code>@Annotation</code>：</p><ul><li><code>@Override</code>：限定某个方法，是 重写 父类方法。该注解只能用于方法。如果你写了该注解，编译器会替你校验，看看是不是真的 重写 了父类方法。</li><li><code>@Deprecated</code>：用于表示某个程序元素（类、方法等）已经过时</li><li><code>@SuppressWarnings()</code>：抑制编辑器警告</li></ul></li><li><p>如果发现 <code>public @interface XXX{}</code> 这种东西，说明是定义了一个注解类 <code>XXX</code>。这里的 <code>@interface</code> 不代表接口（<code>interface</code>）。</p></li></ol><h3 id="_10-2-1-override" tabindex="-1"><a class="header-anchor" href="#_10-2-1-override"><span>10.2.1 <code>@Override</code></span></a></h3><ol><li><code>@Override</code> 表示指定重写父类的方法（从编译器层面验证），如果父类没有该方法，就报错</li><li>不写该注解，重写依然构成重写</li><li><code>@Override</code> 只能修饰方法，不能修饰其他 类、包、属性等</li><li>查看 <code>@Override</code> 注解源码为 <code>@Target(ElementType.METHOD)</code> 说明只能修饰方法</li><li><code>@Target</code> 是修饰注解的注解，称为 元注解</li></ol><h3 id="_10-2-2-deprecated" tabindex="-1"><a class="header-anchor" href="#_10-2-2-deprecated"><span>10.2.2 <code>@Deprecated</code></span></a></h3><ol><li><p><code>@Deprecated</code> 表示指定的某个程序元素（类、方法等）已过时</p></li><li><p>不推荐使用，但仍能使用</p></li><li><p>可以修饰方法、类、字段、包、参数</p><p><code>@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})</code></p></li><li><p><code>@Deprecated</code> 可以做到新旧版本的兼容和过度</p></li></ol><h3 id="_10-2-3-suppresswarnings" tabindex="-1"><a class="header-anchor" href="#_10-2-3-suppresswarnings"><span>10.2.3 <code>@SuppressWarnings()</code></span></a></h3><ol><li><p>当我们不想看到警告信息时，用 <code>@SuppressWarnings()</code></p><p>语法：<code>@SuppressWarnings({&quot;...&quot;})</code></p><p>在后面 <code>({&quot;unused&quot;, &quot;unchecked&quot;})</code> 这样写入你希望抑制的信息，以下是所有可以输入的关键字</p><table><thead><tr><th style="text-align:left;"><strong>关键字</strong></th><th style="text-align:left;"><strong>用途</strong></th></tr></thead><tbody><tr><td style="text-align:left;">all</td><td style="text-align:left;">抑制所有警告</td></tr><tr><td style="text-align:left;">boxing</td><td style="text-align:left;">抑制与装箱/解装箱操作相关的警告</td></tr><tr><td style="text-align:left;">cast</td><td style="text-align:left;">抑制与强制转换操作相关的警告</td></tr><tr><td style="text-align:left;">dep-ann</td><td style="text-align:left;">抑制与已弃用注释相关的警告</td></tr><tr><td style="text-align:left;">deprecation</td><td style="text-align:left;">抑制与弃用有关的警告</td></tr><tr><td style="text-align:left;">fallthrough</td><td style="text-align:left;">抑制与 switch 语句中丢失断点相关的警告</td></tr><tr><td style="text-align:left;">finally</td><td style="text-align:left;">抑制不返回的 finally 块的相关警告</td></tr><tr><td style="text-align:left;">hiding</td><td style="text-align:left;">抑制与隐藏变量的局部变量相关的警告</td></tr><tr><td style="text-align:left;">incomplete-switch</td><td style="text-align:left;">抑制与 switch 语句中缺少条目相关的警告（enum）</td></tr><tr><td style="text-align:left;">nls</td><td style="text-align:left;">抑制与 非nls 字符串字面值相关的警告</td></tr><tr><td style="text-align:left;">null</td><td style="text-align:left;">抑制相对于null分析的警告</td></tr><tr><td style="text-align:left;">rawtypes</td><td style="text-align:left;">在类参数上使用泛型时，抑制与非特定类型相关的警告</td></tr><tr><td style="text-align:left;">restriction</td><td style="text-align:left;">抑制与不推荐或禁止引用有关的警告</td></tr><tr><td style="text-align:left;">serial</td><td style="text-align:left;">抑制与可序列化类缺少serialVersionUID字段相关的警告</td></tr><tr><td style="text-align:left;">static-access</td><td style="text-align:left;">抑制与不正确的静态访问有关的警告</td></tr><tr><td style="text-align:left;">synthetic-access</td><td style="text-align:left;">抑制与未优化的内部类访问相关的警告</td></tr><tr><td style="text-align:left;">unchecked</td><td style="text-align:left;">抑制与未检查的操作相关的警告</td></tr><tr><td style="text-align:left;">unqualified-field-access</td><td style="text-align:left;">抑制与字段访问不合格相关的警告</td></tr><tr><td style="text-align:left;">unused</td><td style="text-align:left;">抑制与未使用代码相关的警告</td></tr></tbody></table></li><li><p><code>@SuppressWarnings</code> 的范围与你放置的位置相关。</p></li></ol><h3 id="_10-2-4-jdk-的元注解-了解即可" tabindex="-1"><a class="header-anchor" href="#_10-2-4-jdk-的元注解-了解即可"><span>10.2.4 JDK 的元注解（了解即可）</span></a></h3><blockquote><p>JDK 的 元注解 是用于修饰其他注解的注解</p></blockquote><ol><li><p><code>@Rentention</code>：指定注解的作用范围，有三种范围 <code>SOURCE</code> <code>CLASS</code> <code>RUNTIME</code></p><p><code>@Rentention</code> 的三种值：</p><ul><li><code>RententionPolicy.SOURCE</code>：编译器使用后，直接丢弃这种策略的注释</li><li><code>RententionPolicy.CLASS</code>：编译器把注解记录在 class 文件中。当运行 Java 程序时， JVM 不会保留注释。这是默认值</li><li><code>RententionPolicy.RUNTIME</code>：编译器把注解记录在 class 文件中。当运行 Java 程序时，JVM 会保留注解。程序可以通过反射获取该注解</li></ul></li><li><p><code>@Target</code>：指定注解的使用范围</p><p><code>@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})</code></p></li><li><p><code>@Documented</code>：指定该注解会不会在 Javadoc 体现</p></li><li><p><code>@Inherited</code>：子类会继承父类注解</p></li></ol>`,34),l=[n];function d(h,p){return a(),i("div",null,l)}const r=s(t,[["render",d],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/notes/JavaSE/cs5i9wfr/","title":"09 枚举和注解","lang":"zh-CN","frontmatter":{"title":"09 枚举和注解","createTime":"2024/09/01 23:18:29","permalink":"/notes/JavaSE/cs5i9wfr/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"10.1 枚举","slug":"_10-1-枚举","link":"#_10-1-枚举","children":[{"level":3,"title":"10.1.1 自定义枚举","slug":"_10-1-1-自定义枚举","link":"#_10-1-1-自定义枚举","children":[]},{"level":3,"title":"10.1.2 enum 关键字","slug":"_10-1-2-enum-关键字","link":"#_10-1-2-enum-关键字","children":[]},{"level":3,"title":"10.1.3 Enumeration接口","slug":"_10-1-3-enumeration接口","link":"#_10-1-3-enumeration接口","children":[]}]},{"level":2,"title":"10.2 注解","slug":"_10-2-注解","link":"#_10-2-注解","children":[{"level":3,"title":"10.2.1 @Override","slug":"_10-2-1-override","link":"#_10-2-1-override","children":[]},{"level":3,"title":"10.2.2 @Deprecated","slug":"_10-2-2-deprecated","link":"#_10-2-2-deprecated","children":[]},{"level":3,"title":"10.2.3 @SuppressWarnings()","slug":"_10-2-3-suppresswarnings","link":"#_10-2-3-suppresswarnings","children":[]},{"level":3,"title":"10.2.4 JDK 的元注解（了解即可）","slug":"_10-2-4-jdk-的元注解-了解即可","link":"#_10-2-4-jdk-的元注解-了解即可","children":[]}]}],"readingTime":{"minutes":6.16,"words":1847},"git":{"createdTime":1725207483000,"updatedTime":1725207483000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"notes/JavaSE/01 基础/09 枚举和注解.md"}`);export{r as comp,c as data};
