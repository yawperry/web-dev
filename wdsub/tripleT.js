let gameOverDiv = document.getElementById("gameover");
let winnerText = document.querySelector("#gameover p");
let squareArr = document.querySelectorAll(".ttt-square");
let currentPlayer = "X"; 


console.log(squareArr);

for (const elem of squareArr) {
  elem.addEventListener("click",(event) => drawSymbol(event) ); 
}

function drawSymbol(event) {
 let clickedSquare =  event.target;
  
  
  if (clickedSquare.innerText == "") {
    clickedSquare.innerText = currentPlayer;
    if (checkWinner() == false) checkForDraw();
    changePlayer(); 
  }
}
  

function changePlayer() {
  if (currentPlayer == "X") {
     currentPlayer = "O";
  } else  {
    
    currentPlayer = "X";
  }
}

function checkWinner() {
  let isOver = false;
  
  //check for three in a row
  for (let i = 0; i < 3; i++) {
     if (squareArr[i * 3].innerText == currentPlayer
      && squareArr[i * 4].innerText == currentPlayer
      && squareArr[i * 3 + 1].innerText == currentPlayer) isOver = true;
 }
    
  //check for three in a column
  for (let i = 0; i < 3; i++){  
    if (squareArr[i].innerText == currentPlayer
      && squareArr[i + 3].innerText == currentPlayer
      && squareArr[i + 6].innerText == currentPlayer) isOver = true;
   }
  
  //check for three diagonally
  if (squareArr[0].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[8].innerText == currentPlayer) isOver = true;
  
  else if (squareArr[2].innerText == currentPlayer
      && squareArr[4].innerText == currentPlayer
      && squareArr[6].innerText == currentPlayer) isOver = true;
  
  if (isOver) showWinner();
  return isOver;
}



function showWinner() {
  gameOverDiv.style.display = "block";        
  winnerText.innerText = currentPlayer + " player has won ";
}

function clearBoard() {
  //hide gameoverdiv 
  gameOverDiv.style.display = "none";        

  //clear symbols off of the board
  for (const elem of squareArr) {
    elem.innerText = "";
  }
}

function checkForDraw() {
  let isDraw = true;
 for(const elem of squareArr) {
  if (elem.innerText == "") isDraw = false;
 }
   if (isDraw) showDraw();
  
}


function showDraw() {
    gameOverDiv.style.display = "block";
    winnerText.innerText = "Draw";
}
