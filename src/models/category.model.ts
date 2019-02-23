import memoize from "fast-memoize";
import firebase from "firebase-admin";
import { db } from "../firebase";
import { transformCategory } from "../util/transforms";

const categoriesReference = db.ref("categories");

export const getAllCategories: any = async (meta: boolean) => {
  const snapshot: firebase.database.DataSnapshot = await categoriesReference.once("value");
  const results = snapshot.val();
  if (!meta && results) {
    const categories: string[] = Object.keys(results).map(category => category);
    return categories;
  }
  return results || {};
};

export const getCategory: any = async (category: string, meta: boolean) => {
  const key: string = transformCategory(category);
  const snapshot: firebase.database.DataSnapshot = await categoriesReference
    .child(key)
    .once("value");
  const results: any = snapshot.val();
  if (!meta && results && results._meta && results._meta.hasSubCategories) {
    const categories: string[] = Object.keys(results).filter(val => val !== "_meta");
    return categories;
  }
  if (!results) return {};
  else return { ...results, category };
};

export const getProgrammingLanguages: any = async () => {
  const memoized = memoize(getCategory("programming-languages-and-frameworks"));
  return await memoized;
};
