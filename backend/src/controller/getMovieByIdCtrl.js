const MovieService = require('../services/index.js');

const getMovieByIdCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const result = await MovieService.getMovieDetails(movieId);
        res.json(result);
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}
module.exports = getMovieByIdCtrl