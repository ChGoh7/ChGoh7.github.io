import{_ as t,c as a,a as s,o as i}from"./app-B3oAkdee.js";const c="/assets/image-20240912091241886-CWNZOecp.png",o={};function l(m,e){return i(),a("div",null,e[0]||(e[0]=[s('<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p><code>net start mysql</code>启动mysql的时候发生</p><p><img src="'+c+'" alt="image-20240912091241886"></p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ol><li><p><code>tasklist| findstr &quot;mysql&quot;</code>，查看有没有mysqld进程</p></li><li><p>然后执行 <code>taskkill/f /t /im mysqld.exe</code> 杀死进程</p></li><li><p>执行 <code>net start mysql</code>，前者行不通则在MySQL安装目录bin下，执行<code>mysqld --console </code></p></li></ol>',5)]))}const r=t(o,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/article/rjnx6gmk/","title":"mysql服务无法启动","lang":"zh-CN","frontmatter":{"tags":["mysql FAQ"],"title":"mysql服务无法启动","createTime":"2024/09/12 09:11:05","permalink":"/article/rjnx6gmk/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;const isDark = um === 'dark' || (um !== 'light' && sm);document.documentElement.dataset.theme = isDark ? 'dark' : 'light';}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"readingTime":{"minutes":0.32,"words":95},"git":{"createdTime":1726112417000,"updatedTime":1726820556000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"工作/后端/MySQL/mysql服务无法启动.md","categoryList":[{"id":"9a018b","sort":10017,"name":"工作"},{"id":"44034d","sort":10011,"name":"后端"},{"id":"482042","sort":10035,"name":"MySQL"}]}`);export{r as comp,d as data};
