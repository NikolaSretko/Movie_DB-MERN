const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { movieRouter } = require('./src/routes/index');



const app = express();
app.use(cors())
app.use(morgan('dev'))

app.use("download", express.static("data/images"))

app.use("/api/v1/movies", movieRouter);

const serverListenToPort = () =>
    app.listen(3000, () => console.log("Server listening on port", 3000));

// server and database connection setup
console.log("Connecting to database...");
mongoose
    .connect("mongodb+srv://Nikola:n230399s@mein-mongo-db.on9p7ni.mongodb.net/video?retryWrites=true&w=majority")
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