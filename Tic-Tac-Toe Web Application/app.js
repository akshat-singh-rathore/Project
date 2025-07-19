// To build a tic tac toe web application, you can use HTML, CSS and JavaScript. By implementing functions to handle user clicks, track game state, and check for winning conditions, you can create an interactive and engaging tic tac toe game. With these technologies functionalities, user can play against each other or against an AI opponent, aiming to get three markers in row to win the game.

let body = document.querySelector("body");
let tiles = document.querySelectorAll(".item");

let turn = 0;

let board = ["", "", "", "", "", "", "", "", ""];

function win() {
  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let pattern of patterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] == board[b] && board[a] == board[c]) {
      return true;
    }
  }
  return false;
}

function chance() {
  if (turn % 2 === 0) {
    return "X";
  }
  return "O";
}

tiles.forEach((tile, index) => {
  tile.addEventListener("click", function () {
    if (board[index] == "") {
      move = chance();
      board[index] = move;
      let p = document.createElement("p");
      p.innerText = move;
      tile.appendChild(p);
      turn++;
      if (win()) {
        alert(move + " wins!");
        window.location.reload(true);
      } else if (turn === 9) {
        alert("That's an Draw");
        p.innerText = "";
      }
    }
  });
});
