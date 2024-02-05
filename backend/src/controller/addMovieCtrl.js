const MovieService = require('../services/index.js')

const addMovieCtrl = async (req, res) => {
    try {
        const movieInfo = req.body;
        if (req.file) {
            movieInfo.poster = req.file.path;
        }
        const result = await MovieService.addMovie(movieInfo);
        res.status(201).json({ success: true, result });
    } catch (err) {
        res.status(500).json({
            success: false,
            err,
            message: err.message
        });
    }
}