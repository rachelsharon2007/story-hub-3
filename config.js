import firebase from 'firebase'
require ("@firebase/firestore")



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxwVWnRkmCRGiIEGHayem7_Bpwsr1C-YI",
    authDomain: "newsletter-da632.firebaseapp.com",
    databaseURL: "https://newsletter-da632-default-rtdb.firebaseio.com",
    projectId: "newsletter-da632",
    storageBucket: "newsletter-da632.appspot.com",
    messagingSenderId: "82660575931",
    appId: "1:82660575931:web:d5d5e742de4287cbdb379e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
