import * as firebase from "firebase-admin";
import { credentials } from "./config";

const databaseURL: string = process.env.FIREBASE_URL;

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL
});

export const auth: firebase.auth.Auth = firebase.auth();
export const db: firebase.database.Database = firebase.database();
