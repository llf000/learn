let monthSelect = document.querySelector("#month");
let list = document.querySelector("ul");
let h3 = document.querySelector(".monthh3");

monthSelect.onchange = function () {
  let momthChoice = monthSelect.value;

  // ADD CONDITIONAL HERE
  //if...else

  if (
    momthChoice === "四月" ||
    momthChoice === "六月" ||
    momthChoice === "九月" ||
    momthChoice === "十一月"
  ) {
    days = 30;
  } else if (momthChoice === "二月") {
    days = 28;
  } else {
    days = 31;
  }

  //switch
  /*
  switch (momthChoice) {
    case "一月": case "三月": case "五月": case "七月": case "八月": case "十月": case "十二月":
      days = 31;
      break;
    case "二月":
      days = 28;
      break;
    default:
      days = 30;
  }
  */
  //over
  createCalendar(days, momthChoice);
};

function createCalendar(days, momthChoice) {
  list.innerHTML = "";
  h3.textContent = momthChoice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");
