import React from "react";
import UserListingCard from "./UserListingCard";

export default function PostingsSectionComponent() {
  return (
    <div className="h-full w-full bg-red-200">
      <div className="section__title">Your job posting</div>
      <div className="content__section">
        <UserListingCard />
      </div>
    </div>
  );
}
