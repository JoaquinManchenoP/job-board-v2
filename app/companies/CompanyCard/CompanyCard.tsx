import React from "react";
import { AiFillTags } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";
export default function CompanyCard({ company }) {
  console.log(company);
  return (
    <div className="h-[500px] mobile:w-11/12 tablet:w-11/12 max-w-[700px]  bg-gray-100 rounded-md shadow-md flex flex-col">
      <div className="image h-1/2 w-full">
        <img
          className="company__image h-full w-full object-cover"
          src="https://www.bobbitt.com/wp-content/uploads/2018/07/6-Teamwork-Skills-Every-Company-Should-Cultivate.jpg"
        ></img>
      </div>
      <div className="company__description  h-1/2 w-full flex flex-col items-center justify-center">
        <div className="company__info__container h-[160px] w-6/12 flex flex-col justify-center space-y-2 text-sm ">
          <div className="company__title flex justify-center">
            <div className="company__name text-xl mb-4">
              {company.companyName}
            </div>
          </div>
          <div className="company__type flex items-center space-x-2 ">
            <div className="icon">
              <AiFillTags />
            </div>
            <div className="company__type">
              <span>{company.companyType}</span>
            </div>
          </div>
          <div className="company__size">
            <div className="company__size flex items-center space-x-2 ">
              <div className="icon">
                <BsPeopleFill />
              </div>
              <div className="size">
                <span>{company.numberOfEmployees}</span>
              </div>
            </div>
          </div>
          <div className="company__positive">
            <div className="company__message flex items-center space-x-2 ">
              <div className="icon">
                <BsPeopleFill />
              </div>
              <div className="size">
                <span>{company.companyShortMessage}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="view__jobs__button h-10 w-[220px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2 flex items-center justify-center">
          <span>View jobs</span>
        </div>
      </div>
    </div>
  );
}
