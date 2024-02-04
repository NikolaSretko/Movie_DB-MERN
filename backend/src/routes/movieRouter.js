const express = require('express');
const MovieService = require('../services/index.js');
const upload = require('../middleware/multerConfig.js');

const movieRouter = express.Router();

movieRouter.get("/", async function getAllMoviesCtrl(_, res) {
    try {
        const result = await MovieService.getAllMovies();
        res.status(200).json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ succses: false, err })
    };
});

movieRouter.get("/:movieId", async function getOneMovieWithDetailsCtrl(req, res) {
    try {
        const movieId = req.params.movieId
        const result = await MovieService.getMovieDetails(movieId);
        res.json(result)
    } catch (err) {
        res.status(500).json({
            succses: false, err,
            message: err.message
        })
    }
})

movieRouter.post("/", express.json(), upload.single("poster"), async function postAddNewMovieCtrl(req, res) {
    try {
        const movieInfo = req.body;

        // Wenn ein Bild hochgeladen wurde, füge den Pfad zum movieInfo hinzu
        if (req.file) {
            movieInfo.poster = req.file.path; // Der Pfad des hochgeladenen Bildes
        }

        // Rufe die addMovie-Funktion mit den Film- und Bildinformationen auf
        const result = await MovieService.addMovie(movieInfo);

        res.status(201).json({ success: true, result });
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        })
    }
});

movieRouter.patch("/:movieId", express.json(), async function patchMovieByIdCtrl(req, res) {
    try {
        const movieId = req.params.movieId;
        const updateData = req.body;
        const result = await MovieService.updatedMovieById(movieId, updateData);
        res.status(201).json({ updatedData: updateData, result })
    } catch (err) {
        res.status(500).json({
            succes: false,
            err,
            message: err.message
        })
    }
})

movieRouter.delete("/:movieId", async function deleteMovieByIdCtrl(req, res) {
    try {
        const movieId = req.params.movieId;
        await MovieService.deleteMovieById(movieId);
        res.status(200).json({ success: true, message: `Movie with ID ${movieId} has been deleted.` });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


module.exports = {
    movieRouter,
}