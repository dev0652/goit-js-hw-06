const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function updateName(event) {
  textOutput.textContent =
    event.currentTarget.value !== '' ? event.currentTarget.value : 'Anonymous';
}

textInput.addEventListener('input', updateName);
