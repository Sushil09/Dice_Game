// Player 1
var a = Math.random();
a = Math.floor(a * 6) + 1;
diceSelector(a, "img1");
console.log(a);

// Player 2
var b = Math.random();
b = Math.floor(b * 6) + 1;
diceSelector(b, "img2");
console.log(b);

var winner = "";

if (a > b) {
    winner += "Player 1 wins";
} else if (b > a) {
    winner += "Player 2 wins";
} else {
    winner += "Draw";
}

var title = document.querySelectorAll(".container h1")[0];
title.innerHTML = winner;

function diceSelector(a, img_Sec) {
    if (a == 1) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice1.png")
    }
    if (a == 2) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice2.png")
    }
    if (a == 3) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice3.png")
    }
    if (a == 4) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice4.png")
    }
    if (a == 5) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice5.png")
    }
    if (a == 6) {
        document.querySelector("." + img_Sec + "").setAttribute("src", "./images/dice6.png")
    }
}