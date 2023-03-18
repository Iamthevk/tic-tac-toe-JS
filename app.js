 const gameBoard = document.querySelector("#gameboard")
 const infoDisplay =  document.querySelector("#info")

 // declared an array containing 9 array elements that willbe our cell in the board
 const startCells = [
    "","","","","","","","",""
 ]

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
    console.log(e.target)
    const displayIcon = document.createElement("div")
    displayIcon.classList.add("circle")
    e.target.append(displayIcon)
 }