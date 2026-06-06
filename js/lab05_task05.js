const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

function countTags(items) {
  return items
    .flatMap((tweet) => tweet.tags)
    .reduce((counts, tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
      return counts;
    }, {});
}

function runLab05Task05() {
  const result = countTags(tweets);
  console.log('Tag counts:', result);
  showLab05Result('lab05-result-05', result);
}
