// .\construction-recruitment\utils\firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication and Firestore
const auth = getAuth();
const db = getFirestore();

// Set up authentication state change listener
const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export { auth, db, onAuthStateChange };
