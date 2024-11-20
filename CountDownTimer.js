// script.js
let countdown;
let isPaused = false;
let timeLeft;

const durationInput = document.getElementById("duration");
const timerDisplay = document.getElementById("timer");
const setButton = document.getElementById("set-btn");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

function startCountdown() {
  if (timeLeft <= 0 || isPaused) return;

  countdown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay(timeLeft);
    } else {
      clearInterval(countdown);
      alert("Time's up!");
    }
  }, 1000);
}

setButton.addEventListener("click", () => {
  timeLeft = parseInt(durationInput.value);
  updateDisplay(timeLeft);
});

startButton.addEventListener("click", () => {
  if (!countdown) startCountdown();
  isPaused = false;
});

pauseButton.addEventListener("click", () => {
  isPaused = true;
  clearInterval(countdown);
});

resetButton.addEventListener("click", () => {
  clearInterval(countdown);
  countdown = null;
  isPaused = false;
  timeLeft = 0;
  updateDisplay(0);
  durationInput.value = "";
});

// Initialize the display
updateDisplay(0);
