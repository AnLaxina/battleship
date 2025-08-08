import GameboardDOM from "./code/js/DOM/gameboardDOM.js";

import Shipyard from "./code/js/shipyard.js";
import Player from "./code/js/player.js";

console.log("This is the start of Battleship!");

GameboardDOM.initializeBoard("player1-board");
GameboardDOM.initializeBoard("player2-board");

const player1 = new Player("player1");

const battleship = Shipyard.create("battleship");

player1.placeShip(battleship, [0, 0], true);
