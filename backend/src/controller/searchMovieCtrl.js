const MovieService = require('../services/index.js');

const searchMovieCtrl = async (req, res) => {
    try {
        const movies = await MovieService.searchMovie(req.query);
        res.json(movies);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
module.exports = searchMovieCtrl