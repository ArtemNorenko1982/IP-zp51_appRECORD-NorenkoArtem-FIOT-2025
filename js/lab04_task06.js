function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

function runTask06() {
  const input = prompt('Введіть числа через кому:');
  const value = Number(prompt('Введіть граничне значення:'));

  if (input === null || input.trim() === '' || !Number.isFinite(value)) {
    alert('Введіть коректні дані');
    return;
  }

  const numbers = input.split(',').map((item) => Number(item.trim()));
  if (numbers.some((number) => !Number.isFinite(number))) {
    alert('Масив повинен містити лише числа');
    return;
  }

  const result = filterArray(numbers, value);
  console.log('Результат фільтрації:', result);
  alert(result.length > 0 ? result.join(', ') : 'Підходящих чисел немає');
}
