const express = require('express');
const MovieCtrl = require('../controller/index.js')


const favoriteRouter = express.Router();

// Endpoint zum Hinzufügen eines Favoriten
favoriteRouter.post("/", express.json(), MovieCtrl.addFavoriteCtrl);
// Endpoint zum Abrufen aller Favoriten
favoriteRouter.get("/", MovieCtrl.getAllFavoritesCtrl);
// Endpoint zum Entfernen eines Favoriten
favoriteRouter.delete("/:favoriteId", MovieCtrl.removeFavoriteCtrl);

module.exports = {
    favoriteRouter,
};
