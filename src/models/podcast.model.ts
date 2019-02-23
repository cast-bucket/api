import firebase from "firebase-admin";
import { db } from "../firebase";
import { isProgrammingLanguage, transformCategory } from "../util/transforms";

const podcastsRef: firebase.database.Reference = db.ref("podcasts");
const PROGRAMMING_LANGUAGE_CATEGORY = "programming-languages-and-frameworks";

export const getAllPodcasts: any = async () => {
  const snapshot: firebase.database.DataSnapshot | null = await podcastsRef.once("value");
  return snapshot.val();
};

export const getPodcastsByCategory: any = async (
  category: string,
  subcategory: string | undefined
) => {
  let ref: firebase.database.Reference | firebase.database.Query;
  const categoryId: string = transformCategory(category);
  ref = isProgrammingLanguage(categoryId)
    ? podcastsRef.child(`${PROGRAMMING_LANGUAGE_CATEGORY}/${categoryId}`)
    : podcastsRef.child(categoryId);
  if (subcategory) ref = ref.orderByChild("subcategory").equalTo(subcategory);
  const snapshot: firebase.database.DataSnapshot = await ref.once("value");
  return snapshot.val();
};

export const getPodcast: any = async (category: string, podcast: string) => {
  const categoryId: string = transformCategory(category);
  const podcastId: string = podcast;
  const ref: firebase.database.Reference = isProgrammingLanguage(categoryId)
    ? podcastsRef.child(`${PROGRAMMING_LANGUAGE_CATEGORY}/${categoryId}/${podcastId}`)
    : podcastsRef.child(`${categoryId}/${podcastId}`);
  const snapshot: firebase.database.DataSnapshot = await ref.once("value");
  return snapshot.val();
};
