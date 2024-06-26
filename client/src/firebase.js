// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-150af.firebaseapp.com",
  projectId: "realestate-150af",
  storageBucket: "realestate-150af.appspot.com",
  messagingSenderId: "1024937326845",
  appId: "1:1024937326845:web:9bb3df5dd7403d612b2694"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);