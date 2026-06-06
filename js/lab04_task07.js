function createRandomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 101) - 50);
}

function swapRequiredElements(numbers) {
  let maxEvenIndex = -1;
  let minEvenIndex = -1;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 0 && (maxEvenIndex === -1 || numbers[index] > numbers[maxEvenIndex])) {
      maxEvenIndex = index;
    }

    if (index % 2 === 0 && (minEvenIndex === -1 || numbers[index] < numbers[minEvenIndex])) {
      minEvenIndex = index;
    }
  }

  if (maxEvenIndex !== -1 && minEvenIndex !== -1) {
    [numbers[maxEvenIndex], numbers[minEvenIndex]] = [numbers[minEvenIndex], numbers[maxEvenIndex]];
  }

  return { maxEvenIndex, minEvenIndex };
}

function insertionSort(numbers) {
  const sortedNumbers = [...numbers];

  for (let index = 1; index < sortedNumbers.length; index += 1) {
    const current = sortedNumbers[index];
    let previousIndex = index - 1;

    while (previousIndex >= 0 && sortedNumbers[previousIndex] > current) {
      sortedNumbers[previousIndex + 1] = sortedNumbers[previousIndex];
      previousIndex -= 1;
    }

    sortedNumbers[previousIndex + 1] = current;
  }

  return sortedNumbers;
}

function runTask07() {
  const length = Number(prompt('Введіть кількість елементів масиву:'));
  if (!Number.isInteger(length) || length <= 0) {
    alert('Кількість елементів має бути додатним цілим числом');
    return;
  }

  const inputArray = createRandomArray(length);
  const changedArray = [...inputArray];
  const indexes = swapRequiredElements(changedArray);
  const sortedArray = insertionSort(changedArray);

  console.log('Вхідний масив:', inputArray);
  console.log('Масив після обміну:', changedArray);
  console.log('Відсортований масив:', sortedArray);

  const swapMessage = indexes.maxEvenIndex === -1
    ? 'У масиві немає парного елемента для обміну.'
    : `Максимальний парний елемент та мінімальний елемент із парним індексом поміняно місцями.`;

  alert(`${swapMessage}\n\nВхідний: ${inputArray.join(', ')}\nПісля обміну: ${changedArray.join(', ')}\nСортування: ${sortedArray.join(', ')}`);
}
