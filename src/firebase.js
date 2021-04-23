import firebase from 'firebase/app';
import 'firebase/firestore';

//Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyC25fztMQ4dPd7iaTD_W3Lc5UQ7R3B0pu0',
  authDomain: 'foodna-two.firebaseapp.com',
  projectId: 'foodna-two',
  storageBucket: 'foodna-two.appspot.com',
  messagingSenderId: '166893343315',
  appId: '1:166893343315:web:a40c1fa57e69b98a5e2ca6',
  measurementId: 'G-DX36Z1ZP6B',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
