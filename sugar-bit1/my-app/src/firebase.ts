import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGvHvt60-CNqFG2iUDf3rCL6K1wHOFrRE",
  authDomain: "sugar-bit-372114.firebaseapp.com",
  projectId: "sugar-bit-372114",
  storageBucket: "sugar-bit-372114.appspot.com",
  messagingSenderId: "247404642963",
  appId: "1:247404642963:web:342e05eed03703f9794366",
  measurementId: "G-NSL0W3VQRF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const auth = firebaseApp.auth();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
