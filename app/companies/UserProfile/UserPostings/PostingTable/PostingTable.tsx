import React from "react";
import UserListingRow from "../UserListingRow";
export default function PostingTable({ userJobs, setHeaderGraph }) {
  return (
    <table className="w-full border-separate border-spacing-y-3 ">
      <thead>
        <tr className="bg-gray-100">
          <th className="w-1/3">Postings</th>
          <th className="text-right">Clicks</th>
          <th className="text-right">Applied</th>
          <th className="text-right">Viewed</th>
        </tr>
      </thead>
      <tbody>
        {userJobs.map((job, idx) => (
          <UserListingRow
            key={idx}
            jobData={job}
            setHeaderGraph={setHeaderGraph}
          />
        ))}
      </tbody>
    </table>
  );
}
