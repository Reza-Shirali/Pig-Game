"use strict";

const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentPlayer0 = document.querySelector("#current--0");
const currentPlayer1 = document.querySelector("#current--1");

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.style.display = "none"
let scores = [0,0]
let dicRoll = 0
let currentScore = 0
let activePlayer = 0
const randomNumber = () => {
    return Math.trunc(Math.random() * 6) + 1
}

const rollHandler = () => {
    dice.style.display = "block"
    dicRoll = randomNumber()
    dice.src = `./assets/images/dice-${dicRoll}.png`
    if(dicRoll !== 1){
        currentScore += dicRoll
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    }else{
        document.querySelector(`#current--${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentScore = 0
    }
}
const holdHandler = () =>{
    scorePlayer0.textContent = dicRoll
}


btnRoll.addEventListener("click",rollHandler)
btnHold.addEventListener("click",holdHandler)
