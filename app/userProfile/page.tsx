"use client";
import React, { useState, useEffect } from "react";
import { userAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { redirect } from "next/navigation";

export default function userProfile() {
  const [laoding, setLoading] = useState(false);
  const { user } = userAuth();

  return (
    <div className="profile__page">
      {user ? (
        <div className="profile__content h-screen w-screen bg-red-500 flex flex-col items-center ">
          Welcome {user.displayName}
          <div className="chart__header h-[370px] w-11/12 bg-purple-400">
            this will be some sort of chart
          </div>
        </div>
      ) : (
        <div className="profile__page h-screen w-screen  flex justify-center pt-20">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
