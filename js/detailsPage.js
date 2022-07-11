import { navMenu } from "./helpers.js";
navMenu();
import { footerMenu } from "./helpers.js";
footerMenu();

let idGame = window.location.hash.slice(1);
let games = JSON.parse(localStorage.getItem('games'));
let game = games.find(game=>game.id == idGame);
let detail = document.createElement('div');
detail.classList.add('card','card-details');
//estilos particulares de la card, preguntar a joel sobre el trabajo de responsive
detail.innerHTML = `
<img src=${game.image} class="img-top images" alt=${game.name}>
<div class="card-body">
  <h2 class="text-center">${game.name}</h2>
  <p class=" h5 ps-2 text-estrategy">${game.description}</p>
  </div>
</div>
`

document.getElementById('detail-container').appendChild(detail);

