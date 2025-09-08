let randomNumber = parseInt((Math.random() * 100) + 1);
console.log(randomNumber);

const submit = document.querySelector('#submit-btn');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const para = document.createElement('p');

let prevGuess = [];
let numOfGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

// validate Guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number greater than 0`);
  } else if (guess > 100) {
    alert(`Please enter a number less than or equal to 100`);
  } else {
    prevGuess.push(guess);
    numOfGuess++;  // increase guess count first
    if (numOfGuess === 10) {
      displayGuess(guess);
      displayMessage(`❌ Game Over. The number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// check guess
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`📉 Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`📈 Number is too high`);
  }
}

// display guess
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  remainingGuess.innerHTML = `${10 - numOfGuess}`;
}

// display message
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

// end game
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  para.classList.add('button');
  para.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

// new game
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e) {
    randomNumber = parseInt((Math.random() * 100) + 1);
    console.log(randomNumber);
    prevGuess = [];
    numOfGuess = 0;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${10}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(para);
    playGame = true;
  })
}