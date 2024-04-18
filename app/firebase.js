import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STRORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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
