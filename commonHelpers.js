import{i as l,S as p}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const u={key:"11070675-9db3ad99120a3eae94c3d42ec",q:"",image_type:"photo",orientation:"horizontal",safesearch:"true",pretty:"true"};function d(i){const t=document.querySelector(".loader");if(t.style.display="block",i.q===""){t.style.display="none";return}return fetch(`https://pixabay.com/api/?${new URLSearchParams(i)}`).then(a=>{if(t.style.display="none",!a.ok)throw new Error(a.status);return a.json()})}function m(i,t){const a=i.hits.map(r=>`<li class="gallery-item">
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
                        </li>`).join("");t.insertAdjacentHTML("beforeend",a)}const n=document.querySelector('input[name="search"]'),c=document.querySelector(".gallery"),f=document.querySelector(".form");n.addEventListener("input",y);function y(i){u.q=i.target.value}f.addEventListener("submit",g);function g(i){i.preventDefault(),c.innerHTML="",n.value!==""&&d(u).then(t=>{t.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(m(t,c),new p(".gallery a",{captionsData:"alt",captionDelay:"250"}).refresh(),n.value="")}).catch(t=>{l.error({message:`${t}`,position:"topRight"})})}
//# sourceMappingURL=commonHelpers.js.map
