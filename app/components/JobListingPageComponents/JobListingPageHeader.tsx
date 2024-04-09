import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { RiComputerFill } from "react-icons/ri";
import { FaMoneyBill } from "react-icons/fa";

export interface JobData {
  companyName: string;
  companyWebsite: string;
  currency: string;
  currentDate: string;
  email: string;
  jobDescription: string;
  jobTitle: string;
  name: string;
  positionCity: string;
  positionCountry: string;
  salaryRange: string;
  tel: string;
  userId: string;
}

interface JobListingPageHeaderProps {
  jobData: JobData;
}

export default function JobListingPageHeader({
  jobData,
}: JobListingPageHeaderProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = date.getFullYear().toString().substr(-2);

    return `${mm}.${dd}.${yy}`;
  }

  const originalFormatDate = jobData.currentDate;
  const formatedDate = formatDate(originalFormatDate);

  const formatNumber = (number: number | undefined) => {
    const roundedNumber = Math.floor(number || 0);
    const formattedNumber = roundedNumber.toLocaleString("en-US");

    return formattedNumber;
  };
  const salaryRangeAsNumber = parseFloat(jobData.salaryRange); // Convert salaryRange to a number
  const formattedNumber = formatNumber(salaryRangeAsNumber);

  return (
    <div className="h-48 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-lg flex">
      <div className="info h-full w-full flex flex-col ml-9">
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
            <div className="location space-x-1">
              <span>{jobData.positionCity},</span>
              <span>{jobData.positionCountry}</span>
            </div>
          </div>
          <div className="salary__container flex items-center space-x-2 ">
            <div className="location__icon">
              <FaMoneyBill />
            </div>
            <div className="salary space-x-1">
              <span>{formattedNumber}</span>
              <span>{jobData.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
