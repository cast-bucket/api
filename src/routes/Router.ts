import * as fastify from "fastify";
import { fetchAllCategories, fetchCategory } from "./category.routes";
import { parseFeed } from "./feed.routes";
import { fetchAllPodcasts, fetchPodcast, fetchPodcastsByCategory } from "./podcast.routes";

const Router = (app: fastify.FastifyInstance, options, next) => {
  // misc
  app.get("/", (request, response) => {
    response.send("Hello!");
  });

  app.get("/ping", (request, response) => {
    response.send({ timestamp: Date.now(), message: "pong" });
  });

  // categories
  app.get("/categories", fetchAllCategories);
  app.get("/categories/:categoryId", fetchCategory);

  // podcasts
  app.get("/podcasts", fetchAllPodcasts);
  app.get("/podcasts/:categoryId", fetchPodcastsByCategory);
  app.get("/podcasts/:categoryId/:podcastId", fetchPodcast);

  // feed
  app.get("/feed", parseFeed);

  next();
};

export default Router;
