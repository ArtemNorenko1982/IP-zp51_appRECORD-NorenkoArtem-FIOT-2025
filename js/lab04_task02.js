function runTask02() {
  const number = prompt("Введіть '1', '2', '3' або '4':");
  let result;

  switch (number) {
    case '1':
      result = 'зима';
      break;
    case '2':
      result = 'весна';
      break;
    case '3':
      result = 'літо';
      break;
    case '4':
      result = 'осінь';
      break;
    default:
      result = 'Невідоме значення';
  }

  console.log(`Значення змінної result: ${result}`);
  alert(result);
}
