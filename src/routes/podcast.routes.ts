import { PodcastModel } from "@models/";
import { FastifyReply, FastifyRequest } from "fastify";
import firebase from "firebase-admin";
import * as http from "http";
import httpError from "http-errors";

export const fetchAllPodcasts = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const results: firebase.database.DataSnapshot = await PodcastModel.getAllPodcasts();
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};

export const fetchPodcastsByCategory = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const categoryId: string = req.params.categoryId;
    if (!categoryId) throw httpError(400, "Missing or invalid parameter: categoryId");
    const subcategory: string | undefined = req.query.subcategory;
    const results: any = await PodcastModel.getPodcastsByCategory(categoryId, subcategory);
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};

export const fetchPodcast = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const categoryId: string = req.params.categoryId;
    const podcastId: string = req.params.podcastId;
    const results: any = await PodcastModel.getPodcast(categoryId, podcastId);
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};
