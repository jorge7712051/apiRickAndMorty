const db = require("../models");

const commentResolver = {
  Query: {
    comments: async (_, { characterId }) => {
      return db.Comment.findAll({
        where: { characterId },
      });
    },
  },
  Mutation: {
    addComment: async (_, { characterId, content }) => {
      const comment = await db.Comment.create({
        characterId,
        content,
      });
      return comment;
    },
  },
};

module.exports = commentResolver;
