import atob from "atob";
import firebase from "firebase-admin";
import isBase64 from "is-base64";

const {
  FIREBASE_URL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_ACCOUNT_TYPE,
  FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_TOKEN_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL
} = process.env;

const DECODED_FIREBASE_PRIVATE_KEY = atob(FIREBASE_PRIVATE_KEY);

const credentials: object = {
  type: FIREBASE_ACCOUNT_TYPE,
  project_id: FIREBASE_PROJECT_ID,
  private_key_id: FIREBASE_PRIVATE_KEY_ID,
  private_key: isBase64(FIREBASE_PRIVATE_KEY) ? DECODED_FIREBASE_PRIVATE_KEY : FIREBASE_PRIVATE_KEY,
  client_email: FIREBASE_CLIENT_EMAIL,
  client_id: FIREBASE_CLIENT_ID,
  token_uri: FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL
};

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: FIREBASE_URL
});

export const auth: firebase.auth.Auth = firebase.auth();
export const db: firebase.database.Database = firebase.database();
