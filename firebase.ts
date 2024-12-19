// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4dExhvv7TFvPrPvYiAZgNXt3P1iRYHJ8",
  authDomain: "krishnatest-7d2e8.firebaseapp.com",
  projectId: "krishnatest-7d2e8",
  storageBucket: "krishnatest-7d2e8.firebasestorage.app",
  messagingSenderId: "924969316396",
  appId: "1:924969316396:web:6fb9b261539e3a7effa189",
  measurementId: "G-QT03MCR2F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = await getAuth(app)
const provider = new GoogleAuthProvider()
const firestore = getFirestore(app)

export {app, auth, firestore, provider}
