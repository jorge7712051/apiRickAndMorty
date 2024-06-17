const db = require("../models");

const favoritesCharacterResolver = {
  Query: {
    favoritesCharacters: async () => {
      try {
        const favoritesCharacters = await db.FavoritesCharacter.findAll();
        return favoritesCharacters;
      } catch (error) {
        console.error("Error retrieving favorites characters:", error);
        throw new Error("Failed to fetch favorites characters");
      }
    },
  },
  Mutation: {
    addFavoriteCharacter: async (_, { input }) => {
      try {
        const newFavoriteCharacter = await db.FavoritesCharacter.create({
          characterId: input.characterId,
          name: input.name,
          status: input.status,
          species: input.species,
          gender: input.gender,
          origin: input.origin,
          image: input.image,
        });
        return newFavoriteCharacter;
      } catch (error) {
        console.error("Error adding favorite character:", error);
        throw new Error("Failed to add favorite character");
      }
    },

    deleteFavoriteCharacter: async (_, { id }) => {
      try {
        const deletedCharacter = await db.FavoritesCharacter.destroy({
          where: { id },
        });
        if (deletedCharacter === 0) {
          throw new Error("Favorite character not found");
        }
        return { id };
      } catch (error) {
        console.error("Error deleting favorite character:", error);
        throw new Error("Failed to delete favorite character");
      }
    },
  },
};

module.exports = favoritesCharacterResolver;
