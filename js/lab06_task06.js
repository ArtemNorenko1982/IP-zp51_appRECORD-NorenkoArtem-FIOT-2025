function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.change-color');
  const colorLabel = document.querySelector('.widget .color');

  button.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorLabel.textContent = color;
  });
});
