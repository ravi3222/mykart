import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

// Connecting firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);
// console.log("Google", auth);

export const handleUserProfile = async (authUser, additionalData) => {
  const { uid } = authUser;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const timestamp = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};
