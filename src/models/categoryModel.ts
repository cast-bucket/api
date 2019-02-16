import { db } from "../firebase";
import * as firebase from "firebase-admin";
import { transformKeys } from "./util";
const categoriesReference = db.ref("categories");

export const getAllCategories: any = async () => {
  const snapshot: firebase.database.DataSnapshot = await categoriesReference.once("value");
  return snapshot.val() || {};
};

export const getCategory: any = async (category: string) => {
  const key: string = transformKeys(category);
  const snapshot: firebase.database.DataSnapshot = await categoriesReference
    .child(key)
    .once("value");
  const results: any = snapshot.val();
  if (!results) return {};
  else return { ...results, category };
};
