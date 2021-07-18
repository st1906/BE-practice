# A simple nodejs server with koa

This is an example of a simple nodejs server using Koa, Postgres and Sequlize.

## Getting started

Create a `.env` based on `.example.env``

```
cp .env.test.example .env
```

Spin up a postgres server.

Install dependencies

```
yarn
```

To run migrations do:

```
yarn migrate:latest
```

To start the server, run:

```
yarn start
```
