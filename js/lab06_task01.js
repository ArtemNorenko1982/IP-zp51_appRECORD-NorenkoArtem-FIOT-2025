document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#show-me-input');
  const button = document.querySelector('#show-me-button');
  const result = document.querySelector('#show-me-result');

  button.addEventListener('click', () => {
    console.log(input.value);
    result.textContent = `У Console виведено: ${input.value || '(порожній рядок)'}`;
  });
});
