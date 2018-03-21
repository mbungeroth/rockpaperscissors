function computerPlay() {
  const randomNumber = getRandomInt(3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * (max));
}


function playerSelection() {
  let choice = null;

  while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    choice = prompt('Please choose either rock, paper, or scissors').toLowerCase();
  }

  return choice;
}


function win(c) {
   alert(`You win! The computer chose ${c}`);
}


function lose(c) {
  alert(`You lose! The computer chose ${c}`);
}


function playRound () {
  const p = playerSelection();
  const c = computerPlay();
  const result = p+c;
  const wins = ['rockscissors', 'paperrock', 'scissorspaper'];

  if (p === c) {
    alert(`Both players chose ${p}, the game is a draw.`);
  } else if (wins.indexOf(result) !== -1) {
    win(c);
  } else {
    lose(c);
  }
}


playRound();
