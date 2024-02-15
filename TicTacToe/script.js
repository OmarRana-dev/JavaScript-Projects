// Player Name Updater
const player1NameInput = document.querySelector("#namePlayer1");
const player2NameInput = document.querySelector("#namePlayer2");
const player1NameOutput = document.querySelector("#player1Tag");
const player2NameOutput = document.querySelector("#player2Tag");

// Main Contaianer 
const mainContaienr = document.querySelector("#mainSection")


// Form 
const form = document.querySelector("#userInfoForm");
const submit = document.querySelector("#submit-btn");


// form submit and gamePlay Ground Shower
submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    gameUIvisibal()
});

let nameHolder1 = player1NameInput.value;
let nameHolder2 = player2NameInput.value;


function gameUIvisibal() {
    // Validate player names (optional)
    if (player1NameInput.value.trim() === '' || player2NameInput.value.trim() === '') {
        // Handle empty names, e.g., show an error message
        alert('Please enter valid player names.');
        return;
    }

    form.style.display = "none"; // Hide the form
    mainContaienr.style.display = "block" //visibal the game 
    nameHolder1 = player1NameInput.value;
    nameHolder2 = player2NameInput.value;
    player1NameOutput.textContent = player1NameInput.value;
    player2NameOutput.textContent = player2NameInput.value;
}


// Player variabels who define the take.
let currentPlayer;
let player1 = true;
let player2 = false;

// count player score
let player1ScoreCounter = 0
let player2ScoreCounter = 0
let tieScoreCounter = 0

// Win condition array
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],// Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],// Columns
    [0, 4, 8],
    [2, 4, 6] // Diagonals
]

const takeColorChangerP1 = document.querySelector(".player1ResultContainer")
const takeColorChangerP2 = document.querySelector(".player2ResultContainer")


// main board container in face of array
const gameBoard = [...document.querySelectorAll("#gameBox>div")]

// main board function 
gameBoard.forEach((element) => {
    element.addEventListener("click", (e) => {
        
        playerTake(e) // fun define the player take and add take in gameplay

        var board = []; // hold the all board values for checking who win,
        for (const i of gameBoard) {
            board.push(i.textContent);
        }
        // console.log(board)
        winner(currentPlayer, board, winningConditions) // winner checker fun
    });
});



// check if value is true for runing this option. is im not overwrite any previous value.
function valueCheck(e) {
    if (e.target.textContent !== "X" && e.target.textContent !== "O") {
        return true;
    }
    else {
        return false;
    }
}

// Define the Take of player and add the value
function playerTake(e) {
    if (player1) {
        if (valueCheck(e)) {
            e.target.textContent = "X";
            currentPlayer = "X"
            takeColorChangerP2.style.backgroundColor = "#789461"
            takeColorChangerP1.style.backgroundColor = "cadetblue"
            player1 = false;
            player2 = true;
        }
    }
    else if (player2) {
        if (valueCheck(e)) {
            e.target.textContent = "O";
            currentPlayer = "O"
            takeColorChangerP1.style.backgroundColor = "#789461"
            takeColorChangerP2.style.backgroundColor = "cadetblue"
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
                Match = false
                break;
            }
        }
        if (Match) {
            updateScore()
            preventDefault()
            break;
        }
    }
    if (!boardFill(values)) {
        tieScoreCounter++
        tieScore.textContent = tieScoreCounter
        showWinningPrompt(`Game Tie!`)
    }
}

// check is board is fill with values ?
function boardFill(values) {
    return values.includes("")
}


// Player Score Updater 
const player1Score = document.querySelector("#player1Score")
const player2Score = document.querySelector("#player2Score")
const tieScore = document.querySelector("#tieScore")
function updateScore() {
    if (currentPlayer === "X") {
        player1ScoreCounter++;
        player1Score.textContent = player1ScoreCounter;
        showWinningPrompt(`${nameHolder1} Wins!`)
    }
    else if (currentPlayer === "O") {
        player2ScoreCounter++;
        player2Score.textContent = player2ScoreCounter;
        showWinningPrompt(`${nameHolder2} Wins!`)
    }
}


// Wining Strike Prompter
const promptBtn = document.querySelector(".prompt-btn")
const promptGreeting = document.querySelector(".prompt")
const promptContainer = document.querySelector("#resultPromptContainer")
const gameBoardBox = document.querySelector("#gameBox")


function showWinningPrompt(value) {
    promptContainer.style.display = "flex"
    promptGreeting.textContent = value
    gameBoardBox.style.pointerEvents = "none"
}

promptBtn.addEventListener("click", () => {
    for (let i in gameBoard) {
        gameBoard[i].textContent = "";
    }
    promptContainer.style.display = "none"
    gameBoardBox.style.pointerEvents = "auto"
})
