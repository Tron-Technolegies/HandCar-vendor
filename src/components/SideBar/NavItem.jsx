import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { VendorContext } from "../../VendorContext";

export default function NavItem({ icon, name, path, location }) {
  const { setShowSmallBar } = useContext(VendorContext);
  return (
    <NavLink
      onClick={() => setShowSmallBar(false)}
      to={path}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#4779CC] hover:text-white hover:bg-[#4779CC] ease-in-out duration-500 ${
        location && location.includes(path) && "bg-[#4779CC] text-[#ffff]"
      }`}
    >
      <p>{icon}</p>
      <p>{name}</p>
    </NavLink>
  );
}
