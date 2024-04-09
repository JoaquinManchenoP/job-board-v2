"use client";
import React, { useEffect, useState } from "react";
import FullJobDescription from "@/app/dynamicJobCompnonents/FullJobDescription/FullJobDescription";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import JobListingPageHeader from "@/app/components/JobListingPageComponents/JobListingPageHeader";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";
import { JobData } from "../../../components/JobListingPageComponents/JobListingPageHeader";

export default function JobListingPage() {
  const [jobData, setJobData] = useState<DocumentSnapshot<DocumentData> | null>(
    null
  );
  const pathname = usePathname();
  useEffect(() => {
    const lastIndex = pathname.lastIndexOf("/");
    const resultId = pathname.slice(lastIndex + 1);

    console.log(resultId);

    const documentRef = doc(db, "jobPostings", resultId);

    getDoc(documentRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setJobData(docSnapshot);
        } else {
          console.log("Document does not exist");
        }
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, []);

  const defaultJobData = {
    companyName: "Default Company",
    companyWebsite: "https://example.com",
    currency: "USD",
    currentDate: "2022-01-01",
  };

  return (
    <>
      <div className="job__listing screen">
        <div className="listing__layout h-full w-screen ">
          <div className=" listing__header h-[300px] w-full bg-red-500 flex items-center justify-center">
            {!jobData ? (
              <>
                <div className="spinner h-[120px] w-[180px] flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              </>
            ) : (
              <JobListingPageHeader
                jobData={(jobData?.data() as JobData) ?? defaultJobData}
              />
            )}
          </div>
          <div className="job__description h-[600px] w-full  flex items-center justify-center mt-10 ">
            {!jobData ? (
              <div className="spinner h-[120px] w-[180px] flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <FullJobDescription
                jobDescription={
                  (jobData instanceof DocumentSnapshot
                    ? (jobData.data() as JobData)?.jobDescription
                    : (jobData as JobData)?.jobDescription) ?? ""
                }
              />
            )}
          </div>
          <div className="footer h-20 w-full bg-red-400 mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
