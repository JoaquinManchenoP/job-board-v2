"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import PostingsSectionComponent from "../../companies/UserProfile/UserPostings/PostingsSectionComponent";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Footer from "../../components/Footer";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";

export default function UserProfile() {
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn } = useUserAuth();
  const [loginAgain, setLoginAgain] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = () => {
      if (user) {
        console.log("user found");
        setLoading(false);
      } else {
        setLoading(true);
        console.log("No user found");
        setTimeout(() => {
          if (pathname === "/pages/postJobPage") {
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
          <div className="spinner h-[120px] w-[180px]  flex items-center justify-center">
            <LoadingSpinner />
          </div>
          {loginAgain ? (
            <div className="login__again h-[160px] w-[160px]  space-y-4 flex flex-col items-center justify-center pt-20">
              <div className="login__text text-white">Login again</div>
              <div className="buttons flex flex-col space-y-3">
                <Link href="/">
                  <button className="bg-transparent w-[100px] hover:bg-gray-400 text-white hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded">
                    Home
                  </button>
                </Link>
                <button
                  className=" w-[100px] bg-gray-500 hover:bg-gray-200 text-white py-2 px-4 border border-gray-500 rounded"
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
            <div className="graph__part h-[350px] w-full bg-red-500 flex items-center justify-center">
              <PageSpecificHeader pageTitle={"Profile"} />
            </div>
            <div className="flex-grow h-[800px] w-11/12">
              <PostingsSectionComponent />
            </div>
          </div>
          <div className="footer pt-10">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
