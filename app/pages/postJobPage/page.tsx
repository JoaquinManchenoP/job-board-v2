"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header/Header";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import Footer from "@/app/components/Footer";

export default function PostJob() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmailInput, setUserEmailInput] = useState("");
  const [userTelephoneInput, setUserTelephoneInput] = useState("");
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [companyWebsiteUrlInput, setCompanyWebsiteUrlInput] = useState("");

  const handleOrderJob = (e) => {
    e.preventDefault();
    console.log("the job has been ordered");
    let completeJobPosting = {
      userName: userNameInput,
      userEmail: userEmailInput,
      userTelephone: userTelephoneInput,
      companyName: companyNameInput,
      companyWebsiteUrl: companyWebsiteUrlInput,
    };
    console.log(completeJobPosting);
  };

  return (
    <>
      <div className="create__account__page ">
        <div className="header">
          <Header />
        </div>
        <div className="featured__companies__header">
          <PageSpecificHeader pageTitle={"Post a job"} />
        </div>
        <div className="h-screen w-screen bg-purple-300 flex flex-col items-center justify-center pt-[120px]">
          <form className="post__job__form__container  h-screen w-full min-w-[400px] space-y-4 flex flex-col items-center">
            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center border-b-2">
                <span className="text-2xl font-bold ml-3">Contact Details</span>
              </div>
              <div className="contact__details h-[200px] w-full flex flex-col justify-center space-y-4 px-4 ">
                <input
                  placeholder="Your Name"
                  value={userNameInput}
                  onChange={(e) => setUserNameInput(e.target.value)}
                  className="h-10"
                />
                <input
                  placeholder="Email Adress"
                  className="h-10"
                  onChange={(e) => setUserEmailInput(e.target.value)}
                ></input>
                <input
                  placeholder="Telephone"
                  className="h-10"
                  onChange={(e) => setUserTelephoneInput(e.target.value)}
                />
              </div>
            </div>

            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Company Details</span>
              </div>
              <div className="contact__details h-[140px] w-full flex flex-col justify-center space-y-4 px-4">
                <input
                  placeholder="Company Name"
                  className="h-10"
                  onChange={(e) => setCompanyNameInput(e.target.value)}
                />
                <input
                  placeholder="Website"
                  className="h-10"
                  onChange={(e) => setCompanyWebsiteUrlInput(e.target.value)}
                />
              </div>
            </div>

            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Job Details</span>
              </div>
              <div className="contact__details h-[600px] w-full flex flex-col justify-center space-y-4 px-4">
                <input placeholder="Job Title" className="h-10"></input>
                <input placeholder="Job Url" className="h-10"></input>
                <input
                  placeholder="Job Description"
                  className="h-[350px]"
                ></input>
                <div className="upload__logo h-[80px] w-full bg-green-600">
                  upload a logo
                </div>
              </div>
            </div>
            <div className="billing__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Billing Details</span>
              </div>
              <div className="billing__details h-[140px] w-full flex flex-col justify-center space-y-4 px-4">
                <input
                  placeholder="input to be determined"
                  className="h-10"
                ></input>
              </div>
            </div>
            <div className="order__job__button">
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={(e) => handleOrderJob(e)}
              >
                Order Job
              </button>
            </div>
            <div className="footer pt-20">
              <Footer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
