window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3",
        "#d36060"
    ];
    const keyArray = [65, 83, 68, 70, 71, 72, 74];
    const body = document.querySelector('body');

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createVisual(index);
            console.log(pad.classList + " is pressed");
            pad.classList.add('flash');
            pad.addEventListener('animationend', function () {
                pad.classList.remove('flash');
            });
        });
        //
        body.addEventListener("keydown", function (e) {
            var key = e.which || e.keyCode;
            if (key === keyArray[index]) {
                sounds[index].currentTime = 0;
                sounds[index].play();
                createVisual(index);
                console.log(key + " is pressed");
                pad.classList.add('flash');
                pad.addEventListener('animationend', function () {
                    pad.classList.remove('flash');
                });
            }
        });
    });

    const createVisual = (index) => {
        const anim = document.createElement("div");
        visual.appendChild(anim);
        anim.style.backgroundColor = colors[index];
        anim.style.animation = 'jump 1s ease';
        anim.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});