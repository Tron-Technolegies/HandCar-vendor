import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AddButton({ route, title }) {
  return (
    <Link
      to={route}
      className="flex gap-2 items-center bg-[#06214E] text-white rounded-lg px-4 sm:py-[9px] py-3 text-sm hover:bg-gray-800 hover:scale-105 ease-in-out duration-300"
    >
      <span>
        <FaPlus />
      </span>
      <span className="sm:block hidden">{title}</span>
    </Link>
  );
}
