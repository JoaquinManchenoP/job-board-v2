import React from "react";
import Header from "@/app/components/Header/Header";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import Footer from "@/app/components/Footer";

export default function PostJob() {
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
          <div className="post__job__form__container  h-screen w-full min-w-[400px] space-y-4 flex flex-col items-center">
            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center border-b-2">
                <span className="text-2xl font-bold ml-3">Contact Details</span>
              </div>
              <div className="contact__details h-[200px] w-full flex flex-col justify-center space-y-4 px-4 ">
                <input placeholder="Your Name" className="h-10"></input>
                <input placeholder="Email Adress" className="h-10"></input>
                <input placeholder="Telephone" className="h-10"></input>
              </div>
            </div>

            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Company Details</span>
              </div>
              <div className="contact__details h-[140px] w-full flex flex-col justify-center space-y-4 px-4">
                <input placeholder="Company Name" className="h-10"></input>
                <input placeholder="Website" className="h-10"></input>
              </div>
            </div>

            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Job Details</span>
              </div>
              <div className="contact__details h-[600px] w-full flex flex-col justify-center space-y-4 px-4">
                <input placeholder="Job Title" className="h-10"></input>
                <input placeholder="Job Url" className="h-10"></input>
                <input placeholder="Job Url" className="h-[350px]"></input>
                <div className="upload__logo h-[80px] w-full bg-green-600">
                  upload a logo
                </div>
              </div>
            </div>
            <div className="contact__detials h-full w-[700px] flex flex-col justify-center bg-orange-500 mobile:w-11/12 tablet:11/12 max-w-[700px] rounded-md shadow-md">
              <div className="section__title h-10 w-full flex items-center  border-b-2">
                <span className="text-2xl font-bold ml-3">Billing Details</span>
              </div>
              <div className="contact__details h-[140px] w-full flex flex-col justify-center space-y-4 px-4">
                <input
                  placeholder="input to be determined"
                  className="h-10"
                ></input>
              </div>
            </div>
            <div className="footer pt-20">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
