const incBtnEl = document.querySelector('[data-action="increment"]');
const decrBtnEl = document.querySelector('[data-action="decrement"]');
decrBtnEl.disabled = true;

let counterValue = 0;

incBtnEl.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
  decrBtnEl.disabled = false;
});

decrBtnEl.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
  if (counterValue < 1) {
    decrBtnEl.disabled = true;
  }
});
