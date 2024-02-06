"use client";
import React, { useEffect, useState } from "react";
import FullJobDescription from "@/app/dynamicJobCompnonents/FullJobDescription/FullJobDescription";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import JobListingPageHeader from "@/app/components/JobListingPageComponents/JobListingPageHeader";

export default function jobListingPage() {
  const [jobData, setJobData] = useState(null);
  const pathname = usePathname();
  useEffect(() => {
    const lastIndex = pathname.lastIndexOf("/");
    const resultId = pathname.slice(lastIndex + 1);

    console.log(resultId);

    const documentRef = doc(db, "jobPostings", resultId);

    getDoc(documentRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const documentData = docSnapshot.data();
          console.log("Document data:", documentData);
          setJobData(documentData);
        } else {
          console.log("Document does not exist");
        }
      })
      .catch((error) => {
        console.error("Error fetching document:", error);
      });
  }, []);

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
              <JobListingPageHeader jobData={jobData} />
            )}
          </div>
          <div className="job__description h-[600px] w-full  flex items-center justify-center mt-10 ">
            {!jobData ? (
              <div className="spinner h-[120px] w-[180px] flex items-center justify-center">
                <LoadingSpinner />
              </div>
            ) : (
              <FullJobDescription jobDescription={jobData.jobDescription} />
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
