const apiKey = "56385d2e";

const movieURL = `http://www.omdbapi.com/?apikey=${apiKey}`;

const movies = document.querySelector(".movie-posters");

const findMovies = document.querySelector(".movie-button");

async function getMovies() {
    movies.innerHTML = "";
    const userInput = document.querySelector(".input");
    const getMovies = await fetch(movieURL + `&s=${userInput.value}`);
    const jsonMovies = await getMovies.json();
    console.log(jsonMovies)
    
    
    for (const movie of jsonMovies.Search) {
        const moviePoster = document.createElement("div");
        moviePoster.className = "posters";
        const movieNames = document.createElement("h2");
        const moviePictures = document.createElement("img");
        movieNames.innerHTML = movie.Title;
        moviePictures.src = movie.Poster;
        moviePictures.style.height = "400px";
        moviePictures.style.width = "400px";
        moviePoster.append(movieNames, moviePictures);
        movies.append(moviePoster);
    }
}

findMovies.addEventListener("click", () => getMovies());
