// let hello: string = "Hello World";
// console.log(hello);

// let x: number = 1;




// // Choice 1: Make the code wait until the async is executed and a value is returned before proceeding to the next line of code
// // Async / Await
// // try {
// //     let pokemon: any = await getPokemonFromDatabase();
// //     console.log("line 13 ran!")
// //     console.log(pokemon)
// // } catch (error :  any) {
// //     console.log('this is our error')
// //     console.log(error)
// // }

// // Choice 2: Make the async code run in the background and continue executing the rest of the code as usual

// let pokemon = getPokemonFromDatabase()
// .then((dataFromPromise) => {
//     // Do with data what you need
//     let arrayData = dataFromPromise.split('')
//     return arrayData
// })
// .then((arrayData : string[]) => {
//     console.log("Data from Database:")
//     console.log(arrayData)
// })
// .catch(err => console.log(err))


// console.log("line 35 ran!!!!")


// async function getPokemonFromDatabase(): Promise<any> {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log("timer expired!")
//             //resolve("Pikachu")
//             reject({error: 400, message: "Malware detected"})
//         }
//         , 5000)
//     })
// }



// --------------------------------------------------------------------------------------------------

const pokemonQuery = "pikachu"

let API_URL = "https://pokeapi.co/api/v2/pokemon/"

// Async / Await
let pikachu = await fetch(API_URL + pokemonQuery)

console.log(Response.json())


