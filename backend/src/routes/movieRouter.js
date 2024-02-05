const express = require('express');
const upload = require('../middleware/multerConfig.js');
const MovieCtrl = require('../controller/index.js')

const movieRouter = express.Router();

// Route zum Abrufen aller Filme
movieRouter.get("/", MovieCtrl.getAllMoviesCtrl);
// Route für die Suchfunktionalität
movieRouter.get("/search", MovieCtrl.searchMovieCtrl);
// Route zum Abrufen eines Films nach ID
movieRouter.get("/:movieId", MovieCtrl.getMovieByIdCtrl);
// Route zum Hinzufügen eines neuen Films
movieRouter.post("/", express.json(), upload.single("poster"), MovieCtrl.addMovieCtrl);
// Route zum Aktualisieren eines Films
movieRouter.patch("/:movieId", express.json(), upload.single("poster"), MovieCtrl.updateMovieCtrl);
// Route zum Löschen eines Films
movieRouter.delete("/:movieId", MovieCtrl.removeMovieCtrl);

module.exports = { movieRouter };