const inputEl = document.querySelector('#validation-input');
console.log(inputEl.dataset.length);


inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.add('valid');
        
    }
    
});



