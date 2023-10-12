const express = require('express')

const movieServer = express();

const movies = [ 
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
    { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 },
    { id: 3, title: "Parasite", director: "Bong Joon-ho", year: 2019 },
    { id: 4, title: "The Matrix", director: "The Wachowskis", year: 1999 } 
];

movieServer.get('/', (req,response) => {
    response.send("Welcome to the Movie API! Use /info for guidance.")
});

movieServer.get('/info', (req,response) => {
    response.send("To fetch all movies, useGET /,movies. To add a new movie, use POST /movies. To update or delete a movie, use PUT or DELETE on /movies/:id respectively.")
});

movieServer.get('/movies', (req, response) => {
    response.json(movies)
});

movieServer.get('/movies/:id', (req, response) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === movieId);

    if (movie) {
        response.json(movie);
    } else {
        response.status(404).send('Movie not found');
    }
});

movieServer.delete('/movies/:id', (req, response) => {
    const movieId = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === movieId);

    if (index !== -1) {
        movies.splice(index, 1);
        response.send(`Movie with ID ${movieId} has been deleted.`);
    } else {
        response.status(404).send('Movie not found');
    }
});

movieServer.listen(3000, () => {
    console.log('Server is listening on port 3000')
});