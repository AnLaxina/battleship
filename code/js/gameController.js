import GameboardDOM from "./DOM/gameboardDOM.js";
import Player from "./player.js";

export default class GameController {
  constructor() {
    // This class handle the "bridge" between logic and DOM
    GameboardDOM.initializeBoard("player1-board");
    GameboardDOM.initializeBoard("player2-board");

    this.player1 = new Player("player1", true);
    this.player2 = new Player("player2", false);
  }
}
