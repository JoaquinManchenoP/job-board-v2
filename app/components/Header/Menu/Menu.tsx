import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="h-[200px] w-full bg-white flex items-center justify-center">
      <div className="menu__content h-4/5 w-full ">
        <div className="options h-full w-full flex flex-col justify-center items-center space-y-5 pl-10 cursor-pointer">
          <div className="home__option h-full w-4/5 flex items-center border-b border-gray-400">
            <Link href="/profile" className="profile">
              Profile
            </Link>
          </div>
          <div className="jobs__option h-full w-4/5 flex items-center border-b border-gray-400">
            <Link href="/jobs">jobs</Link>
          </div>
          <div className="companies__option h-full w-4/5  flex items-center">
            <Link href="/companies">companies</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
