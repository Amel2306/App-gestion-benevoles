const Festivale = require("../models/festivale");

exports.getAllFestivale = async () => {
    try {
      const festivales = await Festivale.findAll();
      return festivales;
    } catch (error) {
      console.error("Erreur lors de la récupération des festivals :", error);
      throw new Error("Erreur lors de la récupération des festivals.");
    }
  };
  
  exports.getFestivaleById = async (festivaleId) => {
    try {
      const festivale = await Festivale.findByPk(festivaleId);
      
      if (!festivale) {
        throw new Error("Festival non trouvé.");
      }
  
      return festivale;
    } catch (error) {
      console.error("Erreur lors de la récupération du festival par ID :", error);
      throw new Error("Erreur lors de la récupération du festival par ID.");
    }
  };
  
  exports.createFestivale = async (festivaleData) => {
    try {
      const newFestivale = await Festivale.create(festivaleData);
      return newFestivale;
    } catch (error) {
      console.error("Erreur lors de la création du festival :", error);
      throw new Error("Erreur lors de la création du festival.");
    }
  };
  

exports.updateFestivale = async (festivaleId, updatedFestivaleData) => {
    try {
      const festivale = await Festivale.findByPk(festivaleId);
      
      if (!festivale) {
        throw new Error("Festival non trouvé.");
      }
    
      await festivale.update(updatedFestivaleData);
      return festivale;
    } catch (error) {
      throw new Error("Erreur lors de la mise à jour du festival.");
    }
  };

  exports.deleteFestivale = async (festivaleId) => {
    try {
      const festivale = await Festivale.findByPk(festivaleId);
      
      if (!festivale) {
        throw new Error("Festival non trouvé.");
      }
    
      await festivale.destroy();
      return { message: "Festival supprimé avec succès." };
    } catch (error) {
      throw new Error("Erreur lors de la suppression du festival.");
    }
  };
  
  