// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LhmvpibKKPVng3Qpq6NUGkAdUHSyT9I",
  authDomain: "e-commerce-platform-5398c.firebaseapp.com",
  projectId: "e-commerce-platform-5398c",
  storageBucket: "e-commerce-platform-5398c.appspot.com",
  messagingSenderId: "166130039994",
  appId: "1:166130039994:web:c962202391752adc641683",
  measurementId: "G-QZBQ3ZS6BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { app, database };
