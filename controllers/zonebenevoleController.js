const zoneBenevoleServices = require("../services/zonebenevoleService");

exports.getAllZonesBenevole = async (req, res) => {
  try {
    const zonesBenevole = await zoneBenevoleServices.getAllZonesBenevole();
    res.json(zonesBenevole);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des zones bénévoles.", error });
  }
};

exports.getZoneBenevoleById = async (req, res) => {
  try {
    const zoneBenevoleId = req.params.id;
    const zoneBenevole = await zoneBenevoleServices.getZoneBenevoleById(zoneBenevoleId);

    res.json(zoneBenevole);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la récupération de la zone bénévole par ID.", error });
  }
};

exports.getZoneBenevoleByPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const zoneBenevole = await zoneBenevoleServices.getZoneBenevoleByPost(postId);

    res.status(200).json(zoneBenevole);

  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la récupération de la zone bénévole par ID.", error });
  }
};


exports.createZoneBenevole = async (req, res) => {
  try {
    const zoneBenevoleData = req.body;

    const newZoneBenevole = await zoneBenevoleServices.createZoneBenevole(zoneBenevoleData);
    res.status(201).json(newZoneBenevole);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la création de la zone bénévole.", error });
  }
};

exports.updateZoneBenevole = async (req, res) => {
  try {
    const zoneBenevoleId = req.params.id;
    const updatedZoneBenevoleData = req.body;

    const updatedZoneBenevole = await zoneBenevoleServices.updateZoneBenevole(zoneBenevoleId, updatedZoneBenevoleData);
    res.json(updatedZoneBenevole);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la mise à jour de la zone bénévole.", error });
  }
};

exports.deleteZoneBenevole = async (req, res) => {
  try {
    const zoneBenevoleId = req.params.id;
    const result = await zoneBenevoleServices.deleteZoneBenevole(zoneBenevoleId);

    res.json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression de la zone bénévole.", error });
  }
};

exports.deleteAllZB = async (req, res) => {
  try {
    const result = await zoneBenevoleServices.deleteAllZB();

    res.json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression de toutes les zones bénévoles.", error });
  }
};

exports.nettoyageZB = async (req, res) => {
    try {
      const message = await zoneBenevoleServices.nettoyageZB()
      res.json({message: message})
    }
    catch (error) {
      res.status(400).json({ message: "Erreur lors de la suppression de toutes les zones bénévoles.", error });
    }
}