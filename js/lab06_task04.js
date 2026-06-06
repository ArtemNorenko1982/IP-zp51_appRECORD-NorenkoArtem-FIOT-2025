function analyzeCategories() {
  const categories = document.querySelectorAll('#categories > .item');
  const messages = [`Number of categories: ${categories.length}`];

  console.log(messages[0]);

  categories.forEach((category) => {
    const title = category.querySelector('h2').textContent;
    const itemCount = category.querySelector('ul').children.length;
    const message = `Category: ${title}\nElements: ${itemCount}`;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
    messages.push(message);
  });

  return messages.join('\n\n');
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#categories-button');
  const result = document.querySelector('#categories-result');

  button.addEventListener('click', () => {
    result.textContent = analyzeCategories();
  });
});
