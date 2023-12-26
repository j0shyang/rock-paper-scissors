function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // capitalize first letter of player and computer selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.toLowerCase().slice(1);

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)

    switch (playerSelection + computerSelection) {
        // same choice
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            return "It's a tie!"
            break;
        // player wins
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            return `You won! ${playerSelection} beats ${computerSelection}!`
            break;
        // computer wins
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            return `You lose! ${computerSelection} beats ${playerSelection}!`
        default:
            return "Your choice does not exist!";
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(), computerSelection));
