import Gameboard from "../gameboard.js";
import Ship from "../ship.js";

describe("Gameboard", () => {
  test("size should be 10", () => {
    const gameboard = new Gameboard();
    expect(gameboard.size).toEqual(10);
  });

  test("given size should be 5", () => {
    const gameboard = new Gameboard(5);
    expect(gameboard.size).toEqual(5);
  });

  test("board[0][0] should be null", () => {
    const gameboard = new Gameboard();
    expect(gameboard.board[0][0]).toBeNull();
  });

  test("out of bounds attacks return null", () => {
    const gameboard = new Gameboard();
    expect(gameboard.receiveAttack([11, 9])).toBeNull();
  });

  test("ship should be hit", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.board[0][0] = newShip;
    gameboard.board[0][1] = newShip;
    gameboard.receiveAttack([0, 0]);

    expect(newShip.hitCount).toEqual(1);
  });

  test("ship should be sunk", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.board[0][0] = newShip;
    gameboard.board[0][1] = newShip;

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    expect(newShip.isSunk()).toBe(true);
  });

  test("missedAttacks should be 1", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.board[0][0] = newShip;
    gameboard.board[0][1] = newShip;

    gameboard.receiveAttack([0, 4]);
    gameboard.receiveAttack([0, 1]);

    expect(gameboard.missedAttacks).toEqual(1);
  });

  test("allShipsSunk should be true", () => {
    // To easily differentiate each ship, I'll just use their official class name as specified in the game's rules
    const destroyer = new Ship(2);
    const submarine = new Ship(3);
    const gameboard = new Gameboard();
    gameboard.ships.push(destroyer, submarine);

    gameboard.board[0][0] = destroyer;
    gameboard.board[0][1] = destroyer;

    gameboard.board[0][2] = submarine;
    gameboard.board[0][3] = submarine;
    gameboard.board[0][4] = submarine;

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([0, 3]);
    gameboard.receiveAttack([0, 4]);

    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("placeShip() throws error for out of bounds", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    expect(() => gameboard.placeShip(newShip, [11, 11])).toThrow(
      "Out of bounds"
    );
  });

  test("placeShip() throws error for cell occupied", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(newShip, [0, 0]);
    expect(() => gameboard.placeShip(newShip, [0, 0])).toThrow("Cell occupied");
  });

  test("placeShip() makes ships array length 1", () => {
    const newShip = new Ship(2);
    const gameboard = new Gameboard();
    gameboard.placeShip(newShip, [0, 0]);
    expect(gameboard.ships.length).toEqual(1);
  });
});
