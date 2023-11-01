// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6bFdzSH1wLOKvRiDjgdzSVbauDjXPfF0",
  authDomain: "job-board-v2-3154d.firebaseapp.com",
  projectId: "job-board-v2-3154d",
  storageBucket: "job-board-v2-3154d.appspot.com",
  messagingSenderId: "215649528605",
  appId: "1:215649528605:web:0b603ce2458c58e3734ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
