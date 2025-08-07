export default class GameboardDOM {
  static BOARD_SIZE = 10;

  static populateBoard(playerId) {
    const gameboardDiv = document.querySelector(`#${playerId}`);
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let r = 0; r < this.BOARD_SIZE; r++) {
        const boardCell = document.createElement("div");
        boardCell.className = "cell";
        gameboardDiv.appendChild(boardCell);
      }
    }
  }
}
