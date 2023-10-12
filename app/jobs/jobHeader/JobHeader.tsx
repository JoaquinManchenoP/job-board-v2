import React from "react";
import JobCard from "../jobCard/JobCard";

export default function JobHeader({ job }) {
  console.log(job);
  return (
    <div className="h-full w-full flex items-center justify-center">
      <JobCard position={job} />
    </div>
  );
}
