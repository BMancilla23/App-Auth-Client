// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d7d9e.firebaseapp.com",
  projectId: "mern-auth-d7d9e",
  storageBucket: "mern-auth-d7d9e.appspot.com",
  messagingSenderId: "830706259898",
  appId: "1:830706259898:web:b5a3c21548964df2a6af83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
