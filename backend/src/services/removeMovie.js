const { Movies } = require('../models/index.js');

async function deleteMovieById(movieId) {
    const deletedMovie = await Movies.findByIdAndDelete(movieId);
    return deletedMovie
}
module.exports = deleteMovieById