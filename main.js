import GameboardDOM from "./code/js/DOM/gameboardDOM.js";

import Player from "./code/js/player.js";

console.log("This is the start of Battleship!");

GameboardDOM.initializeBoard("player1-board");
GameboardDOM.initializeBoard("player2-board");

GameboardDOM.changeCell([0, 0], "hit");
