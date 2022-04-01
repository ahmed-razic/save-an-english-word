const formInput = document.querySelector('#input-form');
const engInput = document.querySelector('#eng-input');
const bosInput = document.querySelector('#bos-input');
const filterInput = document.querySelector('#filter');
const clearBtn = document.querySelector('#clear-words');
const wordsList = document.querySelector('#words-list');

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoad', getAllWords);
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

    const span1 = document.createElement('span');
    span1.className = 'col s6';
    span1.appendChild(document.createTextNode(words[i]));
    li.appendChild(span1);

    const span2 = document.createElement('span');
    span2.className = 'col s6';
    span2.appendChild(document.createTextNode(words[i + 1]));
    li.appendChild(span2);

    wordsList.appendChild(li);
  }
}
/* 

localStorage.setItem('bosnian', JSON.stringify(bosnian));
localStorage.setItem('english', JSON.stringify(english)); */

<li class='collection-item blue-grey darken-1 row white-text'>
  <span class='col s6'>ddd</span>
  <span class='col s6'>ddd</span>
</li>;
