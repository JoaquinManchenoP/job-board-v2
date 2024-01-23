// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaHxei2FdLMQunTPtC8ly0uAKOU2SHs5w",
  authDomain: "capstone-1532a.firebaseapp.com",
  projectId: "capstone-1532a",
  storageBucket: "capstone-1532a.appspot.com",
  messagingSenderId: "249169885639",
  appId: "1:249169885639:web:8c2b235dcb601de245c1e2",
  // apiKey: "AIzaSyD6bFdzSH1wLOKvRiDjgdzSVbauDjXPfF0",
  // authDomain: "job-board-v2-3154d.firebaseapp.com",
  // projectId: "job-board-v2-3154d",
  // storageBucket: "job-board-v2-3154d.appspot.com",
  // messagingSenderId: "215649528605",
  // appId: "1:215649528605:web:0b603ce2458c58e3734ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init services
const db = getFirestore();
//collection ref
const userRef = collection(db, "users");

getDocs(userRef).then((snapshot) => {
  let users = [];
  snapshot.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  console.log("Active users:", users);
});

const jobListingRef = collection(db, "jobPostings");

getDocs(jobListingRef).then((snapshot) => {
  let jobListings = [];
  snapshot.forEach((doc) => {
    jobListings.push({ ...doc.data(), id: doc.id });
  });
  console.log("jobListings:", jobListings);
});

//add documents

export const addDataToFirestore = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "jobPostings"), formData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { db };
export const auth = getAuth(app);
