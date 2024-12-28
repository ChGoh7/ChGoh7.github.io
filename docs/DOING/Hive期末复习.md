---
title: Hive期末复习
createTime: 2024/12/27 15:33:52
permalink: /article/0bdmx9a6/
tags:
 - Hive
---







复习建议：

1.按照复习提纲，严格复习重点笔记

2.考前3天，一定要反复手写HQL语句！！！，手写课上讲过的HQL语句

3.论述题，分要点写，字迹工整，思路清晰
	1。。。。。
	2。。。。。
	3。。。。。。

## 填空题（ 2*10=20分）

> 要点：基础概念，基本理论
>
> 特点：好得分

Hive:由Facebook开源用于解决海量<font color='red'>结构化</font>日志的数据统计工具。
Hive是基于Hadoop的一个<font color='red'>数据仓库工具</font>，可以将<font color='red'>结构化的数据文件映射为一张表</font>，并提供<font color='red'>类SQL</font>查询功能。



Yarn（Yet Another Resource Negotiator）是Hadoop 2.0中的==资源管理器==

Sqoop是一款开源的数据==导入导出工具==

Hive是基于Hadoop的一个==分布式数据仓库工具==

HDFS（Hadoop Distributed Filesystem）是一个易于扩展的==分布式文件系统==



Hive 处理的数据存储在 ==HDFS==

Hive 分析数据底层的实现是 ==MapReduce==

执行程序运行在 ==Yarn== 上



**Hive优点**

（1）操作接口采用类 SQL 语法，<font color='red'>提供快速开发的能力</font>（简单、容易上手）。

（2）<font color='red'>避免了去写 MapReduce</font>，减少开发人员的学习成本。 

（3）Hive 的执行延迟比较高，因此 <font color='red'>Hive 常用于数据分析，对实时性要求不高的场合。 </font>

（4）Hive <font color='red'>优势在于处理大数据</font>，对于处理小数据没有优势，因为 Hive 的执行延迟比较高。

（5）<font color='red'>Hive 支持用户自定义函数</font>，用户可以根据自己的需求来实现自己的函数。无法实现。

**Hive缺点**

Hive 的 HQL 表达能力有限

（1）<font color='red'>迭代式算法无法表达</font>

（2）数据挖掘方面不擅长，由于<font color='red'> MapReduce 数据处理流程的限制，效率更高的算法却无法实现。</font>


Hive 的效率比较低

（1）Hive 自动生成的 MapReduce 作业，通常情况下<font color='red'>不够智能化</font>

（2）Hive 调优比较困难，<font color='red'>粒度较粗</font>







 

## 简答题（5*6=30分）

> 要点：
>
> 1. 内部表、外部表、分区表、分桶表
>
> 2. Hive数据表的创建、数据导入和导出
>
> 	`load data`
>
> 	`location`
>
> 	`insert`
>
> 3. HDFS shell 基本命令：增删改HDFS文件和文件夹
>
> 4. 数据表、数据库的基本操作：修改、增加和删除
>
> 5. Hive中的排序











## 编程题（6*5=30分）

> 要点：
>
> 1. Hive数据库和数据表的基本操作：修改、增加和删除
> 2. Hive基础操作：分组、排序、关键字段的执行顺序
>
> 3. 窗口排序函数+lateral view+explode

> [!caution]
>
> 注意细节：
>
> 1.按照题目要求写HQL语句，比如最终输出结果有2个字段：job和job_min_sal
>
> 2.HDFS路径严格遵循题干要求











## 论述题（10*2=20分）

> 要点：
>
> 1.性能调优
>
> 2.大数据压缩格式
