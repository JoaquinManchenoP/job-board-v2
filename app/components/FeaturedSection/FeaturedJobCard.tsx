import React from "react";
import { AiFillTags } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";

export default function FeaturedJobCard() {
  return (
    <div className="h-full w-full max-w-[900px]  bg-gray-100 rounded-md shadow-md flex flex-col">
      <div className="image h-3/5 w-full">
        <img
          className="company__image h-full w-full object-cover"
          src="https://www.bobbitt.com/wp-content/uploads/2018/07/6-Teamwork-Skills-Every-Company-Should-Cultivate.jpg"
        ></img>
      </div>
      <div className="company__description  h-2/5 w-full flex  items-center">
        <div className="left__side h-full w-1/3 bg-purple-500 flex items-center justify-center">
          <div className="image h-20 w-20 bg-green-400 rounded-full">
            <img src="https://seeklogo.com/images/R/rounded-design-company-logo-58FEBA6563-seeklogo.com.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
