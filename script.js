// Variables
let score = 0;
const showScore = document.getElementById('score');
let hitSound = document.querySelector('#audio');

// Function responsible for adding score
function countScore() {
    score++;
    document.getElementById("target").textContent = score;
    document.getElementById("follow").style.opacity = "1"; // Toggles hitmarker on
    hitSound.play(); // Plays hit sound effect when clicking
    hitSound.currentTime = 0.15;
    setTimeout(function () {
        document.getElementById("follow").style.opacity = "0"; // Toggles hitmarker off
    }), 30;
};

// Code for making hitmarker follow the cursor
function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('follow').innerHTML = e.clientX + ', ' +
        e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}


var followCursor = (function () {
    var s = document.getElementById('follow');

    return {
        init: function () {
            document.body.appendChild(s);
        },

        run: function (e) {
            var e = e || window.event;
            s.style.left = (e.clientX - 5) + 'px';
            s.style.top = (e.clientY - 5) + 'px';
            getMouseCoords(e);
        }
    };
}());

window.onload = function () {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
};

/* function changeBg() {
    if (score == 200) {
        document.querySelector(body).style.background = "gray";
        score -= 200;
    } else {
        alert('Have you tried getting score?');
    }

}; */

// Adding cosmetics
function addSpinningSheep() {
    if (score == 10) {
        document.getElementById("spinning-sheep").style.opacity = "1";
        score -= 10;
    } else {
        alert('Have you tried getting score?');
    };
};

function addFloatingSheep() {
    if (score == 25) {
        document.getElementById("floating-sheep").style.opacity = "1";
        score -= 25;
    } else {
        alert('Have you tried getting score?');
    };
};

function addKermitDance() {
    if (score == 50) {
        document.getElementById("kermit-dance").style.opacity = "1";
        score -= 50;
    } else {
        alert('Have you tried getting score?');
    };
};

function addDancingPepe() {
    if (score == 75) {
        document.getElementById("dancing-pepe").style.opacity = "1";
        score -= 75;
    } else {
        alert('Have you tried getting score?');
    };
};

function addYaBoii() {
    if (score == 100) {
        document.getElementById("ya-boii").style.opacity = "1";
        score -= 100;
    } else {
        alert('Have you tried getting score?');
    };
};