---
tags:
  - mysql FAQ
title: mysql服务无法启动
createTime: 2024/09/12 09:11:05
permalink: /article/rjnx6gmk/
---

## 问题

`net start mysql`启动mysql的时候发生

![image-20240912091241886](./mysql服务无法启动.assets/image-20240912091241886.png)

## 解决方案

1. `tasklist| findstr "mysql"`，查看有没有mysqld进程
2. 然后执行 `taskkill/f /t /im mysqld.exe` 杀死进程

3. 执行 `net start mysql`，前者行不通则在MySQL安装目录bin下，执行`mysqld --console `



