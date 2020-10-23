const { Square } = require("./square");

class Board {
    constructor() {
        this.grid = [];
        this.rowLabels = ['a', 'b', 'c'];
    };

    createBoard() {
        const newRow = (n) => () => new Array(n).fill('').map(() => new Square());
        this.grid = new Array(3).fill('').map(newRow(3));
    };

    getSquare(arg) {
        let targetSquare;
        if (arg === "from") {
            targetSquare = "A2";//prompt("Which piece do you want to move?");
        }
        if (arg === "to") {
            targetSquare = "B3";//prompt("Where do you want to move to?");
        }
        const targetSquareRow = this.rowLabels.indexOf(targetSquare.charAt(0).toLowerCase());
        const squareInRow = parseInt(targetSquare.charAt(1));

        console.log(this.grid[targetSquareRow][squareInRow - 1]);
    };

    changeSquare(square) {
        square.changeContent();
    };

    gridUpdate() {
        this.grid.forEach((r) => {
            let i = 0;
            const squareValues = r.map((square) => {
                i++;
                return square.content;
            });
        console.log(squareValues);
        });
    };
};

function move(to) {
    to.content = 'X';
}

const board = new Board();
board.createBoard();
board.getSquare("to");

board.gridUpdate();