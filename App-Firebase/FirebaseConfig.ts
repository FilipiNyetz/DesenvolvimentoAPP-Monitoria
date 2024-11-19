// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlknLM6ZoWo80XHl0gkWOkjzSzwYqVEeI",
  authDomain: "monitoria-app.firebaseapp.com",
  projectId: "monitoria-app",
  storageBucket: "monitoria-app.firebasestorage.app",
  messagingSenderId: "923930980471",
  appId: "1:923930980471:web:c8bb1afa0e4772995f5672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);