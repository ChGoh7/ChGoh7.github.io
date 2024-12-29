---
title: Hive最终复习题
createTime: 2024/12/29 22:53:32
permalink: /article/v44vwjin/
tags: 
 - Hive
---

Hive是由Facebook开源用于解决海量（   ==结构化==  ）日志的数据统计工具。

Hive执行MapReduce作业所需的资源是由（  ==YARN== ）来调度的。

两种常用的大数据日志压缩技术是（ ==**Gzip**==   ）压缩和（ **==Lzo==**  ）压缩。

已知三种大数据压缩格式：lzo、bzip2和gzip。压缩比最大的压缩格式是（  ==Bzip2== ），压缩速度最快的是（  ==Lzo== ）。压缩比：bzip2>gzip>lzo 压缩速度：lzo>gzip>bzip2

已知Hive中的数据表为dept，查看该表详细信息的命令是：（    ==DESC FORMATTED dept;==      ）。

Hive中关键字 （  ==AS==  ）用于指定查询结果中的列别名

创建Hive外部表的关键字是create （   ==EXTERNAL==   ）tableName。

SORT BY与DISTRIBUTE BY的区别在于（  SORT BY 对每个REDUCER内部数据进行排序，DISTRIBUTE BY 决定数据在哪个REDUCER进行处理，进行分区  ）

数据仓库与操作型数据库的主要区别是（   ）

Hive中UDTF表生成函数explode处理的数据类型是（  ==ARRAY==  ）和（ ==MAP==  ）。

查看HQL语句执行计划的关键字是（  ==EXPLAIN==  ）。

Hive用于执行查询的命令是（  ==SELECT==  ）

生产环境使用最多的大数据列式存储格式是（  ==Parquet==  ）和（  ==ORC==   ）。

Hive实现单列转多行的“爆炸函数”是（ ==explode==   ）。

函数(  ==COUNT()==  )用于计算数据集中的行数

Hive数据表在HDFS上的默认存储路径是（    ==/user/hive/warehouse==       ）。

Hive加载数据文件到数据表中的关键字是（  ==LOAD   DATA== ）。 

ive是建立在（  ==Hadoop==   ）之上的一个数据仓库。

Hive的本质是将HQL语句转化成（  ==MapReduce==    ）程序。

Hive安装目录下最重要的配置文件是（   ==hive-site.xml==     ）。

ive中通常使用insert+（   ==SELECT==     ）完成数据表的快速创建。

窗口表达式的关键字是（  ==over==    ） between。

指定Hive数据存储格式的关键字是（   ==STORED==   ）as。









Hive是一个基于Hadoop的数据仓库工具，用于处理和分析大规模数据集。（==T==）

Hive的安装和配置不需要Hadoop集群环境。（==F==）

Hive的元数据通常存储在MySQL或PostgreSQL等关系型数据库中。（==T==）

数据仓库的主要目的是用于日常操作型处理。 （==F==）

数据仓库中的数据通常是经过整合和转换的历史数据。 （==T==）

Hive是一种支持SQL查询的分布式数据库管理系统。（==T==）

HQL是Hive的查询语言，与SQL语法完全相同。（==F==）

Hive的表可以存储在本地文件系统中，而不必存储在HDFS上。 （==F==）

Hive中的视图是逻辑上的表，不存储数据。 （==T==）

Hive可以与Hadoop生态系统中的其他组件（如HBase、Pig）集成使用。（==T==）

Hive中数据只能从HDFS加载，不能从本地文件系统加载。（==F==）

HiveServer2允许客户端使用多种编程语言进行数据访问。 （==F==）

在HQL中，可以使用SELECT语句从Hive表中查询数据。（==T==）

HQL支持所有的SQL函数和操作符。（==F==）

在Hive中，可以使用CREATE TABLE语句创建表结构。（==T==）

Hive中的表一旦创建，就不能修改其结构。（==F==）

Hive支持多种数据类型，包括STRING、INT、FLOAT等。（==T==）

Hive的DML操作包括数据的插入、更新和删除。（==F==）

在Hive中，可以使用LOAD DATA语句将数据加载到表中。（==T==）

Hive支持事务处理，因此可以执行回滚操作。（==F==）

Hive支持多种类型的连接操作，包括INNER JOIN、LEFT JOIN等。（==T==）

Hive中的连接操作通常比单表查询慢。（==T==）

在Hive中，可以使用ON子句来指定连接条件。（==T==）

子查询在Hive中总是比连接操作更高效。（==F==）

在Hive中，可以使用WITH子句来定义临时表，以优化子查询。（==T==）

分区表可以提高Hive查询的性能，特别是当查询涉及大量数据时。（==T==）

分桶表是一种将数据按照特定规则进行分桶存储的表结构。（==T==）

外部表的数据存储在Hive外部的HDFS或其他存储系统中，Hive只管理其元数据。（==T==）

 





使用Hive相关命令修改内部表hive_wordcount为外部表。

`alter table hive_wordcount set tblproperties('EXTERNAL'='TRUE');`

 





目前创建了一个分区表为：t_all_hero_part，请使用Hive相关命令为该分区表加一个分区role='soliders'。

`ALTER TABLE t_all_hero_part ADD PARTITION (role='soliders');`

 

 

使用HDFS shell命令删除/user/hive/warehouse/t_all_hero_part/路径下的所有文件。

`hdfs dfs -rm -r /user/hive/warehouse/t_all_hero_part/*`

再新增 

` hdfs dfs -put localfile_path /user/hive/warehouse/t_all_hero_part/`

 

Hive和传统关系型数据库的区别是什么？

1. 数据规模和存储：
	1. Hive设计用于处理大规模数据集，通常存储在分布式文件系统（如HDFS）中，适合处理TB或PB级别的数据。
	2. 关系型数据库设计用于处理相对较小的数据集，存储在单个服务器或少量服务器的本地磁盘上，适合处理MB或GB级别的数据。

2. 查询性能：
	1. Hive查询性能相对较慢，因为它是为大规模数据集设计的，适合批量处理而非实时查询。
	2. 关系型数据库查询性能较快，适合需要快速响应的实时查询和事务处理。

3. 扩展性
	1. Hive易于水平扩展，可以通过增加更多的节点来提高处理能力和存储容量
	2. 关系型数据库扩展性较差，通常需要更复杂的数据库集群技术。
4. Hive：
	1. Hive适合批处理，不适合实时查询。
	2. 关系型数据库适合实时查询和事务处理。
5. 成本
	1. Hive：通常成本较低，因为它使用开源软件和廉价硬件。
	2. RDBMS：可能成本较高，因为需要购买商业软件许可和高性能硬件。

6. 多表插入
	1. Hive支持多表插入
	2. 关系型数据库通常不支持



简要描述Hive中order by、sort by、distribute by以及cluster by的区别。

 `ORDER BY`是SQL标准的一部分，用于对查询结果进行全局排序。

`SORT BY`用于在MapReduce的Reduce阶段对数据进行排序。它保证每个Reducer的输出是有序的，但不保证全局有序。

`DISTRIBUTE BY`用于控制数据应该发送到哪个Reducer。它通过哈希分区来决定每个行应该发送到哪个Reducer，但不保证输出的顺序

`CLUSTER BY`类似于`DISTRIBUTE BY`，但它在发送数据到Reducer之前会先对数据进行排序。当distribute by 和sort by ==修饰同一个字段==的时候可以直接使用



已知创建的Hive表为员工表emp，现在需要将整张表的查询结果导出到HDFS路径下：/export/tests/，请写出相应的Hive导出命令。

```sql
INSERT OVERWRITE DIRECTORY '/export/tests/' 
ROW FORMAT DELIMITED 
FIELDS TERMINATED BY ',' 
SELECT * FROM emp;
```

请简要描述hive数据仓库的数据处理执行流程。

1. 数据仓库对SQL进行统计分析

2. 把SQL语言的常用操作用MapReduce写成很多模版
3. 所有的MapReduce模版封装在Hive中
4. 通过Hive框架匹配相应的MapReduce模版
5. 运行MapReduce程序，生成相应的分析结果
6. 客户端得到结果
7. 用户根据业务需求编写相应的SQL语句
8. 重复执行第三步到第五步直到得到结果







Hive的本质是什么？

Hive是基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张表，并提供类SQL查询功能。本质是将HQL转化为MapReduce程序。





在大数据日志压缩场景中，请简述mapreduce.map.output与mapreduce.output的区别。

场景： 输入文件的压缩，中间结果的压缩，输出文件结果的压缩

对输出文件的压缩：

1. Compressing output files:对应的是mapreduce中的reduce输出（mapreduce.output），

2. Compressing map output ：对应的是mapreduce中的map端的输出（mapreduce.map.output），首先写到本地的磁盘空间中去，然后通过shuffle将数据传输到reduce端去处理。

 





已知Hive中的原始表为dept_hdfs_external，其字段为：deptno,dname,loc。待创建的新的表名为:dept_hdfs_copy，请使用as select语句完成dept_hdfs_copy表的创建和数据加载，表中字段和原始表保持一致。



```sql
create table if not exists dept_hdfs_copy
as select deptno,dname,loc from dept_hdfs_exteranl;
```

 

创建新数据库work_hdfs，指定其位置存放在HDFS上：/work_database，使用命令查看该数据库的详细信息。

```sql
CREATE DATABASE work_hdfs LOCATION '/work_database';

DESC DATABASE EXTENDED work_hdfs;
```

 

 

查询平均薪资待遇大于20000的各种工作。

 

```sql
select  job,avg(sal) avg_sal  from emp group by job having avg_sal > 20000;
```

 

 

给emp表增加1列：jobdesc 工作描述 

 

```sql
alter table emp  add  columns(jobdesc string);
```

 

 

基于员工表emp，使用窗口排序函数row_number() over(...)实现需求：列出每个部门薪资最高的前两名职工名称以及薪资待遇。

 

```sql
SELECT ename, sal, rk
FROM (
  SELECT ename, sal, row_number() OVER (PARTITION BY deptno ORDER BY sal DESC) AS rk
  FROM emp
) t
WHERE rk <= 2;
```

 



 

基于提供的the_nba_championship表，请使用lateral view+explode完成如下需求：

统计每个球队获取总冠军的次数，并且根据次数倒序排序。

 

```sql
select a.team_name ,count(*) as nums  
from the_nba_championship a lateral view explode(champion_year) b as year  
group by a.team_name  
order by nums desc;
```




基于员工表emp，查询每种工作有多少个员工，查询结果按降序排序，最终输出结果有2个字段：job和count_emp

```sql
SELECT job, COUNT(*) AS count_emp
FROM emp
GROUP BY job
ORDER BY count_emp DESC;
```

