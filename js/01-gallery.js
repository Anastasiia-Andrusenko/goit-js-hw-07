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


const makeGalleryMarkup = image => {
  for (let i = 0; i < galleryItems.length; i++) {
    return `
    <img src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" width="340">
    `;
  }
};
console.log(makeGalleryMarkup());

const makeGallery = galleryItems.map(makeGalleryMarkup).join('');
galleryRef.insertAdjacentHTML('afterbegin', makeGallery);



