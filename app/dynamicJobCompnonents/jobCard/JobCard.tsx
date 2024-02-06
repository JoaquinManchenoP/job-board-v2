import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";

export default function JobCard({ position }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = date.getFullYear().toString().substr(-2);

    return `${mm}/${dd}/${yy}`;
  }

  const originalFormatDate = position.currentDate;
  const formatedDate = formatDate(originalFormatDate);

  console.log("this is the job passed", position);
  return (
    <div className="h-40 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-lg flex">
      <div className="company_image h-full w-[130px] flex flex-col items-center justify-center">
        <div className="image h-20 w-20 bg-green-400 rounded-full">
          <Image src={logo} alt="image" />
        </div>
      </div>
      <div className="info h-full w-full bg-orange-500">
        <div className="position__title h-11 w-full bg-purple-400 flex items-center">
          <span className="text-lg">{position.jobTitle}</span>
        </div>
        <div className="job h-6 w-full flex text-sm space-x-5 bg-red-600   ">
          <div className="company__name font-bold">{position.companyName}</div>
          <div className="company__website">{position.companyWebsite}</div>
          <div className="loaction">Berlin, Germany</div>
          <div className="date">{formatedDate}</div>
        </div>
      </div>
    </div>
  );
}
