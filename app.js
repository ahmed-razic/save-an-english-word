const bosnian = ['kuca', 'macka', 'auto'];
const english = ['house', 'cat', 'car'];

localStorage.setItem('bosnian', JSON.stringify(bosnian));
localStorage.setItem('english', JSON.stringify(english));

const inputForm = document.querySelector('#input-form');
const inputBos = document.querySelector('#input-bos');
const inputEng = document.querySelector('#input-eng');
const inputFilter = document.querySelector('#input-filter');
const wordsList = document.querySelector('#words-list');
const clearWords = document.querySelector('#clear-words');

console.log(inputForm);
console.log(inputBos);
console.log(inputEng);
console.log(inputFilter);
console.log(wordsList);
console.log(clearWords);
