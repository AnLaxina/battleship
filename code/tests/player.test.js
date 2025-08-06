import Player from "../js/player.js";

describe("Player", () => {
  test("invalid attack should be null", () => {
    const player1 = new Player();
    const player2 = new Player();

    expect(player1.attack(player2, [11, 11])).toBe(null);
  });

  test("valid attack returns attack coordinate", () => {
    const player1 = new Player();
    const player2 = new Player();

    expect(player1.attack(player2, [0, 0])).toEqual([0, 0]);
  });
});
