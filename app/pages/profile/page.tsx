"use client";
import React from "react";
import Header from "@/app/components/Header/Header";
import { useState } from "react";

export default function page() {
  const [menuState, setMenuState] = useState(false);
  return (
    <div className="profile__page">
      <Header menuState={menuState} setMenuState={setMenuState} />
    </div>
  );
}
