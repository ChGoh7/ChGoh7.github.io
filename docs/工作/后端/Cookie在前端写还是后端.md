---
tags:
  - cookie
  - session
  - servlet
title: Cookie在前端写还是后端
createTime: 2024/10/07 18:34:58
permalink: /article/s21amw3y/
---

> 最近疑惑有些项目有的是前端写cookie，有的是后端写cookie，找了几篇文章：
>
> *  [Cookie在前端写还是后端？](https://blog.csdn.net/az44yao/article/details/90311991#:~:text=前后端同时写了coo)
> *  [前端必要懂的，完整的 HTTP cookie 指南](https://segmentfault.com/a/1190000039413496)
> *  [Servlet总结](https://github.com/Snailclimb/JavaGuide/blob/main/docs/system-design/J2EE基础知识.md)

<!-- more -->

ps：貌似这篇[Servlet总结](https://github.com/Snailclimb/JavaGuide/blob/main/docs/system-design/J2EE基础知识.md)在JavaGuide网站上显示不全，导航栏没有该文章，必须手动输入搜索框才出现。



Cookies是简单的文本字符串，但可以通过**Domain**和`Path`对其权限进行控制，具有Secure的Cookie，只能通过 HTTP S进行传输，而可以使用 `HttpOnly`从 JS隐藏。

但是，对于所有预期的用途，cookie都可能使用户暴露于攻击和漏洞之中。

浏览器的供应商和Internet工程任务组（Internet Engineering Task Force）年复一年地致力于提高cookie的安全性，最近的一步是`SameSite`。

怎么比较安全使用cookie？ 

- 仅使用 HTTPS
- 尽可能带有 HttpOnly 属性
- 正确的SameSite配置
- 不携带敏感数据
