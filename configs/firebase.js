// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7fBgWd6Q7tr4KDteHbySD-nLWITYw7d4",
  authDomain: "travel-guide-70467.firebaseapp.com",
  projectId: "travel-guide-70467",
  storageBucket: "travel-guide-70467.appspot.com",
  messagingSenderId: "276227242848",
  appId: "1:276227242848:web:961f33d0caaeb35a643c05",
  measurementId: "G-HGZWJF0MCC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app)