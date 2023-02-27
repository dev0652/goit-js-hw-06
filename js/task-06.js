const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.classList.remove('valid', 'invalid');
  event.currentTarget.classList.add(
    event.currentTarget.value.length == event.currentTarget.dataset.length
      ? 'valid'
      : 'invalid'
  );
}
