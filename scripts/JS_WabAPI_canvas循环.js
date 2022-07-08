const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
// 全屏铺满画布
ctx.fillStyle = 'rgba(0,0,0, .5)';
ctx.fillRect(0,0,width,height);


// 循环和动画
// 循环
// 使原点(0, 0)从画布左上顶点移动至画布正中心
ctx.translate(width/2, height/2);
// degToRad()函数，角度变弧度（上面有这里本来不应该再写的，js后声明的函数会覆盖前面的同名函数）
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};
//rand() 函数：返回给定范围内随机数
function rand(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + (min);
}

var length = 250;
var moveOffset = 20;

for(var i = 0; i < length; i++) {
   // 每次循环中，设置fillStyle为略透明的紫色渐变色，随着循环的运行，length值逐渐变小，连续的三角形颜色逐渐变亮
  ctx.fillStyle = 'rgba(' + (255-length) + ', 0, ' + (255-length) + ', 0.9)';
  // (moveOffset, moveOffset)；定义了每次要绘制新三角形时需要移动的距离
  ctx.beginPath();
  ctx.moveTo(moveOffset, moveOffset);
  // 画一条长度为length，与 X 轴平行的线。
  ctx.lineTo(moveOffset+length, moveOffset);
  // 计算三角形的高
  var triHeight = length/2 * Math.tan(degToRad(60));
  // 向三角形底部顶点方向绘制一条直线，然后向三角形的起始点绘制一条直线
  ctx.lineTo(moveOffset+(length/2), moveOffset+triHeight);
  ctx.lineTo(moveOffset, moveOffset);
  // 为三角形填充颜色
  ctx.fill();
  // 更新次序变量，准备绘制下一个三角形
  // length的值减一，使三角形每次迭代都变小一些
  length--;
  // 小幅增加moveOffset的值，使得下一个三角形略微错位
  moveOffset += 0.7;
  // 函数rotate()：转整块画布，在绘制下个三角形前画布旋转5°
  ctx.rotate(degToRad(5));
}
