document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#toggle-text-input');
  const button = document.querySelector('#toggle-text-button');

  button.addEventListener('click', () => {
    const shouldHideText = input.type === 'text';
    input.type = shouldHideText ? 'password' : 'text';
    button.textContent = shouldHideText ? 'Розкрити' : 'Приховати';
  });
});
