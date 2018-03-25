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

function lightText() {
  document.querySelector('.rtext').style.backgroundColor = '#d66304';
  document.querySelector('.result').style.backgroundColor = '#d66304';
}


function win(c, resultText) {
  document.querySelector('.result').style.visibility = 'visible';
  document.querySelector('.result').style.border = '5px solid #4dfc02';
  document.querySelector('.rtext').style.backgroundColor = 'white';
  document.querySelector('.result').style.backgroundColor = 'white';
  playerScore.textContent = ++playerScoreText;
  setTimeout(function() {
    lightText();
    resultText.textContent = `You win! The computer chose ${c}. Choose again.`;
  }, 40);
  checkWinner('player', Number(playerScore.textContent), resultText);
}


function lose(c, resultText) {
  document.querySelector('.result').style.visibility = 'visible';
  document.querySelector('.result').style.border = '5px solid #fc1201';
  document.querySelector('.rtext').style.backgroundColor = 'white';
  document.querySelector('.result').style.backgroundColor = 'white';
  computerScore.textContent = ++computerScoreText;
  setTimeout(function(){
    lightText();
    resultText.textContent = `You lose! The computer chose ${c}. Choose again.`;
  }, 40);
  checkWinner('computer', Number(computerScore.textContent), resultText);
}

function draw(c, resultText) {
  document.querySelector('.result').style.visibility = 'visible';
  document.querySelector('.result').style.border = '5px solid #999999';
  document.querySelector('.rtext').style.backgroundColor = 'white';
  document.querySelector('.result').style.backgroundColor = 'white';
  setTimeout(function() {
    lightText();
    resultText.textContent = `Both players chose ${c}, the game is a draw. Choose again.`;
  }, 40);

}

function playRound (p) {
  const resultText = document.querySelector('.rtext');
  const player = p;
  const c = computerPlay();
  const result = player+c;
  const wins = ['rockscissors', 'paperrock', 'scissorspaper'];

  if (p === c) {
    draw(c, resultText);
  } else if (wins.indexOf(result) !== -1) {
    win(c, resultText);
  } else {
    lose(c, resultText);
  }
}

function checkWinner(winner, score, resultText) {
  if (score === 5 && winner === 'player') {
    setTimeout(function() {resultText.textContent = 'YOU WIN!!!';}, 50)
    btns.forEach((elem) => elem.style.visibility = 'hidden');
    removeDirectionsButton();
    makePlayAgainButton()
    let bot = document.querySelector('.bottom');
    let icon = document.createElement('img');
    icon.setAttribute('id', 'endpic');
    icon.src = 'images/trophy.png';
    bot.appendChild(icon);
  } else if (score === 5 && winner === 'computer') {
    setTimeout(function() {resultText.textContent = 'YOU LOSE.';}, 50)
    btns.forEach((elem) => elem.style.visibility = 'hidden');
    removeDirectionsButton();
    makePlayAgainButton()
    let bot = document.querySelector('.bottom');
    let icon = document.createElement('img');
    icon.setAttribute('id', 'endpic');
    icon.src = 'images/poop.png';
    bot.appendChild(icon);
  } else {
    return;
  }
}

function removeEndPic() {
  let bot = document.querySelector('.bottom');
  const picToDelete = document.getElementById('endpic');
  bot.removeChild(picToDelete);
}

function removeDirectionsButton() {
  const textToDelete = document.getElementById('dothis');
  startDiv.removeChild(textToDelete);
}


function makePlayAgainButton() {
  let btn = document.createElement('button');
  let text = document.createTextNode('Click to play again.');
  btn.appendChild(text);
  btn.setAttribute('class', 'sb');
  btn.setAttribute('id', 'pabutton');
  startDiv.appendChild(btn);
  const againButton = document.querySelector('#pabutton');
  againButton.addEventListener('click', function() {
    removeEndPic()
    startDiv.removeChild(btn);
    document.querySelector('.result').style.visibility = 'hidden';
    playerScoreText = 0;
    computerScoreText = 0;
    playerScore.textContent = playerScoreText;
    computerScore.textContent = computerScoreText;
    startGame();
  });
}


function startGame() {
  direct.setAttribute('id', 'dothis');
  direct.textContent = "Click rock, paper, or scissors:"
  startDiv.appendChild(direct);
  btns.forEach((elem) => elem.style.visibility = 'visible');
}


const rockButton = document.querySelector('#rockbutton');
rockButton.addEventListener('click', function() {
  const p = 'rock';
  playRound(p);
});

const paperButton = document.querySelector('#paperbutton');
paperButton.addEventListener('click', function() {
  const p = 'paper';
  playRound(p);
});

const scissorsButton = document.querySelector('#scissorsbutton');
scissorsButton.addEventListener('click', function() {
  const p = 'scissors';
  playRound(p);
});

const startDiv = document.querySelector('.start');
const startButton = document.querySelector('.sb');
startButton.addEventListener('click', function() {
  startDiv.removeChild(startButton);
  startGame()
});

const direct = document.createElement("div");
const btns = document.querySelectorAll('.choice')
const playerScore = document.querySelector('#pscore');
const computerScore = document.querySelector('#cscore');
let playerScoreText = playerScore.textContent;
let computerScoreText = computerScore.textContent;
