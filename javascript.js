const squares = document.querySelectorAll('.square');
const gBoard = document.getElementById('gameBoard');

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const getBoard = () => {
        return board;
    };

    const displayBoard = () => {
        gBoard.innerHTML = "";
        for (let i = 0; i < board.length; i++) {
            const square = document.createElement("div");
            square.classList.add('square');
            square.id = i.toString();
            square.innerText = board[i];
            square.addEventListener("click", e => {
                let index = e.target.id;
                let player = currentPlayer.symbol;
                makeMove(index, player);
            });
            gBoard.appendChild(square);
        }
    };

    const makeMove = (index, player) => {
        if (index >= 0 && index < board.length && board[index] === "") {
            board[index] = player;
            displayBoard();
            checkWin(gameBoard.getBoard(), currentPlayer.symbol);
            togglePlayer();
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
        }
    };

    return {
        getBoard,
        displayBoard,
        makeMove,
        resetBoard,
    };
})();

// Create Players

function Player(name, symbol) {
    this.name = name;
    this.symbol = symbol;

};

p1Name = prompt('Player 1, please enter your name');
p2Name = prompt('Player 2, please enter your name');
let p1Symbol = "X";
let p2Symbol = "O";

const p1 = new Player(p1Name, p1Symbol);
const p2 = new Player(p2Name, p2Symbol);


gameBoard.displayBoard();


//Making Moves

let currentPlayer = p1;

const togglePlayer = function () {
    currentPlayer = currentPlayer === p1 ? p2 : p1;
    return currentPlayer;
};


// Check Win

const checkWin = (board, symbol) => {

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
            // display win
            console.log(`${symbol} Wins!`)
        }
    };

};
