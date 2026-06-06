const stringArray = ['banana', 'orange', 'apple', 'pear'];

function sortStringsAlphabetically(strings) {
  return [...strings].sort((first, second) => first.localeCompare(second));
}

function runLab05Task09() {
  const result = sortStringsAlphabetically(stringArray);
  console.log('Sorted strings:', result);
  showLab05Result('lab05-result-09', result);
}
