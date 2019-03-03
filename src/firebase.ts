import atob from "atob";
import firebase from "firebase-admin";
import isBase64 from "is-base64";

const databaseURL: string = process.env.FIREBASE_URL;

const firebasePrivKey: string = process.env.FIREBASE_PRIVATE_KEY;

const credentials: object = {
  type: process.env.FIREBASE_ACCOUNT_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: isBase64(firebasePrivKey) ? atob(process.env.FIREBASE_PRIVATE_KEY) : firebasePrivKey,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
};

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL
});

export const auth: firebase.auth.Auth = firebase.auth();
export const db: firebase.database.Database = firebase.database();
