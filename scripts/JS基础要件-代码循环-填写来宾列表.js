var people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

var admitted = document.querySelector(".admitted");
var refused = document.querySelector(".refused");
//for
/*
for (var i = 0; i < people.length; i++) {
  if (i === "Phil" || i === "Lola") {
    refused.textContent += people[i] + ",";
  } else {
    admitted.textContent += people[i] + ",";
  }
}
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
*/
//while
/*
var i = 0;
while (i < people.length) {
  if (people[i] === "Phil" || people[i] === "Lola") {
    refused.textContent += people[i] + ",";
  } else {
    admitted.textContent += people[i] + ",";
  }
  i++;
}
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
*/
//do...while
var i = 0;
do {
  if (people[i] === "Phil" || people[i] === "Lola") {
    refused.textContent += people[i] + ",";
  } else {
    admitted.textContent += people[i] + ",";
  }
  i++;
} while (i < people.length);
refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
