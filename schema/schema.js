const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Origin {
    name: String
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    gender: String
    origin: Origin
    image: String
    comments: [Comment]
  }

  type Query {
    characters(
      status: String
      species: String
      gender: String
      name: String
      origin: String
    ): [Character]
    comments(characterId: ID!): [Comment]
  }
`;
module.exports = typeDefs;
