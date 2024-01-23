import React from "react";
import PostingTable from "./PostingTable/PostingTable";

export default function PostingsSectionComponent() {
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
