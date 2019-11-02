// 1) Define required constants



// 2) Define required variables used to track the state of the game

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// 5) Handle a player clicking a square

// 6) Handle a player clicking the replay button


// let player1= "O";
// let player2= "X";

// // var PlayerTurn = function() {

// // }

// // document.querySelectorAll("table").addEventListener("click", function(evt) {
// //   let target = evt.target;
// //   console.log(evt); 
// // //   target.ba
// // });

// // var table = document.getElementsByClassName('gameTable');
// // var box = document.querySelector('TD');

// // handleClick();

// // table.addEventListener("click", handleClick);
// // function handleClick(evt) {
// //     console.log(evt);
// // }

// const btn = document.querySelector('button');
//  btn.addEventListener('click', function(evt) {
//    // testing!
//    console.log(evt);  
//  });

// // const box = document.getElementsByClassName("boxes");

// // box.addEventListener('click', function(evt) {
// //     console.log(evt);
// // });

// document.querySelector('table')
//    .addEventListener('click', handleClick);
 
//  function handleClick(evt) {
//    console.log(evt);
//  }



// let index0 = document.getElementById(idx0)
// let index1 = document.getElementById(idx1)
// let index2 = document.getElementById(idx2)
// let index3 = document.getElementById(idx3)
// let index4 = document.getElementById(idx4)
// let index5 = document.getElementById(idx5)
// let index6 = document.getElementById(idx6)
// let index7 = document.getElementById(idx7)
// let index8 = document.getElementById(idx8)


// if ((array[0] === array[1] === array[2]) || (array[3] === array[4] === array[5]) || (array[6] === array[7] === array[8])) {
//   console.log('Horizontal Win!');
// } if else ((array[0] === array[3] === array[6]) || (array[1] === array[4] === array[7]) || (array[2] === array[5] === array[8])) { 
//   console.log('Vertical Win!');
// } if else ((array[0] === array[4] === array[8]) || (array[6] === array[4] === array[2])) {
//   console.log('Diagonal Win!');
// };

// if ((index0 === index1 === index2) || (index3 === index4 === index5) || (index6 === index7 ===index8)){
//     console.log('Horizontal Win!');
// } 
// if ((index0 === index3 === index6) || (index1 === index4 === index7) || (index2 === index5 ===index8)){
//     console.log('Vertical Win!');
// }
// if ((index0 === index4 === index8) || (index6 === index4 ===index2)){
//     console.log('Diagonal Win!');
// }


// //player 1 and 2
// const player1 = ();
// const player2 = ();

// const playerTurn = ();

// //possible winning combinations
// let winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[0,4,8]];
// //(b) return queried array instead of list
// const grid = () => Array.from(document.querySelectorAll(".box"));


// //logging event 

// //turn boxid from string to number to get rid of the idx part
// const boxIdx = (boxEl) => Number.parseInt(boxEl.id.replace(".box",""));
// //add array that returns empty boxes- the inner text of elements will be an empty string
// const emptyBox = () => grid().filter(boxEl => boxEl.textContent === "");
// //tells us if the items in the first item of the array are the same (Xs and Os) except for if they are empty
// const isEqual = (arr) => arr.every(boxEl => boxEl.textContent === arr[0] && boxEl.textContent !== "");

// //finds what box the letter will be put in by the index of the box
// const playerTurn = (index,playerx => grid()[index].textContent = playerx;

// //logging the event
// //const clickEvt = (evt) => console.log(evt.target);
// //first opponent is logging x-- loop?
// const clickEvt = (evt) => {
//   playerTurn(boxIdx(evt.target), playerTurn);
// }

// //forEach method on the above returned array (b)
// const listenForClick = () => grid().forEach(boxEl => boxEl.addEventListener("click", clickEvt));

// //call function
// listenForClick();

// const ticTacToe = new TicTacToe();
// ticTacToe.start()

// function TicTacToe() {
// var playerTurn = 0;
// const newBoard = new Board();
// const playerOne = new PlayerOne();

// this.start = function() {
// const config = { childList: true}; //looking for changes in the divs
// const observe = new MutationObserver(() => playerTurn());
// newBoard.indexes.forEach((el) => observe.observe(el, config));
// }

// function playerTurn() {
//   console.log("something happened.")
// }
// } 

// function Board() {
//   this.indexes = Array.from(document.querySelectorAll('.box'));
//   console.log(this.indexes);

// }
// function PlayerOne() {

// }
// function PlayerTwo() {

// }

// const max_number_plays = 9;
// const EMPTY = " ";
// const winCombo = [  
//     ["one", "two", "three"],
//     ["four", "five", "six"],
//     ["seven", "eight", "nine"],
//     ["one", "four", "seven"],
//     ["two", "five", "eight"],
//     ["three", "six", "nine"],
//     ["one", "five", "nine"],
//     ["three", "five", "seven"],
//  ];



// const playerO = "O";
// const playerX = "X";

// /*----- app's state (variables) -----*/

// let playLetter = []; let playCount = []; let playCombo = [];


// /*----- cached element references -----*/
// let message = document.getElementById('message');
// let turn = document.getElementById('turn');
// let td = document.querySelectorAll('td');
// let gameBoard = document.getElementById('tictactoe');
// let turnEl = document.getElementById('turn');


// /*----- event listeners -----*/

// document.getElementById('tictactoe')
//     .addEventListener('click', handleTDClick);

// document.getElementById('replay')
//     .addEventListener('click', rePlay);

    
// /*----- functions -----*/
// // init();

// function handleTDClick(evt) {
//     let playLetter = document.getElementById(evt.path["0"].id);
//     playCount.push(evt.target.value);
//     renderTurnMessage();
//     if (playLetter.textContent === ("X")) {
//         return 
//     } else if (playLetter.textContent === ("O")) {
//         return 
//     } 
//     else if (playCount.length % 2 === 1) {
//         playLetter.textContent = "X";
//         console.log(playLetter.textContent);
//     } else if (playCount.length % 2 === 0) {
//         playLetter.textContent = "O";
//         console.log(playLetter.textContent);
//     // } else if (playLetter.textContent === "X" || "O") {
//     //  return   
//     // }

//     }
//  return   
// };
 
//     // to resolve:
//     // alternating message consistent with clicks
//     // tds disappear when player clicks away from td but in grid section
    



// function renderTurnMessage() {
//     return (playCount.length % 2 ? turnEl.innerHTML = `Your turn: <br> Player O` : turnEl.innerHTML = `Your turn: <br> Player X`)
// }
        
// // create a message for winner
        
// // replay button clears the gameboard
// function rePlay() {
//     playCount = []; 
//     td.forEach(function(box) {
//         box.textContent = EMPTY;
//     } );
//     turnEl.innerHTML = `Your turn: <br> Player X`;
// }


// // create separate arrays for O and X position plays
// // compare with winning count
// // cannot strictly compare array
// // create loop to compare values 

// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }

var origBoard;
const playerOne = 'O';
const playerTwo = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

const boxes = document.querySelectorAll('.box');

startGame();

//adding event listener to the board
function startGame() {
	document.querySelector(".endgame")
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].innerText = ''; //sqaures that are blank
		boxes[i].style.removeProperty('background-color');
		boxes[i].addEventListener('click', turnClick, false);
	}
}
//player turn to check 
function turnClick(square) {
	if (typeof origBoard[square.target.id] == 'number') {
		turn(square.target.id, playerOne)
		if (!checkTie()) turn(bestSpot(), playerTwo);
	}
}
//need to sfigure out how to switch turns to player two
function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player)
	if (gameWon) gameOver(gameWon)
}
//checking for winner
function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == playerOne ? "grey" : "red";
	}
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].removeEventListener('click', turnClick, false);
	}
	declareWinner(gameWon.player == playerOne ? "Congrats, you win!" : "Sorry, you lose.");
}// display message after player wins

function declareWinner(who) {
	document.querySelector(".endgame").style.display = "block";
	document.querySelector(".endgame .text").innerText = who;
}

function emptySquares() {
	return origBoard.filter(s => typeof s == 'number');
}

function bestSpot() {
	return emptySquares()[0];
}
// need to figure out how to make pop up box go away when board resets
function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].style.backgroundColor = "yellow";
			boxes[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;
	}
	return false;
}
//this was the hardest thing ive ever done in my life for some reason