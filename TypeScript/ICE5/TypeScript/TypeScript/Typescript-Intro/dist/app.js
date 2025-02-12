import { movies } from './data/data.js';
class MovieLibrary {
    constructor(movies) {
        // initialize moviwe data array
        this.movies = movies;
        // grab the HTML container
        const movieList = document.getElementById("movieList");
        if (!movieList) {
            throw new Error("Movie list container not found");
        }
        this.container = movieList;
    }
    createNewMovieCard(movie) {
        var _a;
        const card = document.createElement('div');
        let actorsList = (_a = movie.actors) === null || _a === void 0 ? void 0 : _a.map(actor => `<li>${actor.firstName}) ${actor.lastName}</li>`);
        card.innerHTML = `
            <h2>${movie.title}</h2>
            <div class="movie-info">
                <p>Director: ${movie.director}</p>
                <p>Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
                <ul>${actorsList}</ul>
            </div>

        `;
        return card;
    }
    displayMovies() {
        this.movies.forEach(movie => {
            const movieCard = this.createNewMovieCard(movie);
            this.container.appendChild(movieCard);
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let message = "Hello from typescript!";
    let Library = new MovieLibrary(movies);
    Library.displayMovies();
    console.log(Library);
    // movies.forEach((movie:string) =>{
    //     createMoviePost(movie)
    // }
    // )
    // console.log(message)
});
//# sourceMappingURL=app.js.map