import Gameboard from "../gameboard.js";

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
});
