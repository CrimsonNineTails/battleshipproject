// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;
var lettersForRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var fireLocation;
var convertLetterToNumber;
var collumNumber;
var hits = 0;
var hitsDisplay = 17;
var fire = new Audio('Voice 001.m4a')
var shipsPlaced = 0;
var placementLocation;
var rowPlacement;
var collumPlacement;
var fiveBoat = 0;
var fourBoat = 0;
var threeBoat = 0;
twoBoat = 0;
var lastPlacedRow;
var lastPlacedCollum;
var shipSize = [2,3,3,4,5];
var directions = [[1,0],[0,1],[-1,0],[0,-1]]

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");


// you can use this to convert your letters into numbers for use
// with the 2D array
var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9,
	"a": 0,
	"b": 1,
	"c": 2,
	"d": 3,
	"e": 4,
	"f": 5,
	"g": 6,
	"h": 7,
	"i": 8,
	"j": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
		square.textContent = lettersForRows[j] + (i+1);
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}



// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]
function placeBoat(){
			placementLocation = $('#placeBoats').val();
			rowPlacement = letterConversion[placementLocation.substring(0,1)];
			collumPlacement = placementLocation.substring(1,3) - 1;
			//building of the fiveBoat
			if(fiveBoat < 2){
			//first part of five long boat placed
			if(fiveBoat < 1){
			gameBoard[rowPlacement][collumPlacement] = 1;
			lastPlacedRow = rowPlacement;
			lastPlacedCollum = collumPlacement;
			fiveBoat++;
		  }
			else if(lastPlacedRow + 1 == rowPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement + 1][collumPlacement] = 1;
				gameBoard[rowPlacement + 2][collumPlacement] = 1;
				gameBoard[rowPlacement + 3][collumPlacement] = 1;
				fiveBoat++;
			}
			else if (lastPlacedRow - 1 == rowPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement - 1][collumPlacement] = 1;
				gameBoard[rowPlacement - 2][collumPlacement] = 1;
				gameBoard[rowPlacement - 3][collumPlacement] = 1;
				fiveBoat++;
			}
			else if(lastPlacedCollum + 1 == collumPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement + 1] = 1;
				gameBoard[rowPlacement][collumPlacement + 2] = 1;
				gameBoard[rowPlacement][collumPlacement + 3] = 1;
				fiveBoat++;
			}
			else if (lastPlacedCollum - 1 == collumPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement - 1] = 1;
				gameBoard[rowPlacement][collumPlacement - 2] = 1;
				gameBoard[rowPlacement][collumPlacement - 3] = 1;
				fiveBoat++;
			}
		}
		else if (fourBoat < 2){
			if(fourBoat < 1){
			gameBoard[rowPlacement][collumPlacement] = 1;
			lastPlacedRow = rowPlacement;
			lastPlacedCollum = collumPlacement;
			fourBoat++;
			}
			else if(lastPlacedRow + 1 == rowPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement + 1][collumPlacement] = 1;
				gameBoard[rowPlacement + 2][collumPlacement] = 1;
				fourBoat++;
			}
			else if (lastPlacedRow - 1 == rowPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement - 1][collumPlacement] = 1;
				gameBoard[rowPlacement - 2][collumPlacement] = 1;
				fourBoat++;
			}
			else if(lastPlacedCollum + 1 == collumPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement + 1] = 1;
				gameBoard[rowPlacement][collumPlacement + 2] = 1;
				fourBoat++;
			}
			else if (lastPlacedCollum - 1 == collumPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement - 1] = 1;
				gameBoard[rowPlacement][collumPlacement - 2] = 1;
				fourBoat++;
			}
		}
		else if (threeBoat < 4) {
			if(threeBoat < 1 || threeBoat == 2){
			gameBoard[rowPlacement][collumPlacement] = 1;
			lastPlacedRow = rowPlacement;
			lastPlacedCollum = collumPlacement;
			threeBoat++;
			}
			else if(lastPlacedRow + 1 == rowPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement + 1][collumPlacement] = 1;
				threeBoat++;
			}
			else if (lastPlacedRow - 1 == rowPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement - 1][collumPlacement] = 1;
				threeBoat++;
			}
			else if(lastPlacedCollum + 1 == collumPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement + 1] = 1;
				threeBoat++;
			}
			else if (lastPlacedCollum - 1 == collumPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				gameBoard[rowPlacement][collumPlacement - 1] = 1;
				threeBoat++;
			}
		}
		else if (twoBoat < 2) {
			if(threeBoat < 1 || threeBoat == 2){
			gameBoard[rowPlacement][collumPlacement] = 1;
			lastPlacedRow = rowPlacement;
			lastPlacedCollum = collumPlacement;
			twoBoat++;
			}
			else if(lastPlacedRow + 1 == rowPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				threeBoat++;
			}
			else if (lastPlacedRow - 1 == rowPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				threeBoat++;
			}
			else if(lastPlacedCollum + 1 == collumPlacement){
				gameBoard[rowPlacement][collumPlacement] = 1;
				twoBoat++;
			}
			else if (lastPlacedCollum - 1 == collumPlacement) {
				gameBoard[rowPlacement][collumPlacement] = 1;
				twoBoat++;
			}
		}
}

function fireTorpedo() {
		fireLocation = document.getElementById("fireTorpedo").value;
		console.log(fireLocation);
		document.getElementById("fireTorpedo").value = null;
		convertLetterToNumber = fireLocation.substring(0,1);
		convertLetterToNumber = letterConversion[convertLetterToNumber];
		console.log(convertLetterToNumber);
		collumNumber = fireLocation.substring(1,3) - 1;

		if(gameBoard[convertLetterToNumber][collumNumber] == 0){
			document.getElementById("s" + convertLetterToNumber + collumNumber).style.backgroundColor = "gray";
		  document.getElementById("winner").textContent = "Missed";
	  }
	  else if(gameBoard [convertLetterToNumber][collumNumber] == 1 && document.getElementById("s" + convertLetterToNumber + collumNumber).style.backgroundColor != "red" ) {
			document.getElementById("s" + convertLetterToNumber + collumNumber).style.backgroundColor = "red";
			hits++
			hitsDisplay--;
			document.getElementById("winner").textContent = hitsDisplay + " hit left";
		}
		random = Math.floor(Math.random() * 2);
		console.log(random);
		CheckGameOver();
		fire.play();
}
function CheckGameOver() {
	if (hits >= 17) {
		document.getElementById("gameboard").innerHTML = null;
		document.getElementById("winner").textContent = "You Win!";
		document.getElementById("winner").innerHTML += "<br><button onclick=" + "ReloadPage()" + ">Play Again?</button>"
	}
	else{

	}
}
function ReloadPage(){
	location.reload();
}
function randomNumber(n)
{
	return Math.floor(Math.random() * n)
}
function autoMaticBoat(){
	for(var ship = 0; ship < 5; ship++) {
		var size = shipSize[ship];// size of the ship
		var shipPoints = new Array(size);// grid points of ship
		var run = true;
		while(run){
				var x = randomNumber(10);// first coordinate of ship
				var y = randomNumber(10);// second coordinate of ship
				var d = randomNumber(4);// orientation of ship
				for (var i = 0; i < size ; i++) {// loop over points of ship
					var p = x + directions[d][0] * i;
					var q = y + directions[d][1] * i;
					shipPoints[i] = [p,q];// add point to ship
				}
				if (checkPoints(shipPoints) == 1) {// check if points are already used
					setPoints(shipPoints);// set point to one on the grid
					run = false;// done with this ship, move on to the next
				}
		}
	}
	/*
	console.log(gameBoard[0]);
	console.log(gameBoard[1]);
	console.log(gameBoard[2]);
	console.log(gameBoard[3]);
	console.log(gameBoard[4]);
	console.log(gameBoard[5]);
	console.log(gameBoard[6]);
	console.log(gameBoard[7]);
	console.log(gameBoard[8]);
	console.log(gameBoard[9]);
	*/
}
function checkPoints(points){
	for (var i = 0; i < points.length; i++) {
		var x = points[i][0];
		if (x < 0 || x > 9) {
			return 0;
		}
		var y = points[i][1];
		if( y < 0 || y > 9){
			return 0;
		}
		if (gameBoard[x][y] == 1) {
			return 0;
		}
	}
	return 1;
}
function setPoints(points){
	for (var i = 0; i < points.length; i++) {
		var x = points[i][0];
		var y = points[i][1];
		gameBoard[x][y] = 1;
	}
}
