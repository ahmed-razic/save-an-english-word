//small app for storing english words and bosnian translation

const formInput = document.querySelector('#input-form');
const engInput = document.querySelector('#eng-input');
const bosInput = document.querySelector('#bos-input');
const filterInput = document.querySelector('#filter');
const clearBtn = document.querySelector('#clear-words');
const wordsList = document.querySelector('#words-list');

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getAllWords);
  formInput.addEventListener('submit', addWords);
  wordsList.addEventListener('click', removeWords);
  clearBtn.addEventListener('click', clearAllWords);
  filterInput.addEventListener('keyup', filterWords);
}

function getAllWords() {
  let words;

  if (localStorage.getItem('words') === null) {
    words = [];
  } else {
    words = JSON.parse(localStorage.getItem('words'));
  }

  for (let i = 0; i < words.length - 1; i++) {
    const li = document.createElement('li');
    li.className = 'collection-item blue-grey darken-1 row white-text';

    const deleteIcon = document.createElement('a');
    deleteIcon.className = 'delete-item secondary-content';
    deleteIcon.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteIcon);

    const engWord = document.createElement('span');
    engWord.className = 'col s6';
    engWord.appendChild(document.createTextNode(words[i]));
    li.appendChild(engWord);

    const bosWord = document.createElement('span');
    bosWord.className = 'col s6';
    bosWord.appendChild(document.createTextNode(words[i + 1]));
    li.appendChild(bosWord);

    wordsList.appendChild(li);
  }
}

function addWords(e) {
  e.preventDefault();

  if (engInput.value === '' || bosInput.value === '') {
    alert('Pllease enter both words');
  }
  const li = document.createElement('li');
  li.className = 'collection-item blue-grey darken-1 row white-text';

  const deleteIcon = document.createElement('a');
  deleteIcon.className = 'delete-item secondary-content';
  deleteIcon.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(deleteIcon);

  const engWord = document.createElement('span');
  engWord.className = 'col s6';
  engWord.appendChild(document.createTextNode(engInput.value));
  li.appendChild(engWord);

  const bosWord = document.createElement('span');
  bosWord.className = 'col s6';
  bosWord.appendChild(document.createTextNode(bosInput.value));
  li.appendChild(bosWord);

  wordsList.appendChild(li);

  storeWords(engInput.value, bosInput.value);

  engInput.value = '';
  bosInput.value = '';
}

function storeWords(engWord, bosWord) {
  let words;

  if (localStorage.getItem('words') === null) {
    words = [];
  } else {
    words = JSON.parse(localStorage.getItem('words'));
  }

  words.push(engWord);
  words.push(bosWord);

  localStorage.setItem('words', JSON.stringify(words));
}

function removeWords(e) {
  if (e.target.classList.contains('fa')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      removeFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeFromLocalStorage(listItem) {
  let words;

  if (localStorage.getItem('words') === null) {
    words = [];
  } else {
    words = JSON.parse(localStorage.getItem('words'));
  }

  words.forEach((item, index) => {
    if (listItem.childNodes[1].textContent === item) {
      words.splice(index, 2);
    }
  });

  localStorage.setItem('words', JSON.stringify(words));
}

function filterWords(e) {
  const filterText = e.target.value.toLowerCase();

  document.querySelectorAll('li').forEach((item) => {
    const wordText = item.childNodes[1].innerText.toLowerCase();
    if (wordText.indexOf(filterText) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function clearAllWords() {
  while (wordsList.firstChild) {
    wordsList.removeChild(wordsList.firstChild);
  }

  localStorage.clear();
}
