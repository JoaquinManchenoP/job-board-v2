import React from "react";
import Image from "next/image";
import logo from "../../images/logo.png";

export default function FeaturedJobCard() {
  return (
    <div className="h-full w-full bg-white rounded-md shadow-md flex flex-col">
      <div className="image h-3/5 w-full">
        <img
          className="company__image h-full w-full object-cover"
          src="/working-people.jpg"
        ></img>
      </div>
      <div className="company__description  h-2/5 w-full flex  items-center">
        <div className="left__side h-full min-w-[160px] mobile:w-1/3 tablet:max-w-[200px] flex items-center justify-center">
          <div className="image h-20 w-20 bg-green-400 rounded-full">
            <Image src={logo} alt="image" />
          </div>
        </div>
        <div className="right__side h-full mobile:w-2/3 tablet:w-full space-y-2 text-sm flex flex-col justify-center">
          <div className="job__title font-bold text-lg">
            <span>Tech Bridge</span>
          </div>
          <div className="job__description w-full  text-sm overflow-hidden pr-12">
            Connecting Talent Across Borders: Your Gateway to English-speaking
            Tech Careers in Germany !
          </div>
        </div>
      </div>
    </div>
  );
}
