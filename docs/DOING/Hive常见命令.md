---
title: 常见命令
createTime: 2024/12/04 10:07:52
permalink: /article/6ziyuzt4/
---

![image-20241227173534372](./Hive常见命令.assets/image-20241227173534372.png)

## 常用交互命令

[hadoop@master data]$ hive -help



1）“-e”不进入 hive 的交互窗口执行 sql 语句：

<font color='red'>hive -e </font> "select word, count(*) from hive_wordcount lateral view explode(split(context,' ')) wc as word group by word;"



2）“-f”执行脚本中 sql 语句：



（1）在/opt/modules/hive312/下创建 datas 目录并在 datas 目录下创建 hive.sql 文件：[hadoop@master datas]$ touch hive.sql



（2）文件中写入正确的 sql 语句

select word, count(*) from hive_wordcount lateral view explode(split(context,' ')) wc as word group by word;

（3）执行文件中的 sql 语句

[hadoop@master datas]$ hive -f /opt/modules/hive312/datas/hive.sql



（4）执行文件中的 sql 语句并将结果写入文件中

<font color='red'>hive -f   </font> /opt/modules/hive312/datas/hive.sql > /opt/datas/hive_result.txt

