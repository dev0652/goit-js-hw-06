const sliderEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
spanEl.style.fontSize = sliderEl.value + 'px';

sliderEl.addEventListener('input', updateFontSize);

function updateFontSize(event) {
  spanEl.style.fontSize = event.target.value + 'px';
}
