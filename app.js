 const gameBoard = document.querySelector("#gameboard")
 const infoDisplay =  document.querySelector("#info")

 // declared an array containing 9 array elements that willbe our cell in the board
 const startCells = [
    "","","","","","","","",""
 ]
 infoDisplay.textContent = "Circle go first";

 let activeIcon = "circle"

 //here with this function we are creating board and gave index to each 9 cell in board
 function createBoard() {
    startCells.forEach((cell,index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addMark)
        gameBoard.append(cellElement)
    })
 }
 createBoard()

 // when we click on cell the below function will call & append Icon to the cell in Board
 function addMark(e){
    // console.log(e.target)
    const displayIcon = document.createElement("div")
    displayIcon.classList.add(activeIcon)
    e.target.append(displayIcon)
    activeIcon = activeIcon === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "its now " + activeIcon + "'s turn"
    // we have to add remove event so user can't click again on selected cell
    e.target.removeEventListener("click", addMark)
 }