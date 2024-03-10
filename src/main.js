import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import * as pixabay from "./js/pixabay-api.js"
import * as render from "./js/render-functions.js"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const input = document.querySelector('input[name="search"]')
const fetchPhotoBtn = document.querySelector('button[type="button"]')
const photosList = document.querySelector(".gallery");


input.addEventListener('input', inputValueFunc);

function inputValueFunc(event) {
    pixabay.searchParams.q = event.target.value;
}

fetchPhotoBtn.addEventListener("click", () => {
    
    photosList.innerHTML = "";
    if (input.value === "") {
        return
    }
  pixabay.fetchPhoto(pixabay.searchParams)
      .then((photos) => {if (photos.hits.length === 0) {
          iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            });
      }
      else {
          render.rendrePhoto(photos, photosList)
          const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });
          lightbox.refresh()
          input.value = ''
          }}
    )
      .catch((error) => { return error })
});
