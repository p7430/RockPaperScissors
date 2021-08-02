let myArray = [
    "paper",
    "rock",
    "scissors"
];

function computerPlay() {
    return myArray[Math.floor(Math.random()*myArray.length)]
}

let computerSelection = computerPlay();
let playerSelection = prompt(
        "Let's play Rock, Paper, Scissors! What move do you choose?"
    ).toLowerCase();

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "You played the same move as the computer! Draw! Play again."
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Paper beats rock. You lose!"; 
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Paper beats rock. You win!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock beats scissors. You win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock beats scissors. You lose!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Scissors beats paper. You lose!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors beats paper. You win!";
    }
  }

function game() {
    for (let i = 0; i < 5; i++) {
    playerSelection = prompt(
        "Let's play Rock, Paper, Scissors! What move do you choose?"
    ).toLowerCase();
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("You have " + playerScore + " points, and the computer has " + computerScore + " points.")
    }
    if (playerScore === computerScore) {
        return "Unfortunately, It's a tie."
    }
    else if (playerScore > computerScore) {
        return "Congratulations! You win."
    }
    else if (playerScore < computerScore) {
        return "You lost. Bummer."
    }
}

