const { gql } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");

const characterSchema = require("./characterSchema");
const commentSchema = require("./commentSchema");
const schema = require("./schema");

const baseSchema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = mergeTypeDefs([
  baseSchema,
  characterSchema,
  commentSchema,
  schema,
]);

module.exports = typeDefs;
