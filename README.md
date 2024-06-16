# Rick and Morty GraphQL API

Este proyecto es una API que utiliza Express y GraphQL para interactuar con la API de Rick y Morty. Permite realizar búsquedas de personajes con filtración por status, especie, género, nombre y origen. Además, se conecta a una base de datos relacional usando Sequelize y almacena en caché los resultados de las búsquedas con Redis.

## Requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación

Clona este repositorio:

```bash
git clone https://github.com/jorge7712051/apiRickAndMorty.git
cd apiRickAndMorty
```

Ejecuta el siguiente comando:

```bash
docker-compose up -d --build
```
