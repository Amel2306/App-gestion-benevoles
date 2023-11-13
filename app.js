const express = require("express");
const cors = require("cors");

//création de l'app
const app = express();

//les routes
const userRoutes = require('./routes/userRoutes')
const gameRoutes = require('./routes/gameRoutes')
const zoneplanRoutes = require('./routes/zoneplanRoutes')
const zonebenevoleRoutes = require('./routes/zonebenevoleRoutes')
const festivaleRoutes = require('./routes/festivaleRoutes');
const postRoutes = require('./routes/postRoutes');


app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// les routes necessaires
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json()); // Transforme les requêtes entrantes JSON en objet JS
app.use(express.urlencoded({ extended: true })); // Permet de lire les données des strings dans les requêtes entrantes

app.use("/api/users", userRoutes)
app.use("/api/games", gameRoutes)
app.use("/api/zoneplan", zoneplanRoutes)
app.use("/api/zonebenevole", zonebenevoleRoutes)
app.use("/api/festivale", festivaleRoutes);
app.use("/api/post", postRoutes);

module.exports = app;
