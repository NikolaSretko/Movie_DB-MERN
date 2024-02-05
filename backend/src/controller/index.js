const getAllMoviesCtrl = require('./getAllMoviesCtrl.js')
const searchMovieCtrl = require('./searchMovieCtrl.js')
const getMovieByIdCtrl = require('./getMovieByIdCtrl.js')
const addMovieCtrl = require('./addMovieCtrl.js')
const updateMovieCtrl = require('./updateMovieCtrl')
const removeMovieCtrl = require('./removeMovieCtrl.js')
const addFavoriteCtrl = require('./addFavoriteCtrl.js')
const getAllFavoritesCtrl = require('./getAllFavoritesCtrl.js')
const removeFavoriteCtrl = require('./removeFavorietCtrl.js')

module.exports = {
    getAllMoviesCtrl,
    searchMovieCtrl,
    getMovieByIdCtrl,
    addMovieCtrl,
    updateMovieCtrl,
    removeMovieCtrl,
    addFavoriteCtrl,
    getAllFavoritesCtrl,
    removeFavoriteCtrl
}