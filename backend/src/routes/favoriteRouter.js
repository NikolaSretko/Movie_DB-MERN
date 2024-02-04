const express = require('express');
const MovieService = require('../services/index')
const favoriteRouter = express.Router();

// Endpoint zum Hinzufügen eines Favoriten
favoriteRouter.post("/", express.json(), async function addFavoriteCtrl(req, res) {
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
});

// Endpoint zum Abrufen aller Favoriten
favoriteRouter.get("/", async function getAllFavoritesCtrl(req, res) {
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
});

// Endpoint zum Entfernen eines Favoriten
favoriteRouter.delete("/:favoriteId", async function removeFavoriteCtrl(req, res) {
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
});

module.exports = {
    favoriteRouter,
};
