"use client";
import React, { useEffect, useState } from "react";
import JobHeader from "@/app/jobs/jobHeader/JobHeader";
import FullJobDescription from "@/app/jobs/FullJobDescription/FullJobDescription";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

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
        <div className="listing__layout h-full w-screen bg-purple-400">
          <div className=" listing__header h-[250px] w-full bg-red-500 flex items-center justify-center">
            {!jobData ? (
              <>
                <p>Loading...</p>
                {/* set a load spinner here */}
              </>
            ) : (
              <JobHeader jobData={jobData} />
            )}
          </div>
          <div className="job__description h-[600px] w-full  flex items-center justify-center">
            {!jobData ? (
              <p>Loading...</p>
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
