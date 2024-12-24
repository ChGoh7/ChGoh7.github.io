import{_ as t,c as a,b as s,o}from"./app-B-f8u5un.js";const r="/assets/6bdd753f32eb2ef608aba4365e04ac98-C9tWTy7x.png",c="/assets/99ad847e859fe0504cc2d886e9e2b26c-DBnRSq6t.png",n="/assets/a335c0da4c67aef264eb863a9138b00e-CO2Kuh17.png",i="/assets/c61b76dd8f3c00a53819e4515fb67545-CF_Xz9GP.png",h="/assets/9eaa585b237c9592bb7dc1b20945df09-Ce8ktq4B.png",m={};function b(d,e){return o(),a("div",null,e[0]||(e[0]=[s('<h1 id="开启代理后-解决开启vpn代理后无法访问hosts域名以及nginx" tabindex="-1"><a class="header-anchor" href="#开启代理后-解决开启vpn代理后无法访问hosts域名以及nginx"><span>开启代理后，解决开启vpn代理后无法访问hosts域名以及Nginx</span></a></h1><p>版权声明：本文为博主原创文章，遵循 <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC 4.0 BY-SA</a> 版权协议，转载请附上原文出处链接和本声明。</p><p>本文链接：<a href="https://blog.csdn.net/zsy996/article/details/134908223" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zsy996/article/details/134908223</a></p><p>关闭<a href="https://so.csdn.net/so/search?q=vpn&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">vpn</a>时，正常Http请求结构如下。<br><img src="'+r+'" alt=""><br> Nginx是通过Host，以及监听80端口，来确认某个请求的。<br> 当使用Vpn正向代理后，我的代理端口是7888。<br> 此时Host未变，而端口却变成了代理端口，这样Nginx应该是无法监听到.<br><img src="'+c+'" alt=""></p><p>查看一下代理日志，<br><img src="'+n+'" alt=""></p><p>发现应该是VPN的dns服务器无法解析Host映射的域名。<br> 最简单的处理方式：设置某些域名不走代理<br> 通过设置CFW中的Bypass Domain/IpNet<br><img src="'+i+'" alt=""><br> 如图<br><img src="'+h+'" alt=""></p><p>设置完后，就可以开着代理也能正常访问本地hosts域名以及Nginx了。</p>',7)]))}const l=t(m,[["render",b],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/article/nkawrlf7/","title":"开启代理后，域名和nginx访问问题","lang":"zh-CN","frontmatter":{"title":"开启代理后，域名和nginx访问问题","createTime":"2024/10/24 12:25:51","permalink":"/article/nkawrlf7/","tags":["vpn","FAQ"]},"headers":[],"readingTime":{"minutes":1.13,"words":339},"git":{"updatedTime":1735020969000,"contributors":[{"name":"chgoh7","username":"chgoh7","email":"3180349973@qq.com","commits":3,"avatar":"https://avatars.githubusercontent.com/chgoh7?v=4","url":"https://github.com/chgoh7"}],"changelog":[{"hash":"0d58fa92e647bb5a95ec57d583f1aa0960bb74e4","date":1735020969000,"email":"3180349973@qq.com","author":"chgoh7","message":"docs: new update","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/0d58fa92e647bb5a95ec57d583f1aa0960bb74e4"},{"hash":"c3178f5b238d4b9a81e96d36d410336ed5025f12","date":1734882122000,"email":"3180349973@qq.com","author":"chgoh7","message":"update lastest  vp","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/c3178f5b238d4b9a81e96d36d410336ed5025f12"},{"hash":"cc5960724789ed4bf84856f76639a3fbf3d829b6","date":1730162033000,"email":"3180349973@qq.com","author":"chgoh7","message":"style: switch the search method by local","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/cc5960724789ed4bf84856f76639a3fbf3d829b6"}]},"filePathRelative":"WORK/BACKEND/开启代理后，域名和nginx访问问题.md","categoryList":[{"id":"9f20f1","sort":10024,"name":"WORK"},{"id":"6caed3","sort":10027,"name":"BACKEND"}],"bulletin":false}');export{l as comp,g as data};
