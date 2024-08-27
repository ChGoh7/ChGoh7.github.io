---
title: markdown写作的Q&A
createTime: 2024/08/27 13:34:03
permalink: /article/pv4nggku/
tags:
  - markdown写作
  - Q&A
---
> 该文档主要存放一些容易遗忘的markdown写作时遇到的问题以及解决方案，用以提醒自己，免做重复工作

<!-- more --> 

## 标题Q&A

有一些以前的文档写的时候多用的是一级标题，vuepress无法展示在侧边栏大纲中(看了plume主题的文档貌似没有找到全局的配置，只有通过单个文章的frontmatter来控制)，影响观感，可以用这个表达式在Typora编辑器中正则批量替换让原本的标题结构进行降级

> 搜索 `(#{1,6})\s` 替换为：`$1# `(带空格)

## 图片Q&A

![image-20240827140619861](markdown写作的Q&A.assets/image-20240827140619861.png)

typora配置的图片设置是粘贴时自动存放到{filename}.assets文件夹的规则，在本地的路径是相对路径，呈现`![图片]({filename}.assets/image.png)`的相对路径，vuepress的静态资源一般放在.vuepress/public下，这样构建项目生成网站的时候会自动放在引用它的文件附近，这时需要额外地在原本的相对路径前加上`/`(全局的静态资源路径，详见[静态资源](https://v2.vuepress.vuejs.org/zh/guide/assets.html)),`![图片]({filename}.assets/image.png)`  => `![图片](/{filename}.assets/image.png)`

> 需要做的就是每次写文章贴图片的时候将文件放在public目录下就行了，文件附近留存一份以便以后做拓展迁移，public下粘贴一份用以构建生成。