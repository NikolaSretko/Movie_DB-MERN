const { Favorite } = require('../models/index.js');

async function getAllFavorites() {
    return Favorite.find().populate('movieId');
}
module.exports = getAllFavorites