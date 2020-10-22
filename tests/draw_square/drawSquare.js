class Square {
    constructor() {
        this.fill = true;
    };

    draw() {
        const canvas = document.createElement("canvas");
        //canvas.id = squareID;
        const ctx = canvas.getContext("2d");
        let fill = "white";
        if (this.fill === true) {
            fill = "black";
        };
        ctx.fillRect(0, 0, 50, 50);
        canvas.addEventListener("click", () => console.log("Success"));
        document.body.appendChild(canvas);
    };
};

const square = new Square();
square.draw();