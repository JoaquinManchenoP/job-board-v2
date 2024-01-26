"use client";
import JobCard from "./jobs/jobCard/JobCard";
import Featured from "./components/FeaturedSection/Featured";
import Header from "./components/Header/Header";
import { FeaturedPageData } from "./Data/FeaturedPage/FeaturedPageData";
import Link from "next/link";
import Footer from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";

export default function Home() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobListingRef = collection(db, "jobPostings");
      try {
        const snapshot = await getDocs(jobListingRef);
        let jobListingsData = [];
        snapshot.forEach((doc) => {
          jobListingsData.push({ ...doc.data(), id: doc.id });
        });
        // Set the jobListings data in the state
        setJobListings(jobListingsData);
        // Log the data after it has been updated
        console.log("These are all the job listing", jobListingsData);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };
    fetchData();
  }, []);

  if (jobListings) {
    console.log(jobListings);
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="featured h-full w-full">
        <Featured />
      </div>
      <div className="job__cards flex-grow w-full flex flex-col items-center justify-center space-y-5 pt-[120px]">
        {jobListings.map((job, index) => (
          <Link
            href={`/pages/jobListing/${job.id}`}
            className="w-full flex items-center justify-center"
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
