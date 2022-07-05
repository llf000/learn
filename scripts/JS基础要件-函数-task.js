// task1
//创建一个简单的函数——chooseName()——从提供的数组(names)中打印一个随机名称到提供的段落(para)，然后运行一次。
let names1 = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
let task1Section = document.querySelector(".preview1");
let para1 = document.createElement("p");
task1Section.appendChild(para1);
// Add your code here
// Don't edit the code below here!
function chooseName() {
  para1.textContent = names1[Math.floor(Math.random() * names1.length)];
}
chooseName();

//task2
//根据提供的五个输入变量(x,y,width,height,color)创建一个函数，该函数在提供的 <canvas>上绘制一个矩形
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";
// Add your code here
function draw() {
  ctx.clearRect(0, 0, width, height); //
  ctx.fillStyle = "blue";
  ctx.fillRect(50, 60, 100, 75);
}
draw();

//task3
//改进task1
//将生成随机数的代码重构为random()函数，该函数将随机数应位于的两个通用边界作为参数，并返回结果。
//更新 chooseName() 函数，使其使用随机数函数，将要从中选择的数组作为参数（使其更灵活），并返回结果。
//将返回的结果打印到段落（para）的textContent中。
let names3 = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
let task3Section = document.querySelector(".preview3");
let para3 = document.createElement("p");
task3Section.appendChild(para3);
// Add your code here
// Don't edit the code below here!
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function chooseItem() {
  let choice3 = names3[random(0, names3.length)];
  return choice3;
}
para3.textContent = chooseItem(names3);

//task4
//有一个名称数组，我们使用 Array.filte()来获取一个名称少于5个字符的数组
//过滤器当前正在传递一个命名函数isShort()，该函数检查字符长度，小于5返回TRUE，大于5返回FALSE
//把函数改为箭头函数
let names4 = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
let task4Section = document.querySelector(".preview4");
let para4 = document.createElement("p");
task4Section.appendChild(para4);

/*
function isShort(name) {
  return name.length < 5;
}
const shortNames = names4.filter(isShort);
*/
const shortNames = names4.filter((name) => name.length < 5);
para4.textContent = shortNames;
