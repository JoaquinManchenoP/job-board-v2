"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu/Menu";
import Link from "next/link";
import { useUserAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import logo from "../../images/logo.png";

export default function Header() {
  const { menuState, setMenuState } = useUserAuth();

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
      <div className="h-[75px] w-ful flex justify-between ">
        <Link href="/" className="h-full w-full">
          <div className="logo h-full w-1/4  flex items-center justify-center mt-1">
            <Image src={logo} alt="My Image" className="h-16 w-20" />
          </div>
        </Link>
        <div
          className="menu h-full w-1/4  flex items-center justify-center "
          onClick={handleMenuState}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </div>
      {menuState ? <Menu /> : <span></span>}
    </>
  );
}
