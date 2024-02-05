const { Movies } = require('../models/index.js');

const searchMovies = async (queryParams) => {
    try {
        let query = {};
        // Schleife durch alle Schlüssel in queryParams
        for (const [key, value] of Object.entries(queryParams)) {
            if (value) {
                // Spezielle Behandlung für numerische Felder wie 'year'
                if (key === 'year' || key === 'runtime' || key === 'rating') {
                    const numValue = Number(value);
                    if (!isNaN(numValue)) {
                        query[key === 'rating' ? 'imdb.rating' : key] = numValue;
                    }
                } else {
                    // Standardbehandlung Textsuche 
                    query[key] = new RegExp(value, 'i');// case insensetive
                }
            }
        }

        const results = await Movies.find(query);
        return results;
    } catch (error) {
        throw error;
    }
};

module.exports = searchMovies;
