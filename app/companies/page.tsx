"use client";
import Header from "../components/Header/Header";
import CompanyCard from "./CompanyCard/CompanyCard";
import FeaturedCompaniesHeader from "./FeaturedCompaniesHeader/FeaturedCompaniesHeader";

export default function CompaniesPage() {
  return (
    <div className="companies__page">
      <div className="header">
        <Header />
      </div>
      <div className="featurec__companies__header">
        <FeaturedCompaniesHeader />
      </div>
      <div className="companies__container h-full w-full flex flex-col items-center space-y-10 pt-10">
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    </div>
  );
}
