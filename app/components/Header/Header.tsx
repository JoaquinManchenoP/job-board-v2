import React from "react";

export default function Header() {
  return (
    <div className="h-10 w-full bg-red-700 flex justify-between ">
      <div className="logo h-full w-1/4 bg-blue-500 flex items-center justify-center">
        Logo
      </div>
      <div className="menu h-full w-1/4 bg-gray-200 flex items-center justify-center">
        Menu
      </div>
    </div>
  );
}
