import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex mx-0">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="w-full">
        <Header />
        <div className="p-5 mb-10 bg-[#F5F6F9]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
