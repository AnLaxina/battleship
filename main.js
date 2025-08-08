import GameboardDOM from "./code/js/DOM/gameboardDOM.js";

import Ship from "./code/js/ship.js";
import Player from "./code/js/player.js";

console.log("This is the start of Battleship!");

GameboardDOM.initializeBoard("player1-board");
GameboardDOM.initializeBoard("player2-board");

const player1 = new Player("player1");

const shipTest = new Ship(2);
player1.placeShip(shipTest, [0, 0], true);
