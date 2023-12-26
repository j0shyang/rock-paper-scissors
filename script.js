import dedent from 'https://cdn.skypack.dev/dedent';

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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`)

    let playerPoints = 0;
    let computerPoints = 0;

    switch (playerSelection + computerSelection) {
        // same choice
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            return dedent(`It's a tie! Try again!
                        Your points: ${playerPoints}
                        Computer points: ${computerPoints}`);
            break;
        // player wins
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            playerPoints++;
            return dedent(`You won! ${playerSelection} beats ${computerSelection}!
                        Your points: ${playerPoints}
                        Computer points: ${computerPoints}`);
            break;
        // computer wins
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            computerPoints++;
            return dedent(`You lose! ${computerSelection} beats ${playerSelection}!
                        Your points: ${playerPoints}
                        Computer points: ${computerPoints}`);
        default:
            return "Your choice does not exist! Try again!";
    }
}

function game() {
    let playerSelection = prompt("Enter a choice [Rock, Paper, Scissors]:");
    let computerSelection = getComputerChoice();
    let result;
    
    result = playRound(playerSelection, computerSelection);
    console.log(result);

    while (result.includes("tie") || result.includes("not exist")) {
        playerSelection = prompt("Enter another choice [Rock, Paper, Scissors]:");
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

game();
