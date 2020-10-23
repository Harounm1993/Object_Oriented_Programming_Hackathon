class Square {
    constructor() {
        this.content = '-'
    };

    changeContent(piece) {
        this.content = piece;
    };

    drawSquare() {
        (e) => {
            e.target.innerHTML = `<h2>${this.content}</h2>`;
        };
    };
};