---
title: springboo2集成shiro
createTime: 2024/10/20 21:40:53
permalink: /article/l3s7joo9/
tags:
 - Apache Shiro
 - solution
---
## 简介

> Apache Shiro是一个强大且易用的Java安全框架,执行身份验证、授权、密码和会话管理。Shiro 可以非常容易的开发出足够好的应用，其不仅可以用在 JavaSE 环境，也可以用在 JavaEE 环境。

### 权限管理

常见的权限管理分为 基于主页的权限管理 、基于用户和权限的权限管理 以及 基于角色的访问控制（RBAC）。这里推荐使用 RBAC模型下的权限管理。

### 其他权限框架

* shiro：Apache Shrio是功能强大并且易用的Java安全框架 
* Spring Security：基于Spring的安全框架，依赖Spring 
* OAuth2：第三方授权框架（QQ、微信） 自定义安全认证中心



### 核心功能

> [!NOTE] 
>
> 基本概念：
>
> `Anthentication`：认证，验证用户是否有相应的身份 登录认证 
>
> `Authorization`：授权，权限验证，通过认证的用户检查是否有权限或者角色
>
> `Session Management`：会话管理，用户在认证成功后创建会话，在没有退出之前，当前用户的所有信息都会保存在这个会话中 
>
> `Cryptograsphy`：加密，对敏感信息加密

> [!NOTE]
>
> 特性：
>
> 1.Web Support Shrio提供了过滤器，可以通过过滤器拦截web请求来处理web应用的访问控制
> 2.Caching 缓存支持，shiro可以缓存用户信息以及用户的角色权限信息，可以提高执行效率
> 3.concurrency shiro支持多线程应用
> 4.Run As 允许一个用户以另一种身份去访问
> 5.Remeber Me 记住密码
> 6.Testing 提供测试支持

> [!WARNING]
>
> Shiro是一个安全框架，不提供用户、权限的维护，用户的权限管理需要我们去设计，在后文的 Realm实现方法有所体现。

> [!NOTE]
>
> 核心组件：
>
> `Subject`:表示待认证和授权的用户
>
> `Security Manager` :Shiro框架的核心，Shiro就是通过Security Manager来进行内部实例的管理，并通过它来提供安全管理的各种服务
>
> `Realms`：shiro进行认证和授权的数据源，在这里进行身份验证和授权



```sequence
	participant Subject
	participant Security Manager
	participant Authentiator
	participant IniRealm
	participant shiro.ini
	
    Subject->>Security Manager: 认证请求 login(token)
	Security Manager->>Authentiator: token
	Authentiator->>IniRealm: token
	Note right of IniRealm: doGetAuthenticationInfo() 认证
	Note right of IniRealm: doGetAuthorizationInfo() 授权
	shiro.ini-->IniRealm: 提供认证信息
	IniRealm-->Authentiator: 认证
	Authentiator-->Security Manager: 认证
	Security Manager-->Subject: 认证
	Note right of shiro.ini: 本身即可配置数据也可配置shiro，这里的作用主要是提供简单的安全信息
	Note right of shiro.ini: spring中可替换为数据库+shiro配置，这时须实现我们的realm，安全信息则是在数据库
```

1. 通过 subject.login(token) 登录，将 token（用户名和密码）传递给 SecurityManager
2. SecurityManager 调用Anthenticator 进行身份认证
3. Authenticator 把token传给对应Realm（可以是自定义的Realm，其中我们自己处理认证和授权的逻辑，认证我们就自己校验，授权查询数据库的用户权限进行授权，在访问需要权限的路径时会检查是否包含在我们这里授权的字段，shiro默认提供了JDBCRealm，但是要实现它的表结构，如果我们想自己定义表结构，就要自定义相关的Realm），这里shiro.ini是一个示例，IniRealm只是针对他的一个实现。
4. Realm根据得到的token，调用 doGetAuthenticationInfo 方法进行认证，认证失败则抛出异常提示认证器环境搭建
5. 接着将认证结果返回到上层

### IDE 中创建一个 maven 的项目

> 此处省略…

### 在maven的pom.xml 中添加依赖

```xml :collapsed-lines=1
<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.1.RELEASE</version>
    </parent>
    <dependencies>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>1.1.1</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>org.apache.shiro</groupId>
            <artifactId>shiro-spring</artifactId>
            <version>1.4.1</version>
        </dependency>

    </dependencies>
```

### 准备 Spring 配置文件

在 Spring Boot 默认资源文件夹 `resource` 中创建 `application.yml` 文件：

```yml
spring:
  profiles:
    active: dev
 
# mybatis的mapper.xml文件的位置
mybatis:
  mapper-locations: classpath:mapper/*Mapper.xml
```

额外创建一个 dev 环境的配置文件：

```yml
# 设置启动端口号
server:
  port: 8080
 
spring:
  # 配置数据源
  datasource:
    username: root
    password: root
    url: jdbc:mysql://localhost:3306/${你的数据库名称}
    driver-class-name: com.mysql.cj.jdbc.Driver
    type: com.alibaba.druid.pool.DruidDataSource
  # 只返回不为null的数据
  jackson:
    default-property-inclusion: non_null
```

### 创建数据库表

> [!TIP]
>
> shiro内置的有JDBCRealm，因此shiro有一套自己的数据库表的规范，如果你要使用该Realm，则必须按照如下规范创建表结构。

```sql
用户信息表：users
create table users(
	id int primary key auto_increment,
	username varchar(60) not null unique,
	password varchar(20) not null,
	password_salt varchar(20)
);
用户角色表：user_roles
create table user_roles(
	id int primary key auto_increment,
    username varchar(60) not null,
    role_name varchar(100) not null
);
权限信息表：roles_permissions
create table roles_permissions(
	id int primary key auto_increment,
    role_name varchar(100) not null,
    permission varchar(100) not null
);
```

> [!TIP]
>
> 如果你使用不一样的表结构，那么就要实现你自己的Realm实现认证和授权的方法，通常是这样的

```java
@Component("userRealm")
public class UserRealm extends AuthorizingRealm {

    @Autowired
    private IUserService iUserService;


    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        String username = token.getUsername();
        QueryWrapper<UserPO> wrapper = Wrappers.query();
        wrapper.eq("name", username);
        UserPO one = iUserService.getOne(wrapper);
        if (Objects.isNull(one)) {
            throw new BusinessException("用户名不存在");
        }
        ByteSource source = ByteSource.Util.bytes(one.getSalt());
        return new SimpleAuthenticationInfo(one, one.getPassword(), source, getName());
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
//        //获取用户的用户名
//        String username  = (String) principalCollection.iterator().next();
//        //根据用户名查询用户角色
//        Set<String> roles = roleDao.getRoleNamesByUsername(username);
//        //根据用户名查询用户权限
//        Set<String> permissions = permissionDao.getPermissionByUsername(username);
//        SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();
//        info.setRoles(roles);
//        info.setStringPermissions(permissions);
//        return info;
        
        //如上代码是常规的授权逻辑，以下只是一个简单授权操作的测试 // [!code highlight]
        
        //用自定义的字符串进行授权，模拟数据库查询用户的权限授权
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        Set<String> permissions = new HashSet<>();
        permissions.add("user:delete"); //给用户添加一个权限，下面的权限和该权限进行对照，在shiro配置中配置这两个路径需要权限这两个权限字段，可以采用shiro中提供的spring注解完成
//        permissions.add("user:update");
        info.addStringPermissions(permissions);
        return info;
    }
}
```

创建一个数据库，这里取名为 shiro，只创建用户表进行测试

```sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '姓名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '12345' COMMENT '密码',
  PRIMARY KEY (`id`) 
)
```

> 随意插入几条数据…此处省略

### 创建实体类

- 数据库表对应实体类：UserPO
- 持久层接口：UserMapper
- 业务层接口及实现类：IUserservice、UserServiceImpl
- 控制器类：UserController

> [!TIP]
>
> 通过注解 `@MapperScan`  配置好mapper类的扫描路径，一般配置在某个标注了 `@Configuration`  注解的配置类上，简单起见可在项目的入口位置配置，如下是一个实例：

```java
@SpringBootApplication(scanBasePackages = SimpleConstants.BASE_COMPONENT_SCAN_PATH)
@ServletComponentScan(basePackages = SimpleConstants.BASE_COMPONENT_SCAN_PATH) 
@EnableTransactionManagement
@MapperScan(basePackages = SimpleConstants.BASE_COMPONENT_SCAN_PATH + ".mez.bbs.server.modules.**.mapper")// [!code highlight]
@Slf4j
public class MezBBSLauncher {
}
```

### 创建自定义Realm

> [!WARNING]
>
> 注意，这里创建我们自己定义的Realm，该Realm继承自Shiro提供的AuthorizingRealm类

```java
@Component
public class UserRealm extends AuthorizingRealm {
	/**
 	* 认证
 	*/
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws 		AuthenticationException {
          //...进行身份验证  // [!code highlight] 
        return null;
    }
 
    /**
     * 授权
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
           //...进行权限验证  // [!code highlight]
        return null;
    }
}
```

### 创建Shiro配置类

创建配置类

```java :collapsed-lines=1
@Configuration
public class ShiroConfig {
    @Bean
    public IniRealm getIniRealm(){
        IniRealm iniRealm=new IniRealm("classpath:shiro.ini");
        return iniRealm;
    }
    @Bean
    public DefaultWebSecurityManager getDefaultWebSecurityManager(IniRealm iniRealm){
        DefaultWebSecurityManager securityManager=new DefaultWebSecurityManager();
        //securityManager要完成校验，需要realm
        securityManager.setRealm(iniRealm);
        return securityManager;
    }
    @Bean
    public ShiroFilterFactoryBean getShiroFilterFactoryBean(DefaultWebSecurityManager defaultWebSecurityManager){
        ShiroFilterFactoryBean filter=new ShiroFilterFactoryBean();
        filter.setSecurityManager(defaultWebSecurityManager);
        //设置shiro的拦截规则
        //anon 匿名用户可访问   authc  认证用户可访问
        //user 使用RemeberMe的用户可访问  perms  对应权限可访问
        //role  对应的角色可访问
        Map<String,String> filterMap=new HashMap<>();
        filterMap.put("/","anon");
        filterMap.put("/login.html","anon");
        filterMap.put("/register.html","anon");
        filterMap.put("/user/login","anon");
        filterMap.put("/user/register","anon");
        filterMap.put("/static/**","anon");
        filterMap.put("/**","authc");
        filter.setFilterChainDefinitionMap(filterMap);

        filter.setLoginUrl("/login.html");
        //设置未授权页面跳转到登录页面
        filter.setUnauthorizedUrl("/login.html");
        return filter;
    }
}
```

## 登录认证功能

### 控制层 UserController：

```java
@RestController
@RequestMapping(path = "/user", produces = "application/json;charset=utf-8")
public class UserController {
		private  UserService userService;
 
		@Autowired
		public UserController(UserService userService) {
 		   this.userService = userService;
		}
 
		@RequestMapping(path = "/login", method = RequestMethod.POST)
		public R<Void> login(UserLoginDTO loginDTO) { //R为Json规范响应实例,确保通过validation验证UserLoginDTO实例的参数 // [!code highlight] 
   		 	userService.login(loginDTO);
   		 	return R.success();
		}
}
```

### 业务层 IUserService 以及实现类 UserServiceImpl：

```java
public interface IUserService {
    /**
     * 登录认证
     * @param loginDTO 登录信息
     */
    void login(UserLoginDTO loginDTO);
}
```

```java :collapsed-lines=1
@Service
public class UserServiceImpl implements IUserService {
 
    private final UserMapper userMapper;
 
    @Autowired
    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }
 
    @Override
    public void login(UserLoginDTO loginDTO) {
        String username = loginDTO.getUsername();
 
        // 根据用户名查询用户信息
        User user = userMapper.selectByUsername(username);
 
        if (user != null) {
            if (user.getIsEnable()) {
                // shiro登录认证
                UsernamePasswordToken token = new UsernamePasswordToken(username, loginDTO.getPassword());
                Subject subject = SecurityUtils.getSubject();
 
                subject.login(token);
                // 设置session失效时间：永不超时
                subject.getSession().setTimeout(-1001);
            } else {
                throw new GlobalException(ResponseCode.FORBIDDEN, "账号已被锁定");
            }
        } else {
            throw new GlobalException(ResponseCode.NOT_FOUND, "用户名不存在");
        }
    }
 
}
```

### 在UserRealm实现认证方法

```java
@Component("userRealm")
public class UserRealm extends AuthorizingRealm {

    @Autowired
    private IUserService iUserService;


    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        String username = token.getUsername();
        QueryWrapper<UserPO> wrapper = Wrappers.query();
        wrapper.eq("name", username);
        UserPO one = iUserService.getOne(wrapper);
        if (Objects.isNull(one)) {
            throw new BusinessException("用户名不存在");
        }
        ByteSource source = ByteSource.Util.bytes(one.getSalt());
        return new SimpleAuthenticationInfo(one, one.getPassword(), source, getName());
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
     	return null;
    }

```

### 测试

> [!WARNING]
>
> 注意要在 `static` 目录下创建登录页面 `login.html` ，在 idea IDE 中通常项目结构为：

::: file-tree

- java  这里相当于 **src**
  - com 源码文件存放的包位置 ( **com**命名只是一个示例 )
    - …
    	- demo.java
- resource 该目录存放资源文件
	- application.yml
	- static          在这里存放文件  **login.html**
		- login.html
		- html
			- home.html
			- …
		- js
			- jquery-3.7.1.js
			- login.js 
			- …

:::



#### 创建 login.html 页面：

```html :collapsed-lines=1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录shiro验证</title>
    <style>
        #loginForm{
            width: 500px;
            margin: 200px auto;
        }
    </style>
</head>
<body>
<form id="loginForm">
    <table>
        <tr>
            <td>用户名</td>
            <td><input type="text" id="name" /></td>
        </tr>

        <tr>
            <td>密码</td>
            <td><input type="password" id="password" /></td>
        </tr>

        <tr>
            <td>
                <button type="button" id="login">登录</button>
            </td>
            <td>
                <button type="reset">重置</button>
            </td>
        </tr>
    </table>
</form>
<script src="/js/jquery-3.7.1.js"></script>
<script src="/js/login.js"></script>
</body>
</html>
```

#### 创建 login.js 文件：

```js :collapsed-lines=1
$(document).ready(function () {
    $("#login").click(function () {
        let username = $("#name").val();
        let password = $("#password").val();

        let jsonData  = {
            name: username,
            password: password
        }
        $.ajax({
            url: "/user/login",
            type: "POST",
             headers:{
                 "Content-Type":"application/json"
             },
            contentType: "application/json",
            data: JSON.stringify(jsonData),
            success: function(response) {
                if(response.code === 0){  //根据实际的响应数据的code填写  // [!code highlight]
                    location.href = "/html/home.html";
                }
            },
            dataType: "json"
        });
    });
});
```

#### 创建 home.html 页面 ：

```html :collapsed-lines=1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录首页</title>
</head>
<body>
    <h1>欢迎来到系统首页！</h1>
    <button type="button" id="delete">删除</button> | <button type="button" id="update">修改</button>
    <script>
        $(function () {
            $("#delete").click(function () {
                $.post("/user/delete", function (resp) {
                    alert(resp.message);
                });
            });

            $("#update").click(function () {
                $.post("/user/update", function (resp) {
                    alert(resp.message);
                });
            });

        });
    </script>
</body>
</html>
```

> [!NOTE]
>
> 接下来访问  `localhost:${application.port}/login.html` 这个地址，输入用户信息登录，如果身份验证成功跳转至主页 `home.html`  。
>
> 当清空浏览器缓存，刷新页面，页面会重定向到` login.html `。因为在shiro配置类里配置了 `/html/home.html` 要身份认证之后才能访问。即 `map.put("/html/home.html", "authc")`

## 授权功能

### 配置realm授权函数

> [!NOTE]
>
> UserRealm里的doGetAuthorizationInfo()方法中实现授权的代码，查询用户的权限保存到shiro中。

### UserController 中添加对应接口

```java :collapsed-lines=1
@RestController
@RequestMapping(path = "/user", produces = "application/json;charset=utf-8")
public class UserController {
 	@Autowired
    private  UserService userService;
 
 
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public R<Void> login(UserLoginDTO loginDTO) {
        userService.login(loginDTO);
        return R.success();
    }
 
    
    @PostMapping("delete")
    @RequiresPermissions("user:delete")
    public R delete() {
        return R.success("删除用户成功");
    }


    @PostMapping("update")
    @RequiresPermissions("user:update")//这里在realm中是没为用户提供权限的，所以会访问失败
    public R add() {
        return R.success("更新用户成功");
    }
 
}


```

### 测试

用 postman 访问对应接口，只有拥有realm的授权方法中的权限才可以访问。





