function getRandomBoxColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  const fragment = document.createDocumentFragment();

  boxes.replaceChildren();

  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement('div');
    const size = 30 + index * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomBoxColor();
    fragment.append(box);
  }

  boxes.append(fragment);
}

function destroyBoxes() {
  document.querySelector('#boxes').replaceChildren();
}

document.addEventListener('DOMContentLoaded', () => {
  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const status = document.querySelector('#boxes-status');

  controls.addEventListener('click', (event) => {
    if (event.target.matches('[data-create]')) {
      const amount = Number(input.value);

      if (!Number.isInteger(amount) || amount < 1 || amount > 100) {
        status.textContent = 'Введіть ціле число від 1 до 100.';
        return;
      }

      createBoxes(amount);
      input.value = '';
      status.textContent = `Створено блоків: ${amount}.`;
    }

    if (event.target.matches('[data-destroy]')) {
      destroyBoxes();
      status.textContent = 'Колекцію очищено.';
    }
  });
});
