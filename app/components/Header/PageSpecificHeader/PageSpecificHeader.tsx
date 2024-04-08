import React from "react";

interface PageSpecificHeaderProps {
  pageTitle: string;
}

export default function PageSpecificHeader({
  pageTitle,
}: PageSpecificHeaderProps) {
  return (
    <div className="h-[250px] w-full bg-red-500 flex items-center justify-center">
      <span className="font-bold text-2xl text-white">{pageTitle}</span>
    </div>
  );
}
