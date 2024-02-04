const { Movies } = require('../models/index');

async function getMovieDetails(movieId) {
    const foundMovie = await Movies.findById(movieId);
    if (!foundMovie) throw new Error("Could not find movie " + movieId);

    // Standard-URL für ein Poster, wenn keines vorhanden ist oder wenn das Original "Not Found" ist.
    const defaultPosterUrl = 'https://example.com/default-poster.jpg';

    // Überprüfe und sichere das Poster
    let securePoster = foundMovie.poster && foundMovie.poster.startsWith('http://')
        ? foundMovie.poster.replace('http://', 'https://')
        : foundMovie.poster;
    securePoster = securePoster || defaultPosterUrl;

    // Hier kannst du definieren, welche Daten für das einzelne Movie zurückgegeben werden sollen
    // Vermutlich möchtest du hier mehr Details zurückgeben als in der Listenansicht
    return {
        _id: foundMovie._id,
        title: foundMovie.title,
        year: foundMovie.year,
        rated: foundMovie.rated,
        runtime: foundMovie.runtime,
        countries: foundMovie.countries,
        genres: foundMovie.genres,
        director: foundMovie.director,
        writers: foundMovie.writers,
        actors: foundMovie.actors,
        plot: foundMovie.plot,
        poster: securePoster, // Verwende die sichere Poster-URL oder das Standard-Poster
        imdb: foundMovie.imdb,
        tomato: foundMovie.tomato,
        awards: foundMovie.awards,
        metacritic: foundMovie.metacritic,
        type: foundMovie.type
    };
}

module.exports = getMovieDetails;
