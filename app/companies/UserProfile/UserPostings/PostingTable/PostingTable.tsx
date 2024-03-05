import React from "react";
import UserListingRow from "../UserListingRow";
export default function PostingTable({ userJobs }) {
  return (
    <table className="w-9/12 border-separate border-spacing-y-3 ">
      <thead>
        <tr className="bg-gray-100">
          <th className="w-1/3">Live Postings</th>
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
