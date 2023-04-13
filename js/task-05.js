const inputEl = document.querySelector('#name-input');
const textOutPutEl = document.querySelector('#name-output');

inputEl.addEventListener("input", (event) => {
    textOutPutEl.textContent = event.currentTarget.value;
});

if (inputEl === '') {
    textOutPutEl.textContent = "Anonymous"
}
 textOutPutEl.textContent = event.currentTarget.value;
