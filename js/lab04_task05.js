function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}

function runTask05() {
  const message = prompt('Введіть повідомлення для перевірки:');
  if (message === null) {
    alert('Введення скасовано');
    return;
  }

  const result = checkForSpam(message);
  console.log(`Повідомлення містить заборонене слово: ${result}`);
  alert(String(result));
}
