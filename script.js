const secText = document.getElementById("sec");
const minText = document.getElementById("min");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const minute1 = document.getElementById("minute1");
const minute3 = document.getElementById("minute3");
const minute5 = document.getElementById("minute5");
const resetBtn = document.getElementById("resetBtn");

var minute = 0;
var second = 0;
let timer;

startBtn.addEventListener("click", function () {
    start();
});

function start() {
    timer = setInterval(function () {
        second--;
        if (second < 0) {
            minute -= 1;
            second = 59;
        }

        if (second == 60) {
            second = 0;
        }
        
        if (second < 10) {
            secText.innerText = "0" + second;
        } else {
            secText.innerText = second;
        }

        if (minute < 1) {
            minText.innerText = "0" + minute;
        } else {
            minText.innerText = minute;
        }

        if (second == 0 && minute == 0) {
            clearInterval(timer);
            window.alert("시간종료!");
        }

    }, 1000);
}

stopBtn.addEventListener("click", function () {
    stop();
});

function stop() {
    clearInterval(timer);
}

minute1.addEventListener("click", function () {
    addTime(1);
});

minute3.addEventListener("click", function () {
    addTime(3);
});

minute5.addEventListener("click", function () {
    addTime(5);
});

function addTime(addingMinute) {
    minute += addingMinute;
    if (minute >= 60) {
        minute -= 60;
    }

    if (minute < 10) {
        minText.innerText = "0" + minute;
    } else {
        minText.innerText = minute;
    }
}

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    stop();
    second = 0;
    minute = 0;
    secText.innerText = "00";
    minText.innerText = "00";
}