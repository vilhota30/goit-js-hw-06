function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');


btnChangeColorEl.addEventListener("click", () => {
  spanColorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = spanColorEl.textContent;
});