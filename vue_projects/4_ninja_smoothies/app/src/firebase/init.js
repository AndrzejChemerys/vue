  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCGj5ND-WTgPgDGbYmon-dJmyEE7JArjh8",
    authDomain: "udemy-ninja-smoothies-ce6ba.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-ce6ba.firebaseio.com",
    projectId: "udemy-ninja-smoothies-ce6ba",
    storageBucket: "udemy-ninja-smoothies-ce6ba.appspot.com",
    messagingSenderId: "639887278812",
    appId: "1:639887278812:web:bf3152f7844907f76c2a19",
    measurementId: "G-E3SRJXZXC3"
  };
  // Initialize Firebase

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()
