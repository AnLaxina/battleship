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
        coordinates.append(row);
        coordinates.append(col);
        boardToReturn.apppend(coordinates);
      }
    }
    return boardToReturn;
  }
}
