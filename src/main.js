import "./styles.scss";
import {
  changeAlign,
  placeFunction,
  placingStep,
  checkRemainingMoves,
  attackFunction,
  computerAttack,
} from "./logic";

const grid1 = document.querySelector(".grid1");
const grid2 = document.querySelector(".grid2");
grid2.classList.add("minimize");
grid2.style.backgroundColor = "#013220";
const main = document.querySelector(".main");
const axis = document.querySelector(".axis");
const cells = document.getElementsByClassName("cell");
const cells2 = document.getElementsByClassName("cell2");
const announcement1 = document.querySelector(".announcement1");
const announcement2 = document.querySelector(".announcement2");
axis.onclick = changeAlign;
let announcementQueue1 = [];
let announcementQueue2 = [];

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    const cell = document.createElement("div");
    const cell2 = document.createElement("div");
    cell.classList.add("cell");
    cell2.classList.add("cell2");
    cell.setAttribute("yPos", i);
    cell.setAttribute("xPos", j);
    cell2.setAttribute("yPos", i);
    cell2.setAttribute("xPos", j);
    grid1.appendChild(cell);
    grid2.appendChild(cell2);
  }
}

function changeButtonText(alignment) {
  if (alignment == "ver")
    axis.textContent = "Change Axis || Current : Vertical";
  else if (alignment == "hor")
    axis.textContent = "Change Axis || Current : Horizontal";
}

function hideButton() {
  axis.remove();
}

function renderBoard(gameboard) {
  let gameboardCopy = gameboard.board.join(",");
  let values = gameboardCopy.split(",");
  let i = 0;
  let pick;
  let notComputer = false;

  if (gameboard.name == "computer") pick = cells2;
  else {
    notComputer = true;
    pick = cells;
  }

  for (let e of pick) {
    if (values[i] == "HIT") {
      e.classList.add("hit");
    } else if (values[i] == "MISS") {
      e.classList.add("miss");
    } else if (values[i] != "" && notComputer) {
      e.classList.add("ship");
    } else if (values[i] == "") {
      e.classList.remove("ship");
    }

    e.innerText = values[i];
    i++;
  }
}

function getPlace(gameboard) {
  for (let e of cells) {
    let cell = [Number(e.getAttribute("xPos")), Number(e.getAttribute("yPos"))];
    e.onmouseover = () => placeFunction(cell, gameboard, "checkIn");
    e.onmouseleave = () => placeFunction(cell, gameboard, "checkOut");
    e.onclick = () => {
      placeFunction(cell, gameboard);
      checkRemainingMoves(gameboard);
      console.log(cell);
    };
  }
}

function onclickRemove(gameboard) {
  for (let e of cells) {
    e.onclick = "";
    e.onmouseleave = "";
    e.onmouseover = "";
  }
}

function secondGrid(gameboard1, gameboard2) {
  grid1.classList.add("minimize");
  const player1 = document.createElement("div");
  const player2 = document.createElement("div");

  player1.innerText = gameboard1.name + "'s board";
  player2.innerText = gameboard2.name + "'s board";
  player1.classList.add("name");
  player2.classList.add("name");

  main.appendChild(player1);
  main.appendChild(player2);
  grid2.classList.remove("minimize");
  grid2.style.backgroundColor = "white";
  announcement2.innerText = "Click on a cell to attack!";
}

function getAttack(gameboard) {
  for (let e of cells2) {
    e.onmouseover = () => e.classList.add("attack");
    e.onmouseleave = () => e.classList.remove("attack");
    e.onclick = () => {
      e.classList.remove("attack");
      let cell = [
        Number(e.getAttribute("xPos")),
        Number(e.getAttribute("yPos")),
      ]; // [x, y]
      attackFunction(cell, gameboard);
      console.log(cell);
      e.onclick = "";
      e.onmouseover = "";
      computerAttack();
    };
  }
}

function gameEnd() {
  for (let e of cells2) e.onclick = "";
}

function changeAnnouncement() {
  let text = announcementQueue1.pop();
  if (text != undefined) {
    announcement1.classList.add("newtext");
    announcement1.innerText = text;
    let time = setTimeout(function () {
      announcement1.classList.remove("newtext");
    }, 400);
  }
  let text2 = announcementQueue2.pop();
  if (text2 != undefined) {
    announcement2.classList.add("newtext");
    announcement2.innerText = text2;
    let time2 = setTimeout(function () {
      announcement2.classList.remove("newtext");
    }, 400);
  }
}

function announce(name, action, ship = "") {
  let queue;
  console.log(name);
  if (name == "computer") {
    queue = announcementQueue2;
  } else queue = announcementQueue1;
  switch (action) {
    case "place":
      queue.unshift("you have placed your " + ship + " on your board");
      break;
    case "hit":
      queue.unshift(name + "'s " + ship + " has been hit!");
      break;
    case "miss":
      queue.unshift("that attack hit nothing in " + name + `'s territory!`);
      break;
    case "win":
      announcementQueue1.unshift(name + " wins!!");
      announcementQueue2.unshift(name + " wins!!");
  }
}

//TODO FOR FUTURE:
//-SOUND EFFECTS
//-PLAYER NAMING
//-FINISH gameEnd()

placingStep(); //game start
setInterval(changeAnnouncement, 800);

export {
  renderBoard,
  getPlace,
  getAttack,
  secondGrid,
  changeButtonText,
  hideButton,
  onclickRemove,
  gameEnd,
  announce,
};
