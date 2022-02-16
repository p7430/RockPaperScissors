let myArray = [
    "paper",
    "rock",
    "scissors"
];

 function onClick() {
    console.log(this.id);
}

function computerPlay() {
    return myArray[Math.floor(Math.random()*myArray.length)]
}

let firstGame = false;

let computerSelection = computerPlay();

let playerSelection;

let playerScore = 0;
let computerScore = 0;

// make DOM for game result and have each game result be in function

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameResult.textContent = "You played the same move as the computer! Draw! Play again.";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        gameResult.textContent = "Paper beats rock. You lose!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        gameResult.textContent = "Paper beats rock. You win!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        gameResult.textContent = "Rock beats scissors. You win!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        gameResult.textContent = "Rock beats scissors. You lose!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        gameResult.textContent = "Scissors beats paper. You lose!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        gameResult.textContent = "Scissors beats paper. You win!";
    }
  }

  function game() {

    if (this.id == 'rock') {
        playerSelection = "rock";
    } else if (this.id == 'paper') {
        playerSelection = "paper";
    } else if (this.id == 'scissors') {
        playerSelection = "scissors";
    }

    if(firstGame == false) {
        container.removeChild(startGame);
        if(document.getElementById("matchResult1")) {
            container.removeChild(matchResult);
        }
    }

    firstGame = true;

    computerSelection = computerPlay();

    // add DOM html thing that says "you chose __" , append
    playerSelectionDOM.textContent = 'You chose ' + playerSelection + '.';
    container.appendChild(playerSelectionDOM);

    //add DOM html thing that says "computer chose ___" , append
    computerSelectionDOM.textContent = 'The computer selected ' + computerSelection + '.';
    container.appendChild(computerSelectionDOM);

    playRound(playerSelection, computerSelection);

    container.appendChild(gameResult);

    computerScoreD.textContent = 'Computer has ' + computerScore + ' points.';
    container.appendChild(computerScoreD);

    playerScoreD.textContent = 'Player has ' + playerScore + ' points.';
    container.appendChild(playerScoreD);

    if (playerScore == 5 || computerScore == 5) {
        blankScorePage();
        return;
    }

}

function blankScorePage() {

    if (playerScore > computerScore) {
        matchResult.textContent = "Congratulations! You win, you got 5 points. ";
    }
    else if (playerScore < computerScore) {
        matchResult.textContent = "You lost, the computer got 5 points. Bummer.";
    }

    container.appendChild(matchResult);
    container.appendChild(startGame);
    playerScore = 0;
    computerScore = 0;
    container.removeChild(gameResult);
    firstGame = false;
    // message that game over, who won, click button to play again 
    return;

}

// html site code

const container = document.querySelector('#container');

const startGame = document.createElement('p');
startGame.textContent = 'Choose rock, paper, or scissors to start the game.';
container.appendChild(startGame);

const playerSelectionDOM = document.createElement('p');
const computerSelectionDOM = document.createElement('p');

const rockButton = document.createElement('button');
rockButton.setAttribute('id', 'rock');
rockButton.textContent = 'rock';

container.appendChild(rockButton);


const paperButton = document.createElement('button');
paperButton.setAttribute('id', 'paper');
paperButton.textContent = 'paper';

container.appendChild(paperButton);


const scissorsButton = document.createElement('button');
scissorsButton.setAttribute('id', 'scissors');
scissorsButton.textContent = 'scissors';

container.appendChild(scissorsButton);

const playerScoreD = document.createElement('p');
playerScoreD.textContent = 'Player has ' + playerScore + ' points.';

container.appendChild(playerScoreD);

const computerScoreD = document.createElement('p');
computerScoreD.textContent = 'Computer has ' + computerScore + ' points.';

container.appendChild(computerScoreD);

const matchResult = document.createElement('p');
matchResult.setAttribute('id', 'matchResult1');
// make if statement who has 5 and who win

//container.appendChild(matchResult);

rockButton.addEventListener("click", game);
paperButton.addEventListener("click", game);
scissorsButton.addEventListener("click", game);

const gameResult = document.createElement('p');


