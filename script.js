function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") return "You Lose! Paper beats Rock";
    else if (computerSelection === "scissors") return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") return "You Win! Paper beats Rock";
    else if (computerSelection === "scissors") return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "You Lose! Rock beats Scissors";
    else if (computerSelection === "paper") return "You Lose! Paper beats Rock";
  }

}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    if (playRound(playerSelection, computerSelection).includes('Win')) {
      playerScore++;
    } else if (playRound(playerSelection, computerSelection).includes('Lose')) {
      computerScore++;
    }

    if (playerScore === computerScore) {
      return "Draw!!!";
    } else if (playerScore > computerScore) {
      return "You Won!";
    } else {
      return "You Lost!";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(game());