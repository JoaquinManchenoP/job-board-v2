import React from "react";
import FeaturedJobCardDescription from "./FeaturedJobCardDescription";

export default function FeaturedJobCard() {
  return (
    <div className="featured__job h-full w-full bg-red-400 rounded-md shadow-xl ">
      <div className="featured__card__image h-1/2 w-full flex items-center justify-center">
        image
      </div>
      <div className="featured__card__descriptiob h-1/2 w-full">
        <FeaturedJobCardDescription />
      </div>
    </div>
  );
}
