"use client";
import Header from "../components/Header/Header";
import CompanyCard from "./CompanyCard/CompanyCard";

export default function CompaniesPage() {
  return (
    <div className="companies__page">
      <div className="header">
        <Header />
      </div>
      <div className="companies__container h-full w-full bg-purple-500 flex flex-col items-center space-y-5 pt-10">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
}
