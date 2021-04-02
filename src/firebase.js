import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAbpgBLNca9tYBpxGE6e1MUfEONGStnF8A",
    authDomain: "foodna-935d5.firebaseapp.com",
    projectId: "foodna-935d5",
    storageBucket: "foodna-935d5.appspot.com",
    messagingSenderId: "759058373201",
    appId: "1:759058373201:web:1f9ed45b00423aef577670",
    measurementId: "G-BNGDB87SR9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase