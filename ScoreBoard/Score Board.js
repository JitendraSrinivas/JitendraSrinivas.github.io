var button = document.getElementsByTagName("button");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var sc = document.querySelector("#score");
var i = 0;
var j = 0;
var score = document.querySelector("input");

button[0].addEventListener("click", function () {
  if (score.valueAsNumber === 0 || score.value === "") {
    alert("Enter Playing To Score!!");
  } else {
    if (i !== score.valueAsNumber && j !== score.valueAsNumber) {
      i++;
      p1.textContent = i;
      if (i === score.valueAsNumber) {
        p1.classList.add("green");
        alert("Player 1 Wins");
      } else {
      }
    }
  }
});
button[1].addEventListener("click", function () {
  if (score.valueAsNumber === 0 || score.value === "") {
    alert("Enter Playing To Score!!");
  } else {
    if (i !== score.valueAsNumber && j !== score.valueAsNumber) {
      j++;
      p2.textContent = j;
      if (j === score.valueAsNumber) {
        p2.classList.add("green");
        alert("Player 2 Wins");
      } else {
      }
    }
  }
});

button[2].addEventListener("click", function () {
  p1.textContent = 0;
  i = 0;
  p2.textContent = 0;
  j = 0;
  sc.textContent = 0;
  score.valueAsNumber = 0;
  p1.classList.remove("green");
  p2.classList.remove("green");
});

score.addEventListener("change", function () {
  if (score.valueAsNumber < 0) {
    score.valueAsNumber = 0;
  }
  sc.textContent = score.value;
});
