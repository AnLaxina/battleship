export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
    this.missedAttacks = 0;
    this.ships = [];
  }

  receiveAttack(pairOfCoordinates) {
    const [x, y] = pairOfCoordinates;

    if (this.#isOutOfBounds(x) || this.#isOutOfBounds(y)) {
      return null;
    }

    const currentPosition = this.board[x][y];

    // To denote that there is a ship on the board, each "cell" will have a value of the specific ship object
    // if the cell is empty, then the cell would just be null
    if (currentPosition !== null) {
      currentPosition.hit();
    } else {
      this.missedAttacks++;
    }

    return pairOfCoordinates;
  }

  allShipsSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
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
