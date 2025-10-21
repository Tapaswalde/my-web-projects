const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-button');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

const translations = {
  en: {
    title: "Welcome!",
    text: "This is a multilingual modal popup system."
  },
  hi: {
    title: "स्वागत है!",
    text: "यह एक बहुभाषी मोडल पॉपअप सिस्टम है।"
  }
};

let currentLang='en';

function setLanguage(Lang){
    currentLang=Lang;
    modalTitle.textContent=translations[Lang].title;
    modalText.textContent=translations[Lang].text;
}

openBtn.addEventListener('click', () => {
  setLanguage(currentLang);
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

