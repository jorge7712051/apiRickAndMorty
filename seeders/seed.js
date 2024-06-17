const axios = require("axios");
const db = require("../models");

const seedDatabase = async () => {
  try {
    const query = `
      query {
        characters(page: 1) {
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

    const response = await axios.post("https://rickandmortyapi.com/graphql", {
      query: query,
    });

    const characters = response.data.data.characters.results
      .slice(0, 15)
      .map((character) => ({
        characterId: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        origin: character.origin.name,
        image: character.image,
      }));

    await db.FavoritesCharacter.bulkCreate(characters);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
