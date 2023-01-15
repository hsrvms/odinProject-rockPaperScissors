let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button[class="rps"]');
const resetButton = document.querySelector('button[class="reset"]');
let scoreTable = document.querySelector('.score-table');
let scoreText = document.querySelector('.score-text');

const getComputerChoice = () => {
  const rpsArray = ['Rock', 'Paper', 'Scissors'];

  let random = Math.floor(Math.random() * 3);

  return rpsArray[random];
};

const disableButtons = () => {
  buttons.forEach(button => button.disabled = true);
}

const activateButtons = () => {
  buttons.forEach(button => button.disabled = false);
}

const updateScoreTable = () => {
  scoreTable.textContent = `You ${playerScore} - ${computerScore} Thor`;
}

const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();

  if (
    playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'
) {
    playerScore++;
    scoreText.textContent = `${playerSelection} beats ${computerSelection} - You got the score!!`

    if (playerScore === 5) {
      disableButtons();
      scoreText.textContent = "Valhalla will accept you!"
    }

  } else if (playerSelection === computerSelection) {
    scoreText.textContent = `${playerSelection} vs ${computerSelection} - It's tie. Let's do it again!`
  } else {
    computerScore++;
    scoreText.textContent = `${computerSelection} beats ${playerSelection} - This score is Thor's!!`

    if (computerScore === 5) {
      disableButtons();
      scoreText.textContent = "You will never reach to Valhalla"
    }
  }

  updateScoreTable();

};

const resetGame = () => {
  computerScore = 0;
  playerScore = 0;

  activateButtons();
  updateScoreTable();
  scoreText.innerHTML = 'If you want to go <span>Valhalla</span> first you should beat <span>Thor</span> in this game!!'
};

buttons.forEach(button => {
  button.addEventListener('click', (e) => playRound(e.target.value));
})

resetButton.addEventListener('click', resetGame);


