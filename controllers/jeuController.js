const jeuxservices = require("../services/jeuService");

exports.getAllJeux = async (req, res) => {
    try {
        const jeux = await jeuxservices.getAllJeux();
        res.json(jeux);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des jeux", error });
    }
};

exports.getJeuById = async (req, res) => {
    try {
        const {id} = req.params
        const jeu = await jeuxservices.getJeuById(id)
        res.status(200).json(jeu)
    }catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération du jeu", error });
    }
}

exports.createJeu = async (req, res) => {
    const jeuData = req.body;
  
    try {
      const newJeu = await jeuxservices.createJeu(jeuData);
      res.status(201).json(newJeu);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création du jeu dans le contrôleur' });
    }
};

exports.updateJeu = async (req, res) => {
    try {
        const jeuId = req.params.id; 
        const updatedJeuData = req.body;

        const updatedJeu = await jeuxservices.updateJeu(jeuId, updatedJeuData);
        res.json(updatedJeu);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour du jeu dans le controller", error });
    }
};

exports.deleteJeu = async (req, res) => {
    try {
        const jeuId = req.params.id;
        const result = await jeuxservices.deleteJeu(jeuId);

        res.json({ message: result });
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression du jeu dans le controller", error });
    }
};

exports.deleteAllJeu = async (req, res) => {
    try {
        const result = await jeuxservices.deleteAllJeu();

        res.json( result );
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression du jeu dans le controller", error });
    }
};
