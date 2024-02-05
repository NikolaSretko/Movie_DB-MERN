const MovieService = require('../services/index.js')

const removeFavoriteCtrl = async (req, res) => {
    try {
        const favoriteId = req.params.favoriteId;
        await MovieService.removeFavorite(favoriteId);
        res.status(200).json({ success: true, message: `Favorite with ID ${favoriteId} has been removed.` });
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}
module.exports = removeFavoriteCtrl