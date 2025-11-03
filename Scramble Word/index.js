const words = [
  "apple", "ocean", "forest", "mountain", "river", "dream", "cloud", "energy", "freedom", "harmony",
  "sunrise", "shadow", "whisper", "journey", "galaxy", "memory", "vision", "breeze", "spirit", "adventure",
  "courage", "wonder", "light", "magic", "nature", "silence", "truth", "wisdom", "passion", "moment",
  "future", "destiny", "friendship", "balance", "faith", "growth", "imagination", "hope", "trust", "smile",
  "beauty", "creation", "focus", "strength", "peace", "music", "inspire", "spark", "radiance", "tranquil",
  "serenity", "freedom", "kindness", "dreamer", "wander", "mystery", "courageous", "clarity", "motion", "energy",
  "believe", "explore", "discover", "journey", "embrace", "bloom", "rise", "shine", "evolve", "connect",
  "flow", "calm", "momentum", "vivid", "purpose", "truthful", "gentle", "creative", "pure", "infinite",
  "mindful", "resilient", "vibrant", "glow", "adapt", "focus", "grow", "smile", "hopeful", "radiant",
  "kind", "strong", "honest", "bright", "clear", "open", "bold", "peaceful", "steady", "alive"
];

const wordEl = document.getElementById("word");
const timeEl = document.getElementById("time");
const checkBtn = document.getElementById("check");
const refreshBtn = document.getElementById("refresh");
const userInput = document.getElementById("userInput");
const resultEl = document.getElementById("result");

let computerWord;
let timerId; 
let count = 60;

function shuffleString(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function get(words) {
  const randomIdx = Math.floor(Math.random() * words.length);
  const word = shuffleString(words[randomIdx]);
  computerWord = words[randomIdx]; 
  wordEl.textContent = word;
}

function startTimer() {
  count = 60;
  timeEl.textContent = count;
  timerId = setInterval(() => {
    count--;
    timeEl.textContent = count;
    if (count === 0) {
      clearInterval(timerId);
      resultEl.textContent = "You lose!";
      resultEl.classList.add("loose");
    }
  }, 1000);
}

window.addEventListener("load", () => {
  get(words);
  startTimer();
});

checkBtn.addEventListener("click", () => {
    userInput.disabled=true;
  if (userInput.value === '') {
    alert("Enter the word for checking");
  } else {
    clearInterval(timerId); 
    if (userInput.value.toLowerCase() === computerWord.toLowerCase()) {
      resultEl.textContent = "You Win!";
      resultEl.classList.add("win");
    } else {
      resultEl.textContent = "You lose!";
      resultEl.classList.add("loose");
    }
  }
});

refreshBtn.addEventListener("click", () => {
  clearInterval(timerId);
  resultEl.textContent = "";
  userInput.value = "";
  userInput.disabled=false;
  get(words);
  startTimer();
});
