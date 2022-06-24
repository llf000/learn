//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
window.onload = function () {
  let myImage = document.querySelector('img');
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/1.jpeg') {
      myImage.setAttribute('src', 'images/2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/1.jpeg');
    }
  }

  if (!sessionStorage.getItem('name')) {
    setTimeout(() => {
      setUserName();
    }, 300)
  } else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'hello，' + storedName;
  }
  
  function setUserName() {
    let myName = prompt('请输入你的名字。');
    // 点了取消
    if (myName === null) {
      myHeading.innerHTML = '我的猫咪脾气暴躁';
    } else {
      if (!myName) {
        setUserName();
      } else {
        sessionStorage.setItem('name', myName);
        myHeading.innerHTML = 'hello，' + myName;
      }
    }
  }



  myButton.onclick = function () {
    setUserName();
  }
}