const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const morgan = require('morgan');
const mongoose = require('mongoose');
const { movieRouter } = require('./src/routes/index');
const { favoriteRouter } = require('./src/routes/favoriteRouter');

dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(morgan('dev'))

app.use("/download", express.static("upload"))

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/favorites", favoriteRouter);


const serverListenToPort = () =>
    app.listen(PORT, () => console.log("Server listening on port", PORT));

// server and database connection setup
console.log("Connecting to database...");
mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("Database connection successfull");
        serverListenToPort();
    })
    .catch((err) => {
        console.log("Error connecting to database!");
        console.log(err);
        console.log("Server will not start. Aborting...");
        process.exit(); // beende den node prozess (clean exit)
    });