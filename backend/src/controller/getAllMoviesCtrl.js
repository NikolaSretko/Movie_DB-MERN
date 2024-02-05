const MovieService = require('../services/index.js');

// Controller für das Abrufen aller Filme
const getAllMoviesCtrl = async (req, res) => {
    try {
        const result = await MovieService.getAllMovies();
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, err });
    }
};



module.exports = getAllMoviesCtrl

