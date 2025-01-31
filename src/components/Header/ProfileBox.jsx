import React, { useContext } from "react";
import { FaAngleDown } from "react-icons/fa";
import { VendorContext } from "../../VendorContext";

export default function ProfileBox({ setDropdown, showDropdown }) {
  const { user } = useContext(VendorContext);
  return (
    <div
      className="flex gap-3 items-center p-2 bg-[#F3F8FF] rounded-lg cursor-pointer"
      onClick={() => setDropdown(!showDropdown)}
    >
      <img src="/profile.jpg" className="w-[30px] h-[30px] rounded-full"></img>
      <p>{user.vendor_name}</p>
      <button>
        <FaAngleDown />
      </button>
    </div>
  );
}
