import GameController from "./code/js/gameController.js";

console.log("This is the start of Battleship!");

const game = new GameController();

game.placeShip(game.player1, "destroyer", [0, 0], true);
game.placeShip(game.player2, "submarine", [5, 5], false);
game.attack(game.player1, game.player2, [0, 0]);
game.attack(game.player2, game.player1, [0, 0]);
