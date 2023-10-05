import React from "react";
import FeaturedJobCardDescription from "./FeaturedJobCardDescription";
import Image from "next/image";

export default function FeaturedJobCard() {
  return (
    <div className="featured__job h-full w-full rounded-md shadow-xl bg-orange-500 flex ">
      <div className="featured__card__image mobile:w-1/3 tablet:min-w-[160px] h-full flex items-center justify-center bg-purple-400 ">
        <img
          className="mobile:h-28 mobile:w-28 tablet:h-36 tablet:w-36 object-contain "
          src="https://seeklogo.com/images/R/rounded-design-company-logo-58FEBA6563-seeklogo.com.png"
        ></img>
      </div>
      <div className="featured__card__description w-2/3 h-full bg-green-400">
        this is description
      </div>
    </div>
  );
}
