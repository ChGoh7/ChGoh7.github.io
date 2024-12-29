import{_ as r,c as o,a as s,o as a}from"./app-DNksp9_M.js";const t="/assets/6420f622f1c01-DYS6WV3a.png",n="/assets/6422dbcc92639-BeyCrerz.png",c="/assets/641e71e50cf0f-BiCpYRs6.png",i="/assets/641e71e826085-BcikbOHe.png",p="/assets/641e71e50604b-s9sSDf55.png",m="/assets/641e71e88d097-Bpb77UC6.png",g="/assets/641e71e16a644-Cdtn48dv.png",l="/assets/641e71ef30298-bW5cOWnB.png",d="/assets/641e71e00094a-avIsgiwZ.png",h="/assets/641e71e2541b7-DUruBS5K.png",f="/assets/641e71e1c36b7-BjJSVS7p.png",_={};function b(u,e){return a(),o("div",null,e[0]||(e[0]=[s('<p>免责声明：以下内容转载自：https://blog.arnozeng.com/archives/service-mode-setup-manually.html</p><h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue"><span>Issue</span></a></h2><p>当我们希望Clash接管我们电脑的全局流量，而不是只作为浏览器的代理时，我们则需用到Clash中的TUN模式。而当我们使用Clash的TUN模式时，必须确保Service Mode已经成功安装并处于Active的状态。大多数电脑可以正常安装Service Mode，正常安装的步骤可以参考上一篇博客。</p><p>Clash for Windows 下载及安装</p><p>Intro当前Clash存在多个版本如Clash For Windows、Clash Meta、Clash Ver...</p><p>而有的时候我们会遇到以下这种情况，遇到这种情况的时候Arno推荐我们直接尝试手动安装Service Mode。</p><p><a href="https://img.arnozeng.com/2023/03/27/6420f622f1c01.png" target="_blank" rel="noopener noreferrer"><img src="'+t+'" alt="img"></a></p><p><a href="https://img.arnozeng.com/2023/03/28/6422dbcc92639.png" target="_blank" rel="noopener noreferrer"><img src="'+n+'" alt="img"></a></p><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h2><p>首先我们在C盘创建一个名为<code>Clash for Windows Service</code>的文件夹。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e50cf0f.png" target="_blank" rel="noopener noreferrer"><img src="'+c+'" alt="img"></a></p><p>然后打开Clash For Windows的安装目录。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e826085.png" target="_blank" rel="noopener noreferrer"><img src="'+i+'" alt="img"></a></p><p>打开<code>resource\\static\\files\\win\\x64\\service</code>，复制<code>clash-core-service.exe</code>和<code>service.exe</code>到刚创建的<code>Clash for Windows Service</code>文件夹中。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e50604b.png" target="_blank" rel="noopener noreferrer"><img src="'+p+'" alt="img"></a></p><p>打开<code>resource\\static\\files\\win\\common</code>，复制<code>service.yml</code>到<code>Clash for Windows Service</code>文件夹中。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e88d097.png" target="_blank" rel="noopener noreferrer"><img src="'+m+'" alt="img"></a></p><p>现在<code>Clash for Windows Service</code>文件夹中应该有以下三个文件，现在我们复制一下<code>Clash for Windows Service</code>的文件路径。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e16a644.png" target="_blank" rel="noopener noreferrer"><img src="'+g+'" alt="img"></a></p><p>以管理员身份打开CMD。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71ef30298.png" target="_blank" rel="noopener noreferrer"><img src="'+l+'" alt="img"></a></p><p>输入<code>cd C:\\Clash for Windows Service</code>以转到<code>Clash for Windows Service</code>文件夹中。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e00094a.png" target="_blank" rel="noopener noreferrer"><img src="'+d+'" alt="img"></a></p><p>输入<code>service.exe install</code>和<code>service.exe start</code>以安装Service并启动。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e2541b7.png" target="_blank" rel="noopener noreferrer"><img src="'+h+'" alt="img"></a></p><p>重启Clash for Windows，检查Service Mode旁的小地球图标，变绿表示Service Mode已经安装成功。</p><p><a href="https://img.arnozeng.com/2023/03/25/641e71e1c36b7.png" target="_blank" rel="noopener noreferrer"><img src="'+f+'" alt="img"></a></p>',27)]))}const C=r(_,[["render",b],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/article/wzjygf3a/","title":"Clash for Windows 手动安装 Service Mode","lang":"zh-CN","frontmatter":{"title":"Clash for Windows 手动安装 Service Mode","createTime":"2024/12/28 11:40:18","permalink":"/article/wzjygf3a/","tags":["clash","solution"]},"headers":[],"readingTime":{"minutes":1.64,"words":492},"git":{"updatedTime":1735404182000,"contributors":[{"name":"wuchen","username":"wuchen","email":"3180349973@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/wuchen?v=4","url":"https://github.com/wuchen"}],"changelog":[{"hash":"828b31e7288d4b6cc09049641786ac989e067ec6","date":1735404182000,"email":"3180349973@qq.com","author":"wuchen","message":"update qimofuxi","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/828b31e7288d4b6cc09049641786ac989e067ec6"}]},"filePathRelative":"WORK/BLOG/Clash手动安装ServiceMode.md","categoryList":[{"id":"9f20f1","sort":10024,"name":"WORK"},{"id":"d55882","sort":10056,"name":"BLOG"}],"bulletin":false}');export{C as comp,w as data};