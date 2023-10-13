"use client";
import Header from "../components/Header/Header";
import CompanyCard from "./CompanyCard/CompanyCard";
import FeaturedCompaniesHeader from "./FeaturedCompaniesHeader/FeaturedCompaniesHeader";
import { CompanyData } from "../Data/CompanyData/CompanyData";
import Link from "next/link";
import Footer from "../components/Footer";

export default function CompaniesPage() {
  console.log(CompanyData);
  return (
    <div className="companies__page">
      <div className="header">
        <Header />
      </div>
      <div className="featurec__companies__header">
        <FeaturedCompaniesHeader />
      </div>
      <div className="companies__container h-full w-full flex flex-col space-y-10 pt-10">
        {CompanyData.map((company, index) => (
          <Link
            className="h-full w-full flex items-center justify-center"
            href={`/pages/companyPage/${company.companyId}`}
            key={index}
          >
            <CompanyCard company={company} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
