---
title: 开启代理后，域名和nginx访问问题
createTime: 2024/10/24 12:25:51
permalink: /article/nkawrlf7/
---
开启代理后，解决开启vpn代理后无法访问hosts域名以及Nginx
============================

版权声明：本文为博主原创文章，遵循 [CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/) 版权协议，转载请附上原文出处链接和本声明。

本文链接：[https://blog.csdn.net/zsy996/article/details/134908223](https://blog.csdn.net/zsy996/article/details/134908223)

关闭[vpn](https://so.csdn.net/so/search?q=vpn&spm=1001.2101.3001.7020)时，正常Http请求结构如下。  
![](./开启代理后，域名和nginx访问问题.assets/6bdd753f32eb2ef608aba4365e04ac98.png)  
Nginx是通过Host，以及监听80端口，来确认某个请求的。  
当使用Vpn正向代理后，我的代理端口是7888。  
此时Host未变，而端口却变成了代理端口，这样Nginx应该是无法监听到.  
![](./开启代理后，域名和nginx访问问题.assets/99ad847e859fe0504cc2d886e9e2b26c.png)

查看一下代理日志，  
![](./开启代理后，域名和nginx访问问题.assets/a335c0da4c67aef264eb863a9138b00e.png)

发现应该是VPN的dns服务器无法解析Host映射的域名。  
最简单的处理方式：设置某些域名不走代理  
通过设置CFW中的Bypass Domain/IpNet  
![](./开启代理后，域名和nginx访问问题.assets/c61b76dd8f3c00a53819e4515fb67545.png)  
如图  
![](./开启代理后，域名和nginx访问问题.assets/9eaa585b237c9592bb7dc1b20945df09.png)

设置完后，就可以开着代理也能正常访问本地hosts域名以及Nginx了。
