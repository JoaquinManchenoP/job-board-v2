"use client";
import React from "react";
import { useState } from "react";
import Header from "@/app/components/Header/Header";

export default function page() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="">
      <div className="profile__page">
        <Header menuState={menuState} setMenuState={setMenuState} />
      </div>
    </div>
  );
}
