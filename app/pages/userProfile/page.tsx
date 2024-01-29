"use client";
import React, { useState, useEffect } from "react";
import { userAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProfileHeaderGraph from "../../companies/UserProfile/ProfileHeaderGraph";
import PostingsSectionComponent from "../../companies/UserProfile/UserPostings/PostingsSectionComponent";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function userProfile() {
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn } = userAuth();
  const [loginAgain, setLoginAgain] = useState(false);
  const pathname = usePathname();
  const [headerGraphData, setHeaderGraphData] = useState({
    numberOfClicks: 0,
  });

  console.log("this is the number of clicks", headerGraphData);

  useEffect(() => {
    const checkUser = () => {
      if (user) {
        console.log("user found");
        setLoading(false);
      } else {
        setLoading(true);
        console.log("No user found");
        setTimeout(() => {
          if (pathname === "/pages/userProfile") {
            setTimeout(() => {
              console.log("open the login pop up again");
              setLoginAgain(true);
            }, 3000);
          }
        }, 3000);
      }
    };
    checkUser();
  }, [user]);

  const handleLoginAgain = () => {
    if (!user) {
      googleSignIn();
    }
  };

  return (
    <div className="profile__page  h-screen w-screen">
      {loading ? (
        <div className="profile__page h-full w-full bg-red-500 space-y-1 flex flex-col items-center pt-10">
          <div className="spinner h-[120px] w-[180px] bg-orange-300 flex items-center justify-center">
            <LoadingSpinner />
          </div>
          {loginAgain ? (
            <div className="login__again h-[160px] w-[160px] bg-green-500 space-y-4 flex flex-col items-center justify-center">
              <div className="login__text font-bold">please login again</div>
              <div className="buttons flex flex-col space-y-3">
                <Link href="/">
                  <button className="bg-transparent w-[100px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Home
                  </button>
                </Link>
                <button
                  className=" w-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  onClick={handleLoginAgain}
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="graph__part h-[350px] w-11/12 bg-red-500 flex items-center justify-center">
              <ProfileHeaderGraph headerData={headerGraphData} />
            </div>
            <div className="flex-grow h-[800px] w-11/12">
              <PostingsSectionComponent setHeaderGraph={setHeaderGraphData} />
            </div>
          </div>
          <div className="footer pt-20">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
