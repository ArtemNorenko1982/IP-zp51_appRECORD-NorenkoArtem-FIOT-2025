function createRandomMatrix(rows, columns) {
  return Array.from(
    { length: rows },
    () => Array.from({ length: columns }, () => Math.floor(Math.random() * 41) - 20),
  );
}

function runTask08() {
  let matrix;
  let flatNumbers;

  do {
    matrix = createRandomMatrix(4, 5);
    flatNumbers = matrix.flat();
  } while (flatNumbers.filter((number) => number > 0).length < 3);

  const positiveNumbers = flatNumbers.filter((number) => number > 0);
  const negativeNumbers = flatNumbers.filter((number) => number < 0);

  console.log('Двовимірний масив:');
  console.table(matrix);
  console.log('Додатні числа:', positiveNumbers);
  console.log('Від’ємні числа:', negativeNumbers);

  const replacement = Number(prompt('Введіть від’ємне число для заміни третього додатного елемента:'));
  if (!Number.isFinite(replacement) || replacement >= 0) {
    alert('Потрібно ввести від’ємне число');
    return;
  }

  positiveNumbers[2] = replacement;
  console.log('Масив додатних чисел після заміни:', positiveNumbers);
  alert(`Додатні після заміни: ${positiveNumbers.join(', ')}\nВід’ємні: ${negativeNumbers.join(', ')}`);
}
