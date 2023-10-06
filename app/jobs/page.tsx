"use client";
import React from "react";
import { useState } from "react";
import Header from "@/app/components/Header/Header";
import JobCard from "./JobCard/JobCard";

export default function JobPage() {
  return (
    <div className="">
      <div className="profile__page">
        <Header />
        <div className="job__cards h-full w-full flex flex-col items-center justify-center space-y-5 mt-10">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}
