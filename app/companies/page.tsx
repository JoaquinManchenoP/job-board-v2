"use client";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import AppContext from "@/app/context/AppContext";
import Header from "../components/Header/Header";

export default function CompaniesPage() {
  const context = useContext(AppContext);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <div>
      <Header />
      <div className="company__page">company page</div>
    </div>
  );
}
