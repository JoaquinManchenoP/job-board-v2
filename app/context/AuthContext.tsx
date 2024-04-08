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

interface User {
  uid: string;
}

export interface AuthContextData {
  user: User | null; // User data or null if not authenticated
  // signIn: (credentials: any) => Promise<void>; // Function to sign in
  logOut: () => Promise<void>; // Function to sign out
  googleSignIn: () => Promise<void>;
  menuState: boolean; // Current state of the menu
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthContextProviderProps {
  children: React.ReactNode; // Define children property
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const { push } = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [menuState, setMenuState] = useState(false);

  const googleSignIn = async (): Promise<void> => {
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

  const logOut = async (): Promise<void> => {
    await signOut(auth);
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

const useUserAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};

export { useUserAuth };
