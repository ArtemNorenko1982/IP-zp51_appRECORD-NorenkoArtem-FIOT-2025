function isValidDate(value) {
  const match = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!match) {
    return false;
  }

  const [, day, month, year] = match.map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function setFieldError(field, message) {
  const error = field.parentElement.querySelector('.field-error');
  field.classList.toggle('invalid-field', Boolean(message));
  error.textContent = message;
}

function validateRegistrationForm(form) {
  const fields = form.elements;
  const errors = {
    fullName: fields.fullName.value.trim() ? '' : 'Поле є обов’язковим.',
    age: /^-?\d+$/.test(fields.age.value.trim()) ? '' : 'Введіть ціле число.',
    rating: /^-?(?:\d+|\d*[.,]\d+)$/.test(fields.rating.value.trim()) ? '' : 'Введіть дійсне число.',
    birthDate: isValidDate(fields.birthDate.value.trim()) ? '' : 'Введіть коректну дату DD.MM.YYYY.',
    password: fields.password.value ? '' : 'Поле є обов’язковим.',
    confirmPassword: fields.confirmPassword.value === fields.password.value && fields.confirmPassword.value
      ? ''
      : 'Паролі повинні збігатися.',
  };

  for (const [name, message] of Object.entries(errors)) {
    setFieldError(fields[name], message);
  }

  return Object.values(errors).every((message) => message === '');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const result = document.getElementById('form-result');

    if (validateRegistrationForm(form)) {
      result.textContent = 'Форму успішно перевірено.';
      result.className = 'form-result form-success';
      console.log('Дані форми валідні');
    } else {
      result.textContent = 'Виправте помилки у формі.';
      result.className = 'form-result form-failure';
    }
  });
});
