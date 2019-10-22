import fastify from "fastify";
import fastifyCors from "fastify-cors";
import http from "http";
import "module-alias/register";
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
const server: fastify.FastifyInstance<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse
> = fastify(serverOpts);

server.listen(PORT, (error: Error, address: string) => {
  if (error) server.log.error(error.message);
  server.log.info(`Server is listening on ${address}`);
});

// register all routes
server.register(Router, { prefix: `/${API_VERSION}` });

// enable cors
server.register(fastifyCors, {
  origin: [/\.cast-bucket\.com:?(\d*)$/],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
});

export default server;
