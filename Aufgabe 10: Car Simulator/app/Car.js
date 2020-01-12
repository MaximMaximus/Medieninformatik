class Car {
    constructor(carWidth, carHeight, canvasWidth, canvasHeight, context) {
        this.MAX_SPEED = 10;

        this.carWidth = carWidth;
        this.carHeight = carHeight;

        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.context = context;

        this.color = this.createRandomColor();
        this.speed = this.calculateRandomSpeed();

        this.yPos = this.createRandomLane();
        this.xPos = Math.random() * this.canvasWidth;
    }

    createRandomColor() {
        var red = Math.floor((Math.random() * (255 + 1)));
        var green = Math.floor((Math.random() * (255 + 1)));
        var blue = Math.floor((Math.random() * (255 + 1)));
        var alpha = Math.random();
        var color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        return color;
    }

    calculateRandomSpeed() {
        var speed = Math.floor((Math.random() * (this.MAX_SPEED + 2)));
        return speed;
    }

    createRandomLane() {
        var yPos = ((Math.random() * (this.canvasHeight + 1)));
        return yPos;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.xPos, this.yPos, this.carWidth, this.carHeight);
    }

    update() {
        this.xPos += this.speed < 1 ? 1 : this.speed;
        //this.xPos = this.xPos > this.canvasWidth + this.carWidth ? -this.carWidth : this.xPos;
        if (this.xPos > this.canvasWidth + this.carWidth) {
            this.xPos = -this.carWidth;
            this.color = this.createRandomColor();
            this.speed = this.calculateRandomSpeed();
            this.yPos = this.createRandomLane();
        }
    }
}