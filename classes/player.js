class Player {
    constructor(team) {
        this.team = team;
    };

    getMove() {
        const move = prompt("Where would you like to place your counter?");
        return move;
    };
};

module.exports = {
    Player
};