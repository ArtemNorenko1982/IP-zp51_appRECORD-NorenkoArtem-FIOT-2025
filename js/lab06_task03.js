document.addEventListener('DOMContentLoaded', () => {
  const place = document.querySelector('#place');
  const result = document.querySelector('#place-result');

  window.addEventListener('click', (event) => {
    const clickedInsidePlace = place.contains(event.target);
    console.log(clickedInsidePlace);
    result.textContent = `Останній результат: ${clickedInsidePlace}`;
  });
});
