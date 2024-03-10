import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const c={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true"};function p(t){const i=document.querySelector(".loader");if(i.style.display="block",t.q!=="")return fetch(`https://pixabay.com/api/?${new URLSearchParams(t)}`).then(a=>{if(i.style.display="none",!a.ok)throw new Error(a.status);return a.json()})}function m(t,i){const a=t.hits.map(r=>`<li class="gallery-item">
                            <a class="gallery-link" href=${r.largeImageURL}>
                                <img
                                class="gallery-image"
                                src="${r.webformatURL}"
                                alt="${r.tags}"
                                />
                            </a>
                            <div class="desrp">
                                <ul class="desrp-list">
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Likes</p>
                                        <p class="desrp-actions-total">${r.likes}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Views</p>
                                        <p class="desrp-actions-total">${r.views}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Comments</p>
                                        <p class="desrp-actions-total">${r.comments}</p>
                                    </li>
                                    <li class="desrp-item">
                                        <p class="desrp-actions">Downloads</p>
                                        <p class="desrp-actions-total">${r.downloads}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>`).join("");i.insertAdjacentHTML("beforeend",a)}const l=document.querySelector('input[name="search"]'),f=document.querySelector('button[type="button"]'),n=document.querySelector(".gallery");l.addEventListener("input",y);function y(t){c.q=t.target.value}f.addEventListener("click",()=>{n.innerHTML="",p(c).then(t=>{t.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t,n),new d(".gallery a",{captionsData:"alt",captionDelay:"250"}),l.value="")}).catch(t=>console.log(t))});
//# sourceMappingURL=commonHelpers.js.map
