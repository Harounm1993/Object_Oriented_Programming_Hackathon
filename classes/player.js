class Player {
    constructor(team) {
        this.team = team;
        this.moves = [];
    };

    getMove() {
        const move = prompt("Where would you like to place your counter?");
        const playerData = [move, this.team];
        return playerData;
    };
};