import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcuFmyNba22EV2uBJXgRfhl15FKqGghZ4",
  authDomain: "udemy-ninja-chat-4a7b8.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-4a7b8.firebaseio.com",
  projectId: "udemy-ninja-chat-4a7b8",
  storageBucket: "udemy-ninja-chat-4a7b8.appspot.com",
  messagingSenderId: "426305931738",
  appId: "1:426305931738:web:c6d7ec513d58c1d5a058e3",
  measurementId: "G-2X9VRSCLPN"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
