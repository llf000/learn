//for
/*
var countdown = document.querySelector(".countdown");
countdown.innerHTML = "";
for (var i = 10; i >= 0; i--) {
  var para = document.createElement("p");
  if (i === 10) {
    para.textContent = "Countdown 10";
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }
  countdown.appendChild(para);
}
*/
//while
/*
var countdown = document.querySelector(".countdown");
var i = 10;
while (i >= 0) {
  var para = document.createElement("p");
  if (i === 10) {
    para.textContent = "Countdown 10";
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }
  countdown.appendChild(para);
  i--;
}
*/
//do...while
var countdown = document.querySelector(".countdown");
var i = 10;
do {
  var para = document.createElement("p");
  if (i === 10) {
    para.textContent = "Countdown 10";
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }
  countdown.appendChild(para);
  i--;
} while (i >= 0);
