var themeSelect = document.querySelector("#theme");
var themeDiv = document.querySelector(".themediv");

themeSelect.onchange = function () {
  var themeChoice = themeSelect.value;

  // ADD SWITCH STATEMENT
  switch (themeChoice) {
    case "white":
      update("white", "black");
      break;
    case "black":
      update("black", "white");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "green":
      update("green", "#333");
      break;
    case "blue":
      update("blue", "white");
      break;
    default:
      update("white", "black");
  }
};
function update(bgColor, textColor) {
  themeDiv.style.backgroundColor = bgColor;
  themeDiv.style.color = textColor;
}
