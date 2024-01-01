let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // capitalize first letter of player and computer selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
                      playerSelection.toLowerCase().slice(1);

    switch (playerSelection + computerSelection) {
        // same choice
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            return `You chose: ${playerSelection}<br>
                    Computer chose: ${computerSelection}<br>
                    --------------------------------------<br>
                    It's a tie! Try again!<br>
                    Your points: ${playerPoints}<br>
                    Computer points: ${computerPoints}`;
            break;
        // player wins
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            playerPoints++;
            return `You chose: ${playerSelection}<br>
                    Computer chose: ${computerSelection}<br>
                    --------------------------------------<br>
                    You won! ${playerSelection} beats ${computerSelection}!<br>
                    Your points: ${playerPoints}<br>
                    Computer points: ${computerPoints}`;
            break;
        // computer wins
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerPoints++;
            return `You chose: ${playerSelection}<br>
                    Computer chose: ${computerSelection}<br>
                    --------------------------------------<br>
                    You lose! ${computerSelection} beats ${playerSelection}!<br>
                    Your points: ${playerPoints}<br>
                    Computer points: ${computerPoints}`;
        default:
            return `Your choice does not exist! Try again!`;
    }
}

// ----------------------------------- JavaScript DOM -----------------------------------

let result = document.querySelector("#result");
let selectionBtns = document.querySelector("#selection-btns");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const resetBtn = document.createElement("button");

rockBtn.classList.add("rock");
rockBtn.textContent = "Rock";
selectionBtns.appendChild(rockBtn);

paperBtn.classList.add("paper");
paperBtn.textContent = "Paper";
selectionBtns.appendChild(paperBtn);

scissorsBtn.classList.add("scissors");
scissorsBtn.textContent = "Scissors";
selectionBtns.appendChild(scissorsBtn);

resetBtn.classList.add("reset");
resetBtn.textContent = "Reset Game";
selectionBtns.appendChild(resetBtn);

function disableBtns() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function resetGame() {

}

selectionBtns.addEventListener("click", event => {
    let target = event.target;

    switch (target.className) {
        case "rock":
            result.innerHTML = playRound("rock", getComputerChoice());
            break;
        case "paper":
            result.innerHTML = playRound("paper", getComputerChoice());
            break;
        case "scissors":
            result.innerHTML = playRound("scissors", getComputerChoice());
            break;
    }

    if (playerPoints === 5) {
        result.textContent = "You've reached 5 points. You're the winner!";
        disableBtns();
    } else if (computerPoints === 5) {
        result.textContent = "Computer reached 5 points. You've lost the game!"
        disableBtns();
    }
})

resetBtn.addEventListener("click", event => {
    playerPoints = 0;
    computerPoints = 0;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    result.textContent = "";
})
