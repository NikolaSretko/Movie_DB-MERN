const getAllMovies = require('./getAllMovies.js')
const getMovieDetails = require('./getMovieDetail.js')
const addMovie = require('./addMovie.js')
const deleteMovieById = require('./removeMovie.js')
const updatedMovieById = require('./updateMovie.js')
const addFavorite = require('./addFavorite.js')
const getAllFavorites = require('./getaAllFavorite.js')
const removeFavorite = require('./removeFavorite.js')

const MovieService = {
    getAllMovies,
    getMovieDetails,
    addMovie,
    deleteMovieById,
    updatedMovieById,
    addFavorite,
    getAllFavorites,
    removeFavorite,
};

module.exports = MovieService;
