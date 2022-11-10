import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

// .gallery__link
// .gallery__image
// .gallery__item


const makeGalleryMarkup = galleryItem => {
  return `
  <div class="gallery__item">
    <a href="${galleryItem.original}" class="gallery__link">
      <img
        src="${galleryItem.preview}" 
        alt="${galleryItem.description}" 
        class="gallery__image"
        data-source="${galleryItem.original}"
        >
    </a>
  </div>`;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', makeGallery);



// Реализация делегирования на div.gallery и получение url большого изображения.

function onClickImage(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const imageLink = evt.target.dataset.source;
  console.log(imageLink);
}




galleryRef.addEventListener('click', onClickImage);