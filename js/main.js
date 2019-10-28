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


//player 1 and 2
const playerX = "X";
const playerO = "O";

//possible winning combinations
let winningArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[0,4,8]];
//(b) return queried array instead of list
const grid = () => Array.from(document.querySelectorAll(".box"));


//logging event 

//turn boxid from string to number to get rid of the idx part
const boxIdx = (boxEl) => Number.parseInt(boxEl.id.replace(".box",""));
//add array that returns empty boxes- the inner text of elements will be an empty string
const emptyBox = () => grid().filter(boxEl => boxEl.textContent === "");
//tells us if the items in the first item of the array are the same (Xs and Os) except for if they are empty
const isEqual = (arr) => arr.every(boxEl => boxEl.textContent === arr[0] && boxEl.textContent !== "");

//finds what box the letter will be put in by the index of the box
const playerTurn = (index,letter) => grid()[index].textContent = letter;

//logging the event
//const clickEvt = (evt) => console.log(evt.target);
//first opponent is logging x-- loop?
const clickEvt = (evt) => {
  playerTurn(boxIdx(evt.target), playerTurn);
}

//forEach method on the above returned array (b)
const listenForClick = () => grid().forEach(boxEl => boxEl.addEventListener("click", clickEvt));

//call function
listenForClick();

