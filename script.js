// import dedent from 'https://cdn.skypack.dev/pin/dedent@v1.5.1-Uhedp8QImbFuEy3LEoVg/mode=imports/optimized/dedent.js';

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

// function game() {
//     while (playerPoints < 3 && computerPoints < 3) {
//         // prompt for user input
//         let playerSelection = prompt("Enter a choice [Rock, Paper, Scissors]:");
//         let computerSelection = getComputerChoice();
//         let result;
    
//         result = playRound(playerSelection, computerSelection);
//         console.log(result);
    
//         // if tie or selection does not exist
//         while (result.includes("tie") || result.includes("not exist")) {
//             computerSelection = getComputerChoice();
//             playerSelection = prompt("Enter another choice [Rock, Paper, Scissors]:");
//             result = playRound(playerSelection, computerSelection);
//             console.log(result);
//         }
//     }
// }

// game();

// ----------------------------------- JavaScript DOM -----------------------------------

let result = document.querySelector("#result");
let selectionBtns = document.querySelector("#selection-btns");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.classList.add("rock");
rockBtn.textContent = "Rock";
selectionBtns.appendChild(rockBtn);

paperBtn.classList.add("paper");
paperBtn.textContent = "Paper";
selectionBtns.appendChild(paperBtn);

scissorsBtn.classList.add("scissors");
scissorsBtn.textContent = "Scissors";
selectionBtns.appendChild(scissorsBtn);

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
})
