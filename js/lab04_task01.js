function runTask01() {
  const value = prompt('Введіть число:');

  if (value === null) {
    alert('Введення скасовано');
    return;
  }

  console.log(`Введене значення: ${value}`);

  const number = Number(value);
  if (value.trim() === '' || Number.isNaN(number)) {
    alert('Введене значення не є числом');
  } else if (number > 0) {
    alert('Число додатне');
  } else if (number < 0) {
    alert('Число від’ємне');
  } else {
    alert('Число дорівнює нулю');
  }
}
