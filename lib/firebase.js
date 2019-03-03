"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atob_1 = __importDefault(require("atob"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const is_base64_1 = __importDefault(require("is-base64"));
const databaseURL = process.env.FIREBASE_URL;
const firebasePrivKey = process.env.FIREBASE_PRIVATE_KEY;
const credentials = {
    type: process.env.FIREBASE_ACCOUNT_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: is_base64_1.default(firebasePrivKey) ? atob_1.default(process.env.FIREBASE_PRIVATE_KEY) : firebasePrivKey,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
};
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(credentials),
    databaseURL
});
exports.auth = firebase_admin_1.default.auth();
exports.db = firebase_admin_1.default.database();
