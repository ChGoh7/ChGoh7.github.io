---
title: 10 异常（Exception）
createTime: 2024/09/01 23:18:29
permalink: /notes/Java/gylyd9zi/
---
> 在 Java 语言中，将程序执行中发生的不正常情况称为 “异常”（开发过程中的语法错误和逻辑错误不是异常）
>
> 这些 异常事件 可分为两类：
>
> * Error（错误）：Java 虚拟机无法解决的严重问题。
>
> 	如：JVM 系统内部错误，资源耗尽等严重情况。Error 是严重错误，程序会崩溃。
>
> * Exception：其他因编程错误或偶然的外部因素导致的一般性问题，可以使用针对性的代码进行处理。
>
> 	如：空指针访问，试图读取不存在的文件，网络中断等等。
>
> 	Exception 又分为两大类：
>
> 	* 运行时异常（程序运行时，发生的异常）
> 	* 编译时异常（编程时，编译器检查出的异常）

## 11.1 异常体系图

> 编译异常（受检异常） 和 运行异常（非受检异常）
>
> Java 源程序 ——(javac.exe)——> 字节码文件 ——(java.exe)——> 在内存中加载，运行类
>
>  编译异常↑ 运行异常↑

[![img](https://i-melody.github.io/img/Java_InputImage/异常体系图_11.1.webp)](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC9UExURVlZWdPT07KysmRkZIWFhfT09JmZmWZmZm9vb39/fxkZGUxMTDMzM3p6epCQkKamppubm729venp6cjIyN7e3tbW1s/Pz8LCwnx8fLS0tFZWVoiIiI+Pj6GhoeTk5Glpabu7u93d3evr66CgoJSUlKqqqsnJyeDg4Hd3d8PDw+Xl5bi4uNHR0dvb26Ojo6urq+fn51hYWDg4OCgoKHBwcK2traenp0FBQe7u7vHx8U5OTre3t8zMzHV1df///7GrnpQAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAUGSURBVHja7NoJb6M4GMZxY0NCD64kve/pMZ2d3Z297+X7f6zFNmBAMUXa6URl/q9UJSWPUPzrizFWRUlNLgEBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYn6cCIcRXgvX/h9qcIVBqDdbEM8RCxGCB9QqXYRwHYDHBgwXWl8eKZKiESHI3Ba1kWs3fKixcaJUl1YyeBm7Ocq+yLItUiVBGnXxenSHJolIKEcwHq6ikbOX1YGVzQCTN8LPmSLreghUl9sN4Uw7yajMrLC0TZ1ImzqY6FEop0+pIaEN5HaoOxVuwEqFyc4I46uSlzOLqgxlh6UaR9l3VYWl9Fdoxb1Q90KJtu41pwwFW/WHhTtW8i7TafLCqRsk6bsGw63L9qurXRmuIlbT9lDQnlXU+nBFW1Q2qnZbDprWa2tjR90LZFqx1/+Td/HpGWLlrLDvIwTcx6dQ1Vrntbig68cDms3JwbA5Y1azs1ger6sNV/bbIw1jU81MvNAGrl58RVn8ozW+btF08iGFoAlYvP3csfVur1gJBEIA1uBmue5dhZDOyO2epbmgCVi8/I6x0MMHH9pjsTfBhNzQBq5uPZoQlB0uH3DZG4EZqQ26fL3sZq5uf09Ih6qw3i/pm6BZO0qZX7rrUS68Xsbr5ZE4rePMk08pk9aUZugfqppvs6AM1Acvlo/StP+6EbW06z8hJqxbYp2BZPQUnFsLsKuhQdaHqn5ewbF7KXIn0jWO5MqOQ7RaNLPtbNMmmhimj0GUmYLl8Gs0Lq4wyPbTu1l2QKqHSouzs3OlDIslW5SQsnY/NXmFplyNvEuuLV/Tau9BzwiraDUSwXmysztYWWNtL1psXeumgIrDGaqXvBfUuvtqUYI3V2t1wk1e2msFluJJm6zDJXv/fIfjPP7DAAgsssCiwwAILLLDAosACCyywwAKLAgsssMACC6zt9fDz/v75tyOB+98PD2+ORgKffjw4OP1uJPDxl+Xy8v1I4MPF3t7VNyOB4/vF4uzdzrG+39f1kz/w66Guv/yBvw90KX/gZKkr8Qf+2dOV+gNHC12/7RxrabD2/a31bLAO/a11YbAO/K21MFhLf2s9Gqw9f2vdGqzFu11jnVusE2/gxmI9eQOnFuvYG7i0WH7uK4t15w2cWazrXWP9a7H8f/bQYvm/6IPF+sF/pVssf19Ii/WH/0K2WH/uGuvEWC39gSdj9Twy+Rqri5EZx1gt/IE7Y/XoD1wbq9vd3w1PlufnD2OBp+ebm/uxwPHF6emnscDR4vLy41jg7vHq6sNY4Pr27OyYdRaLUrDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssL6u+k+AAQCR9eHtLKvLfwAAAABJRU5ErkJggg==)

 *（异常体系图_11.1）*

* 运行时异常，编译器不要求强制处置的异常。一般是指编程的逻辑错误，是程序员应该避免其出现的异常。

	`java.lang.RuntimeException`类及它的子类都是运行时异常

	对于运行时异常，可以不做处理。因为这类异常很普遍，若全处理会对程序的可读性和运行效率产生影响

* 编译时异常，是编译器要求必须处置的异常

### 11.1.1 常见的运行时异常

> 常见的运行时异常（`RuntimeException`）包括
> * `NullPointerException`：空指针异常
> * `ArithmeticException`：数学运算异常
> * `ArrayIndexOutOfBoundsException`：数组下标越界异常
> * `ClassCastException`：类型转换异常
> * `NumberFormatException`：数学格式异常

**空指针异常**

* 当应用程序试图在需要对象的地方使用 null 时，抛出该异常。

> ```java
> String str = null;
> int n = str.length;					//这里，出现了 空指针异常JAVA
> ```

**数学运算异常**

* 当出现异常的运算条件时，抛出该异常。

> ```java
> double n = 100 / 0;					//这里，出现了 数学运算异常
> ```

**数组下标越界异常**

* 用非法索引（为负或超出范围）访问数组时，抛出该异常。

> ```java
> int[] nums = {0, 0, 0, 0};
> nums[-50] = 100;					//这里，出现了 数组下标越界异常JAVA
> ```

**类型转换异常**

* 当试图把对象强制转换为不是实例的子类时，抛出该异常。

> ```java
> public class Example {
>     public static void main(String[] args){
>         A a1 = new A1();
>         A2 a1 = (A2)a1;				//这里，出现了 类型转换异常
>     }
> }
> class A {}
> class A1 extends A {}
> class A2 extends A {}
> ```

**数字格式不正确异常**

* 当应用程序试图将字符串转成一种数值类型，但该字符串不能转换为适当格式时，抛出该异常。

> ```java
> String str = "ABC";
> int num = Integer.parseInt(str);	//这里，出现了 数字格式不正确异常JAVA
> ```

### 11.1.2 常见的编译异常

> 常见的编译异常：
>
> * `SQLException`：操作数据库时，查询表可能发生异常
> * `IOException`：操作文件时，发生的异常
> * `FileNotFoundException`：操作一个不存在的文件时，发生的异常
> * `ClassNotFoundException`：加载类，而该类不存在时，发生的异常
> * `EOFException`：操作文件，到文档末尾，发生的异常
> * `IllegalArguementException`：参数异常

因为还没有学习 SQL、文件编程 等，这里不举例子

## 11.2 异常处理

> 异常发生时，对异常的处理方式。如果没有显式异常处理，默认处理方式是 `throws`
>
> * `try - chatch - finally`：程序员在代码中捕获发生的异常，自行处理
> * `throws`：将发生的异常抛出，交给调用者（方法）来处理。最顶级的处理者就是 JVM

### 11.2.1 `try - catch` 异常处理

> Java 提供 try 和 catch 块 来处理异常。try 块用于包含可能出错的代码，catch 块用于处理 try 块中的异常。可以根据需要在程序中有多个 `try - catch` 块。

> 基本语法
>
> ```java
> try {
> 	//可疑代码
> 	//将异常生成对应的异常对象，传递给 catch 块
> } catch(Exception e) {
> 	//如果发生异常，执行这些代码
> } finally {
>     //无论是否异常，都执行这些代码
>     //finally 块可以不写
> }
> ```

> 快捷键：选中代码后按 ctrl + alt + T

#### #11.2.1.1 使用细节

1. 如果异常发生了，则异常发生后面的代码块都不执行，直接进入 catch 块

2. 如果异常未发生，则顺序执行 try 代码块，catch 块不执行

3. 如果希望不管是否异常，都执行一些代码，则使用 finally

4. 可以有多个 catch 捕获不同的异常。要求 子类异常在前，父类异常在后。

``` java
 try {
 	...
 } catch (`NullPointerException` e) {
 	...
 } catch (ArithmeticException e) {
 	...
 } catch (ArrayIndexOutOfBoundsException e) {
 	...
 } catch (Exception e){
 	...
 }
```

5. 可以进行 try - finally 配合使用（不写 catch）。这种用法相当于没有捕获异常，此时程序如果出错会直接退出。

>应用场景，就是写一段代码，不管是否发生异常，都必须执行某个业务逻辑。

6. 如果没有出现异常，执行 try 中所有语句，不执行 catch 语句，最后执行 finally 语句

7. 如果出现异常，则 try 块异常发生后，剩余语句不执行。之后执行 catch 语句，最后，执行 finally 语句。

### 11.2.2 `throws` 异常处理

> 如果一个方法可能生成某种异常，但是并不能确定如何处理这种异常，则此方法应显式地声明抛出异常，表明该方法将不对这些异常进行处理，而由调用者负责处理
>
> 在方法中声明 `throws` 语句可以声明抛出异常的列表。`throws` 后面的异常类型可以是方法中产生的异常类型，也可以是它的父类。

> 语法

 ```java
 public void metord() throws FileNontFoundException ,`NullPointerException` {
 	...
 }
 ```

#### #11.2.2.1 使用细节

1. 对于 **编译异常**，程序中必须处理。
2. 对于 **运行异常**，程序中诺没有处理，默认处理是 `throws`
3. 子类 重写 父类方法时，子类方法抛出的异常类型必须和父类一致，或者是父类抛出异常类型的子类型。
4. 如果有 `try - catch` 就不必 `throws` 了

## 11.3 自定义异常

> 当程序中出现了某些 “错误”，但该信息并未在 `Throwable` 子类中描述处理，这时候可以自己设计异常类，用于描述该错误信息

1. 定义类：自定义异常类名，继承 `RuntimeException` 或 Exception
2. 如果继承 Exception，属于 编译异常。
3. 如果继承 `RuntimeException`，属于 运行异常。（一般来说，选这个。这样利用了默认处理机制，更方便）

 ```java
class Metords {
   public void method() {
        int n = 10;
       if(n > 100){
           throw new CustomException("不能大于100");
      }
   }
}

class CustomException extends `RuntimeException` {
public CustomException(String message) {
 	super(message);
 }
}
 ```

### 11.3.1 `throw` 和 `throws`

|          | 意义                   | 位置       | 后面跟的东西 |
| -------- | ---------------------- | ---------- | ------------ |
| `throws` | 异常处理的一种方式     | 方法声明时 | 异常类型     |
| `throw`  | 手动生成异常对象关键字 | 方法体中   | 异常对象     |

### 11.3.2 编程小技巧

>编写异常时，先确定正确的情况，然后取反。这样写，你的思路就不乱。

