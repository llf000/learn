# JS基础
## JS基础了解
### 什么是JavaScript
* 关于HTML、CSS、JS
  * HTML：标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频
  * CSS：样式规则语言，可将样式应用于 HTML 内容，例如设置背景颜色和字体，在多个列中布局内容
  * JavaScript：脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多
* 使用js
  * 内部is
    ```
      <script>
         // 在此编写 JavaScript 代码
      </script>
    ``` 
  * 外部js
    ```
    <script src="script.js" async></script>
    ```
* js调用策略  async和defer
  * 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async
  * 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于 HTML 中
### 变量
* 关于变量
  * 变量就是用来存放数值的容器，独特之处在于它存放的数值是可以改变的，但它并不是数值本身 
* 声明变量：`let 变量名;` or`var 变量名;`
* 初始化变量: 可以先声明再初始化赋值，也可以声明的时候就初始化
  ```
    let myName = "aaa";
    let myAge = 11;
  ``` 
* 更新变量：再次赋予不同的值
  ```
    let myAge = 20;
    myAge = 30;
  ```  
* 变量命名规则
  * 变量名不要以下划线开头
  * 变量名不要以数字开头
  *  "小写驼峰命名法"：小写整个命名的第一个字母然后大写剩下单词的首字符
  * 变量名直观，描述所包含的数据。不要只使用单一的字母/数字或者长句
  * 变量名大小写敏感——因此myage与myAge是不同的变量
  * 避免使用 JavaScript 的保留字给变量命名，如var,function,let、for等
* 变量类型
  * Number：整数、浮点数都可以，不需要引号引起来如`let myAge = 11;`
  * String：字符串，需要引号如`let myString = "how are you?";`
  * Boolean：true或false，用于测试条件是否成立，如`let iAmAlive = true;`
  * Array：数组，是单个对象，包含许多值，用“[]”括起来，用“,”分割
    ```
      let myNameArray = ['aa', 'bb','cc'];
      let myAgeArray = [10, 20, 30];
    ```
  * Object：对象，是现实生活中的模型的一种代码结构，如一个代表停车场的对象并，包含停车场的宽度和长度信息
    ```
      let dog = { name : 'Spot', breed : 'Dalmatian' };
    ```
* 动态类型
  * javaScript 是一种“动态类型语言”，不需要指定变量将包含什么数据类型（例如 number或string），例如声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串
### 数字与运算符
* 数字类型
  * 整数
  * 浮点数：有小数点或者小数位
* 算数运算符
  * `+`加
  * `-`减
  * `*`乘
  * `/`除
  * `%`取余
  * `**`幂
* 自增/自减运算符
  * `num++/num--`
  * 是为变量赋予一个新的更新值，不是对该值操作 
    ```
      let num = 4;
      num++;
    ```
* 赋值运算符
  * `=` 将右边的值赋给左边
  * `+=` 加法赋值`x = 3; x += 4`=`x = 3; x= x + 4;`
  * `-=` 减法赋值
  * `*=` 乘法赋值
  * `/=` 除法赋值
* 比较运算符
  * `===`  严格等于     测试左右值是否相同      `5===2+3` 
  * `！==` 严格不等于   测试左右值是否不相同     `5！==2+3` 
  * `<`    小于        测试左值是否小于右值     `5<2+3` 
  * `>`    大于        测试左值是否大于右值     `5>2+3` 
  * `<=`   小于等于    测试左值是否小于等于右值  `5<=2+3` 
  * `>=`   大于等于    测试左值是否大于等于右值  `5>=2+3` 
  
### 字符串和字符串方法
* 字符串基础知识
  * 字符串需要用引号括起来，单引双引都可以，但不可在一个字符串中混用
    ```
      let string1 = "how are you";               对
      let string2 = 'nice to meat you';          对
      let string3 = "I'm fine";                  对
      let string4 = 'Tv show "Dark" is good';    对
      let string5 = 'I'm fine';                  错
      let string6 = 'hello";                     错
    ```
* 连接字符串
  * “+”操作符连接
    ```
      let one = "hello";
      let two = ",";
      let three = "how are you";
      let add = one + two + three;       add的值会是：hello，how are you
      let response = one + two + "I am fine-" + three    hello,I am fine-how are you
    ``` 
  * 数字与字符串
     * ```
      let date1 = 'front' + 242;    
      let date2 = '11' +'22';        date1和date2的类型都是string
       ```
     * number()方法，将传递给它的任何类型值都转化为数字
      ```
        let myString = '123';
        let myNum = Number(myString);
      ```
    * toString()方法，将传递给它的任何类型值都转化为字符串
      ```
      let myString = '123';
      let myNum = Number(myString);
      ```
* 字符串方法
  * 获取字符串长度：length()
    ```
      let string = 'JavaScript';
      string.length;
    ``` 
  * 检索特定字符串字符：变量名末尾带上"[]",方括号内包含要返回的字符的编号
    ```
      检索第1个字母：          检索最后一个字母：
      string[0];              string[string.length-1];
    ``` 
  * 在字符串中查找子字符串并提取它
    * indexOf()：找出一个较小的字符串是否存在于一个较大的字符串
      ```
        string.indexOf('ava');     结果会是1，“ava”在“JavaScript”内从第3个字符开始，开始位置是2
        string.indexOf('avava');   结果会是-1，主字符串中不存在这个
      ``` 
    * slice()：知道字符串中子字符串开始和结束的位置，用slice()提取它
      ```
        string.slice(0, 3);        返回“Jav”，提取从第一个位置开始，直到但不包括最后一个位置
        string.slice(4);           返回“script”，没有包含第二个参数，返回的子字符串将是所有剩余字符
      ```
  * 转换大小写：toLowerase()/toUpperCase()
    ```
      let radData = 'How Are You';
      radData.toLowerCase();       返回“how are you”
      radData.toLowerCase();       返回“HOW ARE YOU”
    ``` 
### 数组
* 数组基础知识
  * 数组是一个包含了多个值的对象
  * 创建数组
    ```
       let food = ['fish', 'milk', 'noodles'];
       let sequence = [1, 1, 2, 3, 5, 8];
       let random = ['tree', 795, [0, 1, 2]];   多维数组
    ```
  * 访问和修改数组：与检索特定字符串字符的方法相同，变量名末尾带上"[]",方括号内包含要返回的数组值的编号
    ```
      food[0];            fish
      food[0] = 'egg';    fish变成了egg
      random[2][2];       2
    ```
  * 获取数组长度：length()
    ```
      food.length;       3
    ```
  * 添加/删除数组项
    * 在数组末尾操作：push()/pop()
      ```
         let food = ['fish', 'milk', 'noodles'];
         food.push('apple', 'egg');         food = ['fish', 'milk', 'noodles', 'apple', 'egg'];

         let list = [11, 22, 33, 44, 55, 66];
         let newLength = list.push(77,88);     list = [11, 22, 33, 44, 55, 66, 77, 88];
         newLength;                            list.length: 8;
        删除末尾元素与添加同理
    * 在数组开头操作：unshift()/shift()
      ```
         let food = ['fish', 'milk', 'noodles'];
         food.unshift('apple', 'egg');    food = ['apple', 'egg'， 'fish', 'milk', 'noodles'];

         let list = [11, 22, 33, 44, 55, 66];
         let removeItem = list.shift();     
         list;                         list = [22, 33, 44, 55, 66];
         removeItem;                   removeItem: 11;
      ```  
## JS基础要件
### 概述了解
### 代码中决策--条件
### 代码循环
### 函数
### 函数回传值
### 事件介绍
## JS对象
### 对象基础概念
### 对象原型
###
###
### 使用JSON
### 对象构建
## 异步JS
###
###
###
###
###
## 客户端网页API
### 客户端网页API
### 网页API介绍
### 操纵文档
### 从服务器获取数据
### 第三方API
### 画图
### 视频与音频API
### 客户端存储