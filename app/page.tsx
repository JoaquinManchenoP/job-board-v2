import JobCard from "./jobs/jobCard/JobCard";
import Featured from "./components/FeaturedSection/Featured";
import Header from "./components/Header/Header";
import { FeaturedPageData } from "./Data/FeaturedPage/FeaturedPageData";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="header h-full w-full">
        <Header />
      </div>
      <div className="featured h-full w-full">
        <Featured />
      </div>
      <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5 pt-[120px]">
        {FeaturedPageData.map((job, index) => (
          <Link
            href={`/pages/jobListing/${job.jobId}`}
            className="h-full w-full flex items-center justify-center"
            key={index}
          >
            <JobCard position={job} />
          </Link>
        ))}
      </div>
      <div className="footer pt-20">
        <Footer />
      </div>
    </main>
  );
}
