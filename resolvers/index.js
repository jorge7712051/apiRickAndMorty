const { mergeResolvers } = require("@graphql-tools/merge");
const characterResolver = require("./characterResolver");
const commentResolver = require("./commentResolver");
const favoritesCharacterResolver = require("./favoritesCharacterResolver");

const resolvers = mergeResolvers([
  characterResolver,
  commentResolver,
  favoritesCharacterResolver,
]);

module.exports = resolvers;
