import fastify from "fastify";
import { fetchAllCategories, fetchCategory } from "./category.routes";
import { parseFeed } from "./feed.routes";
import { fetchAllPodcasts, fetchPodcast, fetchPodcastsByCategory } from "./podcast.routes";
import { fetchUserHistory, fetchUserProfile, fetchUserSubscriptions } from "./user.routes";

const Router = async (app: fastify.FastifyInstance, options, next) => {
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

  // user
  app.get("/user/:userId/", fetchUserProfile);
  app.get("/user/:userId/profile", fetchUserProfile);
  app.get("/user/:userId/subscriptions", fetchUserSubscriptions);
  app.get("/user/:userId/history", fetchUserHistory);

  next();
};

export default Router;
