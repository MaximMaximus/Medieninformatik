var coloredBalls = (function () {
    var context;

    var CANVAS_WIDTH = 700;
    var CANVAS_HEIGHT = 700;

    var mousePos;
    var drawOn;
    var timer;

    var balls = [];
    var filledBalls = true;
    var deleteBalls = true;

    var maxSize = 100;
    var growSpeed = 0.5;


    function setupButtons() {
        var fillButton = document.getElementById("fillButton");
        fillButton.addEventListener("click", function () {
            if (filledBalls === true) {
                filledBalls = false;
                fillButton.innerHTML = "Fill Color: Off";
            } else {
                filledBalls = true;
                fillButton.innerHTML = "Fill Color: On";
            }
        });
        var deleteBallsButton = document.getElementById("deleteBallsButton");
        deleteBallsButton.addEventListener("click", function () {
            if (deleteBalls === true) {
                deleteBalls = false;
                deleteBallsButton.innerHTML = "Delete Balls: Off";
            } else {
                deleteBalls = true;
                deleteBallsButton.innerHTML = "Delete Balls: On";
            }
        });
    }

    function setupSlider() {
        var sizeSlider = document.getElementById("maxSizeSlider");
        var sizeOutput = document.getElementById("sizeSliderValue");
        sizeSlider.oninput = function () {
            maxSize = this.value;
            sizeOutput.innerHTML = "Max Size: " + this.value;
            //removeBalls();
        }
        var speedSlider = document.getElementById("speedSlider");
        var speedOutput = document.getElementById("speedValue");
        speedSlider.oninput = function () {
            growSpeed = this.value / 10;
            speedOutput.innerHTML = "Max Speed: " + this.value;
            //removeBalls();
        }
    }


    function init(canvas) {
        setupButtons();
        setupSlider();
        context = canvas.getContext('2d');
        canvas.addEventListener("click", function (evt) {
            mousePos = getMousePos(canvas, evt);
            createBall(mousePos);
        });
        canvas.addEventListener("mousedown", function (evt) {
            mousePos = getMousePos(canvas, evt);
            timer = setInterval(function () {
                createBall(mousePos);
            }, 100);
            drawOn = true;
        });
        canvas.addEventListener("mousemove", function (evt) {
            if (drawOn === true) {
                mousePos = getMousePos(canvas, evt);
                createBall(mousePos);
            }
        });
        canvas.addEventListener("mouseup", function () {
            if (timer) clearInterval(timer);
            drawOn = false;
        });
        window.requestAnimationFrame(draw);
    }

    function createBall() {
        var ball = new Ball(mousePos.x, mousePos.y, context, maxSize, growSpeed);
        balls.push(ball);
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.floor(evt.clientX - rect.left),
            y: Math.floor(evt.clientY - rect.top)
        };
    }

    function draw() {
        drawBackground();
        drawBalls();
        drawFrame();
        window.requestAnimationFrame(draw);
    }

    function drawBalls() {
        for (var i = 0; i < balls.length; i++) {
            balls[i].draw();
            balls[i].update();
            if (deleteBalls === true && balls[i].delete === true) {
                balls.splice(i, 1);
            }
            if (balls[i] != undefined) {
                balls[i].fillBall = filledBalls;
            }
        }
    }

    function removeBalls() {
        balls = [];
    }

    function drawBackground() {
        context.fillStyle = "black";
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    function drawFrame() {
        context.strokeStyle = "#ffffff";
        context.lineWidth = 5;
        context.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        context.lineWidth = 1;
    }

    return {
        init: init
    }

})();
