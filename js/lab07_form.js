const feedbackStorageKey = 'feedback-form-state';
let feedbackFormData = { email: '', message: '' };

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const result = document.querySelector('#feedback-result');
  const saved = JSON.parse(localStorage.getItem(feedbackStorageKey) || 'null');

  if (saved) feedbackFormData = { ...feedbackFormData, ...saved };
  form.elements.email.value = feedbackFormData.email;
  form.elements.message.value = feedbackFormData.message;

  form.addEventListener('input', (event) => {
    feedbackFormData[event.target.name] = event.target.value.trim();
    localStorage.setItem(feedbackStorageKey, JSON.stringify(feedbackFormData));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!feedbackFormData.email || !feedbackFormData.message) {
      showLab07Toast('Fill please all fields', 'error');
      return;
    }
    console.log(feedbackFormData);
    result.textContent = JSON.stringify(feedbackFormData, null, 2);
    localStorage.removeItem(feedbackStorageKey);
    feedbackFormData = { email: '', message: '' };
    form.reset();
    showLab07Toast('Форму успішно відправлено', 'success');
  });
});
