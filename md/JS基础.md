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
  * 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于HTML中
* JS中区分大小写，使用的是Unicode字符集
* 语句后以“;”结尾
* 注释：`// 单行注释`，`/* 多行注释 */`
## 语法和数据类型
### 声明
* const：声明一个块作用域的只读常量
* let：声明一个块作用域的局部变量，可选初始化一个值
* var：声明一个变量，可选初始化一个值
### 变量
* 关于变量
  * 变量就是用来存放数值的容器，独特之处在于它存放的数值是可以改变的，但它并不是数值本身,变量的名字又叫标识符
* 声明变量：`let/var 变量名;`
* 用var/let语句声明的变量，未赋值前，值为undefined
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
* 变量的作用域
  * 在函数之外声明的变量，叫做全局变量，它可被当前文档中的任何其他代码所访问
  * 在函数内部声明的变量，叫做局部变量，它只能在当前函数的内部访问
* 全局变量
  * 全局变量是全局对象的属性，在网页中全局对象是window，可以用如 window. variable的语法来设置和访问全局变量，可以通过指定window或frame的名字，在当前window或frame访问另一个window或 rame 中声明的变量
* 变量提升
  * 可以先使用变量稍后再声明变量，这一概念称为变量提升；JavaScript变量感觉上是被“提升”或移到了函数或语句的最前面。但提升后的变量将返回undefined值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回undefined值
  * 由于存在变量提升，一个函数中所有的var语句都应尽可能放在接近函数顶部的地方
* 变量命名规则
  * 变量名不要以下划线开头—— 以下划线开头的被某些JavaScript设计为特殊的含义，因此可能让人迷惑
  * 变量名不要以数字开头
  * "小写驼峰命名法"：小写整个命名的第一个字母然后大写剩下单词的首字符
  * 变量名直观，描述所包含的数据。不要只使用单一的字母/数字或者长句
  * 变量名大小写敏感——因此 myage 与 myAge 是不同的变量
  * 避免使用 JavaScript 的保留字给变量命名，如 var,function,let、for 等
* 常量 (Constants)
  * 关键字const创建一个只读常量
  * 常量标识符的命名规则和变量相同
  * 常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值
  * 常量的作用域规则与 let 块级作用域变量相同。若省略const关键字，则该标识符将被视为变量
  * 在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量
### 数据结构和类型
* 数据类型
  * Boolean：布尔值，true 或 false，用于测试条件是否成立，如`let iAmAlive = true;`
  * null：一个表明null值得特殊关键字
  * undefined：与null一样的特殊关键字，表示未赋值时的属性
  * Number：整数、浮点数都可以，不需要引号引起来如`let myAge = 11;`
  * BigInt：任意精度的整数，可以安全存储和操作大整数，甚至超过数字的安全整数限制
  * Symbol：ES6中新加，一种实例是唯一且不可改变的数据类型
  * String：字符串，需要引号如`let myString = "how are you?";`
  * Array：数组，是单个对象，包含许多值，用“[]”括起来，用“,”分割
    ```
      let myNameArray = ['aa', 'bb','cc'];
      let myAgeArray = [10, 20, 30];
    ```
  * Object：对象，是现实生活中的模型的一种代码结构，如一个代表停车场的对象并，包含停车场的宽度和长度信息
    ```
      let dog = { name : 'Spot', breed : 'Dalmatian' };
    ```
* 数据类型的转换
  * javaScript 是一种“动态类型语言”，不需要指定变量将包含什么数据类型（例如 number 或 string），例如声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串
  * 数字转换为字符串: `+`
    ``` 
      x = "The answer is " + 42 // "The answer is 42"
      y = 42 + " is the answer" // "42 is the answer"
      
      "37" - 7 // 30 减号不会被把数字变成字符串，数学运算了
      "37" + 7 // "377"
    ```
  * 字符串转换为数字
    * parseInt()：只能返回整数，会丢失小数部分，最好总是带上进制 (radix) 参数，这个参数用于指定使用哪一种进制。
    * parseFloat()
    * 使用一元加法运算符
      ```
      "1.1" + "1.1" = "1.11.1"
      (+"1.1") + (+"1.1") = 2.2
* 字面量（Literals）
  * 字面量是由语法表达式定义的常量，一般除去表达式，给变量赋值时，等号右边都可以认为是字面量
  * 数组字面量 (Array literals)
    * 一个封闭在方括号对([])中的包含有零个或多个表达式的列表，其中每个表达式代表数组的一个元素。当使用数组字面值创建一个数组时，该数组将会以指定的值作为其元素进行初始化，而其长度被设定为元素的个数
    * 若在全局脚本里用字面值创建数组，JavaScript语言将会在每次对包含该数组字面值的表达式求值时解释该数组。另一方面，在函数中使用的数组，将在每次调用函数时都会被创建一次
    * 数组字面值同时也是数组对象
    * 数组字面值中的多余逗号：在同一行中连写两个逗号（,），数组中就会产生一个没有被指定的元素，其初始值是undefined;在数组尾部添加了一个逗号，将会被忽略；在头部添加一个逗号也会产生一个未赋值元素
      ```
        var arr1 = [1,2,,4]      arr1.length = 4
        var arr2 = [,1,2,3]      arr2.length = 4
        var arr3 = [1,2,3,]       arr3.length = 3
      ```
  * 布尔字面量 (Boolean literals)
    * 布尔类型有两种字面量：true和false。
    * 不要混淆作为布尔对象的真和假与布尔类型的原始值true和false。布尔对象是原始布尔数据类型的一个包装器
  * 数字字面量
    * 数字字面量包括多种基数的整数字面量和十进制的浮点数字面量
    * 语言标准要求数字字面量必须是无符号的，但像-123.4这样的代码片段还是没有问题的，会被解释为一元操作符-应用于数字字面量123.4
  * 整数字面量
    * 整数可以用十进制（基数为 10）、十六进制（基数为 16）、八进制（基数为 8）以及二进制（基数为 2）表示
    * 十进制整数字面量由一串数字序列组成，且没有前缀 0
    * 八进制的整数以 0（或 0O、0o）开头，只能包括数字 0-7，严格模式下，八进制整数字面量必须以 0o 或 0O 开头，而不能以 0 开头
    * 十六进制整数以 0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F
    * 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1
      ```
        0, 117 and -345 (十进制)
        015, 0001 and -0o77 (八进制)
        0x1123, 0x00111 and -0xF1A7 (十六进制)
        0b11, 0b0011 and -0b11 (二进制)
      ```
  * 浮点数字面量
    * 组成部分
      * 一个十进制整数，可以带正负号（即前缀“+”或“ - ”）
      * 小数点（“.”）
      * 小数部分（由一串十进制数表示）
      * 指数部分: 指数部分“e”或“E”开头，后面跟着一个整数，可以有正负号。浮点数字面量至少有一位数字，而且必须带小数点或者“e”（大写“E”也可）
  * 对象字面量 (Object literals)
    * 封闭在花括号对 ({}) 中的一个对象的零个或多个"属性名 - 值"对的（元素）列表
    * 不能在一条语句的开头就使用对象字面值，这将导致错误或产生超出预料的行为， 因为此时左花括号（{）会被认为是一个语句块的起始符
  * RegExp 字面值
    * 一个正则表达
      ```
        var re = /ab+c/;
      ```
  * 字符串字面量 (String literals)
    * 由双引号（"）对或单引号（'）括起来的零个或多个字符
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
## 流程控制与错误处理
### 语句块
* 以`{}`界定
* 语句块内用`;``分割语句
### 条件判断语句
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
### 异常处理语句
* 异常类型
  * JavaScript可以抛出任意对象，但不是所有对象能产生相同的结果。抛出数值或者字母串作为错误信息十分常见，但用下列异常类型来创建目标更为高效：
    * ECMAScript exceptions
    * DOMException and DOMError
* throw语句
  * 用throw语句抛出一个异常，用 try...catch 语句捕获处理它
  * 当抛出异常时，也要有一个含有值的表达式抛出`throw expression;`
* try...catch 语句
  * 有一个try代码块，0个或1个的catch代码块，catch 代码块中的语句会在try代码块中抛出异常时执行（try块有异常未成功，执行catch块；try块无异常，不执行catch块）。finally 代码块会紧跟在try和catch代码块之后执行
  * catch 块
    * 处理所有可能在try块中产生的异常
  * finally块
    * finally块包含了在try和catch块完成后，下面接着 try...catch 的语句之前执行的语句。finally块无论是否抛出异常都会执行。如果抛出了一个异常，就算没有异常处理，finally块里的语句也会执行
    * 如果finally块返回一个值，该值会是整个try-catch-finally流程的返回值，不管在try和catch块中语句返回了什么
* 嵌套 try...catch 语句
  * 可以嵌套一个或多个try ... catch语句。如果一个内部try ... catch语句没有catch块，它需要有一个finally块，并且封闭的try ... catch语句的catch块被检查匹配
* 使用Error对象
  * 根据错误类型，也可以用'name'和'message'获取更精炼的信息：'name'提供了常规的错误类（如'DOMException'或'Error'），而'message'通常提供了一条从错误对象转换成字符串的简明信息
## 循环与迭代
### 代码循环 
* 循环需要的条件
  * 一个开始条件：被初始化为一个特定的值,是循环的起点
  * 一个结束条件：循环停止的标准,通常计数器达到一定值
  * 一个迭代器：通常在每个连续循环上递增少量的计数器，直到达到退出条件
* 循环有很多种类，但本质上都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其它的循环用起来更简单
### 循环语句
* for
  * 会一直重复执行，直到指定的循环条件为false
  * 主要用于把某些代码循环若干次，通常针对循环次数确定的循环
  ```
    for ([initialExpression]; [condition]; [incrementExpression])
      statement
  ```
  ```
    for( var i = 1;i < 10;i++) {
      console.log("你好呀！");
    }
  ```  
* for...in
  * for...in语句可以把一个对象所有可枚举的属性依次循环出来
  ```
    for (variable in object) {
      statements
    }
  ```
* for...of
  * for...of语句在可迭代对象（包括Array、Map、Set、arguments 等）上创建了一个循环，对值的每一个独特属性调用一次迭代
  ```
    for (variable of object) {
      statement
    }
  ```
  ```
    let arr = [3, 5, 7];
    arr.foo = "hello";

    for (let i in arr) {                       // for...in 循环遍历的结果是数组元素的下标
       console.log(i);                         // 输出 "0", "1", "2", "foo"
    }                                    

    for (let i of arr) {                       // for...of 遍历的结果是元素的值
       console.log(i);                         // 输出 "3", "5", "7"
    }                                          // for...of 的输出没有出现 "hello"
  ```
* while
  * 只要指定的条件求值为true就会一直执行它的语句块
  ```
    while (condition)
      statement
  ```
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
  * 循环体中，一定要修改循环变量的值，保证循环的条件结果最终会变成假，否则会进入死循环（比如上面的i++/i--）
  * 循环变量的初始化一定放在while之前
  * while之后有一个（），表示要判断的条件，里面是一个条件表达式
  * 循环体可以使用{}，也可以不使用{}，如果不使用，循环体就只有一条语句  
* do...while
  * 一直重复直到指定的条件求值得到假值false
  ```
    do
      statement
    while(condition);
  ```
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
* label
  * label 语句
    * 一个label提供了一个可以在程序其他位置引用它的标识符。例如可以用label标识一个循环，然后使用break或者continue来指出程序是否该停止循环还是继续循环
  ```
    label :
      statement
  ```
    * label的值可以是任何的非保留字的JavaScript标识符，statement可以是任意想要标识的语句或语句块
  ```
    未添加 Label：

      var num = 0;
      for (var i = 0 ; i < 10 ; i++) {     // i 循环
        for (var j = 0 ; j < 10 ; j++) {   // j 循环
          if( i == 5 && j == 5 ) {
             break;                        // i = 5，j = 5 时，会跳出 j 循环
          }                                // 但i循环会继续执行，等于跳出之后又继续执行更多次j循环
        num++;
        }
      } 
      alert(num);                          // 输出 95
    添加 Label 后：

      var num = 0;
      outPoint:
      for (var i = 0 ; i < 10 ; i++){
        for (var j = 0 ; j < 10 ; j++){
          if( i == 5 && j == 5 ){
            break outPoint;               // 在 i = 5，j = 5 时，跳出所有循环，
                                          // 返回到整个outPoint下方，继续执行
          }
          num++;
        }
      }
      alert(num);                         // 输出 55
    使用 continue 语句，可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：
    
      var num = 0;
      outPoint:
      for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 10; j++) {
          if(i == 5 && j == 5) {
            continue outPoint;
          }
          num++;
        }
      }
      alert(num);                      // 95
    从 alert(num) 的值可以看出，continue outPoint; 语句的作用是跳出当前循环，并跳转到outPoint下的for循环继续执行
  ```
* break
  * 使用break语句来终止循环、switch，或者是链接到label语句
  * 当使用不带label的break时， 它会立即终止当前所在的 while，do-while，for，或switch并把控制权交回这些结构后面的语句
  * 当使用带label的break时，它会终止指定的带标记（label）的语句
  ```
    break [label];
    被[]包裹的内容是可省略的,若省略，则终止当前所在的循环或switch；若不省略，则终止指定的 label 语句
  ```
  终止一个循环：循环数组里的元素，直到找到一个等于 theValue 的值
    
    for (i = 0; i < a.length; i++) {
      if (a[i] == theValue) {
        break;
      }
    }

  终止一个 label
    var x = 0;
    var z = 0
    labelCancelLoops: while (true) {
      console.log("外部循环: " + x);
      x += 1;
      z = 1;
      while (true) {
        console.log("内部循环: " + z);
        z += 1;
        if (z === 10 && x === 10) {
          break labelCancelLoops;
        } else if (z === 10) {
          break;
        }
      }
    }
  ```
* continue
  * 用来跳过当前循环，执行下一个循环
  * 当使用不带label的continue时，终止当前 while，do-while，或者 for 语句到结尾的这次的循环并且继续执行下一次循环
  * 当使用带label的continue时，它会应用被 label 标识的循环语句
## 函数
### 定义函数
* 定义函数有三种方式，函数声明，函数表达式，构造函数
  * 函数声明
    一个函数定义（也称为函数声明，或函数语句）包含
    * 函数的名称
    * 函数参数列表，包围在括号中并由逗号分隔
    * 定义函数的 JavaScript 语句，用大括号{}括起来。
    ```
      function square(number) {             函数：square
        return number * number;             参数：number
      }                                     语句：参数自乘后返回
    ```
  * 函数表达式
    函数被当做值来使用的时候，就是一个函数表达式
    ```
      const square = function(number) { return number * number; };
      
      const factorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};
      函数表达式需要在函数体末尾加“;”，表示赋值语句结束
    ```
  * Function()构造函数
    ```
      var myFunction = new Function("a", "b", "return a * b") ;
      var x = myFunction(4, 3);                
    ```
  * 函数声明与函数表达式的不同
    * 函数声明必须始终带有一个标识符（Identifier），也就是函数名，而函数表达式则可以省略
    * 函数声明可以被提升，但是函数表达式不能被提升。所以在任何位置定义函数声明，都可以被使用；如果是函数表达式，只能在函数表达式声明之后调用它，如果在之前调用会报错
    * 函数声明不是一个完整的语句，所以不能出现在if-else等语句块中，这时应使用函数表达式
### 调用函数
* 通过`函数名()`调用，匿名函数可在函数体尾部通过`()`调用
  ```
  square(5);
  通过提供参数 5 来调用函数。函数执行完它的语句会返回值 25
  ```
* 函数可以被递归，即函数可以调用其本身
  ```
    function factorial(n){
      if ((n == 0) || (n == 1))
        return 1;
      else
        return (n * factorial(n - 1));
      }

      var a, b, c, d, e;

      a = factorial(1);   // 1 赋值给 a
      b = factorial(2);   // 2 赋值给 b
      c = factorial(3);   // 6 赋值给 c
      d = factorial(4);   // 24 赋值给 d
      e = factorial(5);   // 120 赋值给 e
### 函数作用域
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
### 闭包
* 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的
### 使用 arguments 对象
* 函数的实际参数会被保存在一个类似数组的arguments对象中。在函数内，你可以用`arguments[i]`找出传入的参数，i是参数的序数编号，从0开始
* 使用arguments对象可以处理比声明的更多的参数来调用函数。在事先不知道会需要将多少参数传递给函数时十分有用，可以用arguments.length来获得实际传递给函数的参数的数量，然后用arguments对象来取得每个参数
* arguments变量只是 “类数组对象”，并不是一个真正的数组。称其为类数组对象是说它有一个索引编号和length属性。尽管如此，它并不拥有全部的 Array对象的操作方法
### 函数参数
* ES6新增参数：默认参数，剩余参数
  * 默认参数：JS中函数参数的默认值是undefined。然而，在某些情况下设置不同的默认值是有用的，这时默认参数可以提供帮助
    ```
      function multiply(a, b = 1) {
        return a*b;
      }
    ```
  * 剩余参数：允许将不确定数量的参数表示为数组
    ```
      function multiply(multiplier, ...theArgs) {
        return theArgs.map(x => multiplier * x);
      }

      var arr = multiply(2, 1, 2, 3);
      console.log(arr);                // [2, 4, 6]
### 箭头函数
* es6 新增,使用胖箭头（=>）语法定义函数表达式的能力，很大程度上，箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的。任何可以使用函数表达式的地方，都可以使用箭头函数
  ```
    普通函数                               箭头函数
    let sum = function(a, b) {            let sun = (a, b)=>{
      return a + b;                         return a + b;
    }                                     }



    let y = function (x) {                let y = x => x * x ;
      return x * x;              
    }
  ```
  * 如果只有一个参数:（）可以省
  * 如果只有一个return: {}和return都可以省
* this：箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定
  ```
    function Person() {                       构造函数 Person() 将`this`定义为自身
      this.age = 0;
      setInterval(function growUp() {         在非严格模式下，growUp() 函数将`this`定义为“全局对象”，与Person定义的不同
      this.age++;
      }, 1000);
    }
    var p = new Person();
    
    在 ECMAScript 3/5 里，通过把this的值赋值给一个变量可以修复这个问题。

    function Person() {
      var self = this; 
      self.age = 0;
    
      setInterval(function growUp() {
        self.age++;
      }, 1000);
    }

    箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者Person

    function Person(){
      this.age = 0;
    
      setInterval(() => {
        this.age++;                           这里的`this`正确地指向 person 对象
      }, 1000);
    }
    
    var p = new Person();
  ```
### 预定义函数：javascript引擎中可供随时调用的内建函数
* parseInt()：将收到的任何输入值转换成整数类型输出，如果转换失败，返回NaN
* parseFloat()：功能基本与parseInt()相同，只不过他只支持十进制，并且支持小数和指数形式。
* isNaN()：确定某个输入值是否是一个可以参与算术运算的数字
* isFinite()：用来检查输入是否一个既非infinity也非NaN的数字。
* encodeURI()：返回一个可用的URL
* decodeURI()：encodeURI()反转意函数
* encodeURIComponent()：传递的仅仅是URL的一部分
* decodeURIComponent()：对先前经过encodeURIComponent函数或者其他类似方法编码过的字符串进行解码。
## JS 对象
### 对象基础
* 关于对象
  * 对象是一个包含相关数据和方法的集合，通常由一些变量和函数组成，也就是对象里面的属性和方法
  ```
    创建person对象：
      var person = {
        name : ['Bob', 'Smith'],
        age : 32,
        gender : 'male',
        interests : ['music', 'skiing'],
        greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
      }
  ```
* 访问对象的属性和方法
  * 点表示法 `person.age`,`person.interests[1]`,`person.greeting()`
  * 括号表示法 `person['age']`,`person['name']['first']`
  * 点表示法只能接受字面量（觉得是常量）的成员的名字，不接受变量作为名字
  * 括号表示法不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字
* 设置对象成员:声明要设置的成员，还可以创建新成员
  ```
    person.age = 22;
    person['name']['first'] = 'Haha'
  ```
  ```
    person.hair = 'short hair'
    person.farewell = function() { alert("Bye everybody!") }
  ```
* 关键字"this"："this"指向当前代码运行时的对象
  ```
    var person1 = {
      name : 'Chris',
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    }

    var person2 = {
      name : 'Brian',
      greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
      }
    }
    person1.greeting() 会输出："Hi! I'm Chris."
    person2.greeting() 会输出："Hi! I'm Brain."
  ```
### 对象原型
* 一些概念
  * 原型链(prototype chain)：JavaScrip是一种被称为基于原型的语言 (prototype-based language)，对象有原型对象，从原型继承方法和属性，原型对象也有原型，也从中继承方法属性，这样一层套一层的关系就是原型链，它解释了为何一个对象会拥有定义在其他对象中的属性和方法
* 理解原型对象
  * 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象。
  * 在默认情况下，所有原型对象会自动获得一个constructor属性，这个属性指向prototype属性所在函数的指针。
  * 当用构造函数创建一个新实例后，该实例的内部包含一个属性（__proto __），指向该构造函数的原型对象
### 面向对象编程-Object Oriented Programming
* 解释：面向对象编程是关于将系统建模为对象的集合，其中每个对象代表系统的某个特定方面。对象同时包含函数（或方法）和数据。对象为想要使用它的其他代码提供公共接口，但维护自己的私有内部状态;系统的其他部分不必关心对象内部发生了什么
* JS面向对象三大特性：继承、封装、多态
* 类和实例对象
  * 当根据OOP中的对象对问题进行建模时，会创建抽象的定义，表示希望在系统中拥有的对象类型。
  如示例，对一所学校进行建模，希望有代表教授的对象，每个教授都有一些共同点：都有一个名字和一个教授的科目；每个教授都可以做某些事情，如：都可以为一篇论文评分，都向学生介绍自己
  所以教授可以是系统中的一个类，类的定义列出了每个教授所拥有的数据和方法：
    ```
      class Professor                     定义了一个类Professor
        properties                           两个数据属性
          name                                  姓名
          teaches                               教什么
        methods                              两种方法
          grade(paper)                          评分
          introduceSelf()                       自我介绍
    ```
  * 类不执行任何操作，它是一种用于创建该类型的具体对象的模板。例子中创建的每个具体教授都被称为教授类的一个实例，创建实例的过程由特殊函数`构造函数`执行，将要在新实例中初始化的任何内部状态的值传递给构造函数。通常，构造函数作为类定义的一部分写出来，且通常与类本身具有相同的名称：
    ```
      class Professor
        properties
          name
          teaches
        constructor                        构造函数有两个属性name、teachers，可以在创建新的具体
          Professor(name, teaches)         Professor时初始化其name和teachers
        methods
          grade(paper)
          introduceSelf()
    ```
  * 有构造函数之后，可以创建Professor并且初始化其name和teachers属性
    ```
      walsh = new Professor('Walsh', 'Psychology')   创建两个对象，都是Professor的实例
      lillian = new Professor('Lillian', 'Poetry')

      walsh.teaches                   // 'Psychology'
      walsh.introduceSelf()           // 'My name is Professor Walsh and I will be your 
                                          Psychology professor.'
      lillian.teaches  
      lillian.introduceSelf() 
    ```
* 继承
  * 一个对象可以使用另一个对象的属性和方法（子类可使用父类的属性和方法）
  示例：有一个新类`学生`，学生不能给论文打分，不教特定的科目，属于特定的年份；但学生也有一个名字，也自我介绍，这样可以通过定义一个新类Person来对此进行建模，Person中定义了人的常见属性：姓名、自我介绍，Professor Student都可以从Person派生，并添加它们的额外属性：：
    ```
      class Person               Person是Professor和Student的超类（或父类）
        properties               Professor和Student是Person的子类
          name
        constructor
          Person(name)
        methods
          introduceSelf()

      class Professor : extends Person
        properties
          teaches
        constructor
          Professor(name, teaches)
        methods
          grade(paper)
          introduceSelf()

      class Student : extends Person
        properties
          year
        constructor
          Student(name, year)
        methods
          introduceSelf()
    ```
* 多态
  * 同一操作对不同对象有不同结果，把“想做什么”跟“谁去做”分开，有重写跟重载
  * 重写（覆盖）：子类继承父类中的方法后有一定的修改，并不是原封不动继承，这就需要采用方法的重写
  * 重载：函数或者方法有相同的名称，但是参数列表不相同的情形，这样的同名不同参数的函数或者方法之间，互相称之为重载函数或者方法
  示例： 三个类都有introduceSelf()，但实现方法不同，就是重写
    ```
    对于教授和学生：
      walsh = new Professor('Walsh', 'Psychology')
      walsh.introduceSelf()  // 'My name is Professor Walsh and I will be your Psychology professor.'
      summers = new Student('Summers', 1)
      summers.introduceSelf() // 'My name is Summers and I'm in the first year.'
    对于不是教授和学生的人，默认实现introduceSelf()
      pratt = new Person('Pratt')
      pratt.introduceSelf() // 'My name is Pratt.'
    ```
* 封装
  * 把事物（属性和方法）封装在类（对象）中，隐藏事物的属性和方法的实现细节，仅对外公开接口。对象的内部状态保持私有，它只能通过对象自己的方法访问，而不能从其他对象访问，并且通常在它的公共接口和它的私有内部状态之间做出明确的划分，这称为封装
  示例：学生在第二年或以上时可以学习射箭，可以通过公开学生的属性来实现这一点，其他代码可以检查它以决定学生是否可以参加课程
  ```
    class Student : extends Person
      properties
         year
      constructor
        Student(name, year)
      methods
        introduceSelf()
        canStudyArchery() { return this.year > 1 }
    if (student.canStudyArchery()) {
      // allow the student into the class
    }
  ```
  * 私有属性：将某些属性标记为`private`，对象外部的代码不可访问它们
  ```
    class Student : extends Person
      properties
        private year
      constructor
        Student(name, year)
      methods
        introduceSelf()
        canStudyArchery() { return this.year > 1 }

    student = new Student('Weber', 1)
    student.year                 // error: 'year' is a private property of Student
### JS中的类-class
* 定义类：类声明和类表达式
  ```
    class Person {};     类声明
    class Animal = class {};    类表达式
    类表达式与函数表达式类似，在求值前也不能引用
  ```
* 构造函数：使用构造函数关键字`constructor`定义，它将：
  * 创建一个新对象
  * 将`this`绑定到新对象，因此可以在构造函数代码中引用this
  * 在构造函数中运行代码
  * 返回新对象
  ```
    class Person {                  一个Person类，带有属性name
      name;                       
  
      constructor(name) {           一个构造函数，带有一个name参数，用于初始化新对象的name属性
        this.name = name;
      }
  
      introduceSelf() {            一个可以使用this引用对象属性的introductionSelf()方法
        console.log(`Hi! I'm ${this.name}`);
      }
    }
  ```
* 省略构造函数
  * 若不需要做任何特殊的初始化，可以省略构造函数，生成一个默认的构造函数
  ```
    class Animal {
  
      sleep() {
        console.log('zzzzzzz');
      }
  
    }
  
    const spot = new Animal();
    spot.sleep(); // 'zzzzzzz'
  ```
* 继承
  ```
    class Person{}                        
    class Professor extends Person {       使用extends关键字表示Professor继承自Person
      teaches;                             Professor增加了一个新属性teachers，声明它
      constructor(name, teaches) {         定义一个构造函数，将name、teachers作为参数
        super(name);                       用super调用父类构造函数并传递参数
        this.teaches = teaches;            父类构造函数负责设置name之后构造函数设置属性teachers
      }          
  
      introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
      }
  
      grade(paper) {                      添加了一个新方法grade()来给论文评分
        const grade = Math.floor(Math.random() * (5 - 1) + 1);   随机评分啊
        console.log(grade);
      }
    }
    ***如果子类有任何自己的初始化要做，就必须先使用super()调用超类构造函数，传递超类构造函数期望的任何参数

    声明之后可以创建并使用类Professor
    const walsh = new Professor('Walsh', 'Psychology');
    walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'
    walsh.grade('my paper'); // 一个随机评分
  ```
* 封装 
  ```
    class Student extends Person {
      #year;                                            #year是私有数据属性
      constructor(name, year) {                         
        super(name);
        this.#year = year;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1;
      }
    }
  
    const summers = new Student('Summers', 2);
    summers.introduceSelf();                          Hi! I'm Summers, and I'm in year 2.
    summers.canStudyArchery();                        true
    summers.#year;                                    SyntaxError
  私有数据属性必须在类声明中声明，并且其名称以 开头。#
  ```
  * 私有方法以及私有数据属性：名字以`#`开头，只能被对象自己的方法调用
  ```
    class Example {
      somePublicMethod() {
      this.#somePrivateMethod();
      }
  
      #somePrivateMethod() {
        console.log('You called me?');
      }
    }
    
    const myExample = new Example();
    myExample.somePublicMethod(); // 'You called me?'
    myExample.#somePrivateMethod(); // SyntaxError
  ```
### 使用 JSON
* 什么是JSON
  * JSON是一种按照JavaScript对象语法的`数据格式`。它基于JavaScript语法，但独立于JavaScript。类似于XML，但比XML更小、更快、更易解析
  * JSON可以作为一个对象或者字符串存在，前者用于解读JSON中的数据，后者用于通过网络传输JSON 数据。 
  * 一个JSON对象可以被储存在它自己的文件中，`.json`文本文件
* JSON语法
  * JSON 语法是JavaScript对象表示法语法的子集
    * 数据在名称/值对中
    * 数据由逗号分隔
    * 花括号保存对象
    * 方括号保存数组
  * JSON语法支持三种类型的值
    * 简单值：字符串（必须使用双引号）、数值、布尔值、null，与js一样不接受undefined 
    * 对象
      * 没有变量声明
      * 对象属性名必须始终带双引号
      * 结尾不需要分号
      ```
        {
          "name": "haha",
          "age": 11
        }
      ```
    * 数组
     ```
     ["a","b","c"]
     ```
  * JSON没有变量、函数或实例对象的概念
* 解析与序列化
  * JSON对象的两个方法
    * stringify()：将js序列化为JSON字符串
      ```
        let book = { 
          title: "Professional JavaScript", 
          authors: [ 
                  "Nicholas C. Zakas", 
                  "Matt Frisbie" 
                  ], 
          edition: 4, 
          year: 2017 
        }; 
        let jsonText = JSON.stringify(book); 
        // 用JSON.stringify()把一个 JavaScript 对象序列化为一个 JSON 字符串，保存在变量jsonText中,默认情况下，JSON.stringify()会输出不包含空格或缩进的 JSON 字符串
        // jsonText值：{"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie"], "edition":4,"year":2017}
        // 在序列化JavaScript对象时，所有函数和原型成员都会有意地在结果中省略。值为 undefined的任何属性也会被跳过,最终得到的就是所有实例属性均为有效JSON数据类型的表示
      ```
    * parse()：将JSON解析为js值
      ```
        let bookCopy = JSON.parse(jsonText);     
        // json字符串可以直接传给JSON.parse()，得到相应的JavaScript值，如果给JSON.parse()传入的JSON字符串无效，会抛出错误
      ``` 
  * 序列化选项
    * JSON.Stringify()方法除了要序列化的对象，还可以接收两个参数，用于指定其他序列化JavaScript对象的方式：
      * 过滤器：可以是数组或函数
        * 如第二个参数是数组：JSON.stringify()返回的结果只会包含该数组中列出的对象属性
          ```
            let book = { 
              title: "Professional JavaScript", 
              authors: [ 
                       "Nicholas C. Zakas", 
                       "Matt Frisbie" 
                       ], 
              edition: 4, 
              year: 2017 
            }; 
            let jsonText = JSON.stringify(book, ["title", "edition"]); 
            // jsonText值: {"title":"Professional JavaScript","edition":4} 
          ```
        * 如第二个参数是一个函数：提供的函数接收两个参数--属性名（key）和属性值（value）。可以根据这个key决定要对相应属性执行什么操作。这个key始终是字符串，只是在值不属于某个键/值对时会是空字符串。为了改变对象的序列化，返回的值就是相应 key 应该包含的结果。返回undefined会导致属性被忽略
          ``` 
            let book = { 
              title: "Professional JavaScript", 
              authors: [ 
                       "Nicholas C. Zakas", 
                       "Matt Frisbie" 
                       ], 
              edition: 4, 
              year: 2017 
            }; 
            let jsonText = JSON.stringify(book, (key, value) => { 
              switch(key) { 
                case "authors": 
                  return value.join(",") 
                case "year": 
                 return 5000; 
                case "edition": 
                  return undefined; 
               default: 
                 return value; 
              } 
            });
            // jsonText值：{"title":"Professional JavaScript","authors":"Nicholas C. Zakas,Matt Frisbie","year":5000} 
          // 函数过滤器会应用到要序列化的对象所包含的所有对象，因此如果数组中包含多个具有这些属性的对象，则序列化之后每个对象都只会剩下上面这些属性
        ```
    * 字符串缩进：用于缩进结果 JSON 字符串的选项
      * JSON.stringify()方法的第三个参数控制缩进和空格。在这个参数是数值时，表示每一级缩进的空格数
        如，每级缩进4个空格：
        ```
          let book = { 
            title: "Professional JavaScript", 
            authors: [ 
                     "Nicholas C. Zakas", 
                     "Matt Frisbie" 
                    ], 
            edition: 4, 
            year: 2017 
          }; 
          let jsonText = JSON.stringify(book, null, 4); 
          // jsonText值:
          { 
               "title": "Professional JavaScript", 
               "authors": [ 
                   "Nicholas C. Zakas", 
                   "Matt Frisbie" 
               ], 
               "edition": 4, 
               "year": 2017 
          } 
          // 除了缩进，JSON.stringify()方法还为方便阅读插入了换行符。这个行为对于所有有效的缩进参数都会发生。（只缩进不换行也没什么用。）最大缩进值为10，大于10的值会自动设置为10。
        ```
      * 如果缩进参数是一个字符串而非数值，那么JSON字符串中就会使用这个字符串而不是空格来缩进。使用字符串，也可以将缩进字符设置为 Tab 或任意字符，如两个连字符：
        ``` 
          let jsonText = JSON.stringify(book, null, "--" ); 
          // jsonText的值：
          { 
          --"title": "Professional JavaScript", 
          --"authors": [ 
          ----"Nicholas C. Zakas", 
          ----"Matt Frisbie" 
          --], 
          --"edition": 4, 
          --"year": 2017 
          } 
          // 使用字符串时同样有 10 个字符的长度限制。如果字符串长度超过10，则会在第10个字符处截断
    * toJSON()方法：可以将Date对象转换为字符串，并格式化为JSON数据格式
  * 解析选项
    * JSON.parse()方法：也可以接收一个额外的参数，这个函数会针对每个键/值对都调用一次。为区别于传给JSON.stringify()的起过滤作用的替代函数（replacer），这个函数被称为还原函数（reviver）。实际上它们的格式完全一样，还原函数也接收两个参数，属性名（key）和属性值（value），另外也需要返回值。如果还原函数返回undefined，则结果中就会删除相应的键；如返回了其他任何值，则该值就会成为相应键的值插入到结果中。还原函数经常被用于把日期字符串转换为Date对象
      ``` 
        let book = { 
          title: "Professional JavaScript", 
          authors: [ 
            "Nicholas C. Zakas", 
            "Matt Frisbie" 
          ], 
          edition: 4, 
          year: 2017, 
          releaseDate: new Date(2017, 11, 1) 
        }; 
        let jsonText = JSON.stringify(book); 
        let bookCopy = JSON.parse(jsonText, (key, value) => key == "releaseDate" ? new Date(value) : value); 
        alert(bookCopy.releaseDate.getFullYear()); 
        // 以上代码在book对象中增加了releaseDate属性的Date对象。这个对象在被序列化为JSON 字符串后，又被重新解析为一个对象 bookCopy。这里的还原函数会查找"releaseDate"键，如果找到就会根据它的日期字符串创建新的Date对象。得到的bookCopy.releaseDate属性又变回了
        Date对象，因此可以调用其 getFullYear()方法
## 异步 JavaScript
### 异步JS简介
* 同步
  * js是单线程的，浏览器只会分配一个js引擎线程，用来执行js代码，当其执行代码时，js一次只能执行一次事件，这就是js中的同步
* 异步
  * 异步是由浏览器任务队列的机制决定的，js单线程指的是浏览器分配给js执行时的js引擎线程是单线程的，一般也称为主线程，但浏览器本身是多进程的，而js引擎线程遇到要异步执行的任务（比如定时器、事件绑定、Ajax、Promise、async await等），浏览器渲染进程会开启对应的线程去处理异步任务，当任务执行完成后会返回一个回调任务，这个回调任务就会存放到对应的任务队列event queue中，等待被js主线程同步调用
  * 所有的事件处理程序都是异步编程 xxx.οnclick=function(）{}
  * 所有的定时器都是异步编程 setTimeout(function(){},1000)
  * AJAX中一般都使用异步编程处理
  * 回调函数也算是异步编程
### Promise
* 一些解释
  * Promise是现代JavaScript中异步编程的基础，是一个由异步函数返回的可以向我们指示当前操作所处的状态的对象。在Promise返回给调用者的时候，操作往往还没有完成，但Promise对象可以让我们操作最终完成时对其进行处理（无论成功还是失败）
  * 利用Promise可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外Promise对象提供统一的接口，使得控制异步操作更加容易
  * promise无法取消，一旦建立就会立即执行，无法中途取消。而且，如果不设置回调函数，promise内部抛出的错误不会反映到外部。当处于Pending状态时，无法得知进展到哪一个阶段
* promise三个状态：
  * pending：待定，初始状态，既没有被兑现也没有被拒绝
  * fufilled：已兑现，操作成功完成
  * rejected：已拒绝，操作失败
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
