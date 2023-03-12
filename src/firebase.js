// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSl2XdoTYY6dgRwPyBilGBHink31_M9wM",
  authDomain: "counseling-dure.firebaseapp.com",
  projectId: "counseling-dure",
  storageBucket: "counseling-dure.appspot.com",
  messagingSenderId: "1156763173",
  appId: "1:1156763173:web:215fdbd9fa5c68148539cc"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db =getFirestore();