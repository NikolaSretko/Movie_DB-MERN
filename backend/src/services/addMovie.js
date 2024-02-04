const { Movies } = require('../models/index');

async function addMovie(movieInfo) {
    const newMovie = new Movies(movieInfo);
    await newMovie.save();

    return newMovie;
}

module.exports = addMovie
