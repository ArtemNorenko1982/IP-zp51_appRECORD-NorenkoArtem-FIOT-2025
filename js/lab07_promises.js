function showLab07Toast(message, type = 'success') {
  const toast = document.querySelector('#lab07-toast');
  toast.textContent = message;
  toast.className = `lab07-toast ${type}`;
  toast.hidden = false;
  clearTimeout(showLab07Toast.timeoutId);
  showLab07Toast.timeoutId = setTimeout(() => { toast.hidden = true; }, 3000);
}

function createNotificationPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => state === 'fulfilled' ? resolve(delay) : reject(delay), delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.promise-form');
  const status = document.querySelector('#promise-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;
    status.textContent = `Проміс очікує ${delay} ms...`;
    createNotificationPromise(delay, state)
      .then((value) => showLab07Toast(`Fulfilled promise in ${value}ms`, 'success'))
      .catch((value) => showLab07Toast(`Rejected promise in ${value}ms`, 'error'))
      .finally(() => { status.textContent = 'Проміс завершив роботу.'; form.reset(); });
  });
});
