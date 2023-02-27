function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let boxSide = 30;

  for (let index = 1; index <= amount; index += 1) {
    if (index > 1) {
      boxSide += 10;
    }

    const divEl = document.createElement('div');
    divEl.classList.add('box');
    divEl.style = `background-color: ${getRandomHexColor()}; width: ${boxSide}px; height: ${boxSide}px;`;

    boxesContainer.append(divEl);
  }
}

createBtnEl.addEventListener('click', () => createBoxes(inputEl.valueAsNumber));

destroyBtnEl.addEventListener('click', () => (boxesContainer.innerHTML = ''));
