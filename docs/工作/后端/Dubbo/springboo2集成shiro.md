---
title: springboo2集成shiro
createTime: 2024/10/20 21:40:53
permalink: /article/l3s7joo9/
---
## 环境搭建

### IDE 中创建一个 maven 的项目

> 此处省略…

### 在maven的pom.xml 中添加依赖

```xml :collapsed-lines=1
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
 </dependency>
<!--lombok-->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>${lombok.version}</version>
    </dependency>
 
    <!--mysql-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>${mysql.version}</version>
    </dependency>
 
    <!--mybatis-->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>${mybatis.version}</version>
    </dependency>
 
    <!--druid-->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>${druid.version}</version>
    </dependency>
 
    <!--fastjson-->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>fastjson</artifactId>
        <version>${fastjson.version}</version>
    </dependency>
 
    <!-- shiro -->
    <dependency>
        <groupId>org.apache.shiro</groupId>
        <artifactId>shiro-spring</artifactId>
        <version>${shiro.version}</version>
    </dependency>
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

随意创建一个数据库，这里取名为 shiro，然后在创建用户表

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

创建配置类，在

```java :collapsed-lines=1
@Configuration
public class ShiroConfig {

	/**
	 * 配置安全管理器
	 * @param userRealm UserRealm
	 * @return DefaultWebSecurityManager
	 */
	@Bean
	public DefaultWebSecurityManager securityManager(UserRealm userRealm) {
   	 	DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
 
   	 	securityManager.setRealm(userRealm);
 
    	return securityManager;
	}
 
	/**
	 * 配置Shiro过滤器工厂
 	 * @param securityManager 安全管理器
 	 * @return ShiroFilterFactoryBean
 	 */
	@Bean
	public ShiroFilterFactoryBean shiroFilter(DefaultWebSecurityManager securityManager) {
    	ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
 
    	// 注册安全管理器
    	shiroFilterFactoryBean.setSecurityManager(securityManager);
 
    	/** 
    	  设置登录页面的地址
     	  当用户访问认证资源的时候，如果用户没有登录，那么就会跳转到该属性指定的页面
     	*/
    	shiroFilterFactoryBean.setLoginUrl("/login.html");
    	return shiroFilterFactoryBean;
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

> [!NOTE]
>
> 当调用 `Subject `的 `login()` 方法时，会执行 UserRealm 的认证方法 `doGetAuthenticationInfo()`

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

#### 配置 ShiroConfig.java

```java  :collapsed-lines=1
@Configuration
public class ShiroConfig {
/**
 * 配置安全管理器
 * @param userRealm UserRealm
 * @return DefaultWebSecurityManager
 */
@Bean
public DefaultWebSecurityManager securityManager(UserRealm userRealm) {
    DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
 
    securityManager.setRealm(userRealm);
 
    return securityManager;
}
 
/**
 * 配置Shiro过滤器工厂
 * @param securityManager 安全管理器
 * @return ShiroFilterFactoryBean
 */
@Bean
public ShiroFilterFactoryBean shiroFilter(DefaultWebSecurityManager securityManager) {
    ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
 
    // 注册安全管理器
    shiroFilterFactoryBean.setSecurityManager(securityManager);
 
    /*
     * 设置登录页面的地址
     * 当用户访问认证资源的时候，如果用户没有登录，那么就会跳转到指定的页面
     */
    shiroFilterFactoryBean.setLoginUrl("/login.html");    
 
    // 定义资源访问规则
    Map<String, String> map = new LinkedHashMap<>();        //[!code ++]
 
    /*
     * 过滤器说明
     * anon：不需要认证就可以访问的资源
     * authc：需要登录认证才能访问的资源
     */
    map.put("/html/home.html", "authc");                   //[!code ++]
 
    // 不需要认证就能访问
    map.put("/login.html", "anon");                        //[!code ++]
    map.put("/user/login", "anon");                        //[!code ++]
 
    shiroFilterFactoryBean.setFilterChainDefinitionMap(map);  //[!code ++]
 
    return shiroFilterFactoryBean;
	}
}
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
> UserRealm里的doGetAuthorizationInfo()方法中实现授权的代码，查询用户的权限保存到shiro中，

```java :collapsed-lines=1
@Component
public class UserRealm extends AuthorizingRealm {
 
    private final UserMapper userMapper;
 
    @Autowired
    public UserRealm(UserMapper userMapper) {
        this.userMapper = userMapper;
    }
 
    /**
     * 认证
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
 		//... 此处省略
    }
 
    /**
     * 授权
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();  // [!code ++]
        Set<String> permissions = new HashSet<>();// [!code ++]
        permissions.add("/user/delete");// [!code ++]
        permissions.add("/user/update");// [!code ++]
        authorizationInfo.setStringPermissions(permissions);// [!code ++]
        return authorizationInfo;// [!code ++]
    }
 
}
```

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
 
    @RequestMapping(path = "/delete", method = RequestMethod.POST)
    public R<Void> delete() {         //[! code++]
        return R.success("删除成功");
    
 
    @RequestMapping(path = "/update", method = RequestMethod.POST)
    public R<Void> update() { //[! code++]
        return R.success("修改成功");
    }
 
}

```

### home.html 

```html :collapsed-lines=1
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
```

### 自定义过滤器实现授权

```java :collapsed-lines=1
/**
 *  权限验证的过滤器，在shiro中配置集成使用
 * @author Wu Chen
 * @date 2024-10-20 19:43
 */
@WebFilter
public class AuthorizationFilter implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;
        String requestURI = request.getRequestURI();
        //shiro工具获取当前subject
        Subject subject = SecurityUtils.getSubject();

        // 检查用户是否未认证
        if (subject == null || !subject.isAuthenticated()) {
            handleUnauthenticated(request, (HttpServletResponse) resp);
            return;
        }

        // 检查用户是否具有访问特定资源的权限
        if (!subject.isPermitted(requestURI)) {
            handleUnauthorized(request, (HttpServletResponse) resp);
            return;
        }

        chain.doFilter(req, resp);
    }

    private void handleUnauthenticated(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        R<Void> result = R.fail(ResponseCode.UNAUTHORIZED);
        String data = JSON.toJSONString(result);
        response.getWriter().write(data);
    }

    private void handleUnauthorized(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;charset=utf-8");
        R<Void> jsonResult = R.fail(ResponseCode.ACCESS_DENIED);
        String data = JSON.toJSONString(jsonResult);
        response.getWriter().write(data);
    }
}
```

### ShiroConfig 中配置过滤器：



```java :collapsed-lines=1
@Bean
    public ShiroFilterFactoryBean shiroFilter(DefaultWebSecurityManager securityManager) {
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
 
        // 注册安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);
 
        /*
         * 设置登录页面的地址
         * 当用户访问认证资源的时候，如果用户没有登录，那么就会跳转到指定的页面
         */
        shiroFilterFactoryBean.setLoginUrl("/login.html");
 
        // 定义资源访问规则
        Map<String, String> map = new LinkedHashMap<>();
 
        /*
         * 过滤器说明
         * anon：不需要认证就可以访问的资源
         * authc：需要登录认证才能访问的资源
         */
        map.put("/html/home.html", "authc");
 
        // 不需要认证就能访问
        map.put("/login.html", "anon");
        map.put("/user/login", "anon");
 
        // 设置自定义过滤器
        map.put("/user/delete", "authorization");//[! code++]
        map.put("/user/update", "authorization");//[! code++]
 
 
        Map<String, Filter> filters = shiroFilterFactoryBean.getFilters();  //[! code++]
        filters.put("authorization", new AuthorizationFilter());  //[! code++]
        shiroFilterFactoryBean.setFilters(filters);//[! code++]
        shiroFilterFactoryBean.setFilterChainDefinitionMap(map);
 
        return shiroFilterFactoryBean;
}
```

### 测试

访问对应接口，只有拥有realm的授权方法中的权限才可以访问。
