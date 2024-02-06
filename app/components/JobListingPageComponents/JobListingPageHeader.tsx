import React from "react";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import logo from "../../images/logo.png";
import { RiComputerFill } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";

export default function JobListingPageHeader({ jobData }) {
  console.log("this is job listing page header", jobData);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = date.getFullYear().toString().substr(-2);

    return `${mm}.${dd}.${yy}`;
  }

  const originalFormatDate = jobData.currentDate;
  const formatedDate = formatDate(originalFormatDate);

  return (
    <div className="h-48 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-lg flex">
      <div className="company_image h-full w-[130px] flex flex-col items-center justify-center">
        <div className="image h-20 w-20 rounded-full">
          <Image src={logo} alt="image" />
        </div>
      </div>
      <div className="info h-full w-full flex flex-col">
        <div className="position__title h-12 w-full flex items-center border-b-2 justify-between">
          <span className="text-lg">{jobData.jobTitle}</span>
          <span className="posted__date text-sm mr-3">
            Posted: {formatedDate}
          </span>
        </div>
        <div className="company__info space-y-2 mt-4 text-sm ">
          <div className="company__name__container flex items-center space-x-2 ">
            <div className="company__icon">
              <FaBuilding />
            </div>
            <div className="company__name">{jobData.companyName}</div>
          </div>
          <div className="company__website__container flex items-center space-x-2 ">
            <div className="website__icon">
              <RiComputerFill />
            </div>
            <div className="company__name">{jobData.companyWebsite}</div>
          </div>
          <div className="location__container flex items-center space-x-2 ">
            <div className="location__icon">
              <FaLocationPin />
            </div>
            <div className="location">Berlin,Germany</div>
          </div>
          <div className="salary__container flex items-center space-x-2 ">
            <div className="location__icon">
              <FaMoneyBill />
            </div>
            <div className="salary">Salary Range</div>
          </div>
        </div>
      </div>
    </div>
  );
}
