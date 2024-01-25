import React from "react";

export default function UserListingRow({ jobData }) {
  console.log("this is loaded", jobData);

  return (
    <tr className="h-12 w-full border-t bg-green-200 shadow-2xl ">
      <td className="pl-8">
        <div className="position__title text-md">{jobData.jobTitle}</div>
        <div className="date__posted text-xs">11/12/2024</div>
      </td>
      <td className="text-right pr-3">100</td>
      <td className="text-right pr-4 ">50</td>
      <td className="text-right pr-11">200</td>
    </tr>
  );
}
