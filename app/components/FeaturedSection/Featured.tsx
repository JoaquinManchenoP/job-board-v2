import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";

export default function Featured() {
  return (
    <div className="featured relative h-[400px] w-full bg-orange-500 flex items-center justify-center">
      <div className="background  absolute h-[300px] w-full top-0 left-0 bg-blue-300 p-4 z-0">
        background
      </div>
      <div className="card relative h-[330px] w-[450px] z-10 bg-green-300 rounded-md shadow-md">
        <FeaturedJobCard />
      </div>
    </div>
  );
}
