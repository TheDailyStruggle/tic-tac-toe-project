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
                console.log(e);
            });
            gBoard.appendChild(square);
        }
    };

    const makeMove = (index, player) => {
        if (index >= 0 && index < board.length && board[index] === "") {
            board[index] = player;
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
