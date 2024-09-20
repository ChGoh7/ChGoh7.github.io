---
title: 16 JDBC
createTime: 2024/09/01 23:18:29
permalink: /notes/JavaSE/d5rws5ch/
---
![bieming](https://gitee.com/kilomi/pic-bed/raw/master/img/202311042134382.png)

> JDBC：Java 提供的一套用于操作数据库的接口 API。它统一和规范了应用程序与数据库的连接、执行SQL语句，并到得到返回结果等各类操作，相关类和接口在`java.sql`与`javax.sql`包中，Java 程序员只需要面向该接口即可连接任何提供了 JDBC 驱动程序的数据库，完成对数据库的各种操作。不同的数据库厂商，需要针对这套接口提供不同的实现。

**JDBC 程序编写步骤（示范）：**

> ```java
> /* [0] 前置操作 */
> 	/* [1] 注册驱动 */
> Driver driver = new com.mysql.cj.jdbc.Driver();
> 	/* [2] 获取连接 */
> String url = "jdbc:mysql://localhost:3306/melody";			//melody是创建的一个数据库
> Properties properties = new Properties();					//user和password的写法是固定的
> properties.setProperty("user", "root");
> properties.setProperty("password", "******");
> Connection connect = driver.connect(url, properties);	
> 	/* [3] 执行语句 */
> String sql = "insert into customer (customer_id,name,card_id) values(0004,'赫尔','00000000000000000O')";
> Statement statement = connect.createStatement();
> int rows = statement.executeUpdate(sql);
> System.out.println(rows);
> 	/* [4] 释放资源 */
> statement.close();
> connect.close();
> ```
>
> 1. ==前置操作：将 `mysql-connector-java-8.0.27.jar` 该文件拷贝到项目目录下，选中后右键选择 `Add as library`==
>
> 2. 注册驱动：加载 `Driver` 类
>
> 	这里我导入了 `com.mysql.cj.jdbc.Driver`。根据前面的 `jar` 包的版本不同，应该导入的路径也会不同。
>	
> 	旧版本的 `jar` 包可能应该导入 `com.mysql.jdbc.Driver` 这个包。
>
> 3. 获取连接：得到 `Connection`
>
> 	> ```java
> 	> String url = "jdbc:mysql://localhost:3306/melody";
> 	> ```
> 	>
> 	> 这里表示进入 `melody` 这个数据库。
>
> 4. 执行语句：发送 SQL 命令给 MySQL 执行
>
> 	> ```java
> 	> int rows = statement.executeUpdate(sql);
> 	> ```
> 	>
> 	> 如果是 dml 语句，这里返回的 rows 是影响的行数。返回 0 表示失败。
>
> 5. 释放资源：关闭相关连接**（切记！）**

## 23.1 连接数据库的 5 种方式

* 方式 1：直接创建 `Driver`，调用 `driver.connet(url, properties);`

	这个方法就是 [23.0] 示范的方法
	
	> ```java
	> Driver driver = new com.mysql.cj.jdbc.Driver();
	> String url = "jdbc:mysql://localhost:3306/melody";
	> Properties properties = new Properties();				
	> properties.setProperty("user", "root");
	> properties.setProperty("password", "******");
	> Connection connect = driver.connect(url, properties);
	> ```

* 方式 2：使用反射加载 `Driver` 类

	这个方式是动态加载，更加灵活，减少依赖性。
	
	> ```java
	> Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");
	> Driver driver = (Driver) aClass.newInstance();
	> Properties properties = new Properties();				
	> properties.setProperty("user", "root");
	> properties.setProperty("password", "******");
	> Connection connect = driver.connect(url, properties);
	> ```

* 方式 3：使用 `DriverManager` 替代 `Driver` 进行统一管理

	这个方式扩展性更好，更加清晰
	
	> ```java
	> Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");
	> Driver driver = (Driver) aClass.newInstance();
	> String url = "jdbc:mysql://localhost:3306/melody";
	> String name = "root";
	> String password = "******";
	> DriverManager.registerDriver(driver);
	> Connection connection = DriverManager.getConnection(url, name, password);
	> ```
	>
	> 这里，`DriverManager.getConnetion()` 有三种方法。分别是：
	>
	> * `getConnetion(url);`
	> * `getConnetion(url, properties);`
	> * `getConnetion(url, name, password);`

* ==方式 4：使用 `Class.forName()` 自动完成注册驱动，实际开发中这种方式用的最多，推荐使用==

	> ```java
	> Class<?> aClass = Class.forName("com.mysql.cj.jdbc.Driver");		//可以不加引用
	> String url = "jdbc:mysql://localhost:3306/melody";
	> String name = "root";
	> String password = "******";
	> Connection connection = DriverManager.getConnection(url, name, password);
	> ```
	>
	> `Class.forName()` 在加载 `Driver` 类时，会自动完成注册。
	
	原理：
	
	> `Driver` 类的源码中有这样一段
	>
	> ```java
	> static {
	>      try {
	>          DriverManager.registerDriver(new Driver());
	>      } catch (SQLException var1) {
	>          throw new RuntimeException("Can't register driver!");
	>      }
	> }
	> ```
	>
	> 这个静态代码块在类加载时会被执行。
	
	> 另外，其实==不执行 `Class.forName(...);` 语句的场合，也能正确获取 `Connection`。==
	>
	> 这是因为 JDK 1.5 以后使用了 jdbc4。这个场合，系统会自动调用 jar 包下 `META-INF\services\java.sql.Driver` 这个文件中的类名称去注册。
	>
	> ……打开上述文件看看，里面赫然写着：`com.mysql.cj.jdbc.Driver`
	>
	> 即使如此，还是建议写上 `Class.forName(...)` 语句！

* ==方式 5（推荐）：在方式 4 的基础上，使用配置文件，连接数据库更灵活==。

```java
这种方式是实际开发最常用的方式。

> 配置文件（创建 src\mysql.properties）：
>
> ```properties
> url=jdbc:mysql://localhost:3306/melody
> user=root
> password=******
> driver=com.mysql.cj.jdbc.DriverPROPERTIES
> ```
>
> 代码：
>
> ```java
    /*得到配置文件信息*/
> Properties pro = new Properties();
> pro.load(new FileInputStream("src\\mysql.properties"))
> String url = pro.getProperties("url");
> String user = pro.getProperties("user");
> String password = pro.getProperties("password");
> String driver = pro.getProperties("driver");

/*注册驱动*/
> Class<?> aClass = Class.forName(driver);
> Connection connection = DriverManager.getConnection(url, user, password);
> ```
```

## 23.2 `ReaultSet` 结果集

> ResultSet：表示数据库结果集的数据表。通常通过执行查询数据库的语句生成。
>
> ResultSet 对象保持一个光标指向其当前的数据行。该光标的初始位置在第一行之前。调用 next 方法将光标下移，移动到末端的场合会返回 false。

**如何取出数据（示例）：**

```java
String sql = "select * from customer";
ResultSet resset = statement.executeQuery(sql);
while (resset.next()) {
    int id = resset.getInt(1);
    String name = resset.getString(2);
    String sex = resset.getString(5);
    String card_id = resset.getString(6);
    System.out.println(id + "\t" + name + "\t" + sex + "\t" + card_id);
}
```

其中 `String sex = resset.getString(5);` 表示取出该行数据的第 5 列的字符串数据。

ResultSet 的数据是以类似二维数组的形式保存在对象中。这不难理解，毕竟表格是二维的嘛。

## ==23.3 `Statement`==

> `Statment` 对象用于执行静态 SQL 语句，并返回其生成的结果的对象
>
> 在连接建立后，需要访问数据库、执行命名或 SQL 语句，有如下方式：
>
> * `Statment`（存在 SQL 注入问题，在实际开发中基本不使用）
> * `PerparedStatement`（预处理）
> * `CallableStatement`（存储过程）
>
> 案例：
>
> ![image-20231105115143277](https://gitee.com/kilomi/pic-bed/raw/master/img/202311051151379.png)
>
> SQL 注入：利用某些系统没有对用户输入的数据进行充分的检查，故意注入非法的 SQL 语句段或命令，恶意攻击数据库。
>
> 使用 `PreparedStatement` 可以防范 SQL 注入

### 23.3.1 `PreparedStatement` 预处理

```java
	/* [1] */
String sql = "select * from customer where customer_id = ? and name = ?";
PreparedStatement ps = connection.prepareStatement(sql);
	/* [2] */
ps.setInt(1, 0);
ps.setString(2, "萝茵");
	/* [3] */
ResultSet rs = ps.executeQuery();
```

1. `PreparedStatement` 执行的 SQL 语句的参数用 `?` 表示。

2. 调用方法设置 SQL 语句中的参数。

	这些方法的两个参数中，第一个是设置的参数的索引，第二个是设置值

3. 调用 `executeQuery()` 返回 `ResultSet` 对象。或者调用 `executeUpdate()` 执行增删改

	这里，调用的方法不需要再传入参数sql进去，而且如果添加了“？”作为条件，传入参数会导致语法错误。

**预处理的好处**

1. 不再使用拼接语句，增加代码可读性，减少语法错误
2. 解决了 SQL 注入问题
3. 大大减少了编译次数，效率提高

| 类 / 接口                | 方法                                                         |
| ------------------------ | ------------------------------------------------------------ |
| DriverManager 驱动管理类 | getConnection(url, user, pwd) 获取连接                       |
| Connection 接口          | createStatement() 创建 Statement 对象                        |
|                          | preparedStatement(sql) 生成预处理 PreparedStatement 对象     |
| Statement 接口           | executeUpdate(sql) 执行 dml 语句，返回影响行数               |
|                          | executeQuery(sql) 执行查询语句，返回 ResultSet,注意不能对PreparedStatement或CallableStatement调用此方法。 |
|                          | execute(sql) 执行任意 SQL 语句，返回布尔值                   |
| PreparedStatement 接口   | executeUpdate() 执行 dml 语句，返回影响行数                  |
|                          | executeQuery() 执行查询语句，返回 ResultSet                  |
|                          | execute() 执行任意 SQL 语句，返回布尔值                      |
|                          | setXXX(int, xxx) 设置 SQL 语句中占位符的值                   |
|                          | setObject(int, xxx) 设置 SQL 语句中占位符的值                |
| ResultSet 结果集         | next() 向下移动一行。没有下一行的场合返回 false              |
|                          | previous() 向上移动一行。没有上一行的场合返回 false          |
|                          | getXXX(int)、getXXX(name) 返回 int 列 / name 列的值          |
|                          | getObject(int)、getObject(name) 返回 int 列 / name 列的值    |



## ==23.4 JDBCUtils==

> 实际操作中，**由于获取连接 和 释放资源 操作经常使用，所以会增加代码的冗余度**，可以把这些操作统一封装成工具类 JDBCUtils，这样当需要数据库连接进行数据库操作的时候只需要通过这个JDBCUtils就可以获取。

<img src="https://gitee.com/kilomi/pic-bed/raw/master/img/202311051551103.png" alt="image-20231105155127050" style="zoom:50%;" />

**JDBCUtils.java**

```java
package com.hspedu.jdbc.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

/**
 * @author 韩顺平
 * @version 1.0
 * 这是一个工具类，完成 mysql的连接和关闭资源
 */
public class JDBCUtils {
    //定义相关的属性(4个), 因为只需要一份，因此，我们做出static
    private static String user; //用户名
    private static String password; //密码
    private static String url; //url
    private static String driver; //驱动名

    //在static代码块去初始化
    static {

        try {
            Properties properties = new Properties();
            properties.load(new FileInputStream("src\\mysql.properties"));
            //读取相关的属性值
            user = properties.getProperty("user");
            password = properties.getProperty("password");
            url = properties.getProperty("url");
            driver = properties.getProperty("driver");
        } catch (IOException e) {
            //在实际开发中，我们可以这样处理
            //1. 将编译异常转成 运行异常
            //2. 调用者，可以选择捕获该异常，也可以选择默认处理该异常，比较方便.
            throw new RuntimeException(e);		//[1]

        }
    }

    //连接数据库, 返回Connection
    public static Connection getConnection() {

        try {
            return DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            //1. 将编译异常转成 运行异常
            //2. 调用者，可以选择捕获该异常，也可以选择默认处理该异常，比较方便.
            throw new RuntimeException(e);			//[1]
        }
    }

    //关闭相关资源
    /*
        1. ResultSet 结果集
        2. Statement 或者 PreparedStatement
        3. Connection
        4. 如果需要关闭资源，就传入对象，否则传入 null
     */
    public static void close(ResultSet set, Statement statement, Connection connection) {

        //判断是否为null
        try {
            if (set != null) {
                set.close();
            }
            if (statement != null) {
                statement.close();
            }
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            //将编译异常转成运行异常抛出
            throw new RuntimeException(e);			//[1]
        }
    }
}
```

1. 实际开发中，可以把编译异常转换为运行异常。这样，调用者可以自行选择捕获异常还是默认处理。

## ==23.5 事务==

> 事务：JDBC 程序中，当一个 `Connection` 对象创建时，默认情况下会自动提交事务。为了让多个 SQL 语句一体执行，需要使用事务。

```java
Connection connection = null;
try {
    connection = JDBCUtils.getConnection();
    connection.setAutoCommit(false);					//[1] 取消自动提交事务
    String sql = "insert into actor values(9, '赫尔萝茵')";
    PreparedStatement preparedStatement = connection.prepareStatement(sql);
    preparedStatement.executeUpdate();
    sql = "delete from actor where name = '萝茵' and id > (select * from (select min(id) from actor where name = '萝茵') a)";
//如果在第一件语句执行成功，而在第二句前因为异常导致没有成功，就会导致数据发生错乱		
    int i = 1/0;//产生一个异常，导致后面一句执行不成功	
    													//[2]
    preparedStatement = connection.prepareStatement(sql);
    preparedStatement.executeUpdate();
    connection.commit();								//[3] 提交事务
    System.out.println("complete");
} catch (SQLException e) {
    System.out.println("fail");
    System.out.println(e);
    connection.rollback();								//[4] 回滚事务
} finally {
    connection.close();									//[5] 关闭连接
}
```

1. 取消自动提交事务：

~~~java
```
connection.setAutoCommit(false);
```
~~~

2. 这是一个 SQL 语句。表示在 name = 萝茵 的数据中只保留 id 最小的一条。

	```
	delete from actor where name = '萝茵' and id > (select * from (select min(id) from actor where name = '萝茵') a)
	MYSQL
	```
	
	正常写法会提示不能同表查询（在 MySQL 中，不能在同一语句中先 select 出同一表中的某些值，再 update 这个表）。使用一个额外的 select 过渡就解决了这个问题。特此记录。

3. 提交事务：

~~~java
```
connection.commit();
```
~~~

4. 回滚事务：

~~~java
```
connection.rollback();
```

写在 catch 里。这样，语句错误抛出异常的场合会执行到这句话。
~~~

5. 关闭连接：

~~~java
```
connection.close();		//可以传参，参数为回滚点，不传参数默认回滚到开始的状态
```

写在 finally 里。这样，执行完语句总会关闭连接。这很好。
~~~

## 23.6 批处理

> 批处理：把多条语句一次性提交给数据库进行批量处理。这样做比单独提交更有效率。

==要使用批处理功能，需要在 url 中加入 `?rewriteBatchedStatements=true`，即在配置文件中写成：==

> ```properties
> url=jdbc:mysql://localhost:3306/test?rewriteBatchedStatements=true
> ```

批处理往往和 PerparedStatement 搭配使用，既减少编译次数，又减少运行次数，岂不美哉？

**示例：**

> ```java
> 	//[0] 事前准备
> Connection connection = JDBCUtils.getConnection();
> String sql = "insert into test1 values(?)";
> PreparedStatement ps = connection.prepareStatement(sql);
> for (int i = 0; i < 1000; i++) {
> 	ps.setInt(1,i);						
> 	ps.addBatch();						//[1]
> }
> ps.executeBatch();						//[2]
> JDBCUtils.close(connection, ps, null);
> ```
>
> 1. 修改配置文件
>
> ```properties
> url=jdbc:mysql://localhost:3306/test?rewriteBatchedStatements=true
> ...
> ```
>
> 2. 添加需要批量处理的 SQL 语句
>
> ```java
> preparedStatement.addBatch();
> ```
>
> 3. 执行批量处理语句
>
> ```java
> preparedStatement.executeBatch();
> ```
>
> 4. （前面的例子里没有这句）清空批处理包的语句
>
> ```java
> preparedStatement.clearBatch();
> ```

### 23.6.1 说明

1. 第一次添加批处理语句时，创建一个 ArrayList。

```java
> ```
> ...
> if (this.batchedArgs == null) {
>     this.batchedArgs = new ArrayList();
> }
> ...
> ```

……会在其中放置批处理语句（指令的数据）
```

2. 该数组满后，按照 1.5 倍扩容

3. 达到指定的值后，执行 executeBatch 吧

4. 批处理能减少编译次数，也能减少发送 SQL 语句的网络开销。

## 23.7 数据库连接池

> **传统获取 Connection 方法的问题：**
>
> 1. 传统的 JDBC 数据库连接使用 DriverManager 获取，每次建立连接都会把 Connection 载入内存，再进行身份验证。每次连接都会重复验证请求，这样会占用过多系统资源，容易造成服务器崩溃。
> 2. 每次连接，使用完毕后必须断开。如果不断开操作，会致使数据库内存泄漏，最终不得不重启数据库。
> 3. 传统连接方式不能控制创建的连接数量。连接数量过多的场合，也可能导致内存泄漏，MySQL 崩溃

**因此，需要使用连接池技术：**

1. 预先在缓冲池放入一定数量的连接。需要建立数据库连接时，从缓冲池中取出一个连接。使用完后，把该连接放回缓冲池。
2. 数据库连接池负责分配、管理和释放数据库连接。其允许应用程序重复使用一个现有的数据库连接，而非建立新的连接。
3. 当请求连接的数量超过最大数量，这些连接请求会被加入等待队列。

**数据库连接池种类：**

JDBC 数据库连接池使用 javax.sql.DataSource 表示，称为==数据源==，DataSource 是一个接口，通常由第三方提供实现（提供 jar 包）

* C3P0：速度稍慢，稳定性好……但是速度再慢也不是传统 JDBC 能比得上的，不自量力！
* DBCP：速度稍快，稳定性差
* Proxool：可以监控连接池状态，稳定性稍差
* BoneCP：速度快
* Druid：阿里提供的数据库连接池，集 DBCP、C3P0、Proxool 优点于一身

### 23.7.1 C3P0

写在前面：C3P0 连接时跳一堆红字，不一定是报错……他就这样。

**使用 C3P0 的前置工作：**

1. [C3P0 jar 包下载](https://sourceforge.net/projects/c3p0/?source=navbar)

	> ==注意0.9.2版本及之后要同时在libs文件夹导入c3p0和c3p0-oracle这两个jar包==

2. ……和前面一样，把 jar 包装载好。

  为了正常运行程序，这里（上面连接下载的） jar 包（似乎）至少是：

  `mchange-commons-java-0.2.19.jar`

  `c3p0-0.9.5.5.jar`

  > csdn上说mchange-commons-java-0.2.19.jar这是**c3p0数据库连接池**的辅助包，如果没有这个包系统启动时会报classnotfoundexception，这是更新c3p0-0.9.2版本后分离出来的包，0.9.1的时候还是只是一个包。

* 方式一：在程序中指定相关参数

	> ```java
	> 	/* [1] */
	> ComboPooledDataSource cpds = new ComboPooledDataSource();
	> 	/* [2] */
	> cpds.setDriverClass(dirver);
	> cpds.setUser(user);
	> cpds.setPassword(password);
	> cpds.serJdbcUrl(url);
	> 	/* [3] */
	> cpds.setInitialPoolSize(10);
	> 	/* [4] */
	> cpds.setMaxPoolSize(50);
	> 	/* [5] */
	> Connection connection = cpds.getConnection();
	> ...
	> connection.close();
	> ```
	>
	> 1. 创建数据源对象（dataSource）
	>
	> 	```java
	> 	ComboPooledDataSource cpds = new ComboPooledDataSource();
	> 	```
	> 	
	>2. 设置参数
	> 
	>	```java
	> 	cpds.setDriverClass(String dirver);
	> 	cpds.setUser(String user);
	> 	cpds.setPassword(String password);
	> 	cpds.serJdbcUrl(String url);
	> 	```
	> 
	>	……上面输入的形参 `user` 是字符串 `"root"`。其他同理。
	> 
	>3. 设置初始化连接数
	> 
	>	```java
	> 	cpds.setInitialPoolSize(10);
	> 	```
	> 	
	> 	初始化连接数，就是指连接池创建时，初始持有的连接数
	>	
	> 4. 设置最大连接数
	>
	> 	```java
	>	cpds.setMaxPoolSize(50);
	> 	```
	> 	
	> 5. 获取一个连接
	> 
	>	```java
	> 	Connection connection = cpds.getConnection();
	>	```
	
* 方式二：使用配置文件模板完成

	> ```java
	> 	/* [0] 前置操作 */ 
	> 	/* [1] 获取数据源对象 */ 
	> ComboPooledDataSource cpds = new ComboPooledDataSource("Heruin");
	> 	/* [2] 获取连接 */ 
	> Connection connection = cpds.getConnection();
	> ...
	> connection.close();
	> ```
	>
	> 1. 加入配置文件
	>
	>   **c3p0-config.xml：**配置文件，文件名固定，放在 `src/c3p0-config.xml` 这个位置
	>
	>   ```xml
	>   <c3p0-config>
	>           <!-- 数据源（连接池）名称 -->
	>       <named-config name="Heruin">
	>               <!-- 驱动类 -->
	>           <property name="driverClass">com.mysql.cj.jdbc.Driver</property>//com.mysql.jdbc.Driver 是 mysql-connector-java 5中的， com.mysql.cj.jdbc.Driver 是 mysql-connector-java 6以及以上中的
	>               <!-- url -->
	>           <property name="jdbcUrl">jdbc:mysql://localhost:3306/test</property>
	>               <!-- 用户名 -->
	>           <property name="user">root</property>
	>               <!-- 密码 -->
	>           <property name="password">******</property>
	>               <!-- 初始化连接数 -->
	>           <property name="initialPoolSize">10</property>
	>               <!-- 最大空闲时间 -->
	>           <property name="maxIdleTime">30</property>
	>               <!-- 最大连接数 -->
	>           <property name="maxPoolSize">100</property>
	>               <!-- 最小连接数 -->
	>           <property name="minPoolSize">10</property>
	>               <!-- 每次增长的连接数 -->
	>           <property name="acquireIncrement">10</property>
	>               <!-- 可连接的最多的命令对象数 -->
	>           <property name="maxStatements">10</property>
	>               <!-- 每个连接可连接的最多的命令对象数 -->
	>           <property name="maxStatementsPerConnection">5</property>
	>       </named-config>
	>   </c3p0-config>
	>   ```
	>
	> 2. 获取数据源对象
	>
	> 	```java
	> 	ComboPooledDataSource cpds = new ComboPooledDataSource(String name);
	> 	```
	> 	
	> 	这里的 `name` 就是配置文件中的 `数据源名称`
	> 	
	> 3. 获取连接

### 23.7.2 Druid（德鲁伊）连接池

~有的人因为看见而相信，有的人因为相信而看见！~

**使用 Druid 的前置工作：**

1. [Druid jar 包下载](https://github.com/alibaba/druid)

	……这个链接打不开的话，试试 [这个](https://repo1.maven.org/maven2/com/alibaba/druid/)

2. 配置 jar 包

3. 加入配置文件

	> **durid.properties：**配置文件，文件名任意，放在 `src/druid.properties`
	>
	> ```java
	> driverClassName=com.mysql.cj.jdbc.Driver
	> url=jdbc:mysql://localhost:3306/test?rewriteBatchedStatements=true
	> username=root
	> password=720mel\im
	> initialSize=10
	> minIdle=5
	> maxActive=20
	> maxWait=5000PROPERTIES
	> ```

* 使用 Druid：

	```java
		/* [1] 加载配置文件 */
	Properties properties = new Properties();
	properties.load(new FileInputStream("src\\Druid.properties"));
		/* [2] 初始化数据池 */
	DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
		/* [3] 获取连接 */
	Connection connection = dataSource.getConnection();
	...
	connection.close();
	```
	
	1. 初始化数据池
	
		```java
		DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
		```
		
	2. ……没什么好说的，但要说一下这个：
	
		```java
		connection.close();
		```
		
	
	`Connection` 是一个接口，对于方法 `close()`，不同供应商有不同实现方法。
		
	==原生的 `MySQL` 的实现方法是关闭连接，而这些连接池的实现方法是取消引用（放回连接池）。==

## 23.8 Apache - DbUtils

> `commons-DbUtils`：是 Apache (阿帕奇)组织提供的一个开源的 JDBC 工具库。它是对 JDBC 的封装。使用 dbutils 能极大简化 JDBC 编码的工作量
>
> **DbUtils 的常用类：**
>
> * `QueryRunner` 类：封装了 SQL 的执行。是线程安全的，可以实现增、删、改、查、批处理操作
> * `ResultSetHandler` 接口：用于处理 `ResultSet`，按照需求将数据转化为其他形式

JDBC 传统方法的不足：

1. 结果集和连接是关联的。在连接关闭后，就不能使用结果集。
2. 结果集只能使用一次，这样不便于数据管理
3. 使用返回信息不方便

解决方案：

* 1. 土方法（只是演示，实际还是用Dbutils）：创建一个类（这个类统称为JavaBean/POJO/Domain/entity），其属性与表格的列一一对应。将数据遍历并读取到一个个类对象中，再将这些类对象放置到集合中。这样，就得到了一个与表格数据关联的数据集合。

  	> ==参考==：[javabean到底是什么？](https://stackoverflow.com/questions/3295496/what-is-a-javabean-exactly)
  	>
  	> 拓展：为什么属性类型最好使用包装类型

  > 数据类，根据需要创建：
  >
  > ```java
  > +------+------------+------+
  > | id   | date       | name |
  > +------+------------+------+
  > |    1 | 2003-11-20 | jack |
  > +------+------------+------+
  > //对应上表
  > public class SQL_Data {
  >  private Integer id;	//最好使用包装类
  >  private Date date;
  >  private String name;        
  > 
  >  /* 一定要有无参构造器。这是因为后面会用到反射 */
  >  public SQL_Data(){}
  > 
  >  public SQL_Data(Integer id, Date date, String name) {
  >      this.id = id;
  >      this.date = date;
  >      this.name = name;
  >  }   
  > 
  >  /* Geter & Seter 笔记里就省略不记了。光占地方又没技术含量 */
  >  ...
  > }
  > ```
  >
  > ……然后遍历 ResultSet，存放。就不写了。

* 2. ==使用 `DbUtils`==：

	> ```java
	> 	/* [0] 前置操作 */
	> String sql = "select * from account where ? = ?";
	> 	/* [1] 创建 QueryRunner */
	> QueryRunner qr = new QueryRunner();
	> 	/* [2] 执行相关方法 */
	> List<SQL_Data> list = 
	> qr.query(connection, sql, new BeanListHandler<>(SQL_Data.class), "id", 1);
	> ...
	> 	/* [3] 释放资源*/
	> connection.close();
	> ```
	>
	> 1. 前置操作：
	>
	> 	[获取 jar 包](https://commons.apache.org/proper/commons-dbutils/download_dbutils.cgi)，并完成配置
	>
	> 	得到连接 `Connection connection`，创建数据类（这里是 `SQL_Data`）
	>
	> 2. 执行相关方法，返回结果集
	>
	>   ```java
	>   List<SQL_Data> list = 
	>       queryRunner.query(connection, sql, new BeanListHandler<>(SQL_Data.class), ...);
	>   ```
	>
	>   * `queryRunner.query` 方法：执行 SQL 语句，把得到的 `ResultSet` 封装到 List 集合。这个方法会**自动关闭获得的 `ResultSet`**，所以不会造成资源泄漏
	>
	>   * `connection`：前置操作中得到的连接
	>
	>   * `sql`：SQL 语句
	>
	>   * `new BeanListHander<>(SQL_Data.class)`：利用反射机制，将数据封装到 `SQL_Data` 对象中
	>
	>   * `"id", 1`：给 SQL 语句中的 `?` 赋值。因为是**可变参数**，可以写多个，如：`queryRunner.query(connection, sql, new BeanListHandler<>(SQL_Data.class), "id", 1, "name", "识之律者");`
	>
	>   * `SQL_Data`：是数据库当中的表映射的javabean。
	>
	>     <font color='red'>……这里，可变参数也包含列名的场合，筛选似乎会失效。还不知道原理。特此记录。</font>
	>
	>     > 这种语法或者本身就要避免，是不合法的。
	>
	> 3. ==此时只需要关闭 `Connection`==
	>
	> 	==`query()` 方法已经关闭了 `ResultSet` 和 `PreparedStatement`==

### 23.8.1 Apache-DbUtils 常用方法

* `queryRunner.update(connection, sql, ...)`：DML 语句。增删改。

	后面传入可变参数，用于给 SQL 语句中的 `?` 赋值
	
	返回值 int 代表被影响的行数。

* `queryRunner.query(connection, sql, ResultSetHandler, ...)`：查询。

	后面传入可变参数，用于给 SQL 语句中的 `?` 赋值
	
	关于 `ResultSetHandler`：
	
	* 传入 `new BeanListHander<>(SQL_Data.class)`：返回多行多列。这个场合，用 `List` 接收返回值。
	* 传入 `new BeanHandler<>(SQL_Data.class)`：返回单行。这个场合，用 `SQL_Data data` 接收返回值。
		* `SQL_Data data` 表中的某一行数据映射的对象。
	* 传入 `new ScalarHander<>()`：返回单行单列。这个场合，用 `Object` 接收返回值。**注意没有参数**

### 23.8.2 表和 JavaBean/POJO 的对应关系

| 表类型          | JavaBean类型          |
| --------------- | --------------------- |
| int、samllint…… | Integer               |
| char、varchar…… | String                |
| double          | Double                |
| date            | java.util.Date/String |

## ==24. BasicDAO==

项目设计的模式：

具体各个层的作用参考：[什么是Dao层、Entity层、Service层、Servlet层、Utils层？-CSDN博客](https://blog.csdn.net/Restarting2019/article/details/122296373)

![image-20231107111159462](https://gitee.com/kilomi/pic-bed/raw/master/img/202311071112561.png)

> 实际写代码是先完成下层的，再完成上层的。
>
> 一般开发中关于dao里的方法是否应该是static的，stackoverflow上有讨论，搜关键词 dao method static就行，主要完成的是service层，**从下往上分析。**，==映射的javabean应该有无参构造器，，因为底层反射是使用无参构造器构造javabean对象的。而且属性名要以数据库为准，底层是用setName()来初始化属性的(会根据列名对应方法，比如列名为name，如果javabean中写的是name2，他就找不到应该为setName()的方法(此时javabean中的是setName2()方法，它匹配不到)，这种场合就需要在sql语句起别名，将列名置为name2，这样就可以找到setName2()了)，<font color='red'>映射的属性必须要和列名一致或者为列名的别名</font>，前提是每个sql语句都取别名==
>
> 数据库会根据自己的字段找到对应实体类的属性，通过set方法对属性进行注入。 如果实体类的属性名name2和数据库的字段名name不相同,则没有通过set方法进行注入，就会将name2置为null。

> Apache - DbUtils + Druid 简化了 JDBC 开发，但还有不足。
>
> 1. SQL 语句固定，不能通过传入参数控制，通用性不好。
> 2. select 操作的返回类型未知，需要使用泛型。
> 3. 将来的表很多，业务需求复杂，不可能只靠一个 Java 类完成

DAO：数据访问对象（data access object）

1. 我们把通用的和数据库交互的操作封装到一个通用类中，称为 BasicDAO。

2. 在 BasicDAO 基础上，每张表对应一个特化的 DAO（继承 BasicDAO），从而更好地完成功能。

	比如：Data 表 -> Data.java 类（JavaBean）-> DataDAO.java

**BasicDAO.java（示例）**

```java
public class BasicDAO<T> {
    private QueryRunner qr = new QueryRunner();
	
    /*这个方法完成插入和修改的操作，在底层是使用executeUpdate执行sql语句*/
    //可以利用这个方法检查是否插入成功，返回值<0则表明插入失败，返回值>0表明插入成功
    public int update(String sql, Object... parameters){
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            return qr.update(connection, sql, parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.close(connection, null, null);
        }
    }

    /*因为返回的是list集合 要用到反射,所以用到class对象作为参数*/
    public List<T> queryMulti(String sql, Class<T> tClass, Object... parameters){
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            return qr.query(connection, sql, new BeanListHandler<T>(tClass), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.close(connection, null, null);
        }
    }

    public T querySingle(String sql, Class<T> tClass, Object... parameters){
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            return qr.query(connection, sql, new BeanHandler<T>(tClass), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.close(connection, null, null);
        }
    }
	
    /*注意这里查询单个数据不需要用到class*/
    public Object queryScalar(String sql, Object... parameters){
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
            return qr.query(connection, sql, new ScalarHandler<>(), parameters);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.close(connection, null, null);
        }
    }
}
```



# DBUtils数据库连接池多表连接查询

方案一：

老韩的思路：单独写一个javabean映射多表查询的结果，它包含其他javabean的属性(将这些属性重复组合放在这个单独的javabean中，但不是将其他javabean作为它的属性)。它也有自己的Dao，也可以有service，具体实现根据业务完成。
缺点：每次增加业务时，就要在这个javabean添加相应的字段。

*随着业务增加，字段越来越多怎么办？*

解决方案：

![image-20231110000127498](https://gitee.com/kilomi/pic-bed/raw/master/img/202311100001554.png)



方案二：

MapListHandler的使用（具体使用方式查看官方文档http://commons.apache.org/proper/commons-dbutils/apidocs/index.html）
key——sql语句查询的字段
value——数据库中查询得到的结果
出现的问题描述
==对于多表连接查询，如果使用`BeanListHandler`，则会出现空指针异常。==
例如employee和department分类封装为Javabean。employee中声明一个department的对象。如下图所示：

![](https://gitee.com/kilomi/pic-bed/raw/master/img/202311092320599.png)

解决方案
使用MapListHandler最终返回List<map<String,Object>>,使用迭代的方式通过查询字段取出value，首先根据Department类中的key从map中取出对应的value，并将其封装为Department对象。最终再封装为Employee对象，这样就解决了使用BeanListHandler出现空指针异常的现象。
具体实现代码如下图



![](https://img-blog.csdnimg.cn/20200116215105911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01yY2hhaTUyMQ==,size_16,color_FFFFFF,t_70)

ResultSetHandler实现类介绍（由DbUtils框架提供）


```
 备注：DbUtils给我们提供了10个ResultSetHandler实现类，分别是：

 ①ArrayHandler：     将查询结果的第一行数据，保存到Object数组中

 ②ArrayListHandler     将查询的结果，每一行先封装到Object数组中，然后将数据存入List集合

 ③BeanHandler     将查询结果的第一行数据，封装到user对象

 ④BeanListHandler     将查询结果的每一行封装到user对象，然后再存入List集合

 ⑤ColumnListHandler     将查询结果的指定列的数据封装到List集合中

 ⑥MapHandler     将查询结果的第一行数据封装到map结合（key==列名，value==列值）

 ⑦MapListHandler     将查询结果的每一行封装到map集合（key==列名，value==列值），再将map集合存入List集合

 ⑧BeanMapHandler     将查询结果的每一行数据，封装到User对象，再存入mao集合中（key==列名，value==列值）

 ⑨KeyedHandler     将查询的结果的每一行数据，封装到map1（key==列名，value==列值 ），然后将map1集合（有多个）存入map2集合（只有一个）

 ⑩ScalarHandler     封装类似count、avg、max、min、sum......函数的执行结果
```
