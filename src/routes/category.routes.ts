import { FastifyReply, FastifyRequest } from "fastify";
import * as http from "http";
import httpError from "http-errors";
import { getAllCategories, getCategory } from "../models/category.model";

export const fetchAllCategories = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const showMetadata: boolean | undefined = req.query.meta === "true";
    const results: any = await getAllCategories(showMetadata);
    res.code(200).send(results);
  } catch (error) {
    res.send({ message: error.message, statusCode: error.status });
  }
};

export const fetchCategory = async (
  req: FastifyRequest<http.IncomingMessage>,
  res: FastifyReply<http.OutgoingMessage>
) => {
  try {
    const showMetadata: boolean | undefined = req.query.meta === "true";
    const categoryId: string = req.params.categoryId;
    if (!categoryId) throw httpError(400, "Missing or invalid params: categoryId");
    const results: any = await getCategory(categoryId, showMetadata);
    res.code(200).send(results);
  } catch (error) {
    res.send({ statusCode: error.status || 500, message: error.message });
  }
};
