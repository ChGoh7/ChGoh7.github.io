import{_ as s,c as e,a,o as i}from"./app-C-SrqBaq.js";const l={};function t(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<ul><li><a href="https://juejin.cn/post/7308581358808514614" target="_blank" rel="noopener noreferrer">用Mermaid的代码文本轻松绘制时序图真香</a></li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><p>在Typora中使用</p><div class="language-sequence line-numbers-mode" data-ext="sequence" data-title="sequence"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>participant User</span></span>
<span class="line"><span>participant Browser</span></span>
<span class="line"><span>participant Server</span></span>
<span class="line"><span>participant DataSource</span></span>
<span class="line"><span>participant Controller</span></span>
<span class="line"><span>participant Service</span></span>
<span class="line"><span>participant DAO</span></span>
<span class="line"><span>	User-&gt;&gt;Browser: 打开浏览器</span></span>
<span class="line"><span>	Browser-&gt;&gt;Server: 发送http request</span></span>
<span class="line"><span>	Server-&gt;&gt;DataSource: 初始化数据源</span></span>
<span class="line"><span>	DataSource--&gt;Server: 返回配置</span></span>
<span class="line"><span>	Server-&gt;&gt;Controller: 根据url匹配成功rest接口</span></span>
<span class="line"><span>	Controller-&gt;&gt;Service: 执行业务</span></span>
<span class="line"><span>	Service-&gt;&gt;DAO: 查询数据库</span></span>
<span class="line"><span>	DAO-&gt;&gt;DataSource: 委托数据源获取连接查询数据</span></span>
<span class="line"><span>	DataSource--&gt;DAO: 返回数据</span></span>
<span class="line"><span>	DAO-&gt;&gt;Service: 返回业务所需数据</span></span>
<span class="line"><span>	Service--&gt;Controller: 业务执行完毕</span></span>
<span class="line"><span>	Controller-&gt;&gt;Server: 返回视图或数据</span></span>
<span class="line"><span>	Server--&gt;Browser: 返回http response</span></span>
<span class="line"><span>	Browser--&gt; User: 展示在用户的设备上</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sequence line-numbers-mode" data-ext="sequence" data-title="sequence"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Alice -&gt;&gt; Bob: Hello Bob, how are you?</span></span>
<span class="line"><span>Bob--&gt;&gt;John: How about you John?</span></span>
<span class="line"><span>Bob--x Alice: I am good thanks!</span></span>
<span class="line"><span>Bob-x John: I am good thanks!</span></span>
<span class="line"><span>Note right of John: Bob thinks a long&lt;br/&gt;long time, so long&lt;br/&gt;that the text does&lt;br/&gt;not fit on a row.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bob--&gt;Alice: Checking with John...</span></span>
<span class="line"><span>Alice-&gt;John: Yes... John, how are you?</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const c=s(l,[["render",t],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/article/fni9a1wz/","title":"用Mermaid的代码文本轻松绘制时序图真香","lang":"zh-CN","frontmatter":{"title":"用Mermaid的代码文本轻松绘制时序图真香","createTime":"2024/09/26 00:12:23","permalink":"/article/fni9a1wz/","tags":["markdown"]},"headers":[{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"readingTime":{"minutes":0.84,"words":251},"git":{"createdTime":1727281038000,"updatedTime":1729514134000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":4}]},"filePathRelative":"工作/博客/用Mermaid的代码文本轻松绘制时序图真香.md","categoryList":[{"id":"9a018b","sort":10003,"name":"工作"},{"id":"5e5c59","sort":10021,"name":"博客"}]}');export{c as comp,d as data};
