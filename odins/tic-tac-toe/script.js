/*
Gameboard = create, reset, placemarker	
Player
Controlloler = start, switch turn, check win, check draw, 
*/

const Gameboard = (() => {

  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]


  const getBoard = () =>  board

  const resetBoard = () => {
      board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  }
  
  const placeMarker = (row, col, marker) => {
  	if (board[row][col] === "") {
    	board[row][col] = marker;
      return true
    } else {
    	return false
    }
  }
  
  return { getBoard, resetBoard, placeMarker }
})();

const Player = (name, marker) => {
	return { name, marker}
}

const Controller = (() => {
	let player1, player2, currentPlayer;
  let gameover = false;
  
  const startGame = (name1, name2) => {
  	player1 = Player(name1 || "Player1", "X");
    player2 = Player(name2 || "Player2", "O");
    currentPlayer = player1;
    gameover = false;
    Gameboard.resetBoard();
  }
  
  const playTurn = (r, c) => {
  	if (gameover) return
    
    if(Gameboard.placeMarker(r, c, currentPlayer.marker)){
    	if (checkWinner()) {
      	console.log(`${currentPlayer.name} wins!`)
        gameover = true
      } else if (checkDraw()) {
        console.log("The game is a draw")
        gameover = true
      } else {
      	switchTurn();
        console.log("Switching turn")
      }
    }
  }
  
  const checkWinner = () => {
    const board = Gameboard.getBoard();
    const winPatterns = [
      [[0, 0], [0, 1], [0, 2]], // Rows
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]], // Columns
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]], // Diagonals
      [[0, 2], [1, 1], [2, 0]]
    ];

    return winPatterns.some(pattern =>
     pattern.every(([r, c]) => board[r][c] === currentPlayer.marker)
   	);
  };
  
  const checkDraw = () => {
  	return Gameboard.getBoard().flat().every(cell => cell !== "");
  }
  
  const switchTurn = () => {
  	currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
  
  return {startGame, playTurn, checkWinner, checkDraw}
})();


const DisplayController = (() => {
	
	const boardElem = document.getElementById("board");
  const startBtn = document.getElementById("start_btn");
  const reset = document.getElementById("reset_btn")
  
  startBtn.addEventListener("click", ()=> {
  console.log("clicked")
  	Controller.startGame()
    renderBoard();
    updateStatus();
  })
  
  const renderBoard = () => {
  	boardElem.innerHTML = "";
    const board = Gameboard.getBoard();
    console.log(board)
    
    board.forEach((row, r) => {
      console.log(typeof row, row)  
      row.forEach((cell, c) => {
          const cellElement = document.createElement("div");
          cellElement.classList.add("cell");
          cellElement.textContent = cell;
          cellElement.addEventListener("click", () => {
              Controller.playTurn(r, c);
              renderBoard();
              //updateStatus();
          });
          boardElem.appendChild(cellElement);
      });
    });
  }
  
  const updateStatus = () => {
  	
  }
})();


  


