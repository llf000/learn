// 创建和保存变量
let media = document.querySelector('video');
let controls = document.querySelector('.controls');

let play = document.querySelector('.play');
let stop = document.querySelector('.stop');
let rwd = document.querySelector('.rwd');
let fwd = document.querySelector('.fwd');

let timerWrapper = document.querySelector('.timer');
let timer = document.querySelector('.timer span');
let timerBar = document.querySelector('.timer div');

// 从视频中删除默认浏览器控件，并使自定义控件可用
media.removeAttribute('controls');
controls.style.visibility = 'visible';

// 单击按钮时调用playPauseMedia()函数
// 播放
play.addEventListener('click', playPauseMedia);
function playPauseMedia() {
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  clearInterval(intervalRwd);
  clearInterval(intervalFwd);
  // 检查视频是否暂停：已暂停，HTMLMediaElement.paused属性返回 true，把play按钮的data-icon属性值设置成"u",表示"暂停"按钮，
  // 调用HTMLMediaElement.play()函数播放视频，不是暂停则相反
  if(media.paused) {
    play.setAttribute('data-icon','u');
    media.play();
  } else {
    play.setAttribute('data-icon','P');
    media.pause();
  }
}

// 暂停
/*、
HTMLMediaElement API中没有stop()方法，等效的办法是先用pause()暂停视频，然后设置currentTime属性为0；
设置 currentTime的值（单位：秒）将会立刻使视频跳到该位置
*/
stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);
function stopMedia() {
  media.pause();
  media.currentTime = 0;
  rwd.classList.remove('active');
  fwd.classList.remove('active');
  // clearInterval(intervalRwd);
  // clearInterval(intervalFwd);
  play.setAttribute('data-icon','P');
}

// 快进/快退
rwd.addEventListener('click', mediaBackward);
fwd.addEventListener('click', mediaForward);

let intervalFwd;
let intervalRwd;

function mediaBackward() {
  // 清除在快进功能上设置的所有classes和intervals
  // 如果在按下fwd快进后再按下rwd快退，就可以取消任何快进的功能并将其替换为快退功能，如果试图同时做到这两点，播放器就会暂停
  clearInterval(intervalFwd);
  fwd.classList.remove('active');
  // 检查是否已在rwd按钮上设置了用来指示它已被按下的active类
  if(rwd.classList.contains('active')) {
    // 设置了，删除它，正常播放视频
    rwd.classList.remove('active');
    clearInterval(intervalRwd);
    media.play();
  } else {
    // 没设置，设置它
    rwd.classList.add('active');
    media.pause();
    // 调用setInterval，每200毫秒执行一次windBackward函数做快退动作
    intervalRwd = setInterval(windBackward, 200);
  }
}

function mediaForward() {
  clearInterval(intervalRwd);
  rwd.classList.remove('active');
  if(fwd.classList.contains('active')) {
    fwd.classList.remove('active');
    clearInterval(intervalFwd);
    media.play();
  } else {
    fwd.classList.add('active');
    media.pause();
    intervalFwd = setInterval(windForward, 200);
  }
}

function windBackward() {
  // 检查当前时间是否小于3秒（小于3，再倒退3秒将使其超过视频的开始），小于就调用stopMedi（）停止视频播放，
  // 从倒带按钮中删除active类，并清除intervalRwd间隔以停止快退功能（如果没有这一步，视频将永远保持快退）
  if(media.currentTime <= 3) {
    stopMedia();
  } else {
    // 大于3，退三秒，每200毫秒一次
    media.currentTime -= 3;
  }
}

function windForward() {
  if(media.currentTime >= media.duration - 3) {
    stopMedia();
  } else {
    media.currentTime += 3;
  }
}

// 更新已用时间
media.addEventListener('timeupdate', setTime);
function setTime() {
  // 计算HTMLMediaElement.currentTime值中的分钟数和秒数，初始化两个变量保存
  let minutes = Math.floor(media.currentTime / 60);
  let seconds = Math.floor(media.currentTime - minutes * 60);
  let minuteValue;
  let secondValue;
  // 判断分钟数/秒数：小于10，就在值前面加上“0”
  if (minutes < 10) {
    minuteValue = '0' + minutes;
  } else {
    minuteValue = minutes;
  }

  if (seconds < 10) {
    secondValue = '0' + seconds;
  } else {
    secondValue = seconds;
  }
  // 要显示的实际时间值设置为minuteValue，加冒号，加secondValue
  // 计时器的Node.textContent值设置为时间值，因此它显示在UI中
  let mediaTime = minuteValue + ':' + secondValue;
  timer.textContent = mediaTime;
  //设置内部div长度：外都div长度乘以媒体播放时间除以媒体总时间
  let barLength = timerWrapper.clientWidth * (media.currentTime/media.duration);
  timerBar.style.width = barLength + 'px';
}

