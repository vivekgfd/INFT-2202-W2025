"use strict";
let movies = [
    "Upload - Sci - Fi",
    "Interstellar",
    "Brooklyn 99",
    "the Recruit",
    "LouderMilk"
];
function createMoviePost(movie) {
    let container = document.querySelector(".container");
    let newMoviePost = document.createElement("P");
    newMoviePost.innerHTML = movie;
    console.log(container);
    console.log(newMoviePost);
    container === null || container === void 0 ? void 0 : container.appendChild(newMoviePost);
}
document.addEventListener('DOMContentLoaded', () => {
    let message = "hello";
    movies.forEach((movie) => {
        createMoviePost(movie);
    });
    console.log(message);
});
//# sourceMappingURL=app.js.map