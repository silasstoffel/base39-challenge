# Base39-challenge
[![Package][Express-image]][Express-url]
[![Technology][node-image]][node-url]
[![Technology][typescript-image]][typescript-url]
[![Technology][Docker-image]][Docker-url]
[![Technology][Mongo-image]][Mongo-url]


[Express-url]: https://www.npmjs.com/package/Express
[Express-image]: https://img.shields.io/badge/Express-green?style=for-the-badge&logo=Express&logoColor=black

[node-url]: https://nodejs.org/
[node-image]: https://img.shields.io/badge/NodeJS-green?style=for-the-badge&logo=Node.js&logoColor=black

[typescript-url]: https://www.typescriptlang.org
[typescript-image]: https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=TypeScript&logoColor=white

[Docker-url]: https://www.docker.com//
[Docker-image]: https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=Docker&logoColor=white

[Mongo-url]: https://www.mongodb.com/
[Mongo-image]: https://img.shields.io/badge/Mongo-green?style=for-the-badge&logo=MongoDb&logoColor=green&color=black

Backend technical challenge from Base39.

# Requirements
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose)
 - [Node 16.13+](https://nodejs.org/en/)
 - [MongoDb](https://www.mongodb.com/)

## Setup

```shell
# linux/iOS (create default .env and run docker-compose)
$ sh ./scripts/dev.sh
```
Manual setup:

- Create .env file (use .env.example as example)
- `npm run start`

## Tests

```shell
# test without coverage report
npm run test

# test with coverage report
npm run test:coverage
```

## Techs

This challenge was solved using some principles and techniques such as:

- Clean Architecture
- SOLID
- RESTful
- Object Calisthenics
- Repositories
- Test
- Github Workflows (Build, Test, SonarCloud for code analysis and test coverage)
