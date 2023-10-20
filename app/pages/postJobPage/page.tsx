import React from "react";
import Header from "@/app/components/Header/Header";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";

export default function PostJo() {
  return (
    <div className="create__account__page ">
      <div className="header">
        <Header />
      </div>
      <div className="featured__companies__header">
        <PageSpecificHeader pageTitle={"Post a job"} />
      </div>
      <div className="h-screen w-screen bg-purple-300 flex items-center justify-center">
        <div className="post__job__form__container h-screen mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px] space-y-4">
          <div className="contact__detials h-[230px] w-full bg-red-500">
            <div className="section__title">
              <span className="text-2xl font-bold">Contact Details</span>
            </div>
            <div className="contact__content h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-3 ">
              <input placeholder="Your Name" className="h-10"></input>
              <input placeholder="Email Adress" className="h-10"></input>
              <input placeholder="Telephone number" className="h-10"></input>
            </div>
          </div>
          <div className="contact__detials h-[230px] w-full bg-red-500">
            <div className="section__title">
              <span className="text-2xl font-bold">Contact Details</span>
            </div>
            <div className="contact__content h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-3 ">
              <input placeholder="Your Name" className="h-10"></input>
              <input placeholder="Email Adress" className="h-10"></input>
              <input placeholder="Telephone number" className="h-10"></input>
            </div>
          </div>

          <div className="contact__detials h-[230px] w-full bg-red-500">
            <div className="section__title">
              <span className="text-2xl font-bold">Contact Details</span>
            </div>
            <div className="contact__content h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-3 ">
              <input placeholder="Your Name" className="h-10"></input>
              <input placeholder="Email Adress" className="h-10"></input>
              <input placeholder="Telephone number" className="h-10"></input>
            </div>
          </div>

          <div className="upload__logo">
            <div className="upload__logo">upload logo</div>
            <div className="submit__logo__button">
              <button>submit logo</button>
            </div>
          </div>
          <div className="billing__information">payment information form</div>
          <div className="help__section">help</div>
        </div>
      </div>
    </div>
  );
}
