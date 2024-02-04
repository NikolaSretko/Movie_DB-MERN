const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
}, { timestamps: true });

const Favorite = mongoose.model('Favorite', favoriteSchema, 'favorites');
module.exports = Favorite;
