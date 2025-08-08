// All this does is remove the need for creating "new Ship()" every time
import Ship from "./ship.js";

// These ship lengths are derived from the standard rules of Battleship
export const SHIP_LENGTHS = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
};

export default class Shipyard {
  static create(type) {
    const length = SHIP_LENGTHS[type];

    if (length === undefined) {
      throw new Error(`Unknown ship type: ${type}!`);
    }

    const ship = new Ship(length);
    return ship;
  }
}
