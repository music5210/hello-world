var colors = generateRandomColor(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColor(6);
	//pick a new random color from an array
	pickedColor = pickColor();
	//change colorDisplay color to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of square
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to suqares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change color to match the given color
		squares[i].style.backgroundColor = pickedColor;
	};
};

function pickColor(){
	//Math.random(): pick a number between 0-1(0-0.9999999999),
	//Math.random() * 6: 0-5.9999999999
	//Math.random() * 6 + 1: 1-6.999999999999
	//Math.floor(): remove the float numbers
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColor(num){
	//generate an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get num random colors and push to the array
		arr.push(randomColor());
	};
	//return array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};