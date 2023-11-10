"use client";
import React, { useState, useEffect } from "react";
import { userAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Footer from "../components/Footer";
import ProfileHeaderGraph from "../companies/UserProfile/ProfileHeaderGraph";
import PostingsSectionComponent from "../companies/UserProfile/UserPostings/PostingsSectionComponent";
import { usePathname } from "next/navigation";

export default function userProfile() {
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn } = userAuth();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [initialRender, setInitialRender] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user !== null) {
          // Proceed with the logic only if user is not null
          console.log("User is not null:", user);
          setLoading(false);
          // Your additional logic here
        } else if (user === null && pathname === "/userProfile") {
          console.log("User is null but okay");
          googleSignIn();
        } else if (user === null && pathname === "/") {
          console.log("home page");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call fetchData when the component mounts or when user changes
    fetchData();
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
            <div className="graph__part h-[350px] w-11/12 bg-red-500 flex items-center justify-center">
              <ProfileHeaderGraph />
            </div>
            <div className="flex-grow bg-orange-500 h-[800px] w-11/12">
              <PostingsSectionComponent />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
