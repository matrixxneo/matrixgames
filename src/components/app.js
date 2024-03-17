import { games } from "./games.js";
const gameList = document.querySelector("#gameList");
const buttonsHeader = document.querySelectorAll(".btn-header");
const inputSearch = document.getElementById('search');




/* for (let i = 0; i < games.length; i++) {
    mostrarJuegos(games[i]);
    
} */

function mostrarJuegos(game) {
  const div = document.createElement("div");
  div.classList.add("game");
  div.innerHTML = `
   <div class="only-game">

      <div class="game-image">
          <img src="../assets/img/ps4_games/${game.img}" alt="">
      </div>
      <div class="game-info">
        <div class="game-name">
            <p class="id">#${game.id}</p>
            <p class="name">${game.name}</p>
        </div>

        <div class="game-type-size">
        <p class="${game.category}">${game.category}</p>
            <p class="size">${game.size} </p>
            <p class="valoration">${game.valoration}</p>
            <p class="size">versión:${game.version}</p>
        </div>
        <div class="game-others-info">
            <p class="language">Idioma: <strong>Español</strong> </p>
        </div>
      </div>
      <hr>
      <div class="description">${game.description}</div>
      </div>
    `;
  gameList.appendChild(div);
}

/* buttonHeader.forEach(button => {
   
});

 */
games.forEach((game) => mostrarJuegos(game));

for (const button of buttonsHeader) {
  button.addEventListener("click", (e) => {
    const categoryId = e.currentTarget.id;
    gameList.innerHTML = "";

    //filtrando games
    const gamesfilter = () => {
      games
        /* .map((game) => game) */
        .some((game) => {
          if (game.category.includes(categoryId)) {
            return mostrarJuegos(game);
          }
        });
    };

    //filtrando por todos
    if (categoryId === "todos") {
      return games.forEach((game) => mostrarJuegos(game));
    } else if (categoryId) {
      gamesfilter();
    }
  });
}


 inputSearch.addEventListener('input', (e) =>  {
  gameList.innerHTML = "";
 return games.filter((game => game.name.toLowerCase().includes(e.target.value.toLowerCase()) ? mostrarJuegos(game) : ""))
 })




/* <div class="game">
<div class="only-game">

    <div class="game-image">
        <img src="../assets/img/ps4_games/uncharted_4.jpg" alt="">
    </div>
    <div class="game-info">
        <div class="game-name">
            <p class="id">#01</p>
            <p class="name">Uncharted 4</p>
        </div>

        <div class="game-type-size">
            <p class="adventure">Aventura</p>
            <p class="size">40gb</p>
            <p class="valoration">9.9</p>
        </div>
        <div class="game-others-info">
            <p class="language">Idioma: <strong>Español</strong> </p>
        </div>
    </div>

</div>

<div class="description"><span>Uncharted 4: El Desenlace del Ladrón</span> <strong>PS4</strong> <strong>Fecha</strong> Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más recónditos del mundo.</div>
</div> */

//

/* 
 for (const button of buttonsHeader) {
  button.addEventListener("click", (e) => {
/*     console.log(e.currentTarget);
    console.log(e.target.id);
    console.log(e.target.classList);
    console.log(e.target.textContent); 
    const categoryId = e.currentTarget.id;
    gameList.innerHTML = "";
    try {
      const game = games.map((game) => game);
      game.some((game) => {
        if (game.category.includes(categoryId)) {
          mostrarJuegos(game);
        } else if (categoryId == "todos") {
          gameList.innerHTML = "";
          games.map((game) => mostrarJuegos(game));
        }
      });
    } catch (error) {
      alert ("ha ocurrido un error ¡Recargue la página!");
    }
  });
};  */
