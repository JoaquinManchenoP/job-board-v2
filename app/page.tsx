import Image from "next/image";
import JobCard from "./components/JobCard/JobCard";
import Header from "./components/Header/Header";
import Featured from "./components/FeaturedSection/Featured";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header h-full w-full">
        <Header />
      </div>
      <Featured />
      <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-3">
        <JobCard />
        <JobCard />
      </div>
    </main>
  );
}
