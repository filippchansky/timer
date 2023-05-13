const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

console.log(timerEl.innerText);

const createTimerAnimator = () => {
  let intervalId; // переменная для хранения идентификатора интервала
  return (seconds) => {
    intervalId = setInterval(() => {
      // запуск интервала
      seconds -= 1;
      if (seconds >= 0) {
        const hours = Math.floor(seconds / 3600); // Часы
        const minutes = Math.floor((seconds - hours * 3600) / 60); // минуты
        const sec = seconds - hours * 3600 - minutes * 60; // секунды

        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSec = String(sec).padStart(2, "0");

        timerEl.innerText = `${formattedHours}:${formattedMinutes}:${formattedSec}`;
      } else {
        clearInterval(intervalId); // остановка интервала, когда время вышло
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  const inputVal = inputEl.value;
  const newValue = inputVal.replace(/\D/g, "");
  inputEl.value = newValue;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});

