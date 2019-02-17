import * as httpError from "http-errors";
import { getAllPodcasts, getPodcast, getPodcastsByCategory } from "../models/podcast.model";

export const fetchAllPodcasts = async (req, res) => {
  try {
    const results: any = await getAllPodcasts();
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};

export const fetchPodcastsByCategory = async (req, res) => {
  try {
    const categoryId: string = req.params.categoryId;
    if (!categoryId) throw httpError(400, "Missing or invalid parameter: categoryId");
    const subcategory: string | undefined = req.query.subcategory;
    const results: any = await getPodcastsByCategory(categoryId, subcategory);
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};

export const fetchPodcast = async (req, res) => {
  try {
    const categoryId: string = req.params.categoryId;
    const podcastId: string = req.params.podcastId;
    const results: any = await getPodcast(categoryId, podcastId);
    res.code(200).send(results);
  } catch (error) {
    res.code(error.statusCode || 500).send({ message: error.message });
  }
};
