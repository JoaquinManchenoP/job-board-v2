"use client";
import JobCard from "./components/JobCard/JobCard";
import Header from "./components/Header/Header";
import Featured from "./components/FeaturedSection/Featured";
import { useState } from "react";
import Menu from "./components/Header/Menu/Menu";

export default function Home() {
  const [menuState, setMenuState] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header h-full w-full">
        <Header menuState={menuState} setMenuState={setMenuState} />
        <div>{menuState ? <Menu /> : <p></p>}</div>
      </div>
      <Featured />
      <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-3">
        <JobCard />
        <JobCard />
      </div>
    </main>
  );
}
