import React, { useContext } from "react";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { VendorContext } from "../VendorContext";
import SmallScreenBar from "../components/SideBar/SmallScreenBar";
import DeletePopup from "../components/DeletePopup";
import useGetUserDetaiils from "../hooks/auth/useGetUserDetaiils";
import Loading from "../components/Loading";

export default function Layout() {
  const { showSmallBar, showDeletePopup, setShowDeletePopup } =
    useContext(VendorContext);
  const { loading } = useGetUserDetaiils();
  return loading ? (
    <Loading />
  ) : (
    <div className="flex mx-0">
      <div className="hidden lg:block">
        <SideBar />
      </div>

      <div className="w-full">
        <Header />
        {showSmallBar && <SmallScreenBar />}
        {showDeletePopup && <DeletePopup setPopup={setShowDeletePopup} />}
        <div className="p-5 mb-10 bg-[#F5F6F9]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
