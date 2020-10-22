
/* Square class */
class Square {
    constructor(content = 0) {
        this.content = content;
    };
}

/* Create board */

// Columns
//    i =       0           1           3
const a = new Array(3).fill(new Square());//(new[new Square(), new Square(1), new Square()];
const b = new Array(3).fill(new Square());
const c = new Array(3).fill(new Square());

// Grid of rows
const grid = [a, b, c];


const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// Get user input for square
const userInput = prompt("Give me a square, e.g: A2");
// Gets the letter
const row = rows.indexOf(userInput.charAt(0).toLowerCase());
// Gets the number
const column = parseInt(userInput.charAt(1));

// Finds the square
const square = grid[row][column];
console.log(square);


/*

OLD: Getting square according to user input (hard-coded)

*/
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


/* MAKE MOVE FUNCTION - Changes content of square */
// function move(from, to) {
//     from.content = 0;
//     to.content = 1;
// }

/* GRID UPDATE FUNCTION - Displays grid in console with updated content */
// function gridUpdate() {
//     grid.forEach((row) => {
//         let i = 0;
//         const squareValues = row.map((square) => {
//             i++;
//             return square.content;
//         });
//     console.log(squareValues);
//     });
// };

/* PLAY FUNCTION - Updates grid, gets squares, updates grid after loop */
// function play() {
//     for (let i = 0; i < 2; i++) {
//         gridUpdate();
//         const from = getSquare("from");
//         const to = getSquare("to");
//         move(from, to);
//     };
//     gridUpdate();
//     return "Game Over!";
// };

// // const end = play();
// // console.log(end);
// gridUpdate();







