const searchInput = document.getElementById('searchInput')
const gamesRow = document.getElementById('games-row')
 
const gamesJSON = localStorage.getItem('games');
let gamesCard = JSON.parse(gamesJSON) || [];


function showGames(){
    const contenido = gamesCard.map((game,index) => {
        return `
            <div class="card search-card my-3 ">
                <img src="${game?.image}" class="card-img-top search-card-image my-2" alt="...">
                <span class="card-body flex-column justify-content-center text-center">
                <h5 class="card-title">${game?.name}</h5>
                <p class="card-text">${game?.category}</p>
                <a href="detailPage.html#${game.id}" class="btn bg-white w-100">Ver</a>
                </span>
            </div>
        `;
    });
    const allGames = contenido.join('');
    gamesRow.innerHTML = allGames;
}

showGames();


function searchGame() {
  const filter = searchInput.value.toUpperCase();
  const contain = document.getElementById("games-row");
  const div = contain.getElementsByTagName("div");
    for (let i = 0; i < div.length; i++) {
      const game = div[i].getElementsByTagName("span")[0];
      if (game?.innerHTML.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
}








// function searchGame(){
//   const filter = searchInput.value.toUpperCase(); 
// }