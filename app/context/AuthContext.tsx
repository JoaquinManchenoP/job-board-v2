"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { push } = useRouter();
  const [user, setUser] = useState(null);
  const [menuState, setMenuState] = useState(false);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("sucessfull auth");
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          // Handle the popup being closed without authentication
          console.log("Google Sign-In popup was closed without authentication");
          push("/");
        } else {
          // Handle other authentication errors
          console.error("Google Sign-In failed", error);
        }
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut, menuState, setMenuState }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
