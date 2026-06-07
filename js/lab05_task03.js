const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];

function applyFruitDiscount(items) {
  return items.map((fruit, index) => ({
    ...fruit,
    id: index + 1,
    price: fruit.price * 0.8,
  }));
}

function runLab05Task03() {
  console.log('Original fruits:', fruits);
  const discountedFruits = applyFruitDiscount(fruits);
  console.log('Discounted fruits:', discountedFruits);
  showLab05Result('lab05-result-03', discountedFruits);
}
