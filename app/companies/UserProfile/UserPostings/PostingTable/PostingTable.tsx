import React from "react";
import UserListingRow from "../UserListingRow";
export default function PostingTable({ userJobs }) {
  console.log(userJobs);
  return (
    <table className="w-11/12 border-separate border-spacing-y-3 ">
      <thead>
        <tr className="bg-green-500 ">
          <th className="w-1/3">Listing</th>
          <th className="text-right">Clicks</th>
          <th className="text-right">Applied</th>
          <th className="text-right pr-8">Viewed</th>
        </tr>
      </thead>
      <tbody>
        {userJobs.map((job, idx) => (
          <UserListingRow key={idx} jobData={job} />
        ))}
      </tbody>
    </table>
  );
}
