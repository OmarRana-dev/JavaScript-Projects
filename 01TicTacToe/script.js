// Main Contaianer
const TicTacToe = (function () {
  let form, players;

  // Player variabels who define the take.
  let currentPlayer;
  let player1 = true;
  let player2 = false;

  const init = function () {
    form = document.querySelector("#userInfoForm");

    // form submit and gamePlay Ground Shower
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      gameUIvisibal();
    });
  };

  // Create players and there detailes
  function createUser(player1Name, player2Name) {
    let player1Score = 0;
    let player2Score = 0;
    let tieScore = 0;

    const getPlayer1Score = () => player1Score;
    const givePlayer1Score = () => player1Score++;

    const getTieScore = () => tieScore;
    const giveTieScore = () => tieScore++;

    const getPlayer2Score = () => player2Score;
    const givePlayer2Score = () => player2Score++;

    return {
      player1Name,
      player2Name,
      getPlayer1Score,
      getPlayer2Score,
      getTieScore,
      givePlayer1Score,
      givePlayer2Score,
      giveTieScore,
    };
  }

  function gameUIvisibal() {
    const player1NameInput = document.querySelector("#namePlayer1");
    const player2NameInput = document.querySelector("#namePlayer2");

    // Validate player names (optional)
    if (
      player1NameInput.value.trim() === "" ||
      player2NameInput.value.trim() === ""
    ) {
      alert("Please enter valid player names.");
      return;
    }

    form.style.display = "none"; // Hide the form
    document.querySelector("#mainSection").style.display = "block"; // Make the game visible

    // Create players with player names
    players = createUser(
      player1NameInput.value,
      player2NameInput.value
    );

    // Update UI with player names
    document.querySelector("#player1Tag").textContent =
      players.player1Name;
    document.querySelector("#player2Tag").textContent =
      players.player2Name;
  }

  // Win condition array
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // main board container in face of array
  const gameBoard = [...document.querySelectorAll("#gameBox>div")];

  // main board function
  gameBoard.forEach((element) => {
    element.addEventListener("click", (e) => {
      playerTake(e); // fun define the player take and add take in gameplay

      var board = []; // hold the all board values for checking who win,
      for (const i of gameBoard) {
        board.push(i.textContent);
      }
      // console.log(board)
      winner(currentPlayer, board, winningConditions); // winner checker fun
    });
  });

  // check if value is true for runing this option. is im not overwrite any previous value.
  function valueCheck(e) {
    if (
      e.target.textContent !== "X" &&
      e.target.textContent !== "O"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Define the Take of player and add the value
  function playerTake(e) {
    if (player1) {
      if (valueCheck(e)) {
        e.target.textContent = "X";
        currentPlayer = "X";
        player1 = false;
        player2 = true;
      }
    } else if (player2) {
      if (valueCheck(e)) {
        e.target.textContent = "O";
        currentPlayer = "O";
        player1 = true;
        player2 = false;
      }
    }
  }

  // define the win or tie
  function winner(currentPlayer, values, winningConditions) {
    for (let condition of winningConditions) {
      let Match = true;
      for (let i of condition) {
        if (values[i] !== currentPlayer) {
          Match = false;
          break;
        }
      }
      if (Match) {
        updateScore();
        preventDefault();
        break;
      }
    }
    if (!boardFill(values)) {
      players.giveTieScore();
      updateTieScore.textContent = players.getTieScore();
      showWinningPrompt(`Game Tie!`);
    }
  }

  // check is board is fill with values ?
  function boardFill(values) {
    return values.includes("");
  }

  // Player Score Updater
  const updatePlayer1Score = document.querySelector("#player1Score");
  const updatePlayer2Score = document.querySelector("#player2Score");
  const updateTieScore = document.querySelector("#tieScore");
  function updateScore() {
    if (currentPlayer === "X") {
      players.givePlayer1Score();
      updatePlayer1Score.textContent = players.getPlayer1Score();
      showWinningPrompt(`${players.player1Name} Wins!`);
    } else if (currentPlayer === "O") {
      players.givePlayer2Score();
      updatePlayer2Score.textContent = players.getPlayer2Score();
      showWinningPrompt(`${players.player2Name} Wins!`);
    }
  }

  // Wining Strike Prompter
  const promptBtn = document.querySelector(".prompt-btn");
  const promptGreeting = document.querySelector(".prompt");
  const promptContainer = document.querySelector(
    "#resultPromptContainer"
  );
  const gameBoardBox = document.querySelector("#gameBox");

  function showWinningPrompt(value) {
    promptContainer.style.display = "flex";
    promptGreeting.textContent = value;
    gameBoardBox.style.pointerEvents = "none";
  }

  promptBtn.addEventListener("click", () => {
    for (let i in gameBoard) {
      gameBoard[i].textContent = "";
    }
    promptContainer.style.display = "none";
    gameBoardBox.style.pointerEvents = "auto";
  });

  return {
    init,
  };
})();

TicTacToe.init();
