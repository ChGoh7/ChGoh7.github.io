---
title: 疏忽mybatis实体映射字段的问题
tags:
 - MyBatis
 - FAQ
createTime: 2024/10/23 19:02:47
permalink: /article/vpl9q23f/
---

mybatis plus中配置实体类的属性不要为关键字，否则会被解析为mysql的命令报错。如果要使用关键字字段名需要加上注解 `@TableField` 

<img style="float: left; zoom: 50%;" src="./疏忽mybatis实体映射字段的问题.assets/image-20241026163228445.png" alt="image-20241026163228445" />