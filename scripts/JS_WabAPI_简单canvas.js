const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
// 全屏铺满画布
ctx.fillStyle = 'rgba(0,0,0, .5)';
ctx.fillRect(0,0,width,height);

// 画个红色矩形
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.fillRect(45, 45, 130, 150);
// 画个绿色矩形
ctx.fillStyle = 'rgb(0, 255, 0)';
ctx.fillRect(55, 55, 50, 100);
// stroke来描边，画个矩形轮廓，它的默认宽度是1px
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect(35, 35, 175, 175);
// 画个5px宽的
ctx.strokeStyle = 'green';
// lineWidth要放在strokeStyle和strokeRect之间才能生效
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 200, 200);

// 绘制路径
// 1.画线--画个尖角朝下的等边三角形
// 辅助函数，它可以将角度换算为弧度（JS基本上只接受弧度值）
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};
// 设置颜色，准备绘制，把笔移动至（200，200）处
ctx.fillStyle = 'rgb(255, 0, 0)';
ctx.beginPath();
ctx.moveTo(50, 300);
// 绘制一条直线，终点坐标为 (150, 50)，路径会沿x轴向右行走 100像素。
ctx.lineTo(150, 300);
/* 第二条线，要利用三角函数来计算等边三角形的高再来绘制，为计算高的值将三角形从正中心分割为两个直角三角形，
通过基本三角函数可得：临边长度乘以角的正切等于对边长度，三角形的高为 50 * Math.tan(degToRad(60))，
Math.tan()接受数值的单位为弧度，我们用刚才的degToRad()函数将60°算为弧度*/
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 300+triHeight);
// 第三条线，回到起点
ctx.lineTo(50, 300);
// ctx.fill()终止路径，并为图形填充颜色
ctx.fill();

// 2.画圆
// arc()，通过连续的点来绘制整个圆或者弧（弧就是局部的圆啊）
/* arc()函数有六个参数：
圆心的x/y坐标
圆的半径
弧的起/止角度（给定0°和360°就能绘制一个完整的圆，0°设定为水平向右）
绘制方向（false顺时针，true是逆时针）*/
// 画个（100，450）处开始，r=50的圆
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
ctx.arc(100, 450, 50, degToRad(0), degToRad(360), false);
ctx.fill();
// 画条弧
//  arc()的最后一个参数为true：弧将逆时针绘制，会得到区域外的一条270°的弧；为false：顺时针，将得到 90° 的弧
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(100, 600, 50, degToRad(-45), degToRad(45), true);
// 一条终点为圆心的直线，渲染出一个吃豆人模型；如果删除这条线只有一个起止点间被砍掉一块的圆了
ctx.lineTo(100, 600);
ctx.fill();
// false的
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(100, 700, 50, degToRad(-45), degToRad(45), false);
ctx.lineTo(100, 700);
ctx.fill();

// 3.文本
// strokeText()：绘制文本外边框，描个边，空心文本
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
ctx.font = '36px arial';
ctx.strokeText('Canvas text', 50, 800);
// fillText() ：绘制有填充色的文本，实心文本
ctx.fillStyle = 'red';
ctx.font = '48px georgia';
ctx.fillText('Canvas text', 50, 900);

// 4.图片
// 将图片源嵌入画布中
var image = new Image();
image.src = '../images/bj1.jpg';
// 用drawImage()函数来嵌入图片，为确保图片先载入完毕，使用onload事件处理器来保证图片调用完毕后才会调用
image.onload = function() {
  // ctx.drawImage(image, 50, 1000);
  ctx.drawImage(image, 20, 20, 200,200, 300, 50, 185, 175);
}
/* 裁切图片的一部分来显示
第一个参数不变，为图片引用。
参数 2、3：裁切部分左上顶点的坐标，参考原点为原图片本身左上角的坐标。原图片在该坐标左、上的部分均不会绘制出来。
参数 4、5：裁切部分的长、宽。
参数 6、7：裁切部分左上顶点在画布中的位置坐标，参考原点为画布左上顶点。
参数 8、9：裁切部分在画布中绘制的长、宽
*/
