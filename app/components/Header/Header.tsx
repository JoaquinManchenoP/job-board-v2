"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu/Menu";
import Link from "next/link";

export default function Header() {
  const [menuState, setMenuState] = useState(false);

  const handleMenuState = () => {
    if (menuState) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
    console.log(menuState);
  };
  return (
    <>
      <div className="h-[50px] w-full bg-red-700 flex justify-between ">
        <div className="logo h-full w-1/4 bg-blue-500 flex items-center justify-center">
          <Link href="/">Logo</Link>
        </div>
        <div
          className="menu h-full w-1/4 bg-gray-200 flex items-center justify-center "
          onClick={handleMenuState}
        >
          <GiHamburgerMenu className="text-xl" />
        </div>
      </div>
      {menuState ? <Menu /> : <span></span>}
    </>
  );
}
