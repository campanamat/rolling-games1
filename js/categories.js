class Game{
    constructor(id,name,description,image,destacado){
      this.id = id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.destacado = destacado;//AngelC "tengo que ponerlo funcional en la pagina principal"
    }
  }
  
  let games = [
    new Game(1,'Devil May Cry','Devil May Cry 5 es un videojuego perteneciente al género hack and slash, desarrollado y publicado por la empresa Capcom. Fue lanzado el 8 de marzo de 2019, para las plataformas PlayStation 4, Xbox One y Microsoft Windows.','../Images/DevilMayCry.jpg',false),
    new Game(2,'Danger Zone','poner descripcion en archivo categories.js','../Images/DangerZone.jpg',false),
    new Game(3,'NFS Heat','poner descripcion en archivo categories.js','../Images/NFSHeat.jpg',true),     
    new Game(4,'the-settlers','poner descripcion en archivo categories.js','../Images/the-settlers.jpg',false),
     ]
  
  localStorage.setItem('games',JSON.stringify(games));
  //creaccion de cada juego en la pagina pricipal de nuestro sitio

games.forEach(game =>{
    let gameCard = document.createElement('card');
    gameCard.href= window.location.origin + '/detailPage.html#'+ game.id;    
    gameCard.id=game.id;
    gameCard.classList.add('card','m-2','bg-transparent');
    gameCard.style.width = '100%';    
    gameCard.innerHTML=`
    <a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>
    `    
     
    
    let productsContainer = document.getElementById('rollGames-container');
    productsContainer.appendChild(gameCard)
  })