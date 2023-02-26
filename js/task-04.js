let counterValue = 0;

const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');

incrementEl.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrementEl.addEventListener('click', () => {
  if (value.textContent > 0) {
    counterValue -= 1;
    value.textContent = counterValue;
  }
});
