import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";

export default function Featured() {
  return (
    <div className="featured relative h-[420px] w-full flex items-center justify-center">
      <div className="background  absolute h-[300px] w-full top-0 left-0 bg-red-500 p-4 z-0 text-xl ">
        <span className="font-bold text-2xl text-white">Featured</span>
      </div>
      <div className="card relative h-[330px] mobile:w-[450px] tablet:w-7/12 z-10 rounded-md shadow-md mt-10">
        <FeaturedJobCard />
      </div>
    </div>
  );
}
