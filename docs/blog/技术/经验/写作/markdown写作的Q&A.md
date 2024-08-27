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

我在Typora中配置图片设置的是图片粘贴时自动存放到{filename}.assets文件夹的规则，在本地的路径是呈现`![图片]({filename}.assets/image.png)`的相对路径

如果有以下的需求，可以在该路径的基础上加上`/`引用全局静态资源

例如：`![图片]({filename}.assets/image.png)`  => `![图片](/{filename}.assets/image.png)`

* 你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。
* 你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。
* 你可能想在你的 Markdown 内容中通过绝对路径来引入图片。

> vuepress的静态资源一般放在.vuepress/public下，这样构建项目生成网站的时候会自动放在引用它的文件附近，这时需要额外地在原本的相对路径前加上`/`(默认是vuepress的全局静态资源路径，详见[静态资源](https://v2.vuepress.vuejs.org/zh/guide/assets.html))。