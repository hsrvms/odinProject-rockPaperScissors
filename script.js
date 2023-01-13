function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);

  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}

console.log(getComputerChoice())