import { API_ENDPOINT, UNSPLASH_API_KEY } from "./constants.js";
import { getCollections } from './collections.js';


export async function getCollections() {
    const url = 
    API_ENDPOINT + 
    'collections?client_id=' + 
    UNSPLASH_API_KEY + 
    '&page' +
    parseInt(Math.random() * 100);
    const response = await fetch(url, {
        method:'GET',
    });

    const data = await response.json();
    return data;
}

async function populateCollections(collectionId) {
    const collectionsElement = document.querySelector('#collections');
    const collections = await getCollections();
    const collectionItemsElements = collections
    .map(item =>{
        return `<button onclick="getPhotos('${item.id}')" title="${item.description}">${item.title}</button>`;
    })
    .join('');
    collectionsElement.innerHTML = collectionItemsElements;
}