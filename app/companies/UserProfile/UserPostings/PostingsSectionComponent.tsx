import React, { useEffect } from "react";
import PostingTable from "./PostingTable/PostingTable";
import { useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../firebase";
import jobListing from "@/app/components/FeaturedSection/jobListing/jobListing";
import { userAuth } from "@/app/context/AuthContext";

export default function PostingsSectionComponent({ setHeaderGraph }) {
  const [userJobs, setUserJobs] = useState([]);
  const { user } = userAuth();

  useEffect(() => {
    const fetchUserJobs = async () => {
      console.log(user.uid);
      if (user && user.uid) {
        const jobsQuery = query(
          collection(db, "jobPostings"), // Replace with your Firestore collection name
          where("userId", "==", user.uid)
        );

        try {
          const querySnapshot = await getDocs(jobsQuery);
          const userJobsData = [];

          querySnapshot.forEach((doc) => {
            userJobsData.push({ ...doc.data(), id: doc.id });
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
        <PostingTable userJobs={userJobs} setHeaderGraph={setHeaderGraph} />
      </div>
    </div>
  );
}
