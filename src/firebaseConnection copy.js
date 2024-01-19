// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyApzmawZunng3WwNE9p3vppME5UA2UTrXU",
  authDomain: "meuapp-359e9.firebaseapp.com",
  databaseURL: "https://meuapp-359e9-default-rtdb.firebaseio.com",
  projectId: "meuapp-359e9",
  storageBucket: "meuapp-359e9.appspot.com",
  messagingSenderId: "490905349173",
  appId: "1:490905349173:web:d5767aafd9bcf6ecf9957c",
  measurementId: "G-NE35JDFK1N"
};



if(!firebase.getApps.length){
  console.log("passa aqui");
  //Inicializa firebase
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase;
