const breakTime = 5;
const workTime = 25;
let totalTime = workTime * 60;
let timer;
let isBreak = true;

export const startPomodoro = () => {
  timer = setInterval(() => {
    countdown(true);
  }, 1000);
};

function countdown() {
  if (totalTime >= 1) {
    totalTime--;
  } else {
    playAudio();
    totalTime = 0;
    totalTime = getTime() * 60;
    isBreak = !isBreak;
  }
  displayTimeLeft();
}

function playAudio() {
  let audio = new Audio(
    "http://www.orangefreesounds.com/wp-content/uploads/2016/12/Short-ringtone-for-notification.mp3"
  );
  audio.play();
}

function getTime() {
  return isBreak ? breakTime : workTime;
}

export function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function padTime(time) {
  return `${time < 10 ? "0" : ""}${time}`;
}
// prettier-ignore
function displayTimeLeft() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime - (minutes * 60);
    const timeMinutes = document.getElementById("time-left");
    const display = `${padTime(minutes)} : ${padTime(seconds)}`;

    timeMinutes.textContent = display;
    document.title = display;
  }
