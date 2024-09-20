import{_ as s,c as i,o as a,a as l}from"./app-DDPPmttC.js";const n={},e=l(`<blockquote><p>在 Java 语言中，将程序执行中发生的不正常情况称为 “异常”（开发过程中的语法错误和逻辑错误不是异常）</p><p>这些 异常事件 可分为两类：</p><ul><li><p>Error（错误）：Java 虚拟机无法解决的严重问题。</p><p>如：JVM 系统内部错误，资源耗尽等严重情况。Error 是严重错误，程序会崩溃。</p></li><li><p>Exception：其他因编程错误或偶然的外部因素导致的一般性问题，可以使用针对性的代码进行处理。</p><p>如：空指针访问，试图读取不存在的文件，网络中断等等。</p><p>Exception 又分为两大类：</p><ul><li>运行时异常（程序运行时，发生的异常）</li><li>编译时异常（编程时，编译器检查出的异常）</li></ul></li></ul></blockquote><h2 id="_11-1-异常体系图" tabindex="-1"><a class="header-anchor" href="#_11-1-异常体系图"><span>11.1 异常体系图</span></a></h2><blockquote><p>编译异常（受检异常） 和 运行异常（非受检异常）</p><p>Java 源程序 ——(javac.exe)——&gt; 字节码文件 ——(java.exe)——&gt; 在内存中加载，运行类</p><p>编译异常↑ 运行异常↑</p></blockquote><p><a href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC9UExURVlZWdPT07KysmRkZIWFhfT09JmZmWZmZm9vb39/fxkZGUxMTDMzM3p6epCQkKamppubm729venp6cjIyN7e3tbW1s/Pz8LCwnx8fLS0tFZWVoiIiI+Pj6GhoeTk5Glpabu7u93d3evr66CgoJSUlKqqqsnJyeDg4Hd3d8PDw+Xl5bi4uNHR0dvb26Ojo6urq+fn51hYWDg4OCgoKHBwcK2traenp0FBQe7u7vHx8U5OTre3t8zMzHV1df///7GrnpQAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAUGSURBVHja7NoJb6M4GMZxY0NCD64kve/pMZ2d3Z297+X7f6zFNmBAMUXa6URl/q9UJSWPUPzrizFWRUlNLgEBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYn6cCIcRXgvX/h9qcIVBqDdbEM8RCxGCB9QqXYRwHYDHBgwXWl8eKZKiESHI3Ba1kWs3fKixcaJUl1YyeBm7Ocq+yLItUiVBGnXxenSHJolIKEcwHq6ikbOX1YGVzQCTN8LPmSLreghUl9sN4Uw7yajMrLC0TZ1ImzqY6FEop0+pIaEN5HaoOxVuwEqFyc4I46uSlzOLqgxlh6UaR9l3VYWl9Fdoxb1Q90KJtu41pwwFW/WHhTtW8i7TafLCqRsk6bsGw63L9qurXRmuIlbT9lDQnlXU+nBFW1Q2qnZbDprWa2tjR90LZFqx1/+Td/HpGWLlrLDvIwTcx6dQ1Vrntbig68cDms3JwbA5Y1azs1ger6sNV/bbIw1jU81MvNAGrl58RVn8ozW+btF08iGFoAlYvP3csfVur1gJBEIA1uBmue5dhZDOyO2epbmgCVi8/I6x0MMHH9pjsTfBhNzQBq5uPZoQlB0uH3DZG4EZqQ26fL3sZq5uf09Ih6qw3i/pm6BZO0qZX7rrUS68Xsbr5ZE4rePMk08pk9aUZugfqppvs6AM1Acvlo/StP+6EbW06z8hJqxbYp2BZPQUnFsLsKuhQdaHqn5ewbF7KXIn0jWO5MqOQ7RaNLPtbNMmmhimj0GUmYLl8Gs0Lq4wyPbTu1l2QKqHSouzs3OlDIslW5SQsnY/NXmFplyNvEuuLV/Tau9BzwiraDUSwXmysztYWWNtL1psXeumgIrDGaqXvBfUuvtqUYI3V2t1wk1e2msFluJJm6zDJXv/fIfjPP7DAAgsssCiwwAILLLDAosACCyywwAKLAgsssMACC6zt9fDz/v75tyOB+98PD2+ORgKffjw4OP1uJPDxl+Xy8v1I4MPF3t7VNyOB4/vF4uzdzrG+39f1kz/w66Guv/yBvw90KX/gZKkr8Qf+2dOV+gNHC12/7RxrabD2/a31bLAO/a11YbAO/K21MFhLf2s9Gqw9f2vdGqzFu11jnVusE2/gxmI9eQOnFuvYG7i0WH7uK4t15w2cWazrXWP9a7H8f/bQYvm/6IPF+sF/pVssf19Ii/WH/0K2WH/uGuvEWC39gSdj9Twy+Rqri5EZx1gt/IE7Y/XoD1wbq9vd3w1PlufnD2OBp+ebm/uxwPHF6emnscDR4vLy41jg7vHq6sNY4Pr27OyYdRaLUrDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssL6u+k+AAQCR9eHtLKvLfwAAAABJRU5ErkJggg==" target="_blank" rel="noopener noreferrer"><img src="https://i-melody.github.io/img/Java_InputImage/异常体系图_11.1.webp" alt="img"></a></p><p><em>（异常体系图_11.1）</em></p><ul><li><p>运行时异常，编译器不要求强制处置的异常。一般是指编程的逻辑错误，是程序员应该避免其出现的异常。</p><p><code>java.lang.RuntimeException</code>类及它的子类都是运行时异常</p><p>对于运行时异常，可以不做处理。因为这类异常很普遍，若全处理会对程序的可读性和运行效率产生影响</p></li><li><p>编译时异常，是编译器要求必须处置的异常</p></li></ul><h3 id="_11-1-1-常见的运行时异常" tabindex="-1"><a class="header-anchor" href="#_11-1-1-常见的运行时异常"><span>11.1.1 常见的运行时异常</span></a></h3><blockquote><p>常见的运行时异常（<code>RuntimeException</code>）包括</p><ul><li><code>NullPointerException</code>：空指针异常</li><li><code>ArithmeticException</code>：数学运算异常</li><li><code>ArrayIndexOutOfBoundsException</code>：数组下标越界异常</li><li><code>ClassCastException</code>：类型转换异常</li><li><code>NumberFormatException</code>：数学格式异常</li></ul></blockquote><p><strong>空指针异常</strong></p><ul><li>当应用程序试图在需要对象的地方使用 null 时，抛出该异常。</li></ul><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">length</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">					//这里，出现了 空指针异常JAVA</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>数学运算异常</strong></p><ul><li>当出现异常的运算条件时，抛出该异常。</li></ul><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">double</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> /</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">					//这里，出现了 数学运算异常</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p><strong>数组下标越界异常</strong></p><ul><li>用非法索引（为负或超出范围）访问数组时，抛出该异常。</li></ul><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nums</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">					//这里，出现了 数组下标越界异常JAVA</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>类型转换异常</strong></p><ul><li>当试图把对象强制转换为不是实例的子类时，抛出该异常。</li></ul><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Example</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> static</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> args</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        A</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> A1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        A2</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">A2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">a1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">				//这里，出现了 类型转换异常</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> A</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> A1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> A</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> A2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> A</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>数字格式不正确异常</strong></p><ul><li>当应用程序试图将字符串转成一种数值类型，但该字符串不能转换为适当格式时，抛出该异常。</li></ul><blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ABC</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> num</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Integer</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">parseInt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">str</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	//这里，出现了 数字格式不正确异常JAVA</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_11-1-2-常见的编译异常" tabindex="-1"><a class="header-anchor" href="#_11-1-2-常见的编译异常"><span>11.1.2 常见的编译异常</span></a></h3><blockquote><p>常见的编译异常：</p><ul><li><code>SQLException</code>：操作数据库时，查询表可能发生异常</li><li><code>IOException</code>：操作文件时，发生的异常</li><li><code>FileNotFoundException</code>：操作一个不存在的文件时，发生的异常</li><li><code>ClassNotFoundException</code>：加载类，而该类不存在时，发生的异常</li><li><code>EOFException</code>：操作文件，到文档末尾，发生的异常</li><li><code>IllegalArguementException</code>：参数异常</li></ul></blockquote><p>因为还没有学习 SQL、文件编程 等，这里不举例子</p><h2 id="_11-2-异常处理" tabindex="-1"><a class="header-anchor" href="#_11-2-异常处理"><span>11.2 异常处理</span></a></h2><blockquote><p>异常发生时，对异常的处理方式。如果没有显式异常处理，默认处理方式是 <code>throws</code></p><ul><li><code>try - chatch - finally</code>：程序员在代码中捕获发生的异常，自行处理</li><li><code>throws</code>：将发生的异常抛出，交给调用者（方法）来处理。最顶级的处理者就是 JVM</li></ul></blockquote><h3 id="_11-2-1-try-catch-异常处理" tabindex="-1"><a class="header-anchor" href="#_11-2-1-try-catch-异常处理"><span>11.2.1 <code>try - catch</code> 异常处理</span></a></h3><blockquote><p>Java 提供 try 和 catch 块 来处理异常。try 块用于包含可能出错的代码，catch 块用于处理 try 块中的异常。可以根据需要在程序中有多个 <code>try - catch</code> 块。</p></blockquote><blockquote><p>基本语法</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	//可疑代码</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	//将异常生成对应的异常对象，传递给 catch 块</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Exception </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">	//如果发生异常，执行这些代码</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> finally</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //无论是否异常，都执行这些代码</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    //finally 块可以不写</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><blockquote><p>快捷键：选中代码后按 ctrl + alt + T</p></blockquote><h4 id="_11-2-1-1-使用细节" tabindex="-1"><a class="header-anchor" href="#_11-2-1-1-使用细节"><span>#11.2.1.1 使用细节</span></a></h4><ol><li><p>如果异常发生了，则异常发生后面的代码块都不执行，直接进入 catch 块</p></li><li><p>如果异常未发生，则顺序执行 try 代码块，catch 块不执行</p></li><li><p>如果希望不管是否异常，都执行一些代码，则使用 finally</p></li><li><p>可以有多个 catch 捕获不同的异常。要求 子类异常在前，父类异常在后。</p></li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> try</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> 	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\`NullPointerException\` </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> 	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ArithmeticException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> 	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ArrayIndexOutOfBoundsException </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> 	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> catch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Exception </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> 	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>可以进行 try - finally 配合使用（不写 catch）。这种用法相当于没有捕获异常，此时程序如果出错会直接退出。</li></ol><blockquote><p>应用场景，就是写一段代码，不管是否发生异常，都必须执行某个业务逻辑。</p></blockquote><ol start="6"><li><p>如果没有出现异常，执行 try 中所有语句，不执行 catch 语句，最后执行 finally 语句</p></li><li><p>如果出现异常，则 try 块异常发生后，剩余语句不执行。之后执行 catch 语句，最后，执行 finally 语句。</p></li></ol><h3 id="_11-2-2-throws-异常处理" tabindex="-1"><a class="header-anchor" href="#_11-2-2-throws-异常处理"><span>11.2.2 <code>throws</code> 异常处理</span></a></h3><blockquote><p>如果一个方法可能生成某种异常，但是并不能确定如何处理这种异常，则此方法应显式地声明抛出异常，表明该方法将不对这些异常进行处理，而由调用者负责处理</p><p>在方法中声明 <code>throws</code> 语句可以声明抛出异常的列表。<code>throws</code> 后面的异常类型可以是方法中产生的异常类型，也可以是它的父类。</p></blockquote><blockquote><p>语法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> metord</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> throws FileNontFoundException </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\`NullPointerException\` </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-2-2-1-使用细节" tabindex="-1"><a class="header-anchor" href="#_11-2-2-1-使用细节"><span>#11.2.2.1 使用细节</span></a></h4><ol><li>对于 <strong>编译异常</strong>，程序中必须处理。</li><li>对于 <strong>运行异常</strong>，程序中诺没有处理，默认处理是 <code>throws</code></li><li>子类 重写 父类方法时，子类方法抛出的异常类型必须和父类一致，或者是父类抛出异常类型的子类型。</li><li>如果有 <code>try - catch</code> 就不必 <code>throws</code> 了</li></ol><h2 id="_11-3-自定义异常" tabindex="-1"><a class="header-anchor" href="#_11-3-自定义异常"><span>11.3 自定义异常</span></a></h2><blockquote><p>当程序中出现了某些 “错误”，但该信息并未在 <code>Throwable</code> 子类中描述处理，这时候可以自己设计异常类，用于描述该错误信息</p></blockquote><ol><li>定义类：自定义异常类名，继承 <code>RuntimeException</code> 或 Exception</li><li>如果继承 Exception，属于 编译异常。</li><li>如果继承 <code>RuntimeException</code>，属于 运行异常。（一般来说，选这个。这样利用了默认处理机制，更方便）</li></ol><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Metords</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> method</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">       int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">n </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">          throw</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> CustomException</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">不能大于100</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">     }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CustomException</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> extends</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> \`</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">RuntimeException</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">\` </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> CustomException</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">String </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">	super</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">message</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-1-throw-和-throws" tabindex="-1"><a class="header-anchor" href="#_11-3-1-throw-和-throws"><span>11.3.1 <code>throw</code> 和 <code>throws</code></span></a></h3><table><thead><tr><th></th><th>意义</th><th>位置</th><th>后面跟的东西</th></tr></thead><tbody><tr><td><code>throws</code></td><td>异常处理的一种方式</td><td>方法声明时</td><td>异常类型</td></tr><tr><td><code>throw</code></td><td>手动生成异常对象关键字</td><td>方法体中</td><td>异常对象</td></tr></tbody></table><h3 id="_11-3-2-编程小技巧" tabindex="-1"><a class="header-anchor" href="#_11-3-2-编程小技巧"><span>11.3.2 编程小技巧</span></a></h3><blockquote><p>编写异常时，先确定正确的情况，然后取反。这样写，你的思路就不乱。</p></blockquote>`,52),t=[e];function h(p,k){return a(),i("div",null,t)}const r=s(n,[["render",h],["__file","index.html.vue"]]),c=JSON.parse(`{"path":"/notes/JavaSE/gylyd9zi/","title":"10 异常（Exception）","lang":"zh-CN","frontmatter":{"title":"10 异常（Exception）","createTime":"2024/09/01 23:18:29","permalink":"/notes/JavaSE/gylyd9zi/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"11.1 异常体系图","slug":"_11-1-异常体系图","link":"#_11-1-异常体系图","children":[{"level":3,"title":"11.1.1 常见的运行时异常","slug":"_11-1-1-常见的运行时异常","link":"#_11-1-1-常见的运行时异常","children":[]},{"level":3,"title":"11.1.2 常见的编译异常","slug":"_11-1-2-常见的编译异常","link":"#_11-1-2-常见的编译异常","children":[]}]},{"level":2,"title":"11.2 异常处理","slug":"_11-2-异常处理","link":"#_11-2-异常处理","children":[{"level":3,"title":"11.2.1 try - catch 异常处理","slug":"_11-2-1-try-catch-异常处理","link":"#_11-2-1-try-catch-异常处理","children":[]},{"level":3,"title":"11.2.2 throws 异常处理","slug":"_11-2-2-throws-异常处理","link":"#_11-2-2-throws-异常处理","children":[]}]},{"level":2,"title":"11.3 自定义异常","slug":"_11-3-自定义异常","link":"#_11-3-自定义异常","children":[{"level":3,"title":"11.3.1 throw 和 throws","slug":"_11-3-1-throw-和-throws","link":"#_11-3-1-throw-和-throws","children":[]},{"level":3,"title":"11.3.2 编程小技巧","slug":"_11-3-2-编程小技巧","link":"#_11-3-2-编程小技巧","children":[]}]}],"readingTime":{"minutes":6.05,"words":1816},"git":{"createdTime":1725207483000,"updatedTime":1725207483000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"notes/JavaSE/01 基础/10 异常（Exception）.md"}`);export{r as comp,c as data};
