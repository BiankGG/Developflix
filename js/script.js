import movies from "./peliculas.js";

console.log(movies);

const genreContainers = document.querySelectorAll(".genero");

genreContainers.forEach((genreContainer) => {
  const genreId = +genreContainer.id.split("-")[1];


  const filteredMovies = movies.filter((movie) => {
    return movie.genre_ids.includes(genreId);
  });
  filteredMovies.forEach((movie) => {
    

    const title = movie.title;
    const posterURL = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;

    const card = document.createElement("article");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card_image");
    cardImage.src = posterURL;
    cardImage.alt = title;

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card_title");
    cardTitle.textContent = title;

    card.append(cardImage, cardTitle);

    genreContainer.appendChild(card);
  });
});

{
  /* <article class= "card">
<img class= "card_image"
src="https://image.tmdb.org/t/p/w200/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg" 
alt="sound of freedom">  
<h3 class="card_title">Sound of Freedom</h3>
</article> */
}
