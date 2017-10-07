//JS code goes here

//for checking blocks in the game that have been clicked once
var clicked = [
false, false, false,
false, false, false,
false, false, false
];

//to keep the marks of the players;
var mark = [
  0,0,0,0,0,0,0,0,0
]
//the winning-combinations
var endGame = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
	[0,4,8],
	[2,4,6]
];

//to set turns
var turn = true;

//to know when the game's over
var gameOver = false;

//win counts
var p1wins=0;
var p2wins=0;

/*function play(event) {
  console.log(event);
  event.target.innerHTML = turn? "O" : "X";
  turn = !turn;
}*/

function play(event){
	var element = event.target;

	if ( clicked[element.id] === false && gameOver === false ) {

    element.innerHTML = turn ? "X" : "O";
    mark[element.id] = turn? 1 : 2;
    clicked[element.id] = true;
		turn = !turn;

		console.log(clicked);
    console.log(mark);
		//console.log(event);

		var result = checkEndGame();

		if (result === 1) {
      p1wins++;
			console.log("Player 1 wins!");
      document.getElementById('pi').innerHTML = p1wins;
      document.getElementById('pone').innerHTML = p1wins;
			document.getElementById('gstatus').innerHTML = "Player 1 wins!";
			gameOver = true;
      setTimeout(newGame, 2*1000);
		}
		if (result === 2) {
      p2wins++;
			console.log("Player 2 wins!");
      document.getElementById('pii').innerHTML = p2wins;
      document.getElementById('ptwo').innerHTML = p2wins;
			document.getElementById('gstatus').innerHTML = "Player 2 wins!";
			gameOver = true;
      setTimeout(newGame, 2*1000);
		}
		if (result === 0) {
			console.log("Tie");
			document.getElementById('gstatus').innerHTML = "It's a Tie!";
			gameOver = true;
      setTimeout(newGame, 2*1000);
		}
		if (result === false) {
			document.getElementById('gstatus').innerHTML = "Game in Progress";
			console.log("Continue game");
		}
	}
}

function checkEndGame() {
	for (var i = 0; i < endGame.length; i++) {
		if (
			clicked[endGame[i][0]] !== false &&
			clicked[endGame[i][1]] !== false &&
			clicked[endGame[i][2]] !== false
		) {
			if ( mark[endGame[i][0]] === mark[endGame[i][1]] && mark[endGame[i][1]] === mark[endGame[i][2]] ) {
				if ( mark[endGame[i][0]] === 1) {
					//player 1 wins
					return 1;
				}
				if ( mark[endGame[i][0]] === 2) {
					//player 2 wins
					return 2;
				}
			}
		}
	}

	//check tie
  var tie = true;
	for (var i = 0; i < clicked.length; i++) {
		if (clicked[i] === false) {
      tie = false;
      break;
		}
	}

	if (tie === true) {
		return 0;
	}
//return to continue game
	return false;
}

function restart (event){
	for(var i = 0; i < clicked.length; i++){
		if( clicked[i] !== false ) {
			document.getElementById(i).innerHTML = '';
			clicked[i] = false;
      mark[i] = 0;
		}
	}
	turn = true;
	gameOver = false;
  p1wins = 0;
  p2wins = 0;
  document.getElementById('pi').innerHTML = p1wins;
  document.getElementById('pone').innerHTML = p1wins;
  document.getElementById('pii').innerHTML = p2wins;
  document.getElementById('ptwo').innerHTML = p2wins;
	document.getElementById("gstatus").innerHTML = "New Game";
}

function newGame (event){
	for(var i = 0; i < clicked.length; i++){
		document.getElementById(i).innerHTML = '';
		clicked[i] = false;
    mark[i] = 0;
	}
	turn = true;
	gameOver = false;
	document.getElementById("gstatus").innerHTML = "New Game";
}

//var cell0 = document.getElementById("0");
//cell0.addEventListener('click',play);
