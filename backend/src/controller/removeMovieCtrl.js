const MovieService = require('../services/index.js');

const removeMovieCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        await MovieService.deleteMovieById(movieId);
        res.status(200).json({ success: true, message: `Movie with ID ${movieId} has been deleted.` });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
module.exports = removeMovieCtrl