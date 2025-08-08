import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type = "player1", isTurnFirst = false) {
    this.type = type;
    this.gameboard = new Gameboard();
    this.isTurn = isTurnFirst;
  }

  attack(opponent, coordinates) {
    this.isTurn = false;
    opponent.isTurn = true;
    return opponent.gameboard.receiveAttack(coordinates);
  }

  placeShip(ship, startCoord, isVertical = false) {
    this.gameboard.placeShip(ship, startCoord, isVertical, this.type);
  }
}
