import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkskR7DGP7EcZmK6GvMEEyGf6xhgCtIeM",
  authDomain: "react-users-f4198.firebaseapp.com",
  databaseURL: "https://react-users-f4198.firebaseio.com",
  projectId: "react-users-f4198",
  storageBucket: "react-users-f4198.appspot.com",
  messagingSenderId: "552882536515",
  appId: "1:552882536515:web:a1247b8049ad3706cd14f6",
  measurementId: "G-Q7HZ896L2H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
