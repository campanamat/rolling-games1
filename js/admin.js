class Game{
    constructor(id,name,category,description,image){
      this.id = id;
      this.name = name;
      this.category = category;
      this.description = description;
      this.image = image;
    }
  }
  //Trae lo que tenemos en localStorage
  let games = JSON.parse(localStorage.getItem('games'));
  games.forEach(game=>{
    let tableGame = document.createElement('tr');
    tableGame.innerHTML=`
    <th scope="row">${game.id}</th>
    <td >${game.name}</td>
    <td >${game.category}</td>    
    <td >${game.description}</td>
    <td><img class="table-product-image" src=${game.image}></td>
    <td>
    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete-modal" onclick="deleteGame(${game.id})">🚮</button>
    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick="fillValues(${game.id})">✍️</button>
    </td>
    `;    
    document.querySelector('tbody').appendChild(tableGame);
  })
  // Agregar un nuevo juego a nuestro localStorage 
  function addGame (){   
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;  
    let games = JSON.parse(localStorage.getItem('games'));  
    const newGame = new Game(games.length + 1,name,category, description, image);
    games.push(newGame);  
    localStorage.setItem('games',JSON.stringify(games)); 
  } 
  //Carga el modal de edicion para editar un juego  
  const fillValues = function(id){
    //*IDENTIFICAMOS AL PRODUCTO A EDITAR
    let games = JSON.parse(localStorage.getItem('games'));
    let gameToEdit = games.find(game => game.id == id);
    document.getElementById('name-edit').value = gameToEdit.name;
    document.getElementById('category-edit').value = gameToEdit.category;
    document.getElementById('description-edit').value = gameToEdit.description;
    document.getElementById('image-edit').value = gameToEdit.image;
    document.getElementById('edit-form').setAttribute('onsubmit',`editGame(${id})`);
  }
  // Editar los juegos que tenemos en el localStorage
  const editGame = (id) =>{
    let name = document.getElementById('name-edit').value;
    let category = document.getElementById('category-edit').value;
    let description = document.getElementById('description-edit').value;
    let image = document.getElementById('image-edit').value;
    let games = JSON.parse(localStorage.getItem('games'));
    let gamesUpdated = games.filter(game=>game.id !== id);
    let gameUpdated = new Game(id,name,category, description, image);
    gamesUpdated.push(gameUpdated);   
    localStorage.setItem('games',JSON.stringify(gamesUpdated));
  } 
    // Borrar un juego de nuestro array de juegos
    const deleteGame = (id) => {      
      let games = JSON.parse(localStorage.getItem('games'));
      let gamesUpdated = games.filter(game=>game.id !== id);
      localStorage.setItem('games',JSON.stringify(gamesUpdated));
      //? Acá hacemos una actualizacion de la pagina porque no viene por defecto como si lo hace en los formularios
      window.location.reload();
    }
    import { navMenu } from "./helpers.js";
navMenu();
import { footerMenu } from "./helpers.js";
footerMenu();
