import { API_ENDPOINT, UNSPLASH_API_KEY } from "./constants.js";

export async function getPhotos(collectionId) {
    const url = 
    API_ENDPOINT + 
    'collections?'+ 
    collectionId +
    '/photos?client_id=' + 
    UNSPLASH_API_KEY + 
    '&page' +
    parseInt(Math.random() * 100);
    const response = await fetch(url, {
        method:'GET',
    });

    const data = await response.json();
    return data;
}

async function populatePhotos(collectionId) {
    const photosElement = document.querySelector('#photos');
    const photos = await getPhotos(collectionId);
    const photoItemsElements = photos
    .map(item =>{
        return `<img src="${item.url.thumb}" alt="${item.alt_description}">`;
    })
    .join('');
    photosElement.innerHTML = photoItemsElements;
}