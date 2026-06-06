function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

function runTask04() {
  const quantity = Number(prompt('Введіть кількість дроїдів:'));
  const pricePerDroid = Number(prompt('Введіть ціну одного дроїда:'));

  if (!Number.isInteger(quantity) || quantity <= 0 || !Number.isFinite(pricePerDroid) || pricePerDroid < 0) {
    alert('Введіть коректну кількість і ціну');
    return;
  }

  const result = makeTransaction(quantity, pricePerDroid);
  console.log(result);
  alert(result);
}
