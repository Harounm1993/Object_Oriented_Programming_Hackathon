// const { Square } = require("./square");
// const { Player } = require("./player");

class Board {
    constructor() {
        this.grid = [];
        this.rowLabels = ['a', 'b', 'c'];
    };

    createBoard() {
        const newRow = (n) => () => new Array(n).fill('').map(() => new Square());
        this.grid = new Array(3).fill('').map(newRow(3));
    };

    getSquare(targetSquare) {
        const targetSquareRow = this.rowLabels.indexOf(targetSquare.charAt(0).toLowerCase());
        const squareInRow = parseInt(targetSquare.charAt(1));

        return this.grid[targetSquareRow][squareInRow - 1];
    };

    changeSquare(targetSquare, counterType) {
        const square = this.getSquare(targetSquare);
        square.changeContent(counterType);
    };

    gridUpdate() {
        console.clear();
        this.grid.forEach((r) => {
            let i = 0;
            const squareValues = r.map((square) => {
                i++;
                return square.content;
            });
        console.log(squareValues);
        });
    };

    // drawBoard() {
    //     const boardContainer = document.querySelector("#board-container");
    //     boardContainer.innerHTML = '';
    //     boardContainer.appendChild(addSquare());
    // };
    
    // addSquare() {
    //     const square = document.createElement("div");
    //     square.classList.add('square');
    //     return square;
    // };
};