import Image from "next/image";
import JobCard from "./components/JobCard/JobCard";
import Header from "./components/Header/Header";
import Featured from "./components/FeaturedSection/Featured";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header">
        <Header />
      </div>
      <div className="featured bg-red-300 w-full h-[400px] ">
        <Featured />
      </div>
      <div className="card bg-white h-screen flex item-center justify-center mobile:w-screen tablet:w-11/12">
        <JobCard />
      </div>
    </main>
  );
}
