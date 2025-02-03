import React from "react";
import { Link } from "react-router-dom";

import { IoLogOut } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import useLogout from "../../hooks/auth/useLogout";
import Loading from "../Loading";

export default function Dropdown({ setSHowDropdown }) {
  const { loading, logout } = useLogout();
  const dropdownVariants = {
    hidden: { y: "-100%", opacity: 0 }, // Slide out to the top
    visible: { y: "0%", opacity: 1 }, // Slide in from the top
    exit: { y: "-100%", opacity: 0 }, // Slide out to the top
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex flex-col bg-[#06214E] p-3 px-7 gap-2 absolute rounded-lg text-white right-5 -bottom-[50px] z-20"
      >
        {/* <Link
          to={"/profile"}
          onClick={() => setSHowDropdown(false)}
          className="flex gap-2 items-center min-w-fit border-b pb-2"
        >
          <span>
            <FaUser />
          </span>
          My Profile
        </Link> */}
        <button
          className="flex gap-2 items-center border border-red-600 px-2 py-1 rounded-md bg-red-500"
          onClick={() => {
            setSHowDropdown(false);
            logout();
          }}
        >
          <span>
            <IoLogOut />
          </span>
          Logout
        </button>
        {loading && <Loading />}
      </motion.div>
    </AnimatePresence>
  );
}
