import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDRPXrrCx-mRssRl3qPND-lRz7v755_dkg",
  authDomain: "portofolio-dbd51.firebaseapp.com",
  projectId: "portofolio-dbd51",
  storageBucket: "portofolio-dbd51.appspot.com",
  messagingSenderId: "737027851280",
  appId: "1:737027851280:web:6b7ee940f7268b7f2fb695",
  measurementId: "G-31NWFB7JC1"
};

var firebaseapp = null;

if (!firebase.apps.length) {
  firebaseapp = firebase.initializeApp(config);
} else {
  firebaseapp = firebase.app(); // if already initialized, use that one
}

const projectStorage = firebaseapp.storage();
const projectFirestore = firebaseapp.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
const auth = firebase.auth();
const persistance = firebase.auth.Auth.Persistence.NONE;

export { projectStorage, projectFirestore, timeStamp, auth, persistance };
