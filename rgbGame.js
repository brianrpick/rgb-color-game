numSquares = 6;
var colors = [];
var winningColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
  modeButtons();
  squares();
  reset();
}

resetButton.addEventListener("click", function() {
  reset();
});

function modeButtons(){
  //setting mode buttons
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
}

function squares() {
  //setting colors for the squares
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //add listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor
      // compare clicked square to correct square
      if (clickedColor === winningColor) {
        resetButton.textContent = "Play Again";
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = winningColor
      } else {
        //clicking wrong color fades it out
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  h1.style.backgroundColor = "steelBlue"
  colors = generateRandomColorArray(numSquares);
  winningColor = pickColor();
  colorDisplay.textContent = winningColor;
  resetButton.textContent = "New Colors";
  for(let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i] 
    } else {
      squares[i].style.display = "none"
    }
  }
  messageDisplay.textContent = "";
}

function changeColors(color) {
  for(let i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color
}

function pickColor() {
  //random index from color array
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColorArray(num) {
  var colorArray = [];
  for (let i = 0; i < num; i++) {
    colorArray.push(generateRandomColor());
  }
  return colorArray;
}

function generateRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + b + ", " + g + ")";
}
