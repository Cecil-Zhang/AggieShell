import React from "react";

// components

import BoardNavbar from "components/Navbars/BoardNavbar.js";
import SidebarBoard from "components/Sidebar/SidebarBoard.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterBoard from "components/Footers/FooterBoard.js";

export default function MainBoard({ children }) {
  return (
    <>
      <SidebarBoard />
      <div className="relative md:ml-64 bg-blueGray-100">
        <BoardNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-1 mx-auto w-full -m-24">
          {children}
          <FooterBoard />
        </div>
      </div>
    </>
  );
}