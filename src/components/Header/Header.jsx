import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import ProfileBox from "./ProfileBox";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { VendorContext } from "../../VendorContext";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setShowSmallBar } = useContext(VendorContext);
  return (
    <div className="flex justify-between items-center p-5 shadow-md sticky top-0 bg-white z-10">
      <h4 className="text-2xl lg:block hidden font-semibold">Dashboard</h4>
      <button
        className="lg:hidden text-3xl"
        onClick={() => setShowSmallBar(true)}
      >
        <GiHamburgerMenu />
      </button>
      <div className="flex gap-2 items-center relative">
        <Link
          to={"/notification"}
          className="w-[40px] h-[40px] rounded-full p-2 bg-[#F3F8FF] flex justify-center items-center text-lg"
        >
          <IoNotifications />
        </Link>
        <ProfileBox setDropdown={setShowDropdown} showDropdown={showDropdown} />
      </div>
      {showDropdown && <Dropdown setSHowDropdown={setShowDropdown} />}
    </div>
  );
}
