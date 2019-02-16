import * as admin from "firebase-admin";
import credentials from "./credentials";

const databaseURL: string = process.env.FIREBASE_URL;

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL
});

export const auth: admin.auth.Auth = admin.auth();
export const db: admin.database.Database = admin.database();
