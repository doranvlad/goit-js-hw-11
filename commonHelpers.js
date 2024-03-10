import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const c={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true"};function p(t){const r=document.querySelector(".loader");if(r.style.display="block",t.q===""){r.style.display="none";return}return fetch(`https://pixabay.com/api/?${new URLSearchParams(t)}`).then(a=>{if(r.style.display="none",!a.ok)throw new Error(a.status);return a.json()})}function f(t,r){const a=t.hits.map(i=>`<li class="gallery-item">
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
                        </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const o=document.querySelector('input[name="search"]'),m=document.querySelector('button[type="button"]'),l=document.querySelector(".gallery");o.addEventListener("input",y);function y(t){c.q=t.target.value}m.addEventListener("click",()=>{l.innerHTML="",o.value!==""&&p(c).then(t=>{t.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(f(t,l),new d(".gallery a",{captionsData:"alt",captionDelay:"250"}).refresh(),o.value="")}).catch(t=>t)});
//# sourceMappingURL=commonHelpers.js.map
