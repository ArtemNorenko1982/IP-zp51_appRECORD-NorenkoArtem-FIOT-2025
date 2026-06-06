function checkBrackets(str) {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const openingBrackets = new Set(Object.values(pairs));
  const stack = [];

  for (const character of str) {
    if (openingBrackets.has(character)) {
      stack.push(character);
    } else if (pairs[character] && stack.pop() !== pairs[character]) {
      return false;
    }
  }

  return stack.length === 0;
}

function runLab05Task06() {
  const input = document.getElementById('brackets-input').value;
  const result = checkBrackets(input);
  console.log('Brackets are correct:', result);
  showLab05Result('lab05-result-06', result);
}
