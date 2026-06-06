class Client {
  #login;
  #email;

  constructor(login, email) {
    this.login = login;
    this.email = email;
  }

  get login() {
    return this.#login;
  }

  set login(value) {
    if (!value.trim()) {
      throw new Error('Login cannot be empty');
    }
    this.#login = value.trim();
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Email must contain @');
    }
    this.#email = value.trim();
  }
}

function runLab05Task04() {
  const client = new Client('artem_n', 'artem@example.com');
  client.login = 'norenko_artem';
  const result = { login: client.login, email: client.email };
  console.log('Client:', result);
  showLab05Result('lab05-result-04', result);
}
