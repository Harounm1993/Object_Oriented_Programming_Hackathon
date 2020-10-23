
/* Square class */
class Square {
    constructor(content = '-') {
        this.content = content;
    };
}

/* CREATE BOARD - Array of arrays. Each row labelled by letter, so can be compared to user text input, e.g: A2 */
const newRow = (n) => () => new Array(n).fill('').map(() => new Square());
const grid = new Array(3).fill('').map(newRow(3));
const rowLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

/* Determines square targeted by user text input */
function getSquare(arg) {
    let targetSquare;
    if (arg === "from") {
        targetSquare = prompt("Which piece do you want to move?");
    }
    if (arg === "to") {
        targetSquare = prompt("Where do you want to move to?");
    }
    const targetSquareRow = rowLabels.indexOf(targetSquare.charAt(0).toLowerCase());
    const squareInRow = parseInt(targetSquare.charAt(1));

    return grid[targetSquareRow][squareInRow - 1];
};

/* Changes content of square */
function move(from, to) {
    // from.content = 0;
    to.content = 'X';
}

/* Displays grid in console with updated content */
function gridUpdate() {
    grid.forEach((r) => {
        let i = 0;
        const squareValues = r.map((square) => {
            i++;
            return square.content;
        });
    console.log(squareValues);
    });
};

/* Game start. Updates grid, gets squares, updates grid after loop */
function play() {
    for (let i = 0; i < 2; i++) {
        gridUpdate();
        const from = getSquare("from");
        const to = getSquare("to");
        move(from, to);
    };
    gridUpdate();
    return "Game Over!";
};

const end = play();
console.log(end);
gridUpdate();





/* OLD CODE */


/* Columns */

// //    i =       0           1           3
// const a = new Array(3).fill(new Square());//(new[new Square(), new Square(1), new Square()];
// const b = new Array(3).fill(new Square());
// const c = new Array(3).fill(new Square());

// // Grid of rows
// const grid = [a, b, c];



/* Get user input for square */

// const userInput = "A2";
// // Gets the letter
// const targetRow = rowLabels.indexOf(userInput.charAt(0).toLowerCase());
// // Gets the number
// const targetColumn = parseInt(userInput.charAt(1));

// // Finds the square
// const square = grid[targetRow][targetColumn];
// console.log(square);



/* Getting square according to user input (hard-coded) */

// function getSquare(arg) {
//     let whatToMove;
//     if (arg === "from") {
//         whatToMove = prompt("Which piece do you want to move?");
//     }
//     if (arg === "to") {
//         whatToMove = prompt("Where do you want to move to?");
//     }
//     const row = whatToMove.charAt(0).toLowerCase();
//     const squareInRow = parseInt(whatToMove.charAt(1));

//     if (row === 'a') {
//         return a[squareInRow -1];
//     }
//     if (row === 'b') {
//         return b[squareInRow - 1];
//     };
//     if (row === 'c') {
//         return c[squareInRow - 1];
//     };
// };