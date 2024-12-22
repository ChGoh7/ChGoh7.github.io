---
title: 用Mermaid的代码文本轻松绘制时序图真香
createTime: 2024/09/26 00:12:23
permalink: /article/fni9a1wz/
tags:
 - markdown
 - sol
---
* [用Mermaid的代码文本轻松绘制时序图真香](https://juejin.cn/post/7308581358808514614)

<!-- more -->

## 最佳实践

在Typora中使用

```sequence 
participant User
participant Browser
participant Server
participant DataSource
participant Controller
participant Service
participant DAO
	User->>Browser: 打开浏览器
	Browser->>Server: 发送http request
	Server->>DataSource: 初始化数据源
	DataSource-->Server: 返回配置
	Server->>Controller: 根据url匹配成功rest接口
	Controller->>Service: 执行业务
	Service->>DAO: 查询数据库
	DAO->>DataSource: 委托数据源获取连接查询数据
	DataSource-->DAO: 返回数据
	DAO->>Service: 返回业务所需数据
	Service-->Controller: 业务执行完毕
	Controller->>Server: 返回视图或数据
	Server-->Browser: 返回http response
	Browser--> User: 展示在用户的设备上
```











```sequence Greetings
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```
