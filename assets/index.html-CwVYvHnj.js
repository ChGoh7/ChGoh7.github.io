import{_ as t,c as p,b as e,d as l,w as n,e as i,a as d,r,o}from"./app-DNksp9_M.js";const h="/assets/image-20241227173534372-BKrVlpC7.png",E={};function m(c,s){const a=r("font");return o(),p("div",null,[s[2]||(s[2]=e("p",null,[e("img",{src:h,alt:"image-20241227173534372"})],-1)),s[3]||(s[3]=e("h2",{id:"常用交互命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常用交互命令"},[e("span",null,"常用交互命令")])],-1)),s[4]||(s[4]=e("p",null,"[hadoop@master data]$ hive -help",-1)),s[5]||(s[5]=e("p",null,"1）“-e”不进入 hive 的交互窗口执行 sql 语句：",-1)),l(a,{color:"red"},{default:n(()=>s[0]||(s[0]=[i("hive -e ")])),_:1}),s[6]||(s[6]=i(` "select word, count(*) from hive_wordcount lateral view explode(split(context,' ')) wc as word group by word;"`)),s[7]||(s[7]=e("p",null,"2）“-f”执行脚本中 sql 语句：",-1)),s[8]||(s[8]=e("p",null,"（1）在/opt/modules/hive312/下创建 datas 目录并在 datas 目录下创建 hive.sql 文件：[hadoop@master datas]$ touch hive.sql",-1)),s[9]||(s[9]=e("p",null,"（2）文件中写入正确的 sql 语句",-1)),s[10]||(s[10]=e("p",null,"select word, count(*) from hive_wordcount lateral view explode(split(context,' ')) wc as word group by word;",-1)),s[11]||(s[11]=e("p",null,"（3）执行文件中的 sql 语句",-1)),s[12]||(s[12]=e("p",null,"[hadoop@master datas]$ hive -f /opt/modules/hive312/datas/hive.sql",-1)),s[13]||(s[13]=e("p",null,"（4）执行文件中的 sql 语句并将结果写入文件中",-1)),l(a,{color:"red"},{default:n(()=>s[1]||(s[1]=[i("hive -f ")])),_:1}),s[14]||(s[14]=d(` /opt/modules/hive312/datas/hive.sql &gt; /opt/datas/hive_result.txt<p><strong>数据库相关</strong></p><p>创建一个数据库，数据库在HDFS上的默认存储路径是/user/hive/warehouse/*.db。</p><p>create database db_hive;</p><p>创建一个数据库，指定数据库在HDFS上存放的位置</p><p>reate database db_hive2 <code>location &#39;/db_hive2.db&#39;;</code></p><p>显示数据库详细信息extended ：desc database extended db_hive;</p><p>修改数据库：用户可以使用 ALTER DATABASE 命令为某个数据库的 DBPROPERTIES 设置键-值对属性值，来描述这个数据库的属性信息：</p><p>alter database db_hive set dbproperties(&#39;createtime&#39;=&#39;20170830&#39;);</p><p>强制删除 cascade: drop database db_hive cascade;</p><p>建表语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CREATE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [EXTERNAL] </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">TABLE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [IF NOT EXISTS] table_name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[(col_name data_type [COMMENT col_comment], ...)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[COMMENT table_comment]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[PARTITIONED BY (col_name data_type [COMMENT col_comment], ...)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">CLUSTERED</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> BY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (col_name, col_name, ...)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[SORTED BY (col_name [ASC|DESC], ...)] </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">INTO</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> num_buckets BUCKETS]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[ROW FORMAT row_format]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[STORED AS file_format]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[LOCATION hdfs_path]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[TBLPROPERTIES (property_name=property_value, ...)]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">[AS select_statement]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>EXTERNAL 关键字可以让用户创建一个外部表，在建表的同时可以指定一个指向实际数据的路径（LOCATION），在删除表的时候，内部表的元数据和数据会被一起删除，而外部表只删除元数据，不删除数据</p></li><li><p>COMMENT：为表和列添加注释</p></li><li><p>PARTITIONED BY 创建分区表</p></li><li><p>CLUSTERED BY 创建分桶表</p></li><li><p>SORTED BY 不常用，对桶中的一个或多个列另外排序</p></li><li><p>ROW FORMAT ：</p></li><li><p>DELIMITED [FIELDS TERMINATED BY char] [COLLECTION ITEMS TERMINATED BY char]</p><p>[MAP KEYS TERMINATED BY char] [LINES TERMINATED BY char]</p><p>| SERDE serde_name [WITH SERDEPROPERTIES (property_name=property_value,</p><p>property_name=property_value, ...)]</p><p>用户在建表的时候可以自定义 SerDe 或者使用自带的 SerDe。如果没有指定 ROW FORMAT 或者 ROW FORMAT DELIMITED，将会使用自带的 SerDe。在建表的时候，用户还需要为表指定列，用户在指定表的列的同时也会指定自定义的 SerDe，Hive 通过 SerDe 确定表的具体的列的数据。SerDe 是 Serialize/Deserilize 的简称， hive 使用 Serde 进行行对象的序列与反序列化。</p></li><li><p>STORED AS :指定存储文件类型</p><p>常用的存储文件类型：SEQUENCEFILE（二进制序列文件）、TEXTFILE（文本）、RCFILE（列</p><p>式存储格式文件）</p><p>如果文件数据是纯文本，可以使用STORED AS TEXTFILE。如果数据需要压缩，使用 STORED</p><p>AS SEQUENCEFILE。</p></li><li><p>LOCATION ：指定表在HDFS上的存储位置。</p></li><li><p>AS：后跟查询语句，根据查询结果创建表。</p></li><li><p>LIKE 允许用户复制现有的表结构，但是不复制数据</p></li></ul>`,13))])}const v=t(E,[["render",m],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/article/6ziyuzt4/","title":"常见命令","lang":"zh-CN","frontmatter":{"title":"常见命令","createTime":"2024/12/04 10:07:52","permalink":"/article/6ziyuzt4/]","tags":["Hive"]},"headers":[],"readingTime":{"minutes":2.47,"words":741},"git":{"updatedTime":1735404182000,"contributors":[{"name":"wuchen","username":"wuchen","email":"3180349973@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/wuchen?v=4","url":"https://github.com/wuchen"}],"changelog":[{"hash":"828b31e7288d4b6cc09049641786ac989e067ec6","date":1735404182000,"email":"3180349973@qq.com","author":"wuchen","message":"update qimofuxi","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/828b31e7288d4b6cc09049641786ac989e067ec6"},{"hash":"835c4162426d05c7d9f94a7d8be87922c23c31e5","date":1735324699000,"email":"3180349973@qq.com","author":"wuchen","message":"add exams revises","commitUrl":"https://github.com/ChGoh7/ChGoh7.github.io/tree/docs/commit/835c4162426d05c7d9f94a7d8be87922c23c31e5"}]},"filePathRelative":"DOING/Hive常见命令.md","categoryList":[{"id":"233681","sort":10064,"name":"DOING"}],"bulletin":false}');export{v as comp,D as data};