import { IoPersonAddSharp } from "react-icons/io5";
import { MdHomeRepairService, MdOutlineSubscriptions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

export const navItems = [
  {
    id: 1,
    icon: <MdOutlineSubscriptions />,
    name: "Subscriptions",
    path: "/subscriptions",
  },
  // {
  //   id: 2,
  //   icon: <MdHomeRepairService />,
  //   name: "Services",
  //   path: "/services",
  // },
  {
    id: 3,
    icon: <FaUser />,
    name: "My Profile",
    path: "/profile",
  },
  {
    id: 4,
    icon: <RxUpdate />,
    name: "Update Password",
    path: "/update-password",
  },
  // {
  //   id: 5,
  //   icon: <IoPersonAddSharp />,
  //   name: "Requests",
  //   path: "/requests",
  // },
];
