---
title: 深入理解String
createTime: 2024/09/01 23:18:29
permalink: /notes/JavaSE/xuwd0zlx/
---
 

> String str = “a” + “b” + “c"到底创建了几个对象？这是我们在讨论中最经常遇到的一个问题同时也是面试题。我们都知道在Java中从”.java"文件编译成".class"文件的过程，会有一个优化器去优化我们的代码。这个问题需要分成三种情况去考虑，下面我们就来分析这三种情况！！

**前言**  
在[JVM](https://so.csdn.net/so/search?q=JVM&spm=1001.2101.3001.7020)(JDK8)的内存结构中有一块区域叫作字符串常量池，这块区域存储了两样东西，分别是“字面量”和“符号引用”。字面量也就是一串字，例如String str = “abc” 这里的"abc"就是字面量。符号引用是用于定位引用指向的问题。(JDK8完完全全把字符串常量池从方法区搬到堆中了)

**一、第一种情况（常量相加）**

> String str = “a” + “b” + "c

因为这种情况是常量之间相加，经过编译器优化成了String str = “abc”，所以答案是创建了一个对象。“a”、“b”、"c"这些都是常量，因为它们是final修饰放在[字符串](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)常量池中的对象(注意：字面量也是对象)

我们通过javac编译，然后反编译后的结果和内存分配情况如下

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.soft.wesker;

public class Test {
    public Test() {
    }

    public static void main(String[] var0) {
        String var1 = "abc";
    }
}
```


​    

![](https://gitee.com/kilomi/pic-bed/raw/master/img/202310022218765.png)  
**二、第二种情况（变量相加)**

> String a = “a”;  
> String b = “b”;  
> String c = “c”;  
> String str = a + b + c;

因为这种情况是变量之间相加，已经不是之前的常量相加了，经过编译器优化成了StringBuilder，所以答案是创建了三个对象。new StringBuilder()、new String()、“abc”，==因为最终会通过StringBuilder()里面的toString()方法进行new String(“abc”)类型转换==。=="abc"：这是 StringBuilder 的 toString 方法返回的新字符串对象==

==注意：str接收的是toString返回的对象，而不是在toString里创建的对象==

源码：

```java
 @Override
    public String toString() {
        // Create a copy, don't share the array
        return new String(value, 0, count);
    }
```

我们通过javac编译，然后反编译后的结果和内存分配情况如下

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.soft.wesker;

public class Test {
    public Test() {
    }

    public static void main(String[] var0) {
        String var1 = "a";
        String var2 = "b";
        String var3 = "c";
        (new StringBuilder()).append(var1).append(var2).append(var3).toString();
    }
}
```


​    

![](https://img-blog.csdnimg.cn/0744c08f8cb04be58cf0408b6bc55df4.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzODQyMDkz,size_16,color_FFFFFF,t_70) 

==在这里字符串常量池其实还没有“abc”,在堆中虽然创建了这个字符串，**只有字符串字面量和调用intern()方法的字符串才会被添加到字符串常量池**。其他通过new String()或者字符串连接等方式创建的字符串，都是在堆上创建的，不会被添加到字符串常量池，除非你显式地调用intern()方法。==
**三、第三种情况（无优化)**

> String str = “a” + “b” + "c

如果不考虑优化的情况下，这一共是创建了5个对象的，因为一个双引号就是一个字面量(对象)，这里创建了5个对象，分别是"a"、“b”、“c”、“ab”、“abc”。

下面是内存分配情况  
![](https://img-blog.csdnimg.cn/5c80178feb494e7ea3bc502601556f65.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzODQyMDkz,size_16,color_FFFFFF,t_70)  

**最后我们还需要考虑一个问题，在创建字面量的时候，JVM会先从字符串常量池中寻找是否已经存在，如果已经存在则直接返回引用，不存在就会先创建一个字面量，然后再返回引用。所以就会出现创建了0个对象的问题**