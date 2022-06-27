
let idGame = window.location.hash.slice(1);
let games = JSON.parse(localStorage.getItem('games'));
let game = games.find(game=>game.id == idGame);
let detail = document.createElement('div');
detail.classList.add('card','row','g-0','col-12','col-md-6');
//estilos particulares de la card
detail.style.maxWidth='540px';
detail.style.height = '60vh';
detail.style.border = 'none';
detail.innerHTML = `
<img src=${game.image} class="img-fluid rounded-start images-detailPage" alt=${game.name}>

<div class="col-md-6">
<div class="card-body">
  <h2 class=" ps-4 titles-games">${game.name}</h2>
  <p class=" h5 ps-2 text-estrategy">${game.description}</p>
  </div>
</div>
`
document.getElementById('detail-container').appendChild(detail);

