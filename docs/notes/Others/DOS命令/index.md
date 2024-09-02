> DOS：Disk Operating System（磁盘操作系统）

## DOS 的基本原理

在 cmd（控制台）输入指令 — DOS系统 接受指令 — 解析指令 — 执行指令

* 相对路径和绝对路径（举例从 JDK8\bin 访问到 JDK8\jre\bin\LICENSE）

相对路径：从当前目录开始定位，形成的路径 `..\jre\bin\LICENSE`

返回上一级：`..\`

绝对路径：从顶级目录 开始定位，形成的路径 `d:\Program\JDK8\jre\bin`

## 常用的 DOS 命令

> [DOS文档](https://www.dba.cn/book/dos/)

### 查看类

查看帮助：`help` 或 `help cd` 等

查看目录内容：`dir` 查看当前目录

 或 `dir d:\Program\JDK8\bin` 查看指定目录

### 切盘

切换到其他盘：`cd /D d:` 从 C盘 切换至 D盘

切换到当前盘的其他目录：`cd d:\Program\JDK8\jre\bin`

返回上级目录：`cd ..`

切换至根目录：`cd \`

查看子集目录：`tree` 当前目录

 或 `tree d:/Program` 指定目录

### 窗口类

清屏：`cls`

退出：`exit`

### 文件操作

创建/删除目录：`md 目录名` `rd 目录名`

拷贝/删除文件：`copy 文件名 目录` `del 文件名`

移动文件：`move 文件名 目录`

