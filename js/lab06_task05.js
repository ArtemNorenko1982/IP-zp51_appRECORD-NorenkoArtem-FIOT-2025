document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');
  const result = document.querySelector('#login-result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
      alert('All form fields must be filled in');
      result.textContent = 'Помилка: заповніть усі поля.';
      return;
    }

    const formData = { email, password };
    console.log(formData);
    result.textContent = JSON.stringify(formData, null, 2);
    form.reset();
  });
});
