import React from "react";
import Footer from "../Footer";

export default function PostJobForm() {
  return (
    <div className="h-full w-full bg-orange-400 flex flex-col">
      <div className="job__form absolute h-full mobile:w-11/12 tablet:w-11/12 max-w-[700px] min-w-[400px] bg-orange-500">
        <div className="contact__details h-[250px] w-full bg-green-500 flex flex-col justify-center space-y-4 px-4">
          <div className="section__title">
            <span>Contact Details</span>
          </div>
          <input placeholder="Your Name" className="h-9" />
          <input placeholder="Email Adress" className="h-9" />
          <input placeholder="Telephone" className="h-9" />
        </div>
        <div className="contact__details h-[250px] w-full bg-green-500 flex flex-col justify-center space-y-4 px-4">
          <div className="section__title">
            <span>Contact Details</span>
          </div>
          <input placeholder="Your Name" className="h-9" />
          <input placeholder="Email Adress" className="h-9" />
          <input placeholder="Telephone" className="h-9" />
        </div>
        <div className="contact__details h-[250px] w-full bg-green-500 flex flex-col justify-center space-y-4 px-4">
          <div className="section__title">
            <span>Contact Details</span>
          </div>
          <input placeholder="Your Name" className="h-9" />
          <input placeholder="Email Adress" className="h-9" />
          <input placeholder="Telephone" className="h-9" />
        </div>
        <div className="contact__details h-[250px] w-full bg-green-500 flex flex-col justify-center space-y-4 px-4">
          <div className="section__title">
            <span>Contact Details</span>
          </div>
          <input placeholder="Your Name" className="h-9" />
          <input placeholder="Email Adress" className="h-9" />
          <input placeholder="Telephone" className="h-9" />
        </div>
        <div className="contact__details h-[250px] w-full bg-green-500 flex flex-col justify-center space-y-4 px-4">
          <div className="section__title">
            <span>Contact Details</span>
          </div>
          <input placeholder="Your Name" className="h-9" />
          <input placeholder="Email Adress" className="h-9" />
          <input placeholder="Telephone" className="h-9" />
        </div>
      </div>
    </div>
  );
}
