// constructor del objeto juego
class Game{
  constructor(id,name,category,description,image,destacado){
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.image = image;
    this.destacado = destacado;
  }
}
// array con algunos juegos creados
let games = [
  new Game(1,'nombrejuego','categoria','descripcion.','../assets/img/DevilMayCry.jpg',false),
]

   // categorias
   let accion= []
   let arcade= []
   let sports= []
   let strategy= []
localStorage.setItem('games',JSON.stringify(games));
//creaccion de cada juego en la pagina pricipal de nuestro sitio
games.forEach(game =>{
  let gameCard = document.createElement('card');
  gameCard.href= window.location.origin + '../detailPage.html#'+ game.id;    
  gameCard.id=game.id;
  gameCard.classList.add('card','m-2','bg-transparent');
  gameCard.style.width = '100%';    
  gameCard.innerHTML=`
  <a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>
  <h5  class="text-center">${game.name}</h5>    
  `    
  let productsContainer = document.getElementById('rollGames-container');
  productsContainer.appendChild(gameCard)
})