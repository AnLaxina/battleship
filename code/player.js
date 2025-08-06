import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type = "real") {
    this.type = type;
    this.gameboard = new Gameboard();
  }

  attack(opponent, coordinates) {
    return opponent.gameboard.receiveAttack(coordinates);
  }

  placeShip(ship, startCoord, isVertical = false) {
    this.gameboard.placeShip(ship, startCoord, isVertical);
  }
}
