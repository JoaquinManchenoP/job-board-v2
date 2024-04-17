import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { motion } from "framer-motion";

interface JobCardProps {
  position: {
    jobTitle: string;
    companyName: string;
    positionCity: string;
    positionCountry: string;
    jobDescription: string;
    currentDate: string;
  };
}

export default function JobCard({ position }: JobCardProps) {
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = date.getFullYear().toString().substr(-2);

    return `${mm}.${dd}.${yy}`;
  }

  const originalFormatDate = position.currentDate;
  const formatedDate = formatDate(originalFormatDate);

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="h-40 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-xl flex "
    >
      <div className="info h-full w-full mt-3 ml-7">
        <div className="position__title h-11 w-full  flex items-center border-b-2 ">
          <span className="text-lg">{position.jobTitle}</span>
        </div>
        <div className="job h-6 w-full flex text-sm space-x-5    ">
          <div className="company__name__container flex space-x-1 items-center">
            <FaBuilding />
            <div className="company__name font-bold">
              {position.companyName}
            </div>
          </div>
          <div className="location__container flex space-x-1 items-center">
            <FaLocationPin className="text-xs" />
            <div className="loaction space-x-1">
              <span>{position.positionCity},</span>
              <span>{position.positionCountry}</span>
            </div>
          </div>
          <div className="date flex items-center">{formatedDate}</div>
        </div>
        <div className="h-[85px] w-full ">
          <span className="text-sm line-clamp-2 pt-5 mr-3">
            {position.jobDescription}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
