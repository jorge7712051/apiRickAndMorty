# Rick and Morty GraphQL API

This project is an API that uses Express and GraphQL to interact with the Rick and Morty API. It allows searching for characters with filtering by status, species, gender, name, and origin. Additionally, it connects to a relational database using Sequelize and caches the search results with Redis.

## Getting Started

### Requirements

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/jorge7712051/apiRickAndMorty.git
cd apiRickAndMorty
```

2. Run the following command:

```bash
docker-compose up -d --build
```

## License

This project is licensed under the MIT License.
