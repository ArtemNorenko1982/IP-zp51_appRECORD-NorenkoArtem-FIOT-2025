const medicines = [
  { name: 'Агалгін', expirationDate: new Date('2022-05-01') },
  { name: 'Ношпа', expirationDate: new Date('2026-07-02') },
  { name: 'Альфахолін', expirationDate: new Date('2024-12-21') },
  { name: 'Аспірин', expirationDate: new Date('2022-08-15') },
  { name: 'Аспаркам', expirationDate: new Date('2027-04-18') },
];

const getValidMedicines = (items, currentDate = new Date()) =>
  items
    .filter(({ expirationDate }) => expirationDate > currentDate)
    .sort((a, b) => a.expirationDate - b.expirationDate)
    .map(({ name }) => name);

function runLab05Task02() {
  const result = getValidMedicines(medicines);

  console.log('Valid medicines:', result);
  showLab05Result(
    'lab05-result-02',
    result.length > 0 ? result : 'Усі медикаменти прострочені.',
  );
}
