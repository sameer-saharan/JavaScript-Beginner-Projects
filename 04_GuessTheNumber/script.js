let randomNum = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector('#submit-btn');
const userInput = document.querySelector('#guessBar');
const prevGuess = document.querySelector('.prev-guess');
const remGuess = document.querySelector('.rem-guess');
const lowHigh = document.querySelector('.hintAndResult')

let prevGuesses = []
let guessCount = 0

let playGame = true

if (playGame) {
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let userInputNum = parseInt(userInput.value)
        validateGuess(userInputNum);
    })
};

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess<1 || guess>100) {
        alert("Please enter a number in range of 1 to 100")
    }else {
        prevGuesses.push(guess)
        if (guessCount >= 9) {
            displayGuess(guess);
            displayMessage(`Game Over! <span id="num">The number was ${randomNum}</span>`)
            endGame()
        }
        else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
};

function checkGuess(guess) {
    if (guess === randomNum){
        lowHigh.style.color = "#02B027"
        displayMessage(`You guessed it right, The number was ${randomNum}`)
        endGame()
    } else if (guess < randomNum) {
        lowHigh.style.color = "#E30707"
        displayMessage(`<span id="hint">Hint:</span> Number is Low`)
    } else if (guess > randomNum) {
        lowHigh.style.color = "#E30707"
        displayMessage(`<span id="hint">Hint:</span> Number is High`)
    }
};

function displayGuess(guess) {
    userInput.value = ''
    prevGuess.innerHTML += `${guess} `
    guessCount++
    remGuess.innerHTML = `${10 - guessCount}`   
};

function displayMessage(message) {
    lowHigh.innerHTML = `${message}`
};

function endGame () {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    playGame = false
    startNewGame();
};

function startNewGame () {
    const newGameButton = document.querySelector('#new-game')
    newGameButton.addEventListener('click', function(ev) {
        userInput.removeAttribute('disabled')
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuesses = []
        guessCount = 0
        prevGuess.innerHTML = ''
        remGuess.innerHTML = `${10 - guessCount}`
        playGame = true
        lowHigh.innerHTML = ''
    })
};
