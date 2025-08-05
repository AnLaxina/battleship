export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
  }

  receiveAttack(pairOfCoordinates) {
    const [x, y] = pairOfCoordinates;

    if (x < 0 || x > this.size - 1 || y < 0 || y > this.size - 1) {
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
}
