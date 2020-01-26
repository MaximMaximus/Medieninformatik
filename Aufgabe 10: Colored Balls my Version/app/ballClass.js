class Ball {
  constructor(xPos, yPos, context, maxSize, growSpeed) {
    this.context = context;
    this.xPos = xPos;
    this.yPos = yPos;
    this.maxSize = (Math.random() * maxSize);
    this.ballSize = 0;
    this.growSpeed = growSpeed;
    this.color = this.randomColor();
    this.delete = false;
    this.fillBall = true;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.strokeStyle = "blue";
    this.context.beginPath();
    this.context.arc(this.xPos, this.yPos,
      Math.abs(this.ballSize / 2), 0, 2 * Math.PI);
    this.context.stroke();
    if (this.fillBall === true) {
      this.context.fill();
    }
  }

  update() {
    this.ballSize += this.growSpeed;
    if (this.ballSize >= this.maxSize) {
      this.growSpeed *= -1;
    }
    if (this.ballSize <= 0) {
      this.delete = true;
      this.growSpeed *= -1;
    }
  }

  randomColor() {
    var red = Math.floor((Math.random() * (255 + 1)));
    var green = Math.floor((Math.random() * (255 + 1)));
    var blue = Math.floor((Math.random() * (255 + 1)));
    var alpha = Math.random();
    var color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
    return color;
  }

}