// 基本DOM操作
// 选择元素，引用它，并存储在变量中
let section1 = document.querySelector(".section1");
let link = document.querySelector("a");

// 更新Node.textContent属性的值来修改链接中的文字
link.textContent = "淘宝网";
// 修改链接指向的 URL
link.href = "https://www.taobao.com/";

// 用Document.createElement()创建一个新的段落
let para1 = document.createElement("p");
// 给段落填入内容文字
para1.textContent = "这是第1个新建的段落";
let para2 = document.createElement("p");
para2.textContent = "这是第2个新建的段落";
let para3 = document.createElement("p");
para3.textContent = "用HTMLElement.style属性操作样式";
let para4 = document.createElement("p");
para4.textContent = "用HTMLElement.style属性操作样式";

// 指定段落位置，p是.section1的子元素
section1.appendChild(para1);
section1.appendChild(para2);
section1.appendChild(para3);
section1.appendChild(para4);

// 用Document.createTextNode()创建一个文本节点
let text = document.createTextNode("--- 来购物吧！");

// 获取内部连接的段落的引用(<p><a></a></p>)，并把文本节点绑定到这个节点上：
let linkPara = document.querySelector("p");
linkPara.appendChild(text);

// 移动和删除元素
// 会把有内部链接的段落下移到section底部
section1.appendChild(linkPara);

// 删除
// 1.通过绑定的父节点删除
section1.removeChild(para1);
// 2.可以删除基于自身引用的节点
para2.parentNode.removeChild(para2);

// 操作样式
// 1.直接在想要动态设置样式的元素内部，用HTMLElement.style属性添加内联样式
para3.style.color = "white";
para3.style.backgroundColor = "black";
para3.style.padding = "10px";
para3.style.width = "300px";
para3.style.textAlign = "center";

// 2.用Element.setAttribute()方法：有两个参数，想在元素上设置的属性，要为它设置的值
para4.setAttribute("class", "highlight");

// 从Window对象中获取有用的信息
// 目标：不管窗口的大小是多少，确保应用程序和它所在的窗口视图一样大
// 引用div1，获取视窗（显示文档的内部窗口）的宽度和高度，并存入变量中
let div1 = document.querySelector(".div1");
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
// 动态地改变div1的宽和高，使其等于视窗的宽和高
div1.style.width = WIDTH + "px";
div1.style.height = HEIGHT + "px";
/*  Window对象的resize可用事件，每次窗口调整大小时都会触发该事件，
通过Window.onresize事件处理程序来访问它，
可以在调整窗口大小时调整div1大小，并返回每次改变大小的代码 */
window.onresize = function () {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  div1.style.width = WIDTH + "px";
  div1.style.height = HEIGHT + "px";
};

// 动态购物单
/* 
使用表单输入框和按钮动态的向购物单中添加购物项
在输入中添加项，按下按钮时：
1.购物项应该出现在清单中
2.每个购物项都应该给出一个按钮，可以按下按钮从清单中删除该项
3.输入框应该是空白的并已聚焦，准备好输入另一个项
*/
// 创建三个变量来保存 list(<ul>)、<input>和<button>元素的引用
let list = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

// 创建一个函数响应点击按钮
btn.onclick = function () {
  // 在函数体内，开始要在一个变量中存储输入框的当前值。
  let myItem = input.value;
  console.log(myItem.trim(), myItem.trim() !== " ");
  //判断输入框是否为空值;
  if (myItem && myItem.trim() !== "") {
    // 创建三个新元素:一个list项（<li>），<span>和 <button>，把它们存入变量中
    let listItem = document.createElement("li");
    let listSpan = document.createElement("span");
    let listBtn = document.createElement("button");
    // 把span和button作为li的子节点
    listItem.appendChild(listSpan);
    listItem.appendChild(listBtn);
    // li设置为ul的子节点
    list.appendChild(listItem);
    // 把保存的输入框元素的值设置为span的文本内容，按钮的文本内容设置为“删除”
    listSpan.textContent = myItem;
    listBtn.textContent = "删除";
    // 为删除按钮绑定事件处理程序，当点击按钮时，删除它所在的整个list项
    listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  } else {
    input.placeholder = "请输入添加项";
  }
  //让输入框回到空值
  input.value = "";
  // 使用focus()方法聚焦输入框,准备输入下一项
  input.focus();
};
