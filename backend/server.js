const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv')
const { movieRouter } = require('./src/routes/index');
const { favoriteRouter } = require('./src/routes/favoriteRouter');

// Konfiguration von .env
dotenv.config();

// Umgebungsvariablen für Datenbank-URL und Port
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 3001;

// Initialisierung der Express-App
const app = express();

// Middleware für CORS und Logging
app.use(cors()); // Erlaubt Cross-Origin-Requests
app.use(morgan('dev')); // Loggt HTTP-Requests

// Statischer Dateizugriff für Bilder
app.use("/api/v1/images", express.static("upload"));

// Einrichtung der Router für Filme und Favoriten
app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/favorites", favoriteRouter);

// Funktion zum Starten des Servers
const serverListenToPort = () => app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Verbindungsaufbau zur MongoDB-Datenbank
console.log("Connecting to database...");
mongoose.connect(MONGODB_URL).then(() => {
    console.log("Database connection successful");
    serverListenToPort(); // Server startet erst nach erfolgreicher Datenbankverbindung
}).catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1); // Beendet den Prozess bei einem Datenbankverbindungsfehler
});