import{i as d,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const l={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true"};function u(t){const r=document.querySelector(".loader");if(r.style.display="block",t.q===""){r.style.display="none";return}return fetch(`https://pixabay.com/api/?${new URLSearchParams(t)}`).then(o=>{if(r.style.display="none",!o.ok)throw new Error(o.status);return o.json()})}function m(t,r){const o=t.hits.map(i=>`<li class="gallery-item">
                            <a class="gallery-link" href=${i.largeImageURL}>
                                <img
                                class="gallery-image"
                                src="${i.webformatURL}"
                                alt="${i.tags}"
                                />
                            </a>
                            <div class="desrp">
                                <ul class="desrp-list">
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Likes</p>
                                        <p class="desrp-actions-total">${i.likes}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Views</p>
                                        <p class="desrp-actions-total">${i.views}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Comments</p>
                                        <p class="desrp-actions-total">${i.comments}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Downloads</p>
                                        <p class="desrp-actions-total">${i.downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("");r.insertAdjacentHTML("beforeend",o)}const c=document.querySelector('input[name="search"]'),f=document.querySelector('button[type="button"]'),n=document.querySelector(".gallery");c.addEventListener("input",y);function y(t){l.q=t.target.value}f.addEventListener("click",()=>{n.innerHTML="",u(l).then(t=>{t.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t,n),new p(".gallery a",{captionsData:"alt",captionDelay:"250"}).refresh(),c.value="")}).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
