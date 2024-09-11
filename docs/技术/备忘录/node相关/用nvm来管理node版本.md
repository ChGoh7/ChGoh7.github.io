---
title: 用nvm来管理node版本
createTime: 2024/09/11 15:45:14
permalink: /article/cuf9nsvh/
---
`nvm ls`：查看nvm当前维护的node版本

`nvm use ${version}`：根据node的版本号进行切换

> [!WARNING]
>
> 注意切换版本的时候要修改npm全局模块的安装地址，各个版本的模块各自维护
>
> * 运行 `npm config set cache “..\xx.xx.x\node_cache”` 设置缓存文件夹
> * 运行`npm config set prefix "..\xx.xx.x\node_global"`设置全局模块存放路径 以后安装的全局模块都会被放到 ` ..\xx.xx.x\node_global`下，跟npm模块在一个文件夹中