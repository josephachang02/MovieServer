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

movieServer.get('movies/:id', (req, response) => {
    response.send(movies)
});

movieServer.delete('movies/:id', (req, res) => {
    movies.pop(req.params.id)
})