import * as dotenv from "dotenv";
import * as fastify from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

dotenv.config();

const env: any = process.env;
const port: number = env.PORT || 7000;

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

server.listen(port, (error: Error, address: string) => {
  if (error) {
    server.log.error(error);
  }
  server.log.info(`Server is listening on ${address}`);
});
