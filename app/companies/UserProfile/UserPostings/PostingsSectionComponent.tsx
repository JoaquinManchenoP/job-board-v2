import React, { useEffect } from "react";
import PostingTable from "./PostingTable/PostingTable";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

export default function PostingsSectionComponent() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobListingRef = collection(db, "jobPostings");
      try {
        const snapshot = await getDocs(jobListingRef);
        let jobListingsData = [];
        snapshot.forEach((doc) => {
          jobListingsData.push({ ...doc.data(), id: doc.id });
        });
        // Set the jobListings data in the state
        setJobListings(jobListingsData);
        // Log the data after it has been updated
        console.log("These are the users listings", jobListingsData);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full bg-red-200">
      <div className="section__title text-xl m-5">Your Postings</div>
      <div className="content__section flex item-center justify-center">
        {/* <UserListingCard /> */}
        <PostingTable />
      </div>
    </div>
  );
}
