import { Rating } from '../enums/rating.enum.js';
export let movies = [
    {
        id: 1,
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        genre: "Sci-Fi",
        rating: Rating.PG13,
        actors: [
            {
                id: 2,
                firstName: "Matthew",
                lastName: "McConaughey"
            },
            {
                id: 3,
                firstName: "Anne",
                lastName: "Hathaway"
            }
        ]
    },
    {
        id: 2,
        title: "Moana 2",
        director: "Dana Ledoux Miller",
        year: 2024,
        genre: "Animated",
        rating: Rating.PG,
        actors: [
            {
                id: 3,
                firstName: "Auli'i",
                lastName: "Cravalho"
            },
            {
                id: 4,
                firstName: "Dwayne",
                lastName: "Johnson"
            }
        ]
    }
];
//# sourceMappingURL=data.js.map