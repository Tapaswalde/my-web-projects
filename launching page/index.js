const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const countDownDate = new Date("Nov 3, 2025 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDownDate - now;

  if (diff < 0) {
    clearInterval(x);
    daysEl.innerHTML = 0;
    hoursEl.innerHTML = 0;
    minutesEl.innerHTML = 0;
    secondsEl.innerHTML = 0;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = String(hours).padStart(2, "0");
  minutesEl.innerHTML = String(minutes).padStart(2, "0");
  secondsEl.innerHTML = String(seconds).padStart(2, "0");
}, 1000);
