---
title: 集成web
createTime: 2024/10/12 11:32:29
permalink: /notes/Frameworks/edkxo606/
---
## 整合 Web
### web开发-静态资源访问

在线文档：https://docs.spring.io/spring-boot/reference/features/external-config.html



1. 只要静态资源放在/static、/public、/resources、/META-INF/resources可以被直接访问——对应文件WebProperties.java,会读取这个配置

	```java
	private static final String[] CLASSPATH_RESOURCE_LOCATIONS = { "classpath:/META-INF/resources/",
					"classpath:/resources/", "classpath:/static/", "classpath:/public/" };
	```

2. 常见静态资源；JS、CSS、图片(.jpg .png .gif .bmp .svg)、字体文件(Fonts)等

3. 访问方式：默认：项目根路径/+静态资源名比如http://localhost:8080/hi.html. —— 在设置 WebMvcProperties.java 中属性为：

	```java
		private String staticPathPattern = "/**";
	```

	

#### 快速入门

创建SpringBoot项目springbootweb

E:\ProjectCollection\FrameworkProject\hatida-springboot\springbootweb

#### 注意事项和细节

1. 静态资源访问原理：静态映射是/**，也就是对所有清求拦截，请求进来，先看Controller能不能处理，不能处理的请求交给静态资源处理器，如果静态资源找不到则响应404页面
2. 改变静态资源访问前缀，比如我们希望http://localhost:8080/hspres/*去请求静态资源，应用场景：
	静态资源访问前缀和控制器请求路径冲突

（1）创建application.yml

```yaml
spring:
 mvc:
  static-path-pattern: /hatidares/**
```

（2）重启应用，完成测试，浏览器输入：http://localhost:8080/hatidares/1.jpg

3. 改变默认的静态资源路径，比如希望在类路径下增加hatidaimg目录作为静态资源路径，并完成测试

### Rest风格请求处理

> SpringMVC讲过

1. Rest风格支持(HTTP请求方式动词来表示对资源的操作)

2. 举例说明：

* 请求方式：/monster
* GET-获取
* DELETE-删除
* PUT-修改
* POST-保存

#### 注意事项和细节

1. 客户端时PostMan可以直接发送Put、delete等方式的请求，可以不设置Filter

2. 如果要SpringBoot支持页面表单的Rest功能，则需要注意以下细节：

	1. Rest风格请求核心Filter：HiddenHttpMethodFilter，表单请求会被HiddenHttpMethodFilter拦截，获取到表单_method的值，再判断是PUT/DELETE/PATCH（PATCH是新引入的，是对PUT方法的补充，用来对已知资源进行局部更新：https://segmentfault.com/q/1010000005685904）

	2. 如果要SpringBoot支持页面表单的Rest功能，需要在application.yml启用filter功能，否则无效

	3. 修改application.yml启用filter功能

		```yaml
		#注意放在文件前面，否则不生效
		spring:
		  mvc:
		    static-path-pattern: /hatidares/**
		    #/** 改为 /hatidares/，放在前面**
		    hiddenmethod:
		      filter:
		        enabled: true	#开启基于页面表单的Rest功能
		```

为什么return “GET-查询妖怪”，返回的是字符串，而不是转发到对应的资源文件？

@RestController包含@ResponseBody注解，springboot底层(springmvc)，在处理return xxx的时候对该注解解析处理，即返回字符串xxx，而不会使用视图解析器来处理，如果把@RestController改为@Controller,当访问getMonster()时，如果你有xxx.html就会转发到xxx.html，报404

> 测试时将xxx.html文件放在public\xxx.html进行测试，并在application.yml配置视图解析器

### ==接收参数注解==

1. SpringBoot接收客户端提交数据/参数时会使用到相关注解
2. 详解@PathVariable、@RequestHeader、@ModelAttribute、@RequestParam、@CookieValue、@RequestBody

#### 应用实例

需求：演示各种方式提交数据/参数给服务器，服务器如何使用注解接收

1. 创建springbootweb\src\main\resources\public\index.html

#### 复杂参数

1. 在开发中，SpringBoot在响应客户端请求时，也支持复杂参数

2. ==Map、Model==、Errors/BindingResult、RedirectAttributes、ServletResponse、SessionStatus,UriComponentsBuilder,ServletUriComponentsBuilder,HttpSession
3. Map、Model数据会被放在request域，到时Debug
4. RedirectAttributes重定向携带数据

##### 实例

在RequestController.java编写相关方法

### 自定义对象参数-自动封装

1. 在开发中，SpringBoot在响应客户端/浏览器请求时，也支持自定义对象参数
2. 完成自动类型转换与格式化
3. 支持级联封装

举个例子：

```java
class user{				//封装该对象的属性时，对car对象的属性也进行封装，就叫级联封装
private String name;
private Integer age;
private Car car;		
}

class car{
private String car_name;
private String price;
}
```