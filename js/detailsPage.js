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

let userId = localStorage.getItem('user');
let usersLS = JSON.parse(localStorage.getItem('users'));
let userActive = users.find(user=>user.id==userId);;
if(userActive.admin){
  let adminButton = document.createElement('li');
  adminButton.classList.add('nav-item','nav-buttons');
  adminButton.innerHTML=`
  <a class="nav-link" href="http://127.0.0.1:5502/html/tablaadmin.html">Administración</a>
  `;
  document.querySelector(".navbar-nav").appendChild(adminButton)
}