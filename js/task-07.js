const sliderEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

sliderEl.addEventListener('input', updateFontSize);

function updateFontSize(event) {
  spanEl.style.fontSize = event.currentTarget.value + 'px';
}
