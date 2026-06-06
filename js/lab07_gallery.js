const rollerImages = [
  { preview: 'src/lab07/roller-riverside.png', original: 'src/lab07/roller-riverside.png', description: 'Швидкий заїзд ролера на міській набережній', tags: 'ролики місто набережна захід сонця', likes: 128, views: 930 },
  { preview: 'src/lab07/roller-friends.png', original: 'src/lab07/roller-friends.png', description: 'Друзі катаються на роликах у зеленому парку', tags: 'ролики друзі парк активний відпочинок', likes: 214, views: 1450 },
  { preview: 'src/lab07/roller-skatepark.png', original: 'src/lab07/roller-skatepark.png', description: 'Тренування ролерки в сучасному скейтпарку', tags: 'ролики скейтпарк стрибок спорт', likes: 176, views: 1120 },
];

const galleryCard = (image) => `<li><button type="button" class="roller-card" data-original="${image.original}" data-description="${image.description}"><img src="${image.preview}" alt="${image.description}" /><span>${image.description}</span></button></li>`;

function openGalleryModal(image, description) {
  const modal = document.querySelector('#gallery-modal');
  modal.querySelector('img').src = image;
  modal.querySelector('img').alt = description;
  modal.querySelector('figcaption').textContent = description;
  modal.hidden = false;
}

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.roller-gallery');
  const modal = document.querySelector('#gallery-modal');
  gallery.innerHTML = rollerImages.map(galleryCard).join('');
  gallery.addEventListener('click', (event) => {
    const card = event.target.closest('.roller-card');
    if (card) openGalleryModal(card.dataset.original, card.dataset.description);
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.gallery-modal-close')) modal.hidden = true;
  });
});
