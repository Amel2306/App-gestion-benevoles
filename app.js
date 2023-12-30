const express = require("express");
const cors = require("cors");

//création de l'app
const app = express();

//les routes
const userRoutes = require('./routes/userRoutes')
const jeuRoutes = require('./routes/jeuRoutes')
const zoneplanRoutes = require('./routes/zoneplanRoutes')
const zonebenevoleRoutes = require('./routes/zonebenevoleRoutes')
const festivaleRoutes = require('./routes/festivaleRoutes');
const postRoutes = require('./routes/postRoutes');
const associationRoutes = require('./routes/associationRoutes');
const creneauxRoutes = require('./routes/creneauxRoutes');
const creneauEspaceRoutes = require ("./routes/creneauEspaceRoutes");
const demandeLogementRoutes = require ("./routes/demandeLogementRoutes");
const demanderActiviteRoutes = require ("./routes/demanderActiviteRoutes");
const hebergementRoutes = require ("./routes/hebergementRoutes");
const participerFestivaleRoutes = require ("./routes/participerFestivaleRoutes");


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

app.use("/api/festivale", festivaleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/jeu", jeuRoutes);
app.use("/api/zoneplan", zoneplanRoutes);
app.use("/api/zonebenevole", zonebenevoleRoutes);
app.use("/api/post", postRoutes);
app.use("/api/association", associationRoutes);
app.use("/api/creneaux", creneauxRoutes);
app.use("/api/hebergement", hebergementRoutes);
app.use("/api/creneauespace", creneauEspaceRoutes);
app.use("/api/demanderlogement", demandeLogementRoutes);
app.use("/api/demanderactivtie", demanderActiviteRoutes);
app.use("/api/participerfestivale", participerFestivaleRoutes);


module.exports = app;
