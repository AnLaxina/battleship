export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
  }

  receiveAttack(pairOfCoordinates) {
    const [x, y] = pairOfCoordinates;

    if (this.#isOutOfBounds(x) || this.#isOutOfBounds(y)) {
      return null;
    }
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
