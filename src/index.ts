import * as fastify from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";
import "./env";

import Router from "./routes/Router";

const ENV: any = process.env;
const API_VERSION: string = ENV.API_VERSION || "v1";
const PORT: number = ENV.PORT || 7000;

const serverOpts: object = {
  logger: true,
  ignoreTrailingSlash: true
};

// server that takes in three params, httpServer, httpRequest / Incoming Message, HttpResponse
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify(
  serverOpts
);

server.listen(PORT, (error: Error, address: string) => {
  if (error) {
    server.log.error(error.message);
  }
  server.log.info(`Server is listening on ${address}`);
});

// register all routes
server.register(Router, { prefix: `/${API_VERSION}` });
