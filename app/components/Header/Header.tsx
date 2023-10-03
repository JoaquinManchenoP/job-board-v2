"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header({ menuState, setMenuState }) {
  const handleMenuState = () => {
    if (menuState) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
    console.log(menuState);
  };

  return (
    <div className="h-10 w-full bg-red-700 flex justify-between ">
      <div className="logo h-full w-1/4 bg-blue-500 flex items-center justify-center">
        Logo
      </div>
      <div className="menu h-full w-1/4 bg-gray-200 flex items-center justify-center">
        <GiHamburgerMenu className="text-xl" onClick={handleMenuState} />
      </div>
    </div>
  );
}
