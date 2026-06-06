function convertTimerMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor((ms % hour) / minute),
    seconds: Math.floor((ms % minute) / second),
  };
}

const addLeadingZero = (value) => String(value).padStart(2, '0');

document.addEventListener('DOMContentLoaded', () => {
  const picker = document.querySelector('#timer-picker');
  const startButton = document.querySelector('#timer-start');
  const status = document.querySelector('#timer-status');
  let selectedDate = null;
  let intervalId = null;

  const render = (ms) => {
    const values = convertTimerMs(Math.max(0, ms));
    Object.entries(values).forEach(([key, value]) => {
      document.querySelector(`[data-${key}]`).textContent = addLeadingZero(value);
    });
  };

  picker.addEventListener('change', () => {
    selectedDate = new Date(picker.value);
    const valid = selectedDate.getTime() > Date.now();
    startButton.disabled = !valid;
    status.textContent = valid ? 'Дата коректна. Таймер готовий до запуску.' : 'Оберіть дату в майбутньому.';
    if (!valid && picker.value) showLab07Toast('Please choose a date in the future', 'error');
  });

  startButton.addEventListener('click', () => {
    startButton.disabled = true;
    picker.disabled = true;
    status.textContent = 'Таймер запущено.';
    const tick = () => {
      const difference = selectedDate.getTime() - Date.now();
      render(difference);
      if (difference <= 0) {
        clearInterval(intervalId);
        picker.disabled = false;
        picker.value = '';
        selectedDate = null;
        status.textContent = 'Відлік завершено.';
      }
    };
    tick();
    intervalId = setInterval(tick, 1000);
  });
});
