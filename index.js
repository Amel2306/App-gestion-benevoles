const http = require("http");
const app = require("./app");
const cors = require("cors");
const sequelize = require("./config/dbConfig");

// Empêche le programme de crasher en production, car il n'y pas dotenv
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors);

require('./models/association');
require('./models/creneau');
require('./models/creneauEspace');
require('./models/demandeLogement');
require('./models/demanderActivite');
require('./models/festivale');
require('./models/hebergement');
require('./models/jeu');
require('./models/participerFestivale');
require('./models/post');
require('./models/role');
require('./models/user');
require('./models/zonebenevole');
require('./models/zoneplan');

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection established and models synced.");

    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database or sync models:", error);
  }
})();
