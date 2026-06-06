function runTask03() {
  const users = {
    Admin: 'admin123',
    User: 'user123',
  };
  const login = prompt('Введіть логін:');

  if (login === null || login.trim() === '') {
    alert('Cancelled');
    return;
  }

  console.log(`Введений логін: ${login}`);

  if (!Object.hasOwn(users, login)) {
    alert("I don't know you");
    return;
  }

  const password = prompt(`Введіть пароль для ${login}:`);
  if (password === null || password === '') {
    alert('Cancelled');
  } else if (password === users[login]) {
    alert(`Hello, ${login}`);
  } else {
    alert('Wrong password');
  }
}
