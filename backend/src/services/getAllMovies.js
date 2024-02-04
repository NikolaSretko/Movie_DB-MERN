const { Movies } = require('../models/index.js');

async function getAllMovies() {
    // Hier holen wir alle Filme aus der Datenbank
    const movies = await Movies.find();
    // Wir verwenden die map-Funktion, um jedes Filmdokument in ein einfacheres Objekt umzuwandeln
    return movies.map(movie => asMovieListItem(movie));
}

function asMovieListItem(movie) {
    // Hier definieren wir, welche Daten für jeden Film zurückgegeben werden sollen
    // Überprüfe und sichere das Poster
    // let securePoster = movie.poster && movie.poster.startsWith('http://')
    //     ? movie.poster.replace('http://', 'https://')
    //     : movie.poster;// Eine Überlegung, aber um die Performance zu verbessern, werde ich im Frontend statisch http durch https ersetzen und einen onerror setzen, um fehlende Bilder zu behandeln.

    return {
        id: movie._id,
        title: movie.title,
        genres: movie.genres, // Angenommen, genres ist ein Array von Strings
        poster: movie.poster, // URL zum Poster des Films
        runtime: movie.runtime, // Länge des Films in Minuten
        rating: movie.imdb.rating // Die IMDb-Bewertung des Films
    };
}

module.exports = getAllMovies;
