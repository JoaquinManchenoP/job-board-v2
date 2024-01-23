import React from "react";

export default function UserListingRow() {
  return (
    <tr className="h-12 w-full border-t bg-green-200 shadow-2xl ">
      <td className="pl-8">
        <div className="position__title text-md">this is the job title</div>
        <div className="date__posted text-xs">11/12/2024</div>
      </td>
      <td className="text-right pr-3">100</td>
      <td className="text-right pr-4 ">50</td>
      <td className="text-right pr-11">200</td>
    </tr>
  );
}
