const gameServices = require("../services/gameService");

exports.getAllGames = async (req, res) => {
    try {
        const games = await gameServices.getAllGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des jeux", error });
    }
};

exports.createGame = async (req, res) => {
    try {
        const {
            nom_du_jeu,
            notice,
            zone_plan,
            zone_benevole,
            a_animer,
            recu,
        } = req.body;

        const gameData = {
            nom_du_jeu,
            notice,
            zone_plan,
            zone_benevole,
            a_animer,
            recu,
        };

        const newGame = await gameServices.createGame(gameData);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la création du jeu dans le controller", error });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const gameId = req.params.id; 
        const updatedGameData = req.body;

        const updatedGame = await gameServices.updateGame(gameId, updatedGameData);
        res.json(updatedGame);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour du jeu dans le controller", error });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        const gameId = req.params.id;
        const result = await gameServices.deleteGame(gameId);

        res.json({ message: result });
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la suppression du jeu dans le controller", error });
    }
};
