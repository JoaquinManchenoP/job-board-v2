import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDuHlbXLAXeIFCHpPeGe6J3TnQm9MpX6Zw",
  authDomain: "job-board-adf02.firebaseapp.com",
  projectId: "job-board-adf02",
  storageBucket: "job-board-adf02.appspot.com",
  messagingSenderId: "946687714693",
  appId: "1:946687714693:web:3d83c7c6d0ad29a50110ec",
  measurementId: "G-K2CEPS5Z5J",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage(app);

const userRef = collection(db, "users");

getDocs(userRef).then((snapshot) => {
  let users = [];
  snapshot.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
});

const jobListingRef = collection(db, "jobPostings");

getDocs(jobListingRef).then((snapshot) => {
  let jobListings = [];
  snapshot.forEach((doc) => {
    jobListings.push({ ...doc.data(), id: doc.id });
  });
});

export const addDataToFirestore = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "jobPostings"), formData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { db, storage };
export const auth = getAuth(app);
