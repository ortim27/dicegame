
let randomNumbers = [1, 2, 3, 4, 5, 6];
let randomNumber1 = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];
let randomNumber2 = randomNumbers[Math.floor(Math.random()*randomNumbers.length)];

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

function whoWins () {
if (randomNumber1 > randomNumber2) {

document.querySelector("h1").innerHTML = "🚩Player 1 wins🦖";

} else if (randomNumber1 < randomNumber2) {

document.querySelector("h1").innerHTML = "🚩Player 2 wins🐬";


} else
document.querySelector("h1").innerHTML = "🚩Both Win 🚩🐙";

}

whoWins();
