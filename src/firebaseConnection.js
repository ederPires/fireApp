// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import getDatabase function

import firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApzmawZunng3WwNE9p3vppME5UA2UTrXU",
  authDomain: "meuapp-359e9.firebaseapp.com",
  databaseURL: "https://meuapp-359e9-default-rtdb.firebaseio.com",
  projectId: "meuapp-359e9",
  storageBucket: "meuapp-359e9.appspot.com",
  messagingSenderId: "490905349173",
  appId: "1:490905349173:web:d5767aafd9bcf6ecf9957c",
  measurementId: "G-NE35JDFK1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Use getDatabase to access the database instance

// Your existing code for fetching data
// ...

export default app;
