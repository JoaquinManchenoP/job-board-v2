"use client";
import React from "react";
import { useParams } from "next/navigation";

export default function DynamicCompanyPage() {
  const params = useParams();
  return <div>this is the company Id :{params.dynamicCompanyPage}</div>;
}
