// 如果页面加载时，脚本运行了，它将会移除no-widget class，添加widget class，由此切换select元素和自定义组件的可视性
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});

NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
};

// 当想停用一个自定义组件的时候，用参数elect :停用带有'select'类的节点
function deactivateSelect(select) {
  // 如果组件没有运行，不用进行任何操作
  if (!select.classList.contains("active")) return;
  // 获取自定义组件的选项列表
  var optList = select.querySelector(".optList");
  // 关闭选项列表
  optList.classList.add("hidden");
  // 然后停用组件本身
  select.classList.remove("active");
}

/*
想要激活/停用组件的时候，会调用activeSelect，两个参数：
select: 激活带有select类的DOM节点
selectList: 包含所有带'select类的DOM节点的列表
*/
function activeSelect(select, selectList) {
  // 如果组件已经激活了，不进行任何操作
  if (select.classList.contains("active")) return;
  // 需要关闭所有自定义组件的活动状态，deactiveselect函数满足forEach回调函数的所有请求，不需要使用中间匿名函数
  selectList.forEach(deactivateSelect);
  // 激活特定的组件
  select.classList.add("active");
}
// 需要打开/关闭选项列表的时候，会调用toggleOptList
// 参数select : 要触发的列表的DOM节点
function toggleOptList(select) {
  // 该列表不包含在组件中
  var optList = select.querySelector(".optList");

  // 改变列表的class去显示/隐藏它
  optList.classList.toggle("hidden");
}

/*
每当要高亮一个选项的时候，会调用highlightOption，两个参数：
select: 带有select类的DOM节点，包含了需要高亮强调的选项
option: 需要高亮强调的带有option类的DOM节点
*/
function highlightOption(select, option) {
  // 为自定义select元素获取所有有效选项的列表
  var optionList = select.querySelectorAll(".option");
  // 移除所有选项的高亮强调
  optionList.forEach(function (other) {
    other.classList.remove("highlight");
  });
  // 高亮强调正确的选项
  option.classList.add("highlight");
}
/*
updateValue更新显示的值并将其通过原生组件同步，两个参数：
select: 含有要更新的值的select类的DOM节点
index: 要被选择的值的索引
*/
function updateValue(select, index) {
  // 为给定的自定义组件获取原生组件
  var nativeWidget = select.previousElementSibling;
  // 需要得到自定义组件的值
  var value = select.querySelector(".value");
  // 需要有整个选项列表
  var optionList = select.querySelectorAll(".option");
  // 确保所有的选项都没有被选中
  optionList.forEach(function (other) {
    other.setAttribute("aria-selected", "false");
  });

  // 确保选定的选项被选中了
  optionList[index].setAttribute("aria-selected", "true");
  // 将被选择的索引设定为选择的索引
  nativeWidget.selectedIndex = index;
  // 更新相应的值占位符
  value.innerHTML = optionList[index].innerHTML;
  // 高亮自定义组件里对应的选项
  highlightOption(select, optionList[index]);
}

// 这个函数返回原生组件里当前选定的索引
// 它需要 1 个参数：
// select : 跟原生组件有关的'select'类 DOM 节点
function getIndex(select) {
  // 我们需要为了给定的自定义组件访问原生组件
  // 在我们的例子中，原生组件是自定义组件的一个“同胞”
  var nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

// 在文档加载时处理事件的绑定
window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");
  // 每个自定义组件都需要初始化
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll(".option"),
      selectedIndex = getIndex(select);
    // 使自定义组件可以获得焦点
    select.tabIndex = 0;
    // 让原生组件无法获得焦点
    select.previousElementSibling.tabIndex = -1;
    // 确保默认选中的值正确显示
    updateValue(select, selectedIndex);
    // 当用户点击一个选项的时候，更新相应的值
    optionList.forEach(function (option, index) {
      option.addEventListener("click", function (event) {
        updateValue(select, index);
      });
    });
    // 当用户在获得焦点的组件上用键盘操作时，更新相应的值
    select.addEventListener("keyup", function (event) {
      var length = optionList.length,
        index = getIndex(select);
      // 当用户点击向下箭头时，跳转到下一个选项
      if (event.keyCode === 40 && index < length - 1) {
        index++;
      }
      // 当用户点击向上箭头时，跳转到上一个选项
      if (event.keyCode === 38 && index > 0) {
        index--;
      }
      updateValue(select, index);
    });
  });
});
