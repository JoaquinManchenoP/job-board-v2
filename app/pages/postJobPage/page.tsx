"use client";
import React, { useState } from "react";
import PageSpecificHeader from "@/app/components/Header/PageSpecificHeader/PageSpecificHeader";
import { userAuth } from "../../context/AuthContext";
import { addDataToFirestore } from "@/app/firebase";
import Footer from "@/app/components/Footer";
import { storage } from "@/app/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function PostJob() {
  const [image, setImage] = useState(null);
  const { user } = userAuth();
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
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email) {
      const currentDate = new Date().toISOString().split("T")[0];
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

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
        imageUrl: imageUrl,
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
      imageUrl: "",
    });
  };

  return (
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
            <div className="mb-4">
              <label className="block mb-1" htmlFor="image">
                Upload Image:
              </label>
              <input
                className="border rounded w-full py-2 px-3"
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>

          <button
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="footer pt-20">
        <Footer />
      </div>
    </>
  );
}
