"use client";

import CompanyCard from "./CompanyCard/CompanyCard";
import { CompanyData } from "../Data/CompanyData/CompanyData";
import Link from "next/link";
import Footer from "../components/Footer";
import PageSpecificHeader from "../components/Header/PageSpecificHeader/PageSpecificHeader";

export default function CompaniesPage() {
  return (
    <div className="companies__page">
      <div className="featured__companies__header">
        <PageSpecificHeader pageTitle={"Featured Companies"} />
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
      <div className="footer pt-20">
        <Footer />
      </div>
    </div>
  );
}
