const MovieService = require('../services/index.js');

const updateMoveieCtrl = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const updateData = req.body;
        const result = await MovieService.updateMovieById(movieId, updateData);
        res.status(201).json({ updatedData: updateData, result });
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}

module.exports = updateMoveieCtrl