import * as httpError from "http-errors";
import { getAllCategories, getCategory } from "../models/categoryModel";

export const fetchAllCategories = async (req, res) => {
  try {
    const showMeta: boolean | undefined = req.query.meta;
    const results: any = await getAllCategories();
    if (!showMeta) {
      const categories: string[] = Object.keys(results).map(category => category);
      res.code(200).send({ categories });
    } else {
      res.code(200).send(results);
    }
  } catch (error) {
    res.send({ message: error.message, statusCode: error.status });
  }
};

export const fetchCategory = async (req, res) => {
  try {
    const categoryId: string = req.params["categoryId"];
    if (!categoryId) throw httpError(400, "Missing or invalid params: categoryId");
    const results: any = await getCategory(categoryId);
    res.code(200).send(results);
  } catch (error) {
    res.send({ statusCode: error.status || 500, message: error.message });
  }
};
