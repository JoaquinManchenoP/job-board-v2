import React, { useEffect } from "react";
import PostingTable from "./PostingTable/PostingTable";
import { useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useUserAuth } from "@/app/context/AuthContext";
interface User {
  uid: string;
}

interface UserJob {
  companyName: string;
  companyWebsite: string;
  currency: string;
  currentDate: string;
  id: string;
  email: string;
  jobDescription: string;
  jobTitle: string;
  name: string;
  positionCity: string;
  positionCountry: string;
  salaryRange: string;
  tel: string;
  userId: string;
}

export default function PostingsSectionComponent() {
  const [userJobs, setUserJobs] = useState<UserJob[]>([]);
  const { user }: { user: User } = useUserAuth() as { user: User };
  console.log(user);

  useEffect(() => {
    const fetchUserJobs = async () => {
      if (user && user.uid) {
        const jobsQuery = query(
          collection(db, "jobPostings"),
          where("userId", "==", user.uid)
        );

        try {
          const querySnapshot = await getDocs(jobsQuery);
          const userJobsData: UserJob[] = [];
          console.log("UserJob:", user);

          querySnapshot.forEach((doc) => {
            const jobData = { ...doc.data(), id: doc.id } as UserJob;
            userJobsData.push(jobData);
          });

          setUserJobs(userJobsData);
        } catch (error) {
          console.error("Error fetching user jobs:", error);
        }
      }
    };

    fetchUserJobs();
  }, [user]);

  return (
    <div className="h-full w-full">
      <div className="section__title text-xl m-5">Your Postings</div>
      <div className="content__section flex item-center justify-center">
        <PostingTable userJobs={userJobs} />
      </div>
    </div>
  );
}
