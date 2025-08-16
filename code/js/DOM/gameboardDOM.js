export default class GameboardDOM {
  static BOARD_SIZE = 10;

  static initializeBoard(player) {
    const gameboardDiv = document.querySelector(`#${player}-board`);

    gameboardDiv.setAttribute("role", "grid");
    gameboardDiv.setAttribute(
      "aria-label",
      `${player === "player1" ? "Player 1" : "Computer"} gameboard`
    );
    gameboardDiv.dataset.board = player;

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let r = 0; r < this.BOARD_SIZE; r++) {
        const boardCell = document.createElement("div");
        boardCell.className = "cell empty";
        boardCell.dataset.coordinate = [i, r];
        boardCell.setAttribute("aria-rowindex", `${i + 1}`);
        boardCell.setAttribute("aria-colindex", `${r + 1}`);
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
      const isDisabled = board.classList.contains("is-disabled");
      const isValidCellClick = cell || board.contains(cell);

      if (!isDisabled && isValidCellClick) {
        const coordinate = cell.dataset.coordinate;
        callback(coordinate);
      } else {
        return;
      }
    });
  }

  static changeCurrentTurn(player) {
    const currentTurnDOM = document.querySelector("[data-role='turn']");

    // For screen readers, announce politely
    currentTurnDOM.setAttribute("role", "status");
    currentTurnDOM.setAttribute("aria-live", "polite");

    currentTurnDOM.textContent = `Current Turn: ${
      player.isTurn ? "Player 1" : "Computer"
    }`;
  }

  static changeGameboardState(player, isDisabled = false) {
    const boardSelectorString = `${player.type}-board`;
    const gameboard = document.querySelector(`#${boardSelectorString}`);

    gameboard.classList.toggle("is-disabled", isDisabled);
    gameboard.setAttribute("aria-disabled", `${isDisabled}`);
  }
}
