"use strict";
let stopped = true;
let timerInterval;
let seconds = 1;
let minutes = 0;

function stopClick() {
    let stop = document.getElementById("stop");
    seconds = 1;
    minutes = 0;
    stopped = true;
    clearInterval(timerInterval);
    pause.innerText = "\u{27A4}";
    let time = document.getElementById("time");
    time.innerText = "0:0";
}

function pauseClick() {
    stopped = !stopped;
    let pause = document.getElementById("pause");
    if (stopped) {
        clearInterval(timerInterval);
        pause.innerText = "\u{27A4}";
    } else {

        Timer();
        pause.innerHTML = "||";
    }
}

function SliderButtonClick(id) {
    let button = document.getElementById(id);
    let footer = document.getElementById("footer");
    for (let child of footer.children) {
        if (child.id != id) child.className = "slider-button";
        else child.classList += " active";
    }
}

function Timer() {
    let time = document.getElementById("time");
    timerInterval = setInterval(() => {
        time.innerText = minutes + ":" + seconds++;
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            minutes = 0;
            seconds = 1;
        }

    }, 1000);
}