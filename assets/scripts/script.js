"use strict";

const scorePlayerOne = document.querySelector("#score--0");
const scorePlayerTwo = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentPlayer0 = document.querySelector("#current--0");

scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;
dice.style.display = "none"
let dicRoll = 0
const randomNumber = () => {
    return Math.trunc(Math.random() * 6) + 1
}

const rollHandler = () => {
    dice.style.display = "block"
    dicRoll = randomNumber()
    dice.src = `./assets/images/dice-${dicRoll}.png`
}
const holdHandler = () =>{
    scorePlayerOne.textContent = dicRoll
}


btnRoll.addEventListener("click",rollHandler)
btnHold.addEventListener("click",holdHandler)
