import React from "react";

export default function FullJobDescription({ jobDescription }) {
  return (
    <div className="job__description h-full w-9/12 flex flex-col items-center justify-center">
      <div className="description__content h-full w-10/12 bg-gray-100">
        <span>{jobDescription}</span>
      </div>
      <div className="apply__job h-20 w-full flex items-centery justify-center">
        <button className="bg-blue-500 h-14 w-38 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-8">
          Apply to job
        </button>
      </div>
    </div>
  );
}
