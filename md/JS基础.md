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
* 同步编程
  * 
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
