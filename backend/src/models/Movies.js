const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rated: { type: String, required: true },
    runtime: { type: Number, required: true },
    countries: [{ type: String }],
    genres: [{ type: String }],
    director: { type: String, required: true },
    writers: [{ type: String }],
    actors: [{ type: String }],
    plot: { type: String, required: true },
    poster: { type: String, required: true },
    imdb: {
        id: { type: String },
        rating: { type: Number },
        votes: { type: Number }
    },
    tomato: {
        meter: { type: Number },
        image: { type: String },
        rating: { type: Number },
        reviews: { type: Number },
        fresh: { type: Number },
        rotten: { type: Number },
        consensus: { type: String },
        userMeter: { type: Number },
        userRating: { type: Number },
        userReviews: { type: Number }
    },
    awards: {
        nominations: { type: Number },
        wins: { type: Number },
        text: { type: String }
    },
    metacritic: { type: Number },
    type: { type: String, required: true }
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema, 'movieDetails');
module.exports = Movie;