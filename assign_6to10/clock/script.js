const clock = document.getElementById('clock');
const p = document.createElement('p');
const timerDisplay = document.getElementById('timer-show');
const timerInput = document.getElementById('timer-input');
// for timer
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
clock.appendChild(p);
let intervalId=null;
let elapsedTime = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Function to update the clock every second
setInterval(() => {
    const now = new Date();
    let hours = now.getHours(); 
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12; 
    hours = hours ? hours : 12;

    p.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
}, 1000);


function timer() {
    if (elapsedTime <= 0) {
        alert("Time's Up!");
        stopTimer();
        return;
    }

    elapsedTime -= 1;

    hours = Math.floor(elapsedTime / 3600);
    minutes = Math.floor((elapsedTime % 3600) / 60);
    seconds = elapsedTime % 60;

    timerDisplay.textContent =
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}`;
}


startBtn.addEventListener('click', () => {
    const value = Number(timerInput.value);
    if(intervalId!=null) return
    if (Number.isFinite(value)) {
        elapsedTime = value;
        timer();
        intervalId = setInterval(timer,1000)
    } else {
        alert("Invalid Input!");
    }

});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);

})

resetBtn.addEventListener('click', stopTimer)

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
    hours = 0;
    seconds = 0;
    minutes = 0;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00"
    timerInput.placeholder = "Input in seconds";
}