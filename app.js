var squares = document.querySelectorAll(".squares");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var resetBtn = document.getElementById("reset");
var h1 = document.querySelector("h1");
var colors = [];
var pickedColor;

function randomNumber() {
  var num1 = Math.floor(Math.random() * 256);
  var num2 = Math.floor(Math.random() * 256);
  var num3 = Math.floor(Math.random() * 256);
  return `rgb(${num1}, ${num2}, ${num3})`;
}

function randomColor(num) {
  for (var i = 0; i < num; i++) {
    colors.push(randomNumber());
    randomNumber();
  }
}

function pickColor(num) {
  pickedColor = colors[Math.floor(Math.random() * num)];
  colorDisplay.textContent = pickedColor;
}

function changeColor() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
  }
  h1.style.backgroundColor = pickedColor;
}

function assignColors() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      if (this.style.backgroundColor === pickedColor) {
        changeColor();
        message.textContent = "Bingo!";
        resetBtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "rgb(35, 35, 35)";
        message.textContent = "Try again";
      }
    });
  }
}

randomColor(6);
pickColor(6);
assignColors();

easyBtn.addEventListener("click", function () {
  colors = [];
  randomColor(3);
  pickColor(3);
  assignColors();
  for (var i = 0; i < squares.length; i++) {
    if (!colors.includes(squares[i].style.backgroundColor)) {
      squares[i].style.backgroundColor = "rgb(35, 35, 35)";
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  resetBtn.textContent = "New Colors";
  message.textContent = ""
});

hardBtn.addEventListener("click", function () {
  colors = [];
  randomColor(6);
  pickColor(6);
  assignColors();
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
  h1.style.backgroundColor = "steelblue";
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  resetBtn.textContent = "New Colors";
  message.textContent = ""
});

resetBtn.addEventListener("click", function () {
  if (colors.length === 3) {
    colors = [];
    randomColor(3);
    pickColor(3);
    assignColors();
  } else {
    colors = [];
    randomColor(6);
    pickColor(6);
    assignColors();
  }
  h1.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";
  message.textContent = ""
});
