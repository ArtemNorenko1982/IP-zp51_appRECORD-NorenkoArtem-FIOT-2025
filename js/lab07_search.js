const searchState = { results: [], page: 1, perPage: 2 };

async function requestImages(query) {
  const response = await fetch('data/lab07_images.json');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const catalog = await response.json();
  const normalized = query.toLowerCase().trim();
  return catalog.filter((item) => !normalized || `${item.description} ${item.tags}`.toLowerCase().includes(normalized));
}

function renderSearchPage() {
  const gallery = document.querySelector('.search-gallery');
  const pagination = document.querySelector('.search-pagination');
  const start = (searchState.page - 1) * searchState.perPage;
  gallery.innerHTML = searchState.results.slice(start, start + searchState.perPage).map((image) => `<li><button type="button" class="search-card" data-original="${image.original}" data-description="${image.description}"><img src="${image.preview}" alt="${image.description}" /><span>${image.description}</span><small>Likes: ${image.likes} · Views: ${image.views}</small></button></li>`).join('');
  const pages = Math.ceil(searchState.results.length / searchState.perPage);
  pagination.innerHTML = Array.from({ length: pages }, (_, index) => `<button type="button" data-page="${index + 1}" class="${searchState.page === index + 1 ? 'active' : ''}">${index + 1}</button>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.image-search-form');
  const loader = document.querySelector('#search-loader');
  const status = document.querySelector('#search-status');
  const gallery = document.querySelector('.search-gallery');
  const pagination = document.querySelector('.search-pagination');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = form.elements.query.value.trim();
    if (!query) {
      status.textContent = 'Введіть пошуковий запит.';
      showLab07Toast('Search field must be filled in', 'error');
      return;
    }

    loader.hidden = false;
    gallery.innerHTML = '';
    pagination.innerHTML = '';
    status.textContent = 'Виконується асинхронний запит...';
    try {
      searchState.results = await requestImages(query);
      searchState.page = 1;
      status.textContent = searchState.results.length ? `Знайдено зображень: ${searchState.results.length}` : 'Sorry, there are no images matching your search query. Please try again!';
      renderSearchPage();
    } catch (error) {
      status.textContent = `Помилка запиту: ${error.message}`;
    } finally {
      loader.hidden = true;
    }
  });
  pagination.addEventListener('click', (event) => {
    if (event.target.dataset.page) { searchState.page = Number(event.target.dataset.page); renderSearchPage(); }
  });
  gallery.addEventListener('click', (event) => {
    const card = event.target.closest('.search-card');
    if (card) openGalleryModal(card.dataset.original, card.dataset.description);
  });
});
