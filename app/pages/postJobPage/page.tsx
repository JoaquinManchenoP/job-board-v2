"use client";
import React, { useState, useRef } from "react";
import Header from "@/app/components/Header/Header";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import Footer from "@/app/components/Footer";

export default function PostJob() {
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const userPhoneRef = useRef(null);
  const companyNameRef = useRef(null);
  const companyWebsiteRef = useRef(null);
  const postingTitleRef = useRef(null);
  const postingUrlRef = useRef(null);
  const postingDescriptionRef = useRef(null);

  const handleJobSubmit = (e) => {
    e.preventDefault();
    console.log("this was submited");
    const submitedJob = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      userPhone: userPhoneRef.current.value,
      jobPosting: {
        companyName: companyNameRef.current.value,
        companyWebsite: companyWebsiteRef.current.value,
        postingTitle: postingTitleRef.current.value,
        postingUrl: postingUrlRef.current.value,
        postingDescriptionRef: postingDescriptionRef.current.value,
      },
    };
    //Some sort of  thing will be added here to interact with the db
    userNameRef.current.value = "";
    userEmailRef.current.value = "";
    userPhoneRef.current.value = "";
    companyNameRef.current.value = "";
    companyWebsiteRef.current.value = "";
    postingTitleRef.current.value = "";
    postingUrlRef.current.value = "";
    postingDescriptionRef.current.value = "";
  };

  return (
    <>
      <div className="create__account__page ">
        <div className="featured__companies__header">
          <PageSpecificHeader pageTitle={"Post a job"} />
        </div>
        <div className="h-screen w-screen bg-purple-300 flex flex-col items-center justify-center pt-[120px]">
          <form
            className="post__job__form__container  h-screen w-full min-w-[400px] space-y-4 flex flex-col items-center"
            onSubmit={(e) => handleJobSubmit(e)}
          >
            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center border-b-2">
                <span className="text-2xl font-bold ml-3">Contact Details</span>
              </div>
              <div className="contact__details h-[200px] w-full flex flex-col justify-center space-y-4 px-4 ">
                <input
                  placeholder="Your Name"
                  className="h-10 pl-3"
                  ref={userNameRef}
                />
                <input
                  placeholder="Email Adress"
                  className="h-10 pl-3"
                  name="userEmail"
                  ref={userEmailRef}
                />
                <input
                  placeholder="Telephone"
                  className="h-10 pl-3"
                  name="userPhone"
                  ref={userPhoneRef}
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
                  className="h-10 pl-3"
                  name="companyName"
                  ref={companyNameRef}
                />
                <input
                  placeholder="Website"
                  className="h-10 pl-3"
                  name="companyWebsite"
                  ref={companyWebsiteRef}
                />
              </div>
            </div>

            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Job Details</span>
              </div>
              <div className="contact__details h-[600px] w-full flex flex-col justify-center space-y-4 px-4">
                <input
                  placeholder="Job Title"
                  className="h-10 pl-3"
                  name="postingTitle"
                  ref={postingTitleRef}
                />
                <input
                  placeholder="Job Url"
                  className="h-10 pl-3"
                  name="postingUrl"
                  ref={postingUrlRef}
                />

                <div className="job__description__input h-[350px] w-full bg-purple-500 ">
                  <textarea
                    rows={50}
                    cols={50}
                    placeholder="Job Description"
                    className="h-[350px] w-full pl-3 pt-2"
                    name="postingUrl"
                    ref={postingDescriptionRef}
                  />
                </div>

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
                type="submit"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
