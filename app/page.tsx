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

      <Featured />

      <JobCard />
    </main>
  );
}
