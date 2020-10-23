class Game {
    constructor(counters) {
        this.players = counters.map((counter) => new Player(counter));
        this.board = new Board();
        this.currentPlayerIndex = 0;
        this.playerMoves = [this.players[0].moves, this.players[1].moves];
    }

    play() {
        const board = new Board();
        board.createBoard();
        for (let i = 0; i < 9; i++) {
            let playerData = this.players[this.currentPlayerIndex].getMove();
            board.changeSquare(playerData[0], playerData[1]);
            board.gridUpdate();
            if (this.winCheck(playerData[0]) === true) {
                console.log(`${playerData[1]} IS THE WINNER!`);
                return;
            };
            this.currentPlayerIndex++;
            if (this.currentPlayerIndex === this.players.length) {
                this.currentPlayerIndex = 0;
            };
        };
        console.log("NO WINNER!");
    };

    winCheck(move) {
        this.playerMoves[this.currentPlayerIndex].push(move);
        let checkByColumn, checkByRow;
        for (let i = 1; i <= 3; i++) {
            const columnIndexes = ['A', 'B', 'C'];
            const columnIndex = columnIndexes[i - 1];
            checkByColumn = this.playerMoves[this.currentPlayerIndex].filter((move) => move.charAt(1) === `${i}`);
            checkByRow = this.playerMoves[this.currentPlayerIndex].filter((move) => move.charAt(0) === `${columnIndex}`);

            if (checkByColumn.length === 3 || checkByRow.length === 3) {
                return true;
            };
        };
    };
};