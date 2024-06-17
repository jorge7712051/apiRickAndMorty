const { gql } = require("apollo-server-express");

const commentSchema = gql`
  type Comment {
    id: ID!
    characterId: ID!
    content: String!
    createdAt: String
    updatedAt: String
  }

  extend type Query {
    comments(characterId: ID!): [Comment]
  }

  extend type Mutation {
    addComment(characterId: ID!, content: String!): Comment
  }
`;

module.exports = commentSchema;
