import * as firebase from "firebase-admin";
import credentials from "../credentials/";

const databaseURL: string = process.env.FIREBASE_URL;

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL
});

export default firebase;
