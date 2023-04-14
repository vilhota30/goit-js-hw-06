const inputEl = document.querySelector('#name-input');
const textOutPutEl = document.querySelector('#name-output');
const textEl = 'Anonymous';


inputEl.addEventListener('input', ouInput);

function ouInput(event) {
    if (event.target.value.trim() === '') {
        textOutPutEl.textContent = textEl;
    } else {
        textOutPutEl.textContent = event.target.value;
    }
}
