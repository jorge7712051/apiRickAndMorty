const axios = require("axios");
const redis = require("../redisClient");

const characterResolver = {
  Query: {
    characters: async (_, { status, species, gender, name, origin }) => {
      const cacheKey = `characters_${status}_${species}_${gender}_${name}_${origin}`;
      const cachedCharacters = await redis.get(cacheKey);

      if (cachedCharacters) {
        return JSON.parse(cachedCharacters);
      }

      const query = `
        query ($status: String, $species: String, $gender: String, $name: String) {
          characters(filter: {status: $status, species: $species, gender: $gender, name: $name}) {
            results {
              id
              name
              status
              species
              gender
              image
              origin {
                name
              }
            }
          }
        }
      `;

      try {
        const response = await axios.post(
          "https://rickandmortyapi.com/graphql",
          {
            query: query,
            variables: { status, species, gender, name },
          }
        );

        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        const characters = response.data.data.characters.results.map(
          (character) => ({
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            image: character.image,
            origin: { name: character.origin.name },
          })
        );

        await redis.set(cacheKey, JSON.stringify(characters), "EX", 3600);

        return characters;
      } catch (error) {
        console.error("Error fetching characters:", error.message);
        throw new Error("Failed to fetch characters");
      }
    },
  },
};

module.exports = characterResolver;
