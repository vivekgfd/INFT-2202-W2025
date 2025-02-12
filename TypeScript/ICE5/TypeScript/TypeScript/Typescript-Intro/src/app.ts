import {Movie} from './types/movie.interface.js'
import {movies} from './data/data.js' 



 class MovieLibrary {
    private movies: Movie[];
    private container: HTMLElement;

    constructor(movies: Movie[]){
        // initialize moviwe data array
        this.movies = movies;
        // grab the HTML container
        const movieList = document.getElementById("movieList")
        if (!movieList){
            throw new Error("Movie list container not found")
        }
        this.container = movieList;
    }  
    
    private createNewMovieCard(movie: Movie): HTMLDivElement{
        const card = document.createElement('div');


        let actorsList = movie.actors?.map(actor => `<li>${actor.firstName}) ${actor.lastName}</li>`)

        card.innerHTML = `
            <h2>${movie.title}</h2>
            <div class="movie-info">
                <p>Director: ${movie.director}</p>
                <p>Year: ${movie.year}</p>
                <p>Genre: ${movie.genre}</p>
                <p>Rating: ${movie.rating}</p>
                <ul>${actorsList}</ul>
            </div>

        `      
        return card
    }
    public displayMovies(): void {
        this.movies.forEach(movie => {
            const movieCard = this.createNewMovieCard(movie)
            this.container.appendChild(movieCard)
        })
    }

 }

document.addEventListener('DOMContentLoaded',() =>{
    let message: string = "Hello from typescript!"
    let Library = new MovieLibrary(movies);
    Library.displayMovies();
    console.log(Library)
    // movies.forEach((movie:string) =>{
    //     createMoviePost(movie)
    // }
    // )

// console.log(message)
})

