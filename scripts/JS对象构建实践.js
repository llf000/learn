// 定义弹球计数变量
let para = document.querySelector("p");
let count = 0;

// 设置画布
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);
// 生成一个 min 至 max 之间的随机整数
function random(min, max) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
// 生成随机颜色值
function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}

// 定义Shape构造器
function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}
// 定义Ball构造器, x/y/velX/velY/exists属性继承自Shape
// 为小球构建模型，x/y坐标，水平/垂直速度，颜色，大小   velX/velY：球开始运动时候，每过一帧都会给小球的x/y坐标加一次这些值
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// 定义彩球绘制函数
// 给小球的原型加上draw()方法
Ball.prototype.draw = function () {
  // beginPath()声明我们开始纸上画图形
  ctx.beginPath();
  // 定义图形颜色，小球的颜色属性
  ctx.fillStyle = this.color;
  // arc()方法在纸上画出一段圆弧，x/y是中心坐标，size是半径，0和2 * Math.PI是圆弧夹角，0到360度
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  // fill()声明绘画结束，使用设置的颜色进行填充。
  ctx.fill();
};

// 定义彩球更新函数
Ball.prototype.update = function () {
  // 检查小球的x坐标是否大于画布的宽度，小球会从右边缘离开
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }
  // 检查小球的x坐标是否小于0，小球会从左边缘离开
  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  // 检查小球的y坐标是否大于画布的高度，球会从下边缘离开
  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }
  // 检查小球的y坐标是否小于0，小球会从上边缘离开
  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }
  // 在每种情况下，都加上小球的半径，让小球在其边界接触浏览器窗口的边界时反弹
  this.x += this.velX;
  this.y += this.velY;
};

// 定义碰撞检测函数
Ball.prototype.collisionDetect = function () {
  //for循环遍历balls[]数组中的小球
  for (let j = 0; j < balls.length; j++) {
    // if语句检查需要检查当前正在调用 collisionDetect方法的球是否和for循环检测中的当前遍历所引用的球是同一个
    if (this !== balls[j]) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      // 如果检测到了碰撞，将两个小球的颜色都设置成随机的一种
      if (distance < this.size + balls[j].size && balls[j].exists) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
};

// 定义恶魔圈 EvilCircle()，x/y/exists继承自Shape
function EvilCircle(x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = "white";
  this.size = 10;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// 定义EvilCircle绘制方法，画个厚点的空心圆
EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};

// 检查恶魔圈是否将要超出屏幕的边界，禁止它超出
// 如果恶魔圈超出边界，通过增减恶魔圈size的值，来修改 x/y 的值，使恶魔圈稍微地弹回屏幕
EvilCircle.prototype.checkBounds = function () {
  if (this.x + this.size >= width) {
    this.x -= this.size;
  }

  if (this.x - this.size <= 0) {
    this.x += this.size;
  }

  if (this.y + this.size >= height) {
    this.y -= this.size;
  }

  if (this.y - this.size <= 0) {
    this.y += this.size;
  }
};

//将一个onkeydown事件监听器给window对象，当特定的键盘按键按下的时候就可以移动恶魔圈
EvilCircle.prototype.setControls = function () {
  window.onkeydown = (e) => {
    switch (e.key) {
      case "a":
      case "A":
      case "ArrowLeft":
        this.x -= this.velX;
        break;
      case "d":
      case "D":
      case "ArrowRight":
        this.x += this.velX;
        break;
      case "w":
      case "W":
      case "ArrowUp":
        this.y -= this.velY;
        break;
      case "s":
      case "S":
      case "ArrowDown":
        this.y += this.velY;
        break;
    }
  };
};

// 定义EvilCircle冲突检测函数
EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if (balls[j].exists) {
      let dx = this.x - balls[j].x;
      let dy = this.y - balls[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      //小球被吃掉，不存在了，count减少
      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        count--;
        para.textContent = "剩余彩球数：" + count;
      }
    }
  }
};

// 定义一个数组，生成并保存所有的球
let balls = [];
while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    true,
    randomColor(),
    size
  );
  balls.push(ball);
  count++;
  para.textContent = "剩余彩球数：" + count;
}

//创建一个新的恶魔圈的对象实例,调用它的 setControls() 方法，将恶魔圈带到程序中
let evil = new EvilCircle(random(0, width), random(0, height), true);
evil.setControls();

// 定义一个循环来不停地播放
function loop() {
  // 把画布设置为半透明黑色
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  // 画一个填满整个画布的矩形
  ctx.fillRect(0, 0, width, height);
  // 遍历所有小球
  for (let i = 0; i < balls.length; i++) {
    //如果小球存在（它有可能已经被恶魔圈吃掉了）
    if (balls[i].exists) {
      // 让每个小球都调用draw()函数来将自己画出来
      balls[i].draw();
      // 调用update()函数在接下来的每一帧都按照其速度进行位置更新
      balls[i].update();
      // 调用collisionDetect()函数检测是否相撞
      balls[i].collisionDetect();
    }
  }
  //在每个loop循环中调用恶魔圈实例方法draw(), checkBounds(), collisionDetect()
  evil.draw();
  evil.checkBounds();
  evil.collisionDetect();
  /* requestAnimationFrame()方法再运行一次函数
  当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，这样可以得到一个平滑的动画效果
  这主要是通过递归完成的，函数每次运行的时候都会调用自己从而可以一遍又一遍运行 */
  requestAnimationFrame(loop);
}
// 调用loop()函数让动画开始运行
loop();
