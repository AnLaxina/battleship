import GameboardDOM from "./DOM/gameboardDOM.js";
import Shipyard from "./shipyard.js";
import Player from "./player.js";

export default class GameController {
  constructor() {
    // This class handle the "bridge" between logic and DOM
    GameboardDOM.initializeBoard("player1");
    GameboardDOM.initializeBoard("player2");

    this.player1 = new Player("player1", true);
    this.player2 = new Player("player2", false);

    GameboardDOM.bindCellClicks("player2", (coordinate) => {
      console.log(`Here are player 2's coordinates: ${coordinate}`);
    });
  }

  placeShip(player, shipType, startCoord, vertical = false) {
    const ship = Shipyard.create(shipType);
    const { coordinates } = player.placeShip(ship, startCoord, vertical);

    // Paint the cells
    coordinates.forEach((coordinate) =>
      GameboardDOM.changeCell(player.type, coordinate, "ship")
    );
    return { ship, coordinates };
  }

  attack(attacker, defender, coordinates) {
    const result = attacker.attack(defender, coordinates);

    if (!result.ok) return result; // out of bounds, so return immediately

    GameboardDOM.changeCell(
      defender.type,
      result.coordinates,
      result.hit ? "hit" : "missed"
    );

    return result;
  }
}
