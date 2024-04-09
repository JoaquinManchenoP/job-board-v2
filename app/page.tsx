"use client";
import JobCard from "./dynamicJobCompnonents/jobCard/JobCard";
import Featured from "./components/FeaturedSection/Featured";
import Link from "next/link";
import Footer from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useState, useEffect } from "react";

interface JobListing {
  jobTitle: string;
  companyName: string;
  positionCity: string;
  positionCountry: string;
  jobDescription: string;
  currentDate: string;
  id: string;
}

export default function Home() {
  const [jobListingsData, setJobListingsData] = useState<JobListing[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobListingRef = collection(db, "jobPostings");
      try {
        const snapshot = await getDocs(jobListingRef);
        let jobListingsData: JobListing[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const jobListing: JobListing = {
            id: doc.id,
            jobTitle: data.jobTitle || "",
            companyName: data.companyName || "",
            positionCity: data.positionCity || "",
            positionCountry: data.positionCountry || "",
            jobDescription: data.jobDescription || "",
            currentDate: data.currentDate || "",
          };
          jobListingsData.push(jobListing);
        });

        setJobListingsData(jobListingsData);

        console.log("These are all the job listing", jobListingsData);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="featured h-full w-full">
        <Featured />
      </div>
      <div className="job__cards flex-grow w-full flex flex-col items-center justify-center space-y-5 pt-[120px]">
        {jobListingsData.map((job, index) => (
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
