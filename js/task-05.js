let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  if (inputEl.value !== '') {
    return outputEl.textContent = inputEl.value;
  }
  return outputEl.textContent = 'Anonymous'
});


