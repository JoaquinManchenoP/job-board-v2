import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";

export default function JobCard({ position }) {
  return (
    <div className="h-32 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-lg flex">
      <div className="company_image h-full w-[130px] flex flex-col items-center justify-center">
        <div className="image h-20 w-20 bg-green-400 rounded-full">
          <Image src={logo} alt="image" />
        </div>
      </div>
      <div className="job h-full w-full flex flex-col  justify-center text-sm ml-3 ">
        <div className="job__title">{position.jobTitle}</div>
        <div className="company__name font-bold">{position.companyName}</div>
        <div className="company__website">{position.companyWebsite}</div>
      </div>
    </div>
  );
}
