var number = 6;
var colorDisplay = document.querySelector("#colorPick");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message"); 
var headColor = document.querySelector("#head");
var playGame = document.querySelector("#play");
var modeSelect = document.querySelectorAll(".mode");

var colors = randomColors(number);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var gameOver = false;

for (var i = 0; i < modeSelect.length; i++) {
	modeSelect[i].addEventListener("click", function() {
		gameOver = false;
		modeSelect[0].classList.remove("selected");
		modeSelect[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			number = 3;
		}
		else {
			number = 6;
		}

		resetDisplay();
		
		if (number === 3) {
			for (var i = 0; i < squares.length; i++) {
				if (colors[i]) {
					squares[i].style.backgroundColor = colors[i];
				}
				else {
					squares[i].style.display = "none";
				}
			}
		}
		else {
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = colors[i];
				squares[i].style.display = "block";
			}
		}
	});
}

for (var i = 0; 0 < squares.length; i++) {
	// add color to squares
	squares[i].style.backgroundColor = colors[i];
	// winning condition
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor == pickedColor) {
			gameOver = true;
			messageDisplay.textContent = "Correct!";
			playGame.textContent = "Play Again?";
			head.style.backgroundColor = pickedColor;
			changeColor(pickedColor);
		}
		else if (!gameOver) {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#222222";
		}
	});
	
	reset();
}


function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}

// Pick a random color
function randomColors(num) {
	var array = [];

	for (var i = 0; i < num; i++) {
		var num1 = Math.floor(Math.random() * 256);
		var num2 = Math.floor(Math.random() * 256);
		var num3 = Math.floor(Math.random() * 256);
		array[i] = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
	}
	return array;
}

// Reset the Game
function reset() {
	playGame.addEventListener("click", function() {
		if (gameOver) {
			gameOver = false;
			resetDisplay();
		}
		else {
			resetDisplay();
			for (var i = 0; i < squares.length; i++) {	
				squares[i].style.backgroundColor = colors[i];
			}
		}
	});
}

function resetDisplay() {
	colors = randomColors(number);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	playGame.textContent = "New Colors";
	messageDisplay.textContent = " ";
}
