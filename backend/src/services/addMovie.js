const { Movies } = require('../models/index.js')

async function addMovie(movieInfo) {
    return Movies.create(movieInfo);
}

module.exports = addMovie