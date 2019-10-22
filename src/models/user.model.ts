import firebase from "firebase-admin";
import { db } from "../firebase";

const userRef: firebase.database.Reference = db.ref("users");

interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const createUser: any = async ({ username, firstName, lastName, email }: IUser) => {
  const isUsernameTaken = await isUserExists(username);
  if (!isUsernameTaken) {
    userRef.child(username).set({
      firstName,
      lastName,
      email
    });
  }
};

export const isUserExists = async (userId: string) => {
  const userSnapshot = await userRef.child(userId).once("value");
  return !!userSnapshot.val();
};

export const getUserProfile: any = async (userId: string) => {
  const userProfileSnapshot: firebase.database.DataSnapshot = await userRef
    .child(userId)
    .once("value");
  const { firstName, lastName, email } = userProfileSnapshot.val();
  return {
    firstName,
    lastName,
    email
  };
};

export const getUserSubscriptions: any = async (userId: string) => {
  const userSubscriptionsSnapshot: firebase.database.DataSnapshot = await userRef
    .child(`${userId}/subscriptions`)
    .once("value");
  return userSubscriptionsSnapshot.val();
};

export const getUserHistory: any = async (userId: string) => {
  const userHistorySnapshot: firebase.database.DataSnapshot = await userRef
    .child(`${userId}/history`)
    .once("value");
  return userHistorySnapshot.val();
};
