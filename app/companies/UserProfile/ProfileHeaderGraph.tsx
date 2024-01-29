import React from "react";

export default function ProfileHeaderGraph({ headerData }) {
  return (
    <div className="h-[300px] mobile:w-full tablet:w-10/12 laptop:w-9/12 desktop:w-8/12 bg-green-400">
      ProfileHeaderGraph
      <span>{headerData.numberOfClicks}</span>
    </div>
  );
}
