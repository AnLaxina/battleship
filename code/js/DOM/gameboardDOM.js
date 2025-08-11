export default class GameboardDOM {
  static BOARD_SIZE = 10;
  static initializeBoard(player) {
    const gameboardDiv = document.querySelector(`#${player}-board`);
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let r = 0; r < this.BOARD_SIZE; r++) {
        const boardCell = document.createElement("div");
        boardCell.className = "cell empty";
        boardCell.dataset.coordinate = [i, r];
        gameboardDiv.appendChild(boardCell);
      }
    }
  }

  static changeCell(playerId, coordinates, type = "empty") {
    const chosenCell = document.querySelector(
      `#${playerId}-board div[data-coordinate="${coordinates}"]`
    );

    chosenCell.classList.remove("hit", "missed", "ship", "empty");
    chosenCell.classList.add(type);
  }

  static bindCellClicks(player, callback) {
    const board = document.querySelector(`#${player}-board`);
    board.addEventListener("click", (e) => {
      const cell = e.target;
      cell.classList.add("miss");
      const coordinate = cell.dataset.coordinate.split(",");
      callback(coordinate);
    });
  }
}
