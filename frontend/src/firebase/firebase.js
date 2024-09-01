// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh-lSldBrm-ZIHqtQXIQ4dLKlu5lbyegI",
  authDomain: "alumni-meet-4b9d6.firebaseapp.com",
  projectId: "alumni-meet-4b9d6",
  storageBucket: "alumni-meet-4b9d6.appspot.com",
  messagingSenderId: "136747073774",
  appId: "1:136747073774:web:ae2e2252f0b52e6910f3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};