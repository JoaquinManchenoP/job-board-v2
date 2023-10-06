"use client";
import JobCard from "./jobs/JobCard/JobCard";
import Featured from "./components/FeaturedSection/Featured";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header h-full w-full">
        <Header />
      </div>
      <Featured />
      <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </main>
  );
}
