"use strict";

const gamePole = ["", "", "", "", "", "", "", "", ""];
let cross = true;

export default function fn(id) {
  if (!checkWin()) {
    if (!gamePole[id] && gamePole[id] !== "O") {
      gamePole[id] = id;
      document.getElementById(id).innerHTML = "X";
      cross = false;
    }
    let randCell = Math.trunc(Math.random() * 9);
    if (!gamePole[randCell] && !cross) {
      gamePole[randCell] = "O";
      document.getElementById(randCell).innerHTML = "O";
      cross = true;
      if (checkWin()) {
        alert("You win");
      }
    } else if (gamePole[randCell] && gamePole[id] !== "X" && !cross) {
      let emptyCell = gamePole.indexOf("");
      gamePole[emptyCell] = "O";
      document.getElementById(emptyCell).innerHTML = "O";
      cross = true;
      if (checkWin()) {
        alert("You win");
      }
    }
  } else {
    alert("You win");
  }
}

export function checkWin() {
  const wins = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["6", "4", "2"],
    ["8", "4", "0"],
    ["6", "7", "8"],
  ];
  for (let index = 0; index < 9; index++) {
    if (
      gamePole.includes(wins[index][0]) &&
      gamePole.includes(wins[index][1]) &&
      gamePole.includes(wins[index][2])
    ) {
      return true;
    }
  }
  return false;
}
