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
    <img src="${galleryItem.preview}" alt="${galleryItem.description}" width="340">
   `;
};

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGallery);