# JS 基础
## JS 基础了解
### 什么是 JavaScript
* 关于 HTML、CSS、JS
  * HTML：标记语言，用来结构化我们的网页内容并赋予内容含义，例如定义段落、标题和数据表，或在页面中嵌入图片和视频
  * CSS：样式规则语言，可将样式应用于 HTML 内容，例如设置背景颜色和字体，在多个列中布局内容
  * JavaScript：脚本语言，可以用来创建动态更新的内容，控制多媒体，制作图像动画，还有很多
* 使用 js
  * 内部 is
    ```
      <script>
         // 在此编写 JavaScript 代码
      </script>
    ```
  * 外部 js
    ```
    <script src="script.js" async></script>
    ```
* js 调用策略 async 和 defer
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
  * "小写驼峰命名法"：小写整个命名的第一个字母然后大写剩下单词的首字符
  * 变量名直观，描述所包含的数据。不要只使用单一的字母/数字或者长句
  * 变量名大小写敏感——因此 myage 与 myAge 是不同的变量
  * 避免使用 JavaScript 的保留字给变量命名，如 var,function,let、for 等
* 变量类型
  * Number：整数、浮点数都可以，不需要引号引起来如`let myAge = 11;`
  * String：字符串，需要引号如`let myString = "how are you?";`
  * Boolean：true 或 false，用于测试条件是否成立，如`let iAmAlive = true;`
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
  * javaScript 是一种“动态类型语言”，不需要指定变量将包含什么数据类型（例如 number 或 string），例如声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串
### 数字与运算符
* 数字类型
  * 整数
  * 浮点数：有小数点或者小数位
* 算数运算符
  * `+`加
  * `*`减
  * `*`乘
  * `/`除
  * `%`取余
  * `**`幂
* 自增/自减运算符
  * `num++/num**`
  * 是为变量赋予一个新的更新值，不是对该值操作
    ```
      let num = 4;
      num++;
    ```
* 赋值运算符
  * `=` 将右边的值赋给左边
  * `+=` 加法赋值`x = 3; x += 4`=`x = 3; x= x + 4;`
  * `*=` 减法赋值
  * `*=` 乘法赋值
  * `/=` 除法赋值
* 比较运算符
  * `===` 严格等于 测试左右值是否相同 `5===2+3`
  * `！==` 严格不等于 测试左右值是否不相同 `5！==2+3`
  * `<` 小于 测试左值是否小于右值 `5<2+3`
  * `>` 大于 测试左值是否大于右值 `5>2+3`
  * `<=` 小于等于 测试左值是否小于等于右值 `5<=2+3`
  * `>=` 大于等于 测试左值是否大于等于右值 `5>=2+3`

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
      let response = one + two + "I am fine*" + three    hello,I am fine*how are you
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
      string[0];              string[string.length*1];
    ```
  * 在字符串中查找子字符串并提取它
    * indexOf()：找出一个较小的字符串是否存在于一个较大的字符串
      ```
        string.indexOf('ava');     结果会是1，“ava”在“JavaScript”内从第3个字符开始，开始位置是2
        string.indexOf('avava');   结果会是*1，主字符串中不存在这个
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
      ```
    * 在数组开头操作：unshift()/shift()
      ```
         let food = ['fish', 'milk', 'noodles'];
         food.unshift('apple', 'egg');    food = ['apple', 'egg'， 'fish', 'milk', 'noodles'];

         let list = [11, 22, 33, 44, 55, 66];
         let removeItem = list.shift();
         list;                         list = [22, 33, 44, 55, 66];
         removeItem;                   removeItem: 11;
      ```
## JS 基础要件
### 条件语句
* if...else
  * 基本语法
    ```
      if (condition) {
        code to run if condition is true
      } else {
        run some other code instead
      }
    ```
  * 当需要两个以上的选择时，可以再加 `else...if`
  * if...else 语句可以在另一个 if...else 语句中嵌套使用
  * 比较运算符： 判断条件语句中的条件
    * ``===`/`!==`: 判断一个值是否严格等于/不等于另一个。
    * `<`/`>`: 判断一个值是否小于/大于另一个。
    * `<=`/`>=`: 判断一个值是否小于等于/大于等于另一个。
  * 逻辑运算符：`&&`/`||`/`!`
   * `&&`：“与”，当两个或更多表达式的每一个都返回true时，整个表达式才会返回true
   * `||`：当两个或更多表达式当中的任何一个返回 true 则整个表达式将会返回 true
   * `!`：对一个布尔值取反，非true返回false，非false返回true
* switch
  ```
   switch (expression) {
     case choice1:
       run this code
       break;
   
     case choice2:
       run this code instead
       break;
   
     // include as many cases as you like
   
     default:
       actually, just run this code
   }
     ```
  * 关键字switch, 后跟一组（），（）写表达式或值
  * 关键字case, 后跟一个选项的表达式/值，后面跟一个冒号
  * 如果选择与表达式匹配，则运行一些代码。
  * 一个break语句，分号结尾。如果先前的选择与表达式/值匹配，浏览器在此停止执行代码块，执行switch语句后的代码
  * 可以添加任意的case选项
  * 关键字default, 后跟一个选项的表达式/值，如果之前没有选项匹配，则运行default选项
  * default部分不是必须的，如果表达式不可能存在未知值，则可以省略它
* 三元运算符
  * `( condition ) ? run code1 : run code2 instead`条件为true时运行code1，为false时运行code2
### 代码循环 
* 循环需要的条件
  * 一个开始条件：被初始化为一个特定的值,是循环的起点
  * 一个结束条件：循环停止的标准,通常计数器达到一定值
  * 一个迭代器：通常在每个连续循环上递增少量的计数器，直到达到退出条件
* for循环
  ```
    for( var i = 1;i < 10;i++) {
      console.log("你好呀！");
    }
  ```  
  * 主要用于把某些代码循环若干次，通常针对循环次数确定的循环
* while循环
  ```
    var i = 0;
    while (i < 100) {
      if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
      } else {
      info += cats[i] + ', ';
      }

      i++;
    }
  ```
  * 当条件满足时，进入循环；进入循环后，当条件不满足时，退出循环
  * 循环体中，一定要修改循环变量的值，否则会进入死循环（比如上面的i++/i--）
  * 循环变量的初始化一定放在while之前
  * while之后有一个（），表示要判断的条件，里面是一个条件表达式
  * 循环体可以使用{}，也可以不使用{}，如果不使用，循环体就只有一条语句  
* do...while
  ```
    var i = 0;
    do {
      if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
      } else {
      info += cats[i] + ', ';
      }

      i++;
    } while (i < cats.length);
  ```
  * 先运行一次，再检查条件表达式的值，若不满足则退出循环，do()语句至少执行一次
  * 循环变量初始化要放在do之前
  * 循环体中，一定要修改循环变量的值，否则会进入死循环
  * 循环体要使用{}，形成语句块
* 使用break退出循环
  * break语句可以在所有迭代完成之前退出循环，执行循环语句后的代码
* 使用continue跳过循环
  * continue语句是跳过当前循环，执行下一个循环
    ```
      var num = input.value;
      for (var i = 1; i <= num; i++) {
        var sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
        continue;
        }
        para.textContent += i + ' ';
      }
    ```
### 函数
* 浏览器内置函数
  ```
    function random(number) {
      return Math.floor(Math.random()*number);
    }
  ```
* 自定义函数
  * 自定义名称后跟了“()”
  ```
    function myFunction() {
      alert('hello');
    }

    myFunction()
  ```
* 调用函数
  * 将函数名包含在代码某个地方，后跟"()"，如上面的`myFunction()`调用了myFunction函数
* 匿名函数
  * 没有函数名，它不会自己做任何事情
  * 通常将匿名函数与事件处理程序一起使用，还可以将函数分配为变量的值
  * 匿名函数也称为函数表达式，但函数表达式与函数声明有一些区别；函数声明会进行声明提升（declaration hoisting），而函数表达式不会
  ```
    var myButton = document.querySelector('button');

    myButton.onclick = function() {
      alert('hello');
    }
  ```
  ```
    var myGreeting = function() {
      alert('hello');
    }
    myGreeting();
  ```
* 函数参数
  * 一些函数需要在调用它们时指定参数，参数值需要放在函数括号内
  ```
    var myText = 'I am a string';
    var newString = myText.replace('string', 'sausage');
    replace()函数就需要两个参数，两个参数用“,”分割
  ```
  * 有时参数不是必须的，如果没有，该功能一般会采用某种默认行为
  ```
    var myArray = ['I', 'love', 'chocolate', 'frogs'];
    var madeAString = myArray.join(' ');
    // returns 'I love chocolate frogs'
    var madeAString = myArray.join();
    // returns 'I,love,chocolate,frogs'
    第二个join()函数中没有指定参数-分隔符，默认使用逗号了
  ```
* 函数作用域和冲突
  * 所有函数的最外层被称为全局作用域，在全局作用域内定义的值可以在任意地方访问
  * 函数内定义的变量和值都在它自己的单独的范围内，只能在函数内部被访问，外部不可访问，但内部函数可以访问全局作用域的值
  ```
    var x = 1;
    function a() {
      var y = x+ 2;
      console.log(y);
    }
    a();           // 打印出3
    var z = y +3;  // y is not defined
  ```
  * 在函数内部，两个函数可以有相同的变量名
  ```
    function a() {
      var x = 1;
      x = x + 2;
    }
    function b() {
      var x = 2;
      x = x + 2;
    }
  ```
  * 外部函数与内部函数变量名相同时，内部函数会屏蔽外部函数变量
  ```
    function a() {
      var x = 2;
      function b() {
        var x = 4;
         console.log('inner' + x);     // inner4
      }
      b();
      console.log('outer' + x);       // outer2
    }
    a();
   
  ```
* 函数返回值
  * 函数默认返回值是undefined
  * 在函数体中使用return关键字，函数将会停止执行；如果指定一个值，会返回这个值
## JS 对象

### 对象基础概念

### 对象原型

###

###

### 使用 JSON

### 对象构建

## 异步 JS

###

###

###

###

###

## 客户端网页 API

### 客户端网页 API

### 网页 API 介绍

### 操纵文档

### 从服务器获取数据

### 第三方 API

### 画图

### 视频与音频 API

### 客户端存储
