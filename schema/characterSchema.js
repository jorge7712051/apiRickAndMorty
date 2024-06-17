const { gql } = require("apollo-server-express");

const characterSchema = gql`
  type FavoritesCharacter {
    id: ID!
    characterId: ID!
    name: String!
    status: String
    species: String
    gender: String
    origin: String
    image: String
    createdAt: String
    updatedAt: String
  }

  input AddFavoriteCharacterInput {
    characterId: ID!
    name: String!
    status: String!
    species: String!
    gender: String!
    origin: String!
    image: String!
  }

  type Query {
    favoritesCharacters: [FavoritesCharacter!]!
  }

  type Mutation {
    addFavoriteCharacter(input: AddFavoriteCharacterInput!): FavoritesCharacter!
    deleteFavoriteCharacter(id: ID!): FavoritesCharacter!
  }
`;

module.exports = characterSchema;
