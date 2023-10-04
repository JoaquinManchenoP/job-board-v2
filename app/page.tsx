"use client";
import JobCard from "./components/JobCard/JobCard";
import Header from "./components/Header/Header";
import Featured from "./components/FeaturedSection/Featured";
import { useState } from "react";
import AppContext from "./context/AppContext";
import MainLayout from "./components/Layouts/MainLayout";

export default function Home() {
  const [menuState, setMenuState] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <AppContext.Provider value={{ menuState, setMenuState }}>
        <div className="header h-full w-full">
          <MainLayout />
        </div>
        <Featured />
        <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-3">
          <JobCard />
          <JobCard />
        </div>
      </AppContext.Provider>
    </main>
  );
}
