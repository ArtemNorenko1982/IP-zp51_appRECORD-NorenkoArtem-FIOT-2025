const valuesData = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

function collectValues(items) {
  return items.flatMap((item) => item.values);
}

function runLab05Task07() {
  const result = collectValues(valuesData);
  console.log('Collected values:', result);
  showLab05Result('lab05-result-07', result);
}
