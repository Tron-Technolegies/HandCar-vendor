import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function ProfileBox() {
  return (
    <div className="flex gap-3 items-center p-2 bg-[#F3F8FF] rounded-lg">
      <img src="/profile.jpg" className="w-[30px] h-[30px] rounded-full"></img>
      <p>Shafi</p>
      <button>
        <FaAngleDown />
      </button>
    </div>
  );
}
