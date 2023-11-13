const Game = require ("../models/game");

exports.getAllGames = async () => {
  try {
    const games = await Game.findAll();
    return games;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des jeux.");
  }
};

exports.createGame = async (gameData) => {
  try {
    const newGame = await Game.create(gameData);
    return newGame;
  } catch (error) {
    throw new Error("Erreur lors de la création du jeu.");
  }
};

exports.updateGame = async (gameId, updatedGameData) => {
  try {
    const game = await Game.findByPk(gameId);
    if (!game) {
      throw new Error("Jeu non trouvé.");
    }

    await game.update(updatedGameData);
    return game;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour du jeu.");
  }
};

exports.deleteGame = async (gameId) => {
  try {
    const game = await Game.findByPk(gameId);
    if (!game) {
      throw new Error("Jeu non trouvé.");
    }

    await game.destroy();
    return "Jeu supprimé avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression du jeu.");
  }
};
