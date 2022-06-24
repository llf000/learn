const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = '这是一个动态列表，单击页面任意位置可添加新的列表项；单击现有列表项可替换其内容。';
// info.style.border = "1px solid #ccc";
// list.style.background = '#ccc'
// list.style.minHeight = '20px'
list.setAttribute('class', 'newUL');
document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function(){
  const listItem = document.createElement('li');
  const listContent = prompt('你想添加什么列表项？');
 // console.log(listContent);
  if(listContent === null || listContent === "") return;
  listItem.textContent = listContent;
  // listItem.style.color = "red";
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('为列表项输入新内容');
    if(listContent === null || listContent === "") return;
    this.textContent = listContent;
  }
}