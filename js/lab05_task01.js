let nextProductId = 1;

function createProduct(obj, callback) {
  const product = { ...obj, id: nextProductId };
  nextProductId += 1;
  callback(product);
  return product;
}

function logProduct(product) {
  console.log('Product:', product);
}

function logTotalPrice(product) {
  const totalPrice = product.price * product.quantity;
  console.log(`Total price: ${totalPrice}`);
  return totalPrice;
}

function runLab05Task01() {
  const productData = { name: 'Laptop', price: 32000, quantity: 2 };
  const product = createProduct(productData, logProduct);
  const totalPrice = logTotalPrice(product);
  showLab05Result('lab05-result-01', { product, totalPrice });
}
