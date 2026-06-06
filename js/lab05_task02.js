const medicines = {
  Агалгін: new Date('2022-05-01'),
  Ношпа: new Date('2025-07-02'),
  Альфахолін: new Date('2024-12-21'),
  Аспірин: new Date('2022-08-15'),
  Аспаркам: new Date('2024-04-18'),
};

const getValidMedicines = (items, currentDate = new Date()) => Object.entries(items)
  .filter(([, expirationDate]) => expirationDate > currentDate)
  .sort(([, firstDate], [, secondDate]) => firstDate - secondDate)
  .map(([name]) => name);

function runLab05Task02() {
  const result = getValidMedicines(medicines);
  console.log('Valid medicines:', result);
  showLab05Result('lab05-result-02', result.length ? result : 'Усі медикаменти прострочені.');
}
