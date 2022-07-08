const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
// 全屏铺满画布
ctx.fillStyle = 'rgba(0,0,0, .5)';
ctx.fillRect(0,0,width,height);

// 动画
ctx.translate(width/2, height/2);
// 创建一个新的HTMLImageElement对象把它的 src设置为所需图片，添加一个onload事件处理器,使draw()函数在图片载入后触发。
var image = new Image();
image.src = '../images/canvas-walk-right.png';
image.onload = draw;
// 两个变量，来追踪精灵图在屏幕上的位置，以及当前需要显示的精灵图的序号
/*
图中包含六个精灵，它们组成了一趟完整的行走序列。每个精灵的尺寸为 102× 148px，
为了整齐的显示一个精灵，用drawImage()从序列中裁切出单独的精灵并隐藏其他部分，
切片的X坐标应为 102 的倍数，Y坐标恒为0，切片尺寸恒为 102×148px
*/
var sprite = 0;
var posX = 0;
function draw() {
  // 清除画布，准备绘制新的帧
  // 刚才将原点设置为width/2, height/2这里需要将矩形左上顶点的坐标设置为-(width/2), -(height/2)。
  ctx.fillRect(-(width/2), -(height/2), width, height);
  // 绘制图形
  ctx.drawImage(image, (sprite*102), 0, 102, 148, 0+posX, -74, 102, 148);
  // 在每帧绘制完毕后修改sprite的值
  // 判断posX是否可以被13整除（每13帧更新一次精灵）如果整除，则通过增加sprite的值转至下一个精灵（到5号精灵时归零）
  if (posX % 13 === 0) {
    if (sprite === 5) {
      sprite = 0;
    } else {
      sprite++;
    }
  }
  // 判断检posX的值是否超出了 width/2，即是否走到了屏幕右侧边缘
  if(posX > width/2) {
    newStartPos = -((width/2) + 102);
    posX = Math.ceil(newStartPos / 13) * 13;
    console.log(posX);
  } else {
    posX += 2;
  }
  window.requestAnimationFrame(draw);
};
