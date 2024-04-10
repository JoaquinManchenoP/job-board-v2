import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";

export default function Featured() {
  return (
    <div className="featured relative h-[400px] mobile:w-full tablet:w-full flex items-center justify-center ">
      <div className="background  absolute h-[300px] w-full top-0 left-0 bg-red-500 p-4 z-0 text-xl ">
        <span className="font-bold text-2xl text-white">Tech Bridge</span>
      </div>
      <div className="card relative h-full mobile:w-[450px] tablet:w-8/12 z-10 rounded-md shadow-md mt-[120px]">
        <FeaturedJobCard />
      </div>
    </div>
  );
}
