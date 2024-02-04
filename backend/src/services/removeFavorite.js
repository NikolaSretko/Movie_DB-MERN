const { Favorite } = require('../models/index.js');

async function removeFavorite(favoriteId) {
    return Favorite.findByIdAndDelete(favoriteId);
}

module.exports = removeFavorite