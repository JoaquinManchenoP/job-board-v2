"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { CompanyData } from "@/app/Data/CompanyData/CompanyData";
import Header from "@/app/components/Header/Header";
import CompanyPageHeader from "@/app/companies/CompanyPageComponents/CompanyPageHeader";
import Link from "next/link";
import JobCard from "@/app/dynamicJobCompnonents/jobCard/JobCard";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function DynamicCompanyPage() {
  return (
    <div className="company__page">
      <div>
        <CompanyPageHeader />
      </div>
      <div className="company__page__content">
        <div className="title__postings ml-20 mt-10 text-xl">postings</div>
        <div className="allpostings">
          <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5 pt-10">
            {CompanyData[0].companyJobs.map((job, index) => (
              <div className="job h-full w-full" key={index}>
                <Link
                  href={`/pages/jobListing/${job.jobId}`}
                  className="h-full w-full flex items-center justify-center"
                >
                  <JobCard position={job} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
