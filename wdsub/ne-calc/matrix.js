// replace p1 and p2 numstrats with query parameters 
let queryParams = new URLSearchParams(window.location.search);
const P1_NUM_STRATS = Number(queryParams.get("p1NumStrats"));
const P2_NUM_STRATS = Number(queryParams.get("p2NumStrats"));
const PAYOFF_CONTENTS = "(<input type='number'><input type= 'number'>)";

buildMatrix();

function buildMatrix() {
  let matrix = document.getElementById("matrix");
  
  //loop through (P1_NUM_STRATS + 1) times. Each iteration , make a row div
  
  for (let i = 0; i < (P1_NUM_STRATS + 1); i++) {
    //create a new row div
     let newRow = document.createElement("div");
    newRow.classList.add("matrix-row");
   matrix.append(newRow);
    //loop through (P2_NUM_STRATS + 1) times. Each iteration, make a cell 
    for (let j = 0; j < (P2_NUM_STRATS +1); j++) {
      //create a new cell
      let newCell = document.createElement("div");
           if ( i==0 && j==0) {
        newCell.classList.add("empty-cell");
      } else if (i == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "t<sub>" + j +"</sub>";
      } else if (j == 0) {
        newCell.classList.add("strat-cell");
        newCell.innerHTML = "s<sub>" + i +"</sub>";
      } else  {
        newCell.classList.add("payoff-cell");
        newCell.innerHTML = PAYOFF_CONTENTS;
      }
      newRow.append(newCell);
 
    }
  }
  
}

function randomize () {
  let payoffArr = document.querySelectorAll(".payoff-cell input");
  const MIN = -5;
  const MAX = 50;
  
  for (const elem of payoffArr) {
    elem.value = Math.floor(Math.random() * (MAX -MIN) +MIN) ;
  }
}

function compute () {
 let p1PayArr = document.querySelectorAll(".payoff-cell input:first-child");
 let p2PayArr = document.querySelectorAll(".payoff-cell input:last-child");
  let p2CellArr = document.querySelectorAll(".payoff-cell");
  
  for (const elem of payCellArr) {
     if (elem.classList.contains("eliminated") == true ) elem.classList.add("ne");
     if (elem.classList.contains("ne") == true ) elem.classList.add("ne");
  }
  
  //loop through every every column, finding p1's highest payoff out of the rows
  
  for (let j = 0; j < P2_NUM_STRATS; j++) {
    
    let largest = -Infinity;
    
    //identify the highest payoff in this column
    for (let i = 0; i < P1_NUM_STRATS; i++) {
      if (number (p1PayArr[P2_NUM_STRATS*i + j ].value) > number(largest)) largest = p1PayArr[P2_NUM_STRATS*i + j ].value;
    }
    
    //eliminate any cells which arent best responses
   for (let i = 0; i < P1_NUM_STRATS; i++) {
      if (number (p1PayArr[P2_NUM_STRATS*i + j ].value) !=number(largest)) payCellArr[P2_NUM_STRATS*i+j].classList.add("eliminated");
  }
  }
  
  //loop through every row, finding p2's highest payoff out of the columns
  
  
  for (let i = 0; i < P1_NUM_STRATS; i++) {
    
    let largest = -Infinity;
    
    //identify the highest payoff in this column
    for (let j = 0; j < P2_NUM_STRATS; j++) {
      if (number (p2PayArr[P2_NUM_STRATS*i + j ].value) > number(largest)) largest = p2PayArr[P2_NUM_STRATS*i + j ].value;
    }
    
    //eliminate any cells which arent best responses
   for (let j = 0; j < P2_NUM_STRATS; j++) {
      if (number (p2PayArr[P2_NUM_STRATS*i + j ].value) !=number(largest)) payCellArr[P2_NUM_STRATS*i+j].classList.add("eliminated");
  }
  }
  
  // Give the ne class to any cells which are best responses for both players
  
  for (const elem of payCellArr) {
    if (elem.classList.contains("eliminated") == false ) elem.classList.add("ne");
  }
}



