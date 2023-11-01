"use client";
import React from "react";
import JobCard from "./jobCard/JobCard";
import { FeaturedPageData } from "../Data/FeaturedPage/FeaturedPageData";
import Link from "next/link";
import Footer from "../components/Footer";
import PageSpecificHeader from "../components/Header/PageSpecificHeader/PageSpecificHeader";

export default function JobPage() {
  return (
    <div className="">
      <div className="profile__page">
        <div className="featured__companies__header">
          <PageSpecificHeader pageTitle={"Search fo your new job"} />
        </div>
        <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5 mt-10">
          <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5 pt-10">
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
        </div>
      </div>
    </div>
  );
}
