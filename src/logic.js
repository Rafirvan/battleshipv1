import {
  renderBoard,
  getPlace,
  getAttack,
  secondGrid,
  changeButtonText,
  hideButton,
  onclickRemove,
  gameEnd,
  announce,
} from "./main";
import { gameboard, ship } from "./classes";

let alignment = "ver";
let state = "placing";

function changeAlign() {
  if (alignment == "ver") alignment = "hor";
  else alignment = "ver";
  changeButtonText(alignment);
}

let gameboard1 = new gameboard("player");
let gameboard2 = new gameboard("computer");

function placingStep() {
  autoPlacing(gameboard2);
  if (alignment == "ver") {
    changeAlign();
  }
  getPlace(gameboard1);
}

function checkRemainingMoves(gameboard) {
  if (gameboard.ships.length == 0) {
    gameboard.ships.push(gameboard.battleship);
    gameboard.ships.push(gameboard.carrier);
    gameboard.ships.push(gameboard.submarine);
    gameboard.ships.push(gameboard.cruiser);
    gameboard.ships.push(gameboard.destroyer);
    onclickRemove(gameboard);
    attackingStep();
  }
}

function placeFunction(cell, gameboard, mode = "") {
  if (mode == "checkIn") {
    let hoverShip = gameboard.ships[0];
    try {
      gameboard.placeShip(hoverShip, cell, alignment, mode);
    } catch (e) {
      deleteShip(gameboard, hoverShip);
    }
  } else if (mode == "checkOut") {
    let hoverShip = gameboard.ships[0];
    deleteShip(gameboard, hoverShip);
  } else {
    let curShip = gameboard.ships.shift();
    try {
      gameboard.placeShip(curShip, cell, alignment);
    } catch (e) {
      gameboard.ships.unshift(curShip);
      deleteShip(gameboard, curShip);
    }
  }
  renderBoard(gameboard);
}

function deleteShip(gameboard, ship) {
  for (let i = 0; i < 10; i++) {
    for (let p = 0; p < 10; p++) {
      if (gameboard.board[i][p] == ship.name) {
        gameboard.board[i][p] = "";
      }
    }
  }
}

function autoPlacing(gameboard) {
  let shipCopy = [...gameboard.ships];

  while (true) {
    let curShip = shipCopy.shift();
    try {
      gameboard.placeShip(curShip, getRandomCell(curShip), alignment);
    } catch (e) {
      shipCopy.unshift(curShip);
      deleteShip(gameboard, curShip);
    }
    if (shipCopy.length == 0) {
      break;
    }
  }
}

// call with getRandomCell(ship);
function getRandomCell(ship = []) {
  changeAlign();
  let len = ship.length;

  let xPos = Math.floor(Math.random() * 9.99) + 1;
  let yPos = Math.floor(Math.random() * 9.99) + 1;

  let x, y;

  if (alignment == "hor") {
    x = Math.min(xPos, 11 - len);
    y = yPos;
  } else {
    y = Math.min(yPos, 11 - len);
    x = xPos;
  }
  let cell = [x, y]; //[x,y]
  return cell;
}

function attackingStep() {
  secondGrid(gameboard1, gameboard2);
  renderBoard(gameboard2);
  hideButton();
  getAttack(gameboard2);
}

function attackFunction(cell, gameboard) {
  gameboard.receiveAttack(cell);
  renderBoard(gameboard);
  checkwinner();
  // RemoveEventListener() TODO
}

function computerAttack() {
  while (true) {
    let cell = getRandomCell();
    try {
      gameboard1.receiveAttack(cell);
    } catch {
      continue;
    }
    break;
  }
  renderBoard(gameboard1);
}

function checkwinner() {
  if (gameboard1.ships.every((e) => e.sunk == true)) {
    announce(gameboard2.name, "win");
    gameEnd();
  } else if (gameboard2.ships.every((e) => e.sunk == true)) {
    announce(gameboard1.name, "win");
    gameEnd();
  }
}

export {
  changeAlign,
  placeFunction,
  placingStep,
  checkRemainingMoves,
  attackFunction,
  computerAttack,
};
