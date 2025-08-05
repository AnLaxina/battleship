import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type = "real") {
    this.type = type;
    this.gameboard = new Gameboard();
  }
}
