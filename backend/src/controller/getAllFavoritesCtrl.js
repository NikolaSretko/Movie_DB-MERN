const MovieService = require("../services/index");

const getAllFavoritesCtrl = async (req, res) => {
    try {
        const result = await MovieService.getAllFavorites();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}
module.exports = getAllFavoritesCtrl