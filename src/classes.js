import { announce } from "./main";

class ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }
}

class gameboard {
  constructor(name) {
    this.name = name;
    this.board = [];
    for (let i = 1; i < 11; i++) {
      this.board.push(["", "", "", "", "", "", "", "", "", ""]);
    }

    this.ships = [
      (this.carrier = new ship("carrier", 5)),
      (this.battleship = new ship("battleship", 4)),
      (this.cruiser = new ship("cruiser", 3)),
      (this.submarine = new ship("submarine", 3)),
      (this.destroyer = new ship("destroyer", 2)),
    ];
  }

  receiveAttack(area) {
    let yPos = area[1] - 1;
    let xPos = area[0] - 1;
    let hitShip;

    if (this.board[yPos][xPos] == "HIT" || this.board[yPos][xPos] == "MISS")
      throw e;

    if (this.board[yPos][xPos] !== "") {
      hitShip = this.board[yPos][xPos];
      this.board[yPos][xPos] = "HIT";
      announce(this.name, "hit", hitShip);
      this.ships.forEach((e) => {
        if (hitShip == e.name) {
          e.hit();
        }
      });
    } else {
      this.board[yPos][xPos] = "MISS";

      announce(this.name, "miss");
    }
  }

  placeShip(ship, start, alignment = "hor", mode = "") {
    let y = start;
    let yPos = start[1] - 1;
    let xPos = start[0] - 1;
    for (let i = 0; i < ship.length; i++) {
      if (alignment === "hor") {
        if (
          this.board[yPos][xPos + i] == "" ||
          this.board[yPos][xPos + i] == ship.name
        ) {
          this.board[yPos][xPos + i] = ship.name;
        } else throw "";
      } else if (alignment === "ver") {
        if (
          this.board[yPos + i][xPos] == "" ||
          this.board[yPos + i][xPos] == ship.name
        ) {
          this.board[yPos + i][xPos] = ship.name;
        } else throw "";
      }
    }

    if (this.name != "computer" && mode == "")
      announce(this.name, "place", ship.name);
  }
}

export { gameboard, ship };
