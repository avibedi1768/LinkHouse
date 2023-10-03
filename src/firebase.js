// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5xlpaTysoXy-9GYrMIptTaTnXhVlw-jY",
  authDomain: "link-house-a90a5.firebaseapp.com",
  projectId: "link-house-a90a5",
  storageBucket: "link-house-a90a5.appspot.com",
  messagingSenderId: "763203590893",
  appId: "1:763203590893:web:b40ac3042f1e5814ce4ae4",
  measurementId: "G-QQ4WL7SB70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);