const getAllMovies = require('./getAllMovies.js')
const getMovieDetails = require('./getMovieDetail.js')
const addMovie = require('./addMovie.js')
const deleteMovieById = require('./removeMovie.js')
const updatedMovieById = require('./updateMovie.js')

const MovieService = {
    getAllMovies,
    getMovieDetails,
    addMovie,
    deleteMovieById,
    updatedMovieById
};

module.exports = MovieService;
