"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fastify = require("fastify");
dotenv.config();
const env = process.env;
const port = env.PORT || 7000;
const serverOpts = {
    logger: true
};
// server that takes in three params, httpServer, httpRequest / Incoming Message, HttpResponse
const server = fastify(serverOpts);
server.get("/ping", (request, response) => {
    response.send("Hello World! Pong");
});
server.listen(port, (error, address) => {
    if (error) {
        server.log.error(error);
    }
    server.log.info(`Server is listening on ${address}`);
});
//# sourceMappingURL=index.js.map