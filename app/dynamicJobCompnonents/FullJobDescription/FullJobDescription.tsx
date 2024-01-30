import React from "react";

export default function FullJobDescription({ jobDescription }) {
  return (
    <div className="job__description h-full w-9/12 flex flex-col items-center justify-center ">
      <div className="description__content h-full w-10/12 bg-gray-100 rounded-md">
        <span>{jobDescription}</span>
      </div>
      <div className="apply__job h-20 w-full flex items-centery justify-center">
        <button className=" h-14 w-38 bg-gray-400 hover:bg-gray-200 text-white  font-bold py-2 px-4 border rounded mt-8">
          Apply to job
        </button>
      </div>
    </div>
  );
}
