const express = require("express");
const demandeLogementController = require("../controllers/demandeLogementController");

const router = express.Router();

router.post("/", demandeLogementController.createDemandeLogementController);

router.get("/", demandeLogementController.getAllDemandesLogement);

router.get(
  "/hebergement/:id",
  demandeLogementController.getDemandeLogementByHebergementId
);

module.exports = router;
