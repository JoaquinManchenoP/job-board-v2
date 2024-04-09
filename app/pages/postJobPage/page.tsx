"use client";
import React, { useState, useEffect } from "react";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import { useUserAuth } from "../../context/AuthContext";
import { addDataToFirestore } from "@/app/firebase";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import LoadingSpinner from "@/app/components/LoadingSpinner/LoadingSpinner";
import Link from "next/link";
import { countryData } from "./countryData/countryData";
import CurrencyDropdown from "./currencyTypeData/CurrencyDropdown";
import { ChangeEvent } from "react";

export default function PostJob() {
  const pathname = usePathname();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [isSliderDisabled, setIsSliderDisabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, googleSignIn } = useUserAuth();
  const [loginAgain, setLoginAgain] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    jobDescription: "",
    userId: "",
    currentDate: "",
    salaryRange: 0,
    positionCountry: "",
    positionCity: "",
    currency: "",
  });

  useEffect(() => {
    const checkUser = () => {
      if (user) {
        console.log("user found");
        setLoading(false);
      } else {
        setLoading(true);
        console.log("No user found");
        setTimeout(() => {
          if (pathname === "/pages/postJobPage") {
            setTimeout(() => {
              console.log("open the login pop up again");
              setLoginAgain(true);
            }, 3000);
          }
        }, 3000);
      }
    };
    checkUser();
  }, [user]);

  const handleLoginAgain = () => {
    if (!user) {
      googleSignIn();
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    setCities(newCountry ? countryData[newCountry] : []);
    setSelectedCity("");

    setFormData((prevData) => ({
      ...prevData,
      positionCountry: newCountry,
      positionCity: "",
    }));
  };

  const handleCurrencyChange = (code: string) => {
    console.log(code);
    setSelectedCurrency(code);
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);

    setFormData((prevData) => ({
      ...prevData,
      positionCity: newCity,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email) {
      const currentDate = new Date().toISOString().split("T")[0];
      const updatedFormData = {
        name: formData.name,
        email: user.email,
        tel: formData.tel,
        companyName: formData.companyName,
        companyWebsite: formData.companyWebsite,
        jobTitle: formData.jobTitle,
        jobDescription: formData.jobDescription,
        userId: user.uid,
        currentDate: currentDate,
        salaryRange: formData.salaryRange,
        positionCountry: selectedCountry,
        positionCity: selectedCity,
        currency: selectedCurrency,
      };
      setFormData(updatedFormData);
      addDataToFirestore(updatedFormData);
    }
    setFormData({
      name: "",
      email: "",
      tel: "",
      companyName: "",
      companyWebsite: "",
      jobTitle: "",
      jobDescription: "",
      userId: "",
      currentDate: "",
      salaryRange: 0,
      positionCountry: "",
      positionCity: "",
      currency: "",
    });
    setSelectedCurrency("");
  };

  return (
    <>
      {loading ? (
        <div className="profile__page h-screen w-full bg-red-500 space-y-1 flex flex-col items-center pt-10">
          <div className="spinner h-[120px] w-[180px]  flex items-center justify-center">
            <LoadingSpinner />
          </div>
          {loginAgain ? (
            <div className="login__again h-[160px] w-[160px]  space-y-4 flex flex-col items-center justify-center pt-20">
              <div className="login__text text-white">Login again</div>
              <div className="buttons flex flex-col space-y-3">
                <Link href="/">
                  <button className="bg-transparent w-[100px] hover:bg-gray-400 text-white hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded">
                    Home
                  </button>
                </Link>
                <button
                  className=" w-[100px] bg-gray-500 hover:bg-gray-200 text-white py-2 px-4 border border-gray-500 rounded"
                  onClick={handleLoginAgain}
                >
                  Login
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <div className="featured__companies__header">
            <PageSpecificHeader pageTitle={"Post a job"} />
          </div>
          <div className="container mx-auto p-4">
            <form className="addJob" onSubmit={handleSubmit}>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
                <label className="block mb-1" htmlFor="name">
                  Name of Contact:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label className="block mb-1" htmlFor="tel">
                  Telephone Number:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="tel"
                  id="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Company Details</h2>
                <label className="block mb-1" htmlFor="companyName">
                  Company Name:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
                <label className="block mb-1" htmlFor="companyWebsite">
                  Company Website:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Job Details</h2>
                <label className="block mb-1" htmlFor="jobTitle">
                  Job Title:
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                />
                <label className="block mb-1" htmlFor="jobDescription">
                  Job Description:
                </label>
                <textarea
                  className="border rounded w-full py-2 px-3 h-40"
                  id="jobDescription"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="flex space-x-3">
                  <div className="mb-4 w-1/2 ">
                    <h2 className="text-lg font-semibold mb-2">Salary Range</h2>
                    <label className="block mb-1" htmlFor="salaryRange">
                      Select Salary Range:
                    </label>
                    <input
                      className="border rounded w-full cursor-pointer ${!isSliderEnabled ? 'bg-gray-200' : 'bg-green-500'} "
                      type="range"
                      disabled={isSliderDisabled}
                      id="salaryRange"
                      name="salaryRange"
                      min="0"
                      max="400000"
                      value={!isSliderDisabled ? formData.salaryRange : 0}
                      onChange={handleChange}
                      required
                    />
                    <div className="text-center">
                      $
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(formData.salaryRange || 0)}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4">
                    <input
                      type="checkbox"
                      checked={isSliderDisabled}
                      onChange={(e) => setIsSliderDisabled(e.target.checked)}
                      className="toggle-checkbox"
                    />
                    <span>Skip Salary</span>
                  </div>
                </div>
                {isSliderDisabled ? (
                  <span></span>
                ) : (
                  <div className="select__currency mb-5">
                    <label className="text-sm" htmlFor="currency">
                      Select a Currency:
                    </label>
                    <CurrencyDropdown
                      selectedCurrency={selectedCurrency}
                      onCurrencyChange={handleCurrencyChange}
                    />
                  </div>
                )}
              </div>
              <div className="container dropdown">
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                <div className="space-y-4">
                  <div className="country__dropdown">
                    <label
                      htmlFor="country"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Select a Country:
                    </label>
                    <select
                      id="country"
                      value={formData.positionCountry}
                      onChange={handleCountryChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select a country</option>
                      {Object.keys(countryData).map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="city__dropdown">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Select a City:
                    </label>
                    <select
                      id="city"
                      value={formData.positionCity}
                      onChange={handleCityChange}
                      disabled={!selectedCountry}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select a city</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="submit__button mt-10">
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="footer pt-20">
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
