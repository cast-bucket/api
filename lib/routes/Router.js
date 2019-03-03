"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_routes_1 = require("./category.routes");
const feed_routes_1 = require("./feed.routes");
const podcast_routes_1 = require("./podcast.routes");
const Router = (app, options, next) => __awaiter(this, void 0, void 0, function* () {
    // misc
    app.get("/", (request, response) => {
        response.send("Hello!");
    });
    app.get("/ping", (request, response) => {
        response.send({ timestamp: Date.now(), message: "pong" });
    });
    // categories
    app.get("/categories", category_routes_1.fetchAllCategories);
    app.get("/categories/:categoryId", category_routes_1.fetchCategory);
    // podcasts
    app.get("/podcasts", podcast_routes_1.fetchAllPodcasts);
    app.get("/podcasts/:categoryId", podcast_routes_1.fetchPodcastsByCategory);
    app.get("/podcasts/:categoryId/:podcastId", podcast_routes_1.fetchPodcast);
    // feed
    app.get("/feed", feed_routes_1.parseFeed);
    next();
});
exports.default = Router;
