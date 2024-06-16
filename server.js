require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const logger = require("./middleware/logger");
const db = require("./models");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers");

const app = express();

app.use(logger);

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  db.sequelize
    .sync()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(
          `GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`
        );
      });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
}

startApolloServer();
