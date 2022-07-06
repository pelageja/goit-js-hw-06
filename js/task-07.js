 const fontSizeEl = document.querySelector('#font-size-control');
 const text = document.querySelector('#text');



fontSizeEl.addEventListener('input', () => {
    text.style.fontSize = fontSizeEl.value + 'px';
});



