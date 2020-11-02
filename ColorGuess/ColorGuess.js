var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var pColor = document.querySelector("#pickedColor");
var message = document.querySelector("#message");
var playAgain = document.querySelector("#newColors");
var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");
var a = 6;
var colors = generateRandomColors(a);
var pickedColor = pickColor();

colorsPrepare();

// easy.addEventListener("mouseover", function () {
//   easy.classList.add("bluehover");
// });
// easy.addEventListener("mouseout", function () {
//   easy.classList.remove("bluehover");
// });

// hard.addEventListener("mouseover", function () {
//   hard.classList.add("bluehover");
// });
// hard.addEventListener("mouseout", function () {
//   hard.classList.remove("bluehover");
// });

// playAgain.addEventListener("mouseover", function () {
//   playAgain.classList.add("bluehover");
// });
// playAgain.addEventListener("mouseout", function () {
//   playAgain.classList.remove("bluehover");
// });

easy.addEventListener("click", function () {
  easy.classList.add("blue");
  hard.classList.remove("blue");
  playAgain.textContent = "New Colors";
  a = 3;
  colors = generateRandomColors(a);
  pickedColor = pickColor();
  colorsPrepare();
  for (var j = 3; j < square.length; j++) {
    square[j].style.backgroundColor = "#232323";
  }
});

hard.addEventListener("click", function () {
  easy.classList.remove("blue");
  hard.classList.add("blue");
  playAgain.textContent = "New Colors";
  a = 6;
  colors = generateRandomColors(a);
  pickedColor = pickColor();
  colorsPrepare();
});

playAgain.addEventListener("click", function () {
  playAgain.textContent = "New Colors";
  colors = generateRandomColors(a);
  pickedColor = pickColor();
  colorsPrepare();
});

function colorsPrepare() {
  message.textContent = "";
  pColor.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
      if (this.style.backgroundColor === pickedColor) {
        message.textContent = "Correct!";
        message.style.color = "lawngreen";
        changeColor(this.style.backgroundColor);
        h1.style.backgroundColor = this.style.backgroundColor;
        playAgain.textContent = "Play Again?";
      } else {
        message.textContent = "Try Again";
        message.style.color = "red";
        this.style.backgroundColor = "#232323";
      }
    });
  }
}

function changeColor(color) {
  for (var i = 0; i < a; i++) {
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = randomcolor();
  }
  return arr;
}

function randomcolor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
  return rgb;
}
