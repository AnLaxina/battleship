export default class GameboardDOM {
  static BOARD_SIZE = 10;

  static initializeBoard(playerId) {
    const gameboardDiv = document.querySelector(`#${playerId}`);
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let r = 0; r < this.BOARD_SIZE; r++) {
        const boardCell = document.createElement("div");
        boardCell.className = "cell empty";
        boardCell.dataset.coordinate = [i, r];
        gameboardDiv.appendChild(boardCell);
      }
    }
  }

  static changeCell(player, coordinates, type = "empty") {
    const chosenCell = document.querySelector(
      `#${player}-board div[data-coordinate="${coordinates}"`
    );

    chosenCell.classList.remove("hit", "missed", "ship", "empty");
    chosenCell.classList.add(type);
  }
}
