// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8gs4QPFa0lXzzOlOYEnoCWeHygG6B_zQ",
  authDomain: "reminder7222026.firebaseapp.com",
  projectId: "reminder7222026",
  storageBucket: "reminder7222026.firebasestorage.app",
  messagingSenderId: "531634102438",
  appId: "1:531634102438:web:a3402047fbed45c2dc9467",
  measurementId: "G-BSDKLMHPRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);