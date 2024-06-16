"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("FavoritesCharacters", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
      },
      species: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("FavoritesCharacters", {
      fields: ["id"],
      type: "unique",
      name: "unique_character_id",
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("FavoritesCharacters");
  },
};
