import React from "react";
import UserListingRow from "../UserListingRow";
export interface UserJob {
  companyName: string;
  companyWebsite: string;
  currency: string;
  currentDate: string;
  email: string;
  id: string;
  jobDescription: string;
  jobTitle: string;
  name: string;
  positionCity: string;
  positionCountry: string;
  salaryRange: string;
  tel: string;
  userId: string;
}

interface PostingTableProps {
  userJobs: UserJob[];
}

const PostingTable: React.FC<PostingTableProps> = ({ userJobs }) => {
  return (
    <table className="w-9/12 border-separate border-spacing-y-6 ">
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
};

export default PostingTable;
