
const squaresNodeList  = document.querySelectorAll(".square");
const squares = Array.from(squaresNodeList);
const squaresListeners = squares.map((square) => {
    square.addEventListener('click', () => {
        square.innerHTML = `<h2>x</h2>`;
    });
});

const game = new Game(['X', 'O']);
game.play();