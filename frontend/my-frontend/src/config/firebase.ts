// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCclQcBEJrW-vPUn3pQXTfc3b2eTzYifeg",
  authDomain: "loginauthenticationproject1.firebaseapp.com",
  projectId: "loginauthenticationproject1",
  storageBucket: "loginauthenticationproject1.firebasestorage.app",
  messagingSenderId: "726237089336",
  appId: "1:726237089336:web:ab665859802974f556e0cd",
  measurementId: "G-8FWNRD452P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
