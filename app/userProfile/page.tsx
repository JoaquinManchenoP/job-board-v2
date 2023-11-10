"use client";
import React, { useState, useEffect } from "react";
import { userAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Footer from "../components/Footer";

export default function userProfile() {
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn } = userAuth();
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null) {
        console.log("no user");
        googleSignIn();
      } else {
        console.log("there is a user");
        setLoading(false);
      }
      setInitialRender(false);
    });
    if (!initialRender) {
      checkAuth();
    }
  }, [user]);

  return (
    <div className="profile__page">
      {loading ? (
        <div className="profile__page h-screen w-screen  flex justify-center pt-20">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="graph__part h-[350px] w-11/12 bg-red-500"></div>
            <div className="flex-grow bg-orange-500 h-[500px] w-11/12"></div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
