"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      characterId: DataTypes.INTEGER,
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {}
  );

  return Comment;
};
