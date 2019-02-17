import * as firebase from "firebase-admin";
import { db } from "../firebase";
import { transformKeys } from "./util";

const podcastsRef: firebase.database.Reference = db.ref("podcasts");

export const getAllPodcasts: any = async () => {
  const snapshot: firebase.database.DataSnapshot | null = await podcastsRef.once("value");
  return snapshot.val() || {};
};

export const getPodcastsByCategory: any = async (
  category: string,
  subcategory: string | undefined
) => {
  const categoryId: string = transformKeys(category);
  let ref: any = podcastsRef.child(categoryId);
  if (subcategory) ref = ref.orderByChild("subcategory").equalTo(subcategory);
  const snapshot: firebase.database.DataSnapshot = await ref.once("value");
  return snapshot.val() || {};
};

export const getPodcast: any = async (category: string, podcast: string) => {
  const categoryId: string = transformKeys(category);
  const podcastId: string = transformKeys(podcast);
  const ref: firebase.database.Reference = podcastsRef.child(`${categoryId}/${podcastId}`);
  const snapshot: firebase.database.DataSnapshot = await ref.once("value");
  return snapshot.val() || {};
};
