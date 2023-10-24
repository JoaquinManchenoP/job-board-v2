import React from "react";
import Header from "@/app/components/Header/Header";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import Footer from "@/app/components/Footer";

export default function PostJo() {
  return (
    <>
      <div className="create__account__page ">
        <div className="header">
          <Header />
        </div>
        <div className="featured__companies__header">
          <PageSpecificHeader pageTitle={"Post a job"} />
        </div>
        <div className="h-screen w-screen bg-purple-300 flex flex-col items-center justify-center">
          <div className="post__job__form__container  h-screen w-full min-w-[400px] space-y-4 flex flex-col items-center">
            <div className="contact__detials h-[230px] w-[700px] mobile:w-11/12 tablet:11/12 max-w-[700px] bg-red-500 rounded-md shadow-md">
              <div className="section__title">
                <span className="text-2xl font-bold">Contact Details</span>
              </div>
              <div className="contact__content h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-4 ">
                <input placeholder="Your Name" className="h-10"></input>
                <input placeholder="Email Adress" className="h-10"></input>
                <input placeholder="Telephone number" className="h-10"></input>
              </div>
            </div>
            <div className="company__detials h-[230px] w-[700px] bg-red-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title">
                <span className="text-2xl font-bold">Company Details</span>
              </div>
              <div className="company__details h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-4 ">
                <input placeholder="Company Name" className="h-10"></input>
                <input placeholder="Website" className="h-10"></input>
              </div>
            </div>

            <div className="job__detials h-full w-[700px] bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title">
                <span className="text-2xl font-bold">Job Details</span>
              </div>
              <div className="job__content h-[480px] w-full bg-green-500 flex flex-col justify-center space-y-4 ">
                <input placeholder="Job Title" className="h-10"></input>
                <input placeholder="Job Url" className="h-10"></input>
                <input
                  placeholder="Job Description"
                  className="h-[320px]"
                ></input>
              </div>
            </div>
            <div className="upload__logo h-[230px] w-[700px] bg-purple-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title">
                <span className="text-2xl font-bold">Upload logo</span>
              </div>
              <div className="upload__logo h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-4 ">
                <input placeholder="Your Name" className="h-10"></input>
                <input placeholder="Email Adress" className="h-10"></input>
                <input placeholder="Telephone number" className="h-10"></input>
              </div>
            </div>

            <div className="billing__information h-[230px] w-[700px] bg-red-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md  shadow-md">
              <div className="section__title">
                <span className="text-2xl font-bold">Billing Information</span>
              </div>
              <div className="Billing Information h-[180px] w-full bg-green-500 flex flex-col justify-center space-y-4 ">
                <input placeholder="Your Name" className="h-10"></input>
                <input placeholder="Email Adress" className="h-10"></input>
                <input placeholder="Telephone number" className="h-10"></input>
              </div>
            </div>
            <div className="footer pt-20 realative">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
