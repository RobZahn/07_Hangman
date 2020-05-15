const wordEl = document.querySelector('#word');
const popup = document.querySelector('#popup-container');
const playAgainBtn = document.querySelector('#play-again');
const finalMessage = document.querySelector('#final-message');
const wrongLettersEl = document.querySelector('#word-letters');
const notification = document.querySelector('#notification-container');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const wrongLetters = [];

// Show hidden word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split('')
      .map(
        letter => `<span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>`
      )
      .join('')}`;
  const innerWord = wordEl.innerText.replace(/\n/g, '');
  console.log(wordEl.innerText, innerWord);

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won!';
    popup.style.display = 'flex';
  }
}

displayWord();
