"use strict";

const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");
const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentPlayer0 = document.querySelector("#current--0");
const currentPlayer1 = document.querySelector("#current--1");
const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const btnNew = document.querySelector(".btn--new");

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
dice.style.display = "none";
let scores = [0, 0];
let dicRoll = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const randomNumber = () => {
  return Math.trunc(Math.random() * 6) + 1;
};
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
};

const rollHandler = () => {
  if (playing) {
    dice.style.display = "block";
    dicRoll = randomNumber();
    dice.src = `./assets/images/dice-${dicRoll}.png`;
    if (dicRoll !== 1) {
      currentScore += dicRoll;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};
const holdHandler = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
  }

  if (scores[activePlayer] >= 100) {
    playing = false;
    dice.style.display = "none";
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    switchPlayer();
  }
};
const newHandler = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    dice.style.display = "none";
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    playerEl0.classList.remove("player--winner");
    playerEl1.classList.remove("player--winner");
    playerEl0.classList.add("player--active");
    playerEl1.classList.remove("player--active")
};

btnRoll.addEventListener("click", rollHandler);
btnHold.addEventListener("click", holdHandler);
btnNew.addEventListener("click", newHandler);
