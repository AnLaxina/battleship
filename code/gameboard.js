export default class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = this.#createBoard();
  }

  #createBoard() {
    const boardToReturn = [];
    for (let row = 1; row <= this.size; row++) {
      for (let col = 1; col <= this.size; col++) {
        const coordinates = [];
        coordinates.push(row);
        coordinates.push(col);
        boardToReturn.push(coordinates);
      }
    }
    return boardToReturn;
  }
}
