export default class Gameboard {
  #nextShipId = 1;

  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
    this.missedAttacks = 0;
    // Here, shipId: {ship, coordinates:Set, hits:Set}
    this.ships = new Map();
    // "x,y" that were attacked
    this.fired = new Set();
  }

  receiveAttack(pairOfCoordinates) {
    const [x, y] = pairOfCoordinates;

    if (this.#isOutOfBounds(x) || this.#isOutOfBounds(y)) {
      return { ok: false, reason: "out of bounds" };
    }

    const key = `${x},${y}`;

    if (this.fired.has(key)) {
      return { ok: false, reason: "already fired!" };
    }

    this.fired.add(key);

    const cell = this.board[x][y];
    // To denote that there is a ship on the board, each "cell" will have a value of the specific ship object
    // if the cell is empty, then the cell would just be null
    if (cell === null) {
      this.missedAttacks++;
      return { ok: true, hit: false, coordinates: [x, y] };
    }

    // If there's a hit
    cell.hit = true;
    const info = this.ships.get(cell.shipId);
    info.hits.add(key);
    info.ship.hit();

    const sunk = info.ship.isSunk();

    return {
      ok: true,
      hit: true,
      coordinates: [x, y],
      shipId: cell.shipId,
      sunk,
      sunkCoords: sunk
        ? Array.from(info.coordinates).map((s) => s.split(",").map(Number))
        : undefined,
    };
  }

  allShipsSunk() {
    for (const { ship } of this.ships.values()) {
      if (!ship.isSunk()) return false;
    }
    return true;
  }

  placeShip(ship, [x, y], isVertical = false) {
    const coordinates = [];

    // 1. Validate all the cells and check if you can place ships
    for (let i = 0; i < ship.length; i++) {
      const newX = isVertical ? x + i : x;
      const newY = isVertical ? y : y + i;

      if (this.#isOutOfBounds(newX) || this.#isOutOfBounds(newY)) {
        throw new Error("Out of bounds");
      }

      if (this.board[newX][newY] !== null) {
        throw new Error("Cell occupied");
      }

      coordinates.push([newX, newY]);
    }

    // 2. If the entire ship can be placed, add the ship into the `ships` hash map
    const shipId = this.#nextShipId++;
    coordinates.forEach(
      ([newX, newY]) => (this.board[newX][newY] = { shipId, hit: false })
    );
    this.ships.set(shipId, {
      ship,
      coordinates: new Set(coordinates.map(([a, b]) => `${a},${b}`)),
      hits: new Set(),
    });

    // 3. Now, the caller can paint the UI
    return { shipId, coordinates };
  }

  #createBoard() {
    const boardToReturn = [];
    for (let row = 0; row < this.size; row++) {
      const currentRow = [];
      for (let col = 0; col < this.size; col++) {
        currentRow.push(null);
      }
      boardToReturn.push(currentRow);
    }
    return boardToReturn;
  }

  #isOutOfBounds(coordinate) {
    return coordinate < 0 || coordinate > this.size - 1;
  }
}
