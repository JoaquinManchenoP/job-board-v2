import Image from "next/image";
import JobCard from "./components/JobCard/JobCard";
import Header from "./components/Header/Header";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header">
        <Header />
      </div>
      <div className="bg-white h-screen mobile:w-screen tablet:w-11/12">
        <JobCard />
      </div>
    </main>
  );
}
