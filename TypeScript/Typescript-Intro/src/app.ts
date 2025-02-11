let movies: string[]   = [
    "Upload - Sci - Fi",
    "Interstellar",
    "Brooklyn 99",
    "the Recruit",
    "LouderMilk"
]
 function createMoviePost (movie: string){
    let container = document.querySelector(".container")
    let newMoviePost = document.createElement("P")
    newMoviePost.innerHTML = movie
    console.log(container)
    console.log(newMoviePost)

    container?.appendChild(newMoviePost)
 }

document.addEventListener('DOMContentLoaded',() =>{
    let message: string = "hello"
    movies.forEach((movie:string) =>{
        createMoviePost(movie)
    }
    )

console.log(message)
})

