import * as fastify from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import "./env";

import firebase from "./firebase";

const ENV: any = process.env;
const port: number = ENV.PORT || 7000;

// enable default fastify logger
const serverOpts: object = {
  logger: true
};

// server that takes in three params, httpServer, httpRequest / Incoming Message, HttpResponse
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(
  serverOpts
);

server.get("/ping", (request, response) => {
  response.send("Hello World! Pong");
});

// TODO: Fetch categories from db
server.get("/categories", (request, response) => {
  response.send("categories");
});

server.listen(port, (error: Error, address: string) => {
  if (error) {
    server.log.error(error);
  }
  server.log.info(`Connected to database ${firebase.app().name}`);
  server.log.info(`Server is listening on ${address}`);
});
