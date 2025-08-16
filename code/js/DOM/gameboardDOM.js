export default class GameboardDOM {
  static BOARD_SIZE = 10;

  static initializeBoard(player) {
    const gameboardDiv = document.querySelector(`#${player}-board`);

    gameboardDiv.classList.add("board");
    gameboardDiv.setAttribute("role", "grid");
    gameboardDiv.setAttribute(
      "aria-label",
      `${player === "player1" ? "Player 1" : "Computer"} board`
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
      cell.classList.add("miss");
      const coordinate = cell.dataset.coordinate.split(",");
      callback(coordinate);
    });
  }

  static changeCurrentTurn(player) {
    const currentTurnDOM = document.querySelector("h3");
    currentTurnDOM.textContent = "Current Turn: ";
    if (player.isTurn) {
      currentTurnDOM.textContent += " Player 1";
    } else {
      currentTurnDOM.textContent += " Computer";
    }
  }

  static changeGameboardState(player, enable = true) {
    const boardSelectorString = `${player.type}-board`;
    const gameboard = document.querySelector(`#${boardSelectorString}`);
    if (enable) {
      gameboard.id = boardSelectorString;
    } else {
      gameboard.id = `disabled`;
    }
  }
}
