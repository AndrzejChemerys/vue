import firebase from "firebase";
import firestore from "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJjAl0zQdAhpTaXf77zAZlhotUfUGZ0wQ",
  authDomain: "udemy-geo-ninjas-58230.firebaseapp.com",
  databaseURL: "https://udemy-geo-ninjas-58230.firebaseio.com",
  projectId: "udemy-geo-ninjas-58230",
  storageBucket: "udemy-geo-ninjas-58230.appspot.com",
  messagingSenderId: "776500635020",
  appId: "1:776500635020:web:389b2569e69311eb6562a9",
  measurementId: "G-0STRLPT04L"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//   firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
