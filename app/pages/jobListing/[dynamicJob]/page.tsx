"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import JobHeader from "@/app/jobs/jobHeader/JobHeader";
import FullJobDescription from "@/app/jobs/FullJobDescription/FullJobDescription";
import Footer from "@/app/components/Footer";

const mockData = {
  companyName: "Amazon",
  positionTitle: "Software enginiurr",
  positionLocation: "Berlin, Germany",
  salaryRange: "120,000 - 145,000",
  salarIn: "E",
  companyLogo:
    "https://seeklogo.com/images/R/rounded-design-company-logo-58FEBA6563-seeklogo.com.png",
  jobId: "1",
};

export default function jobListingPage() {
  return (
    <>
      <div className="job__listing screen">
        <Header />
        <div className="listing__layout h-full w-screen bg-purple-400">
          <div className=" listing__header h-[250px] w-full bg-red-500 flex items-center justify-center">
            <JobHeader job={mockData} />
          </div>
          <div className="job__description h-[600px] w-full  flex items-center justify-center">
            <FullJobDescription />
          </div>
          <div className="footer h-20 w-full bg-red-400 mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
