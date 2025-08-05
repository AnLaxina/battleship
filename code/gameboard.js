export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
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
