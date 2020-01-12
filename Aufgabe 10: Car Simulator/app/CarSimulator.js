var carSimulator = (function () {
    var context;

    var CANVAS_WIDTH = 1200;
    var CANVAS_HEIGHT = 800;

    var CAR_WIDTH = 15;
    var CAR_HEIGHT = 5;

    var CAR_NUM = 100;
    var BG_COLOR = "black";

    var cars = [];

    function init(carCanvas) {
        context = carCanvas.getContext("2d");
        setupCars();
        window.requestAnimationFrame(draw);
    }

    function draw() {
        drawBackground();
        var policeLight = police();
        drawCars(policeLight);
        window.requestAnimationFrame(draw);
    }

    function drawBackground() {
        context.fillStyle = BG_COLOR;
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
    
    function police() {
        var red = Math.floor((Math.random() * (255 + 1)));
        var green = Math.floor((Math.random() * (255 + 1)));
        var blue = 200; //Math.floor((Math.random() * (155 + 100)));
        var alpha = 1;
        var color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        return color;
    }


    function setupCars() {
        for (var i = 0; i < CAR_NUM; i++) {
            var car = new Car(CAR_WIDTH, CAR_HEIGHT, CANVAS_WIDTH, CANVAS_HEIGHT, context);
            cars.push(car);
        }
    }

    function drawCars(color) {
        for (var i = 0; i < cars.length; i++) {
            cars[i].draw();
            cars[i].update();
            if (i % 5 == 0 && cars[i].speed > 5) {
                cars[i].color = color;
            }
        }
    }

    return {
        init: init
    }

})();