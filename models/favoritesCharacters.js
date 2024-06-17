"use strict";

module.exports = (sequelize, DataTypes) => {
  const FavoritesCharacter = sequelize.define(
    "FavoritesCharacter",
    {
      characterId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      status: DataTypes.STRING,
      species: DataTypes.STRING,
      gender: DataTypes.STRING,
      origin: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      tableName: "FavoritesCharacters",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  return FavoritesCharacter;
};
