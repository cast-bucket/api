"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
require("./env");
const Router_1 = __importDefault(require("./routes/Router"));
const ENV = process.env;
const API_VERSION = ENV.API_VERSION || "v1";
const PORT = ENV.PORT || 7000;
const serverOpts = {
    logger: true,
    ignoreTrailingSlash: true
};
// server that takes in three params, httpServer, httpRequest / Incoming Message, HttpResponse
const server = fastify_1.default(serverOpts);
server.listen(PORT, (error, address) => {
    if (error)
        server.log.error(error.message);
    server.log.info(`Server is listening on ${address}`);
});
// register all routes
server.register(Router_1.default, { prefix: `/${API_VERSION}` });
// enable cors
server.register(fastify_cors_1.default, {
    origin: [/\.cast-bucket\.com:?(\d*)$/],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
});
exports.default = server;
