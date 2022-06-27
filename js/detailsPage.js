
let idGame = window.location.hash.slice(1);
let games = JSON.parse(localStorage.getItem('games'));
let game = games.find(game=>game.id == idGame);
let detail = document.createElement('div');
detail.innerHTML = `
<img class="detail-image" src=${game.image}>
<h1 class="text-center">${game.name}</h1>
<p class="h3 text-center text-secondary">${game.description}</p>
`
document.getElementById('detail-container').appendChild(detail);

