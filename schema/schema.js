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
    comments: [Comment]
  }

  type Comment {
    id: ID
    content: String
    characterId: ID
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

  type Mutation {
    addComment(characterId: ID!, content: String!): Comment
  }

  type FavoritesCharacter {
    id: ID!
    name: String!
    status: String
    species: String
    gender: String
    origin: String
    createdAt: String
    updatedAt: String
  }

  input AddFavoriteCharacterInput {
    name: String!
    status: String!
    species: String!
    gender: String!
    origin: String!
  }

  type Query {
    favoritesCharacters: [FavoritesCharacter!]!
  }

  type Mutation {
    addFavoriteCharacter(input: AddFavoriteCharacterInput!): FavoritesCharacter!
    deleteFavoriteCharacter(id: ID!): FavoritesCharacter!
  }
`;

module.exports = typeDefs;
