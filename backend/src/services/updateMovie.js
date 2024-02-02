const { Movies } = require('../models/index.js');

async function updateMovieById(movieId, updateData) {
    const updatedMovie = await Movies.findByIdAndUpdate(movieId, updateData, { new: true });
    return updatedMovie
}

module.exports = updateMovieById