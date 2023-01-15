let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button[class="rps"]');
const resetButton = document.querySelector('button[class="reset"]');
let scoreTable = document.querySelector('.score-table-text');

const getComputerChoice = () => {
  const rpsArray = ['Rock', 'Paper', 'Scissors'];

  let random = Math.floor(Math.random() * 3);

  return rpsArray[random];
};

const disableButtons = () => {
  buttons.forEach(button => button.disabled = true);
}

const updateScoreTable = () => {
  scoreTable.textContent = `You ${playerScore} - ${computerScore} Computer`;
}

const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();

  if (
    playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'
) {
    playerScore++;
    if (playerScore === 5) {
      
      disableButtons();
    }
  } else if (playerSelection === computerSelection) {
  } else {
    computerScore++;
    if (computerScore === 5) {
      disableButtons();
    }
  }

  updateScoreTable();

};

const resetGame = () => {
  computerScore = 0;
  playerScore = 0;

  buttons.forEach(button => button.disabled = false);
  updateScoreTable();
};

buttons.forEach(button => {
  button.addEventListener('click', (e) => playRound(e.target.value));
})

resetButton.addEventListener('click', resetGame);


