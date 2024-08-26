import{_ as e,c as a,o as i,b as r}from"./app-Cuu9mCFg.js";const t="/assets/image-20231204215539220-g2fHbYLs.png",n="/assets/image-20231204222749831-BarYJ90C.png",s="/assets/image-20231204223059530-C32mSsg7.png",p="/assets/image-20231204223242693-D4d6Wjg5.png",o="/assets/image-20231204223942549-Bimncwpr.png",c="/assets/image-20231204224450727-o5FAlKem.png",l="/assets/image-20231204225200173-BNp9A0Za.png",g="/assets/image-20231204230559749-BIaWpj3p.png",d="/assets/image-20231204233423686-XHN668xJ.png",m="/assets/image-20231204231234047-ButOP6At.png",h="/assets/image-20231204232327896-DXFA7EZE.png",u="/assets/image-20231204233838791-DqYaPsGl.png",_="/assets/image-20231204234453901-Dv5AhkhF.png",f="/assets/image-20231204234850740-C2qVrQbH.png",b="/assets/image-20231204235122269-C7ib8bwb.png",k={},v=r('<blockquote><p>本文引自:<a href="https://qinyu.space/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/%E5%88%A9%E7%94%A8cloudflare%E5%8A%A0%E9%80%9Fgithub%E4%B8%BB%E9%A1%B5%E8%AE%BF%E9%97%AE/#%E5%87%86%E5%A4%87" target="_blank" rel="noopener noreferrer">QinYu的博客</a></p></blockquote><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言"><span>1. 前言</span></a></h2><p>对于国内大陆用户而言，想要直接访问用 github 托管的个人博客不是件容易的事，为了解决网络不可达问题，可以采用 <a href="https://www.cloudflare.com/zh-hans-cn/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">CDN(content delivery network)</a>将网页内容分发到全球各地的服务器上，同时还能缩短网站加载时间。</p><p><a href="https://pic.qinyu.space/image/image-20231204215539220.png" target="_blank" rel="noopener noreferrer"><img src="'+t+'" alt="image-20231204215539220"></a></p><p>但是大部分国内的CDN服务都是收费的，所以就把目光转向了 cloudflare。cloudflare 作为全球最大的网络服务提供商，提供免费的cdn 服务，虽然 cdn 节点都在国外，但还是比直接访问github.io要快的多，不过免费版请求次数限制有10w次的限制，但对于我们博客而言是绰绰有余了，下面介绍配置过程。</p><h2 id="_2-准备" tabindex="-1"><a class="header-anchor" href="#_2-准备"><span>2. 准备</span></a></h2><p>使用 cloudflare 的 cdn 服务需要我们拥有一个可配置的域名，所以需要先购买一个域名，本人是在腾讯云上购买的<code>.space</code>的后缀的域名，10年价格也只要一百多，还是很便宜的，购买域名的教程就跳过了。</p><h2 id="_3-教程" tabindex="-1"><a class="header-anchor" href="#_3-教程"><span>3. 教程</span></a></h2><p>注：教程中的<code>qinyu.me</code>和<code>qinyu.space</code>都是本人域名，所以在以下内容中可以视为同一个。</p><h3 id="_3-1-配置-cloudflare" tabindex="-1"><a class="header-anchor" href="#_3-1-配置-cloudflare"><span>3.1 配置 cloudflare</span></a></h3><ol><li><p>进入https://www.cloudflare-cn.com/，注册账号并登录</p></li><li><p>在左侧栏中进入<code>网站</code>一栏，点击右方<code>添加站点</code></p><p><a href="https://pic.qinyu.space/image/image-20231204222749831.png" target="_blank" rel="noopener noreferrer"><img src="'+n+'" alt="image-20231204222749831"></a></p></li><li><p>输入自己的域名，<strong>注意不要带<code>www</code>或者<code>https</code></strong>，比如我的就直接填写<code>qinyu.space</code></p><p><a href="https://pic.qinyu.space/image/image-20231204223059530.png" target="_blank" rel="noopener noreferrer"><img src="'+s+'" alt="image-20231204223059530"></a></p></li><li><p>选择套餐，<code>free</code>即可</p><p><a href="https://pic.qinyu.space/image/image-20231204223242693.png" target="_blank" rel="noopener noreferrer"><img src="'+p+'" alt="image-20231204223242693"></a></p></li><li><p>点击继续后 cloudflare 会自动扫描域名的 dns 记录，如果是刚刚创建的域名，可能扫描的结果为空。截图中的几条记录可以不用管</p><p><a href="https://pic.qinyu.space/image/image-20231204223942549.png" target="_blank" rel="noopener noreferrer"><img src="'+o+'" alt="image-20231204223942549"></a></p></li><li><p><strong>这一步很重要，点击添加记录，按照如下方式添加类型为A，名称为@，IPv4地址为<code>185.199.108.153</code></strong></p><p><a href="https://pic.qinyu.space/image/image-20231204224450727.png" target="_blank" rel="noopener noreferrer"><img src="'+c+`" alt="image-20231204224450727"></a></p><p><strong>按照上述方式再添加以下三条记录，类型和名称和上述相同，IPv4地址分别为：</strong></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>185.199.109.153</span></span>
<span class="line"><span>185.199.110.153</span></span>
<span class="line"><span>185.199.111.153</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>完成之后应该能看到列表中有以下四条这样的记录，除了<code>名称</code>是自己的域名外其他应该都和图中相同</strong></p><p><a href="https://pic.qinyu.space/image/image-20231204225200173.png" target="_blank" rel="noopener noreferrer"><img src="`+l+'" alt="image-20231204225200173"></a></p><p>上述添加的4条ip地址均是GitHub Pages 的 IP 地址，具体可查看【https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site】</p></li><li><p>点击继续后，cloudflare 会要求将我们DNS服务器修改为以下图中所示的的服务器，可以先截个图或者存文档里：</p><p><a href="https://pic.qinyu.space/image/image-20231204230559749.png" target="_blank" rel="noopener noreferrer"><img src="'+g+'" alt="image-20231204230559749"></a></p></li><li><p>点击下方继续后会有一个快速入门指南，里面的配置可以都开启：</p><p><a href="https://pic.qinyu.space/image/image-20231204233423686.png" target="_blank" rel="noopener noreferrer"><img src="'+d+'" alt="image-20231204233423686"></a></p></li></ol><h3 id="_3-2-修改dns服务器" tabindex="-1"><a class="header-anchor" href="#_3-2-修改dns服务器"><span>3.2 修改DNS服务器</span></a></h3><p>进入腾讯云控制台，修改的DNS服务器为3.1 第7步中 cloudflare 提供的DNS服务器，如下所示：</p><p><a href="https://pic.qinyu.space/image/image-20231204231234047.png" target="_blank" rel="noopener noreferrer"><img src="'+m+'" alt="image-20231204231234047"></a></p><p>DNS服务器更改后生效需要一段时间，少则几分钟，慢则需要几个小时</p><p>过一段时间可以看到 DNS服务器已经修改成功了</p><p><a href="https://pic.qinyu.space/image/image-20231204232327896.png" target="_blank" rel="noopener noreferrer"><img src="'+h+'" alt="image-20231204232327896"></a></p><p>返回 cloudflare，如果看到 **“Cloudflare 正在保护您的站点”**说明已经配置成功了：</p><p><a href="https://pic.qinyu.space/image/image-20231204233838791.png" target="_blank" rel="noopener noreferrer"><img src="'+u+'" alt="image-20231204233838791"></a></p><h3 id="_3-3-设置github-page" tabindex="-1"><a class="header-anchor" href="#_3-3-设置github-page"><span>3.3 设置Github page</span></a></h3><p>进入github.io对应的仓库，进入 <code>Settings</code>：</p><p><a href="https://pic.qinyu.space/image/image-20231204234453901.png" target="_blank" rel="noopener noreferrer"><img src="'+_+'" alt="image-20231204234453901"></a></p><p>进入左栏中的<code>pages</code>，在 <code>Custom domain</code>中输入自己的域名，点击<code>save</code>，如果成功会显示下图：</p><p><a href="https://pic.qinyu.space/image/image-20231204234850740.png" target="_blank" rel="noopener noreferrer"><img src="'+f+'" alt="image-20231204234850740"></a></p><p>这样就可以通过域名来访问自己的博客了，还可以在上图中勾选 <code>Enforcrs HTTPS</code>，这样网站仅会通过https提供服务。</p><p>如果如下图显示dns配置不正确，推测可能是使用了cloudflare后，GitHub验证DNS时返回的是cdn服务器的ip地址，而不是在cloudflare上开始配置的4个GitHub page的ip地址，可以在线dig一下自己的域名验证一下。不过只要网站能通过域名正常访问就没什么问题。</p><p><a href="https://pic.qinyu.space/image/image-20231204235122269.png" target="_blank" rel="noopener noreferrer"><img src="'+b+'" alt="img"></a></p>',27),q=[v];function y(E,w){return i(),a("div",null,q)}const D=e(k,[["render",y],["__file","index.html.vue"]]),N=JSON.parse(`{"path":"/article/nlf338b8/","title":"利用cloudflare加速githubpages","lang":"zh-CN","frontmatter":{"tags":["博客搭建","域名","CDN"],"title":"利用cloudflare加速githubpages","createTime":"2024/08/26 22:41:01","permalink":"/article/nlf338b8/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"1. 前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2. 准备","slug":"_2-准备","link":"#_2-准备","children":[]},{"level":2,"title":"3. 教程","slug":"_3-教程","link":"#_3-教程","children":[{"level":3,"title":"3.1 配置 cloudflare","slug":"_3-1-配置-cloudflare","link":"#_3-1-配置-cloudflare","children":[]},{"level":3,"title":"3.2 修改DNS服务器","slug":"_3-2-修改dns服务器","link":"#_3-2-修改dns服务器","children":[]},{"level":3,"title":"3.3 设置Github page","slug":"_3-3-设置github-page","link":"#_3-3-设置github-page","children":[]}]}],"readingTime":{"minutes":4.03,"words":1208},"git":{"createdTime":1724686075000,"updatedTime":1724686075000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"blog/利用cloudflare加速githubpages.md","categoryList":[{"id":"126ac9","sort":10001,"name":"blog"}]}`);export{D as comp,N as data};
