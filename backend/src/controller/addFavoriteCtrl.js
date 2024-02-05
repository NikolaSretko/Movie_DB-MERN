const MovieService = require('../services/index.js')

const addFavoriteCtrl = async (req, res) => {
    try {
        const { movieId } = req.body;
        const result = await MovieService.addFavorite(movieId);
        res.status(201).json({ success: true, result });
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}
module.exports = addFavoriteCtrl