const evenNumbers = [2, 4, 6, 8, 10];

function areAllNumbersEven(numbers) {
  return numbers.every((number) => number % 2 === 0);
}

function runLab05Task08() {
  const result = areAllNumbersEven(evenNumbers);
  console.log('Every number is even:', result);
  showLab05Result('lab05-result-08', result);
}
