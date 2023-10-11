"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "@/app/components/Header/Header";
import JobHeader from "@/app/components/FeaturedSection/jobListing/jobHeader/jobHeader";

export default function jobListingPage() {
  return (
    <div className="job__listing">
      <Header />
      <div className="listing__layout h-screen w-screen bg-purple-400">
        <div className=" listing__header h-[250px] w-full bg-red-500 flex items-center justify-center">
          <JobHeader />
        </div>
        <div className="job__description"></div>
      </div>
    </div>
  );
}
