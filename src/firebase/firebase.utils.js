import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxl9elqCbSe_WBaSgqCDW2NpZzxN4V3fM",
  authDomain: "react-store-ecaa9.firebaseapp.com",
  databaseURL: "https://react-store-ecaa9.firebaseio.com",
  storageBucket: "react-store-ecaa9.appspot.com",
  messagingSenderId: "348897907585",
  appId: "1:348897907585:web:22e10be7c4e9c1d4fd0e80",
  measurementId: "G-8HN1MPWD7Y",
  projectId: "react-store-ecaa9",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserDocument = async (userAuth, otherAttributes) => {
  console.log(userAuth);
  if (userAuth) {
    const userReference = firestore.doc(`users/${userAuth.uid}`); //gets us into that document or collection if you use .collection
    const snapShot = await userReference.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const dateCreated = new Date();
      try {
        await userReference.set({
          displayName,
          email,
          dateCreated,
          ...otherAttributes,
        });
      } catch (error) {
        console.log(
          "Error Encountered : Creating New User in the Database",
          error
        );
      }
    }
    return userReference; //incase you want to use the user Reference from wherever you called this function.
  }
};

export default firebase;
