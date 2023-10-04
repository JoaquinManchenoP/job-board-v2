"use client";
import Header from "../Header/Header";
import { useState, useContext } from "react";
import AppContext from "@/app/context/AppContext";

export default function MainLayout({ children }) {
  const context = useContext(AppContext);
  //   const [menuState, setMenuState] = useState(false);
  return (
    <div className="layout">
      <div className="header">
        <Header
          menuState={context.menuState}
          setMenuState={context.setMenuState}
        />
      </div>
      <div className="body">{children}</div>
    </div>
  );
}
