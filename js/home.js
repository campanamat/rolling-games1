// constructor del objeto juego
class Game{
  constructor(id,name,category,description,image,destacado){
    this.id = Date.now();
    this.name = name;
    this.category = category;
    this.description = description;
    this.image = image;
    this.destacado = destacado;
  }
}
// array con algunos juegos creados
let games = [
    new Game('','GRAND THEFT AUTO V','accion','Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.','../images/GTAV.png',false),
    new Game('','GOD OF WAR','accion','God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment. Su lanzamiento se produjo el 20 de abril de 2018 como un título exclusivo para la consola PlayStation 4. Posteriormente, fue lanzado en Microsoft Windows el 14 de enero de 2022.','../images/GODOFWAR.jpg',false),
    new Game('','RESIDENT EVIL 4','accion','conocido en Japón como Biohazard 4, es un videojuego de disparos en tercera persona de estilo terror y supervivencia desarrollado por Capcom Production Studio 4 y distribuido por varias compañías de videojuegos, como Capcom, Ubisoft, Nintendo Australia, Red Ant Enterprises y THQ Asia Pacific.','../images/RESIDENTEVIL4.jpg',true),     
    new Game('','ASSASINS CREED','accion','Assassins Creed II: Brotherhood, titulado en español Assassins Creed: La Hermandad, es un videojuego de acción-aventura y sigilo de ficción histórica, desarrollado por Ubisoft Montreal. El juego fue lanzado a nivel mundial para PlayStation 3 y Xbox 360, comenzando en América del Norte el 16 de noviembre de 2010','../Images/ASSASINGCREED.webp',false),
    new Game('','PAC-MAN','arcade','Pac Man es un videojuego arcade creado por el diseñador de videojuegos Toru Iwatani de la empresa Namco, y distribuido por Midway Games al mercado estadounidense a principios de los años 1980. Desde que Pac-Man fue lanzado el 22 de mayo de 1980,​ fue un éxito.','../images/PACMAN.jpg',false),
    new Game('','TETRIS','arcade','Tetris es un videojuego de lógica originalmente diseñado y programado por Alekséi Pázhitnov en la Unión Soviética. Fue lanzado el 6 de junio de 1984, ​ mientras trabajaba para el Centro de Computación Dorodnitsyn de la Academia de Ciencias de la Unión Soviética en Moscú, RSFS de Rusia.','../images/TETRIS.png',false),
    new Game('','METAL SLUG 001','arcade','es un videojuego de la consola Neo-Geo creado por Nazca, posteriormente adquirido por SNK. Fue creado en 1996 para la plataforma MVS. Este juego es conocido por su sentido del humor, por sus entretenidos gráficos, y su posibilidad para dos jugadores simultáneos','../images/METALSLUG.jpg',true),
    new Game('', 'MARIO BROS','arcade','Mario Bros. es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. Ha sido presentado como un minijuego en la serie de Super Mario Advance y otros juegos.','../Images/MARIOBROS.jpg', false),
    new Game('','NBA 2K21','sports','NBA 2K21 es un videojuego de simulación de baloncesto de 2020 desarrollado por Visual Concepts y publicado por 2K Sports, basado en la Asociación Nacional de Baloncesto. Es la entrega número 22 de la franquicia NBA 2K y el sucesor de NBA 2K20, y el predecesor de NBA 2K22.','../images/NBA2K21.jpg', true),
    new Game('','FIFA 2022','sports','Es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.','../images/fifa22.png', true),
    new Game('','PES 2013','sports','Pro Evolution Soccer 2013 es un videojuego de fútbol de la serie Pro Evolution Soccer desarrollado y publicado por Konami. El juego fue anunciado por Konami el 18 de abril de 2012,  fue lanzado el 20 de septiembre en Europa y empezó a ser puesto en venta el 25 de septiembre en América','../images/PES2013.webp',false),
    new Game('', 'PGA TOUR 2K21','sports','PGA Tour 2K21 es un videojuego deportivo desarrollado por HB Studios y publicado por 2K Sports para Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 y Xbox One.','../images/PGATOUR2021.jpg', false),
    new Game('','AGE OF EMPIRES','estrategy','Age of Empires es una serie de videojuegos que en su mayoría pertenecen al género videojuego de estrategia en tiempo real, y hay otros juegos que pertenecen a otros géneros. La mayoría de los juegos son para la plataforma PC, y otros juegos son de otras plataformas.','../images/AGEOFEMPIRES.jpg',false),
    new Game('','WARCRAFT III','estrategy','Warcraft III: Reign of Chaos es un videojuego de estrategia en tiempo real creado por Blizzard Entertainment y es la tercera parte de la serie Warcraft','../images/warcrat1.jpg', false),
    new Game('','DOTA 2','estrategy','Ice Frog y Valve aúnan fuerzas para crear la segunda entrega de Defense of the Ancients. Manteniendo los más de cien héroes de la aventura original, el juego da un giro apostando por el motor Source desarrollado por Valve. El que nació como un mod para Warcraft III muta para convertirse en un juego free to play donde la estrategia en tiempo real y la fantasía serán los ingredientes esenciales. El juego se encuentra disponible tanto para PC como para Linux o Mac.','../images/dota2.jpg', true),
    new Game('','AJEDREZ CHESS','estrategy','Este pequeño programa de ajedrez, contempla las opciones básicas para disfrutar de este juego de estrategia. Su interfaz, pese a ser sencillo, es realmente de mucha calidad y muy claro para jugar.','../images/ajedrezchess.png',false)   
]

localStorage.setItem('games',JSON.stringify(games));
//creaccion de cada juego en la pagina pricipal de nuestro sitio

//ACCION
games.forEach(game =>{
  if(game.category=='accion'){

  let gameCard = document.createElement('card');
  gameCard.href= window.location.origin + '../detailPage.html#'+ game.id;    
  gameCard.id=game.id;
  gameCard.classList.add('card','m-2','bg-transparent',);
  gameCard.style.width = '100%';    
  gameCard.innerHTML=`
  <a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>   
  `    
  let productsContainer = document.getElementById('accion-container');
  productsContainer.appendChild(gameCard)
}
})

//ARCADE
games.forEach(game =>{
  if(game.category=='arcade'){

  let gameCard = document.createElement('card');
  gameCard.href= window.location.origin + '../detailPage.html#'+ game.id;    
  gameCard.id=game.id;
  gameCard.classList.add('card','m-2','bg-transparent');
  gameCard.style.width = '100%';    
  gameCard.innerHTML=`
  <a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>
  `    
  let productsContainer = document.getElementById('arcade-container');
  productsContainer.appendChild(gameCard)
}
})


//sport 
games.forEach(game =>{
  if(game.category=='sports'){

  let gameCard = document.createElement('card');
gameCard.href= window.location.origin + '../detailPage.html#'+ game.id;    
gameCard.id=game.id;
gameCard.classList.add('card','m-2','bg-transparent');
gameCard.style.width = '100%';    
gameCard.innerHTML=`
<a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>
`    
let productsContainer = document.getElementById('sports-container');
productsContainer.appendChild(gameCard)
}
})

//Estrategy
games.forEach(game =>{
      if (game.category==='estrategy') {
      let gameCard = document.createElement('card');
  gameCard.href= window.location.origin + '../detailPage.html#'+ game.id;    
  gameCard.id=game.id;
  gameCard.classList.add('card','m-2','bg-transparent');
  gameCard.style.width = '100%';    
  gameCard.innerHTML=`
  <a href="detailPage.html#${game.id}"><img src=${game.image} class="images" alt=${game.name}></a>
  `    
  let productsContainer = document.getElementById('estrategy-container');
  productsContainer.appendChild(gameCard)
}
})
