// export { default } from "./Course";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Firebase Auth
const firebaseConfig = {
  apiKey: "AIzaSyCEDHYuys9LRZ1l1e13cSN4L2QnmlBVyaw",
  authDomain: "cs397-f3842.firebaseapp.com",
  databaseURL: "https://cs397-f3842.firebaseio.com",
  projectId: "cs397-f3842",
  storageBucket: "cs397-f3842.appspot.com",
  messagingSenderId: "506994895268",
  appId: "1:506994895268:web:6e58dbe3bb6a45ad81b931"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

export { db };
