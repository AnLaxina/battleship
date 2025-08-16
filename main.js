import GameController from "./code/js/gameController.js";

console.log("This is the start of Battleship!");

const game = new GameController();

game.placeShip(game.player1, "destroyer", [0, 0], true);
