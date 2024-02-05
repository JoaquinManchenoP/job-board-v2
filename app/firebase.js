import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaHxei2FdLMQunTPtC8ly0uAKOU2SHs5w",
  authDomain: "capstone-1532a.firebaseapp.com",
  projectId: "capstone-1532a",
  storageBucket: "capstone-1532a.appspot.com",
  messagingSenderId: "249169885639",
  appId: "1:249169885639:web:8c2b235dcb601de245c1e2",
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
  console.log("Active users:", users);
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
