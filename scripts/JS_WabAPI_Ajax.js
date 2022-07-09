// 在下拉菜单中选择一首诗
// 引用并储存select，pre
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

// 定义onchange事件处理函数，在select的值改变时将其值传递给updateDisplay()函数作为参数
verseChoose.onchange = function() {
  const verse = verseChoose.value;
  updateDisplay(verse);
};

// 定义updateDisplay()函数
// 在页面中选择“Verse 1/2/3/4”后，就加载相应的url
function updateDisplay(verse) {
  // web服务器区分大小写，要把“Verse 1/2/3/4”中的空格去掉，大写改成小写
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + '.txt';

  // 1.XHR
// 开始创建XHR请求，用XMLHttpRequest()的构造函数创建一个新的请求对象request
/* 
从网络获取资源是异步操作，必须等待该操作完成，如资源从网络返回，才能对该响应执行操作，否则会出错
使用XHR的onload事件处理器来处理这个事件：当onload事件触发时（响应已经返回时）这个事件会被运行，
response数据在XHR请求对象的响应属性中可用
 */
  // let request = new XMLHttpRequest()
  // request.open('GET', url);
  // // 设置响应类型
  // request.responseType = 'text';
  // // 在onload事件处理程序中，将poemDisplay的textContent设置为 request.response属性的值
  // request.onload = function() {
  //   poemDisplay.textContent = request.response;
  // };
  // request.send();

// 2.fetch
  fetch(url).then(function(response) {
    response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });

}


// 在首次加载时显示第一首诗
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';


