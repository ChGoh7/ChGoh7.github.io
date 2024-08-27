import{_ as e,c as a,o as t,b as o}from"./app-CvDFSIw7.js";const s="/assets/image-20240827140619861-Czu-r49A.png",c={},r=o('<blockquote><p>该文档主要存放一些容易遗忘的markdown写作时遇到的问题以及解决方案，用以提醒自己，免做重复工作</p></blockquote><h2 id="标题q-a" tabindex="-1"><a class="header-anchor" href="#标题q-a"><span>标题Q&amp;A</span></a></h2><p>有一些以前的文档写的时候多用的是一级标题，vuepress无法展示在侧边栏大纲中(看了plume主题的文档貌似没有找到全局的配置，只有通过单个文章的frontmatter来控制)，影响观感，可以用这个表达式在Typora编辑器中正则批量替换让原本的标题结构进行降级</p><blockquote><p>搜索 <code>(#{1,6})\\s</code> 替换为：<code>$1# </code>(带空格)</p></blockquote><h2 id="图片q-a" tabindex="-1"><a class="header-anchor" href="#图片q-a"><span>图片Q&amp;A</span></a></h2><p><img src="'+s+'" alt="image-20240827140619861"></p><p>typora配置的图片设置是粘贴时自动存放到{filename}.assets文件夹的规则，在本地的路径是相对路径，呈现<code>![图片]({filename}.assets/image.png)</code>的相对路径，vuepress的静态资源一般放在.vuepress/public下，这样构建项目生成网站的时候会自动放在引用它的文件附近，这时需要额外地在原本的相对路径前加上<code>/</code>(全局的静态资源路径，详见<a href="https://v2.vuepress.vuejs.org/zh/guide/assets.html" target="_blank" rel="noopener noreferrer">静态资源</a>),<code>![图片]({filename}.assets/image.png)</code> =&gt; <code>![图片](/{filename}.assets/image.png)</code></p><blockquote><p>需要做的就是每次写文章贴图片的时候将文件放在public目录下就行了，文件附近留存一份以便以后做拓展迁移，public下粘贴一份用以构建生成。</p></blockquote>',8),i=[r];function n(d,m){return t(),a("div",null,i)}const p=e(c,[["render",n],["__file","index.html.vue"]]),u=JSON.parse(`{"path":"/article/pv4nggku/","title":"markdown写作的Q&A","lang":"zh-CN","frontmatter":{"title":"markdown写作的Q&A","createTime":"2024/08/27 13:34:03","permalink":"/article/pv4nggku/","tags":["markdown写作","Q&A"],"head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"标题Q&A","slug":"标题q-a","link":"#标题q-a","children":[]},{"level":2,"title":"图片Q&A","slug":"图片q-a","link":"#图片q-a","children":[]}],"readingTime":{"minutes":1.26,"words":379},"git":{"createdTime":1724738849000,"updatedTime":1724738849000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"blog/写作/markdown写作的Q&A.md","categoryList":[{"id":"126ac9","sort":10003,"name":"blog"},{"id":"896267","sort":10004,"name":"写作"}]}`);export{p as comp,u as data};