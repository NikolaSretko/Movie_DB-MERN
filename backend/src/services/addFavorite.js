const { Favorite } = require('../models/index.js');

async function addFavorite(movieId) {
    const newFavorite = new Favorite({ movieId });
    return newFavorite.save();
}

module.exports = addFavorite