import Ship from "../js/ship.js";

describe("Ship", () => {
  test("initial hit count is 0", () => {
    const newShip = new Ship(4);
    expect(newShip.hitCount).toBe(0);
  });

  test("hit() increments hit count", () => {
    const newShip = new Ship(4);
    newShip.hit();
    expect(newShip.hitCount).toBe(1);
  });

  test("isSunk() returns true after enough hits", () => {
    const newShip = new Ship(4);
    for (let i = 0; i < 4; i++) {
      newShip.hit();
    }
    expect(newShip.isSunk()).toBe(true);
  });

  test("isSunk() returns false if not enough hits", () => {
    const newShip = new Ship(4);
    newShip.hit(1);
    expect(newShip.isSunk()).toBe(false);
  });
});
