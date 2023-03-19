const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

// declared an array containing 9 array elements that willbe our cell in the board
const startCells = ["", "", "", "", "", "", "", "", ""];
infoDisplay.textContent = "Circle go first";

let activeIcon = "circle";

//here with this function we are creating board and gave index to each 9 cell in board
function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addMark);
    gameBoard.append(cellElement);
  });
}
createBoard();

// when we click on cell the below function will call & append Icon to the cell in Board
function addMark(e) {
  // console.log(e.target)
  const displayIcon = document.createElement("div");
  displayIcon.classList.add(activeIcon);
  e.target.append(displayIcon);
  activeIcon = activeIcon === "circle" ? "cross" : "circle";
  infoDisplay.textContent = "its now " + activeIcon + "'s turn";
  // we have to add remove event so user can't click again on selected cell
  e.target.removeEventListener("click", addMark);
  checkScore();
}

function checkScore() {
  const squares = document.querySelectorAll(".square");

  //here is the winning combos
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombos.forEach((array) => {
    //if winningCombos array with class circle matches then circle wins
    const circleWins = array.every((cell) =>
      squares[cell].firstChild?.classList.contains("circle")
    );
    if (circleWins) {
      infoDisplay.textContent = "Circle Wins";
      squares.forEach((square) => square.replaceWith(square.cloneNode(true)));
      return;
    }

    //if winningCombos array with cross matches then cross wins
    const crossWins = array.every((cell) =>
      squares[cell].firstChild?.classList.contains("cross")
    );
    if (crossWins) {
      infoDisplay.textContent = "Cross Wins";
      squares.forEach((square) =>  square.replaceWith(square.cloneNode(true)));
      return;
    }
  });
}
