"use client";
import React, { useState, useEffect } from "react";
import { userAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function userProfile() {
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();
  const { user, googleSignIn } = userAuth();

  useEffect(() => {
    const checkAuth = async () => {
      let currentUser = await user;
      if (currentUser !== null) {
        console.log(currentUser);
        setLoading(false);
      } else {
        await googleSignIn();
      }
    };
    checkAuth();
  }, [user]);

  return (
    <div className="profile__page">
      {loading ? (
        <div className="profile__page h-screen w-screen  flex justify-center pt-20">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="profile__content h-screen w-screen bg-red-500 flex flex-col items-center ">
          Welcome {user?.displayName}
          <div className="chart__header h-[370px] w-11/12 bg-purple-400">
            this will be some sort of chart
          </div>
        </div>
      )}
    </div>
  );
}
