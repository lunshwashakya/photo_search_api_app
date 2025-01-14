import { getCollections } from './collections.js';
import { UNSPLASH_API_KEY, API_ENDPOINT} from './constants.js';
import { populatePhotos} from './photos.js';

console.log(UNSPLASH_API_KEY);
console.log(API_ENDPOINT);
console.log(await getCollections());

(async () =>{
    await populateCollections();    
    window.populatePhotos = populatePhotos; 
})();