const userGuess = document.getElementById('userGuess');
const submitGuess = document.getElementById('submitGuess');
const scoreValue = document.getElementById('scoreValue');
const feedback = document.getElementById('feedback');
const message = document.getElementById('message');
const reset = document.getElementById('reset');

let score = 100;
let computerRandom = generateComputerGuess();
handleScore(score);

submitGuess.addEventListener('click', handleGuess);
reset.addEventListener('click', handleReset);

function generateComputerGuess() {
    return Math.floor(Math.random() * 100) + 1;
}

function handleScore(score) {
    scoreValue.innerText = score;
}

function showMessage(text) {
    message.style.display = 'block';
    feedback.innerText = text;
}

function handleGuess() {
    const guess = Number(userGuess.value);

    if (guess < 1 || guess > 100) {
        showMessage("Invalid Guess: Guess Between 1 to 100");
        return;
    }

    if (guess === computerRandom) {
        showMessage("You Guessed it right!");
    } else {
        score = Math.max(score - 10, 0);
        handleScore(score);

        if (guess > computerRandom) {
            showMessage("Guess Smaller Number than " + guess);
        } else {
            showMessage("Guess Larger Number than " + guess);
        }
    }

    userGuess.value = '';
}

function handleReset() {
    score = 100;
    computerRandom = generateComputerGuess();
    handleScore(score);
    message.style.display = 'none';
    userGuess.value = '';
}
