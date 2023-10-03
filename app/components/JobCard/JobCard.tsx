import React from "react";

export default function JobCard() {
  return (
    <div className="h-36 w-11/12 bg-blue-100 rounded-md shadow-md flex ">
      <div className="company_image h-full w-[130px] bg-purple-400 flex flex-col items-center justify-center">
        <div className="image h-20 w-20 bg-green-400 rounded-full"></div>
      </div>
      <div className="job__name h-full w-full bg-orange-500">job</div>
    </div>
  );
}
