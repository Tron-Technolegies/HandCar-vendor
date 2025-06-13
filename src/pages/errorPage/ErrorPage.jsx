import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-white w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <div className="text-5xl text-primary font-bold">404!</div>
      <p className="text-lg">The page you are looking is not found.</p>
      <Link
        to={"/"}
        className="px-4 py-2 rounded-lg bg-[#D90D10] hover:bg-black text-white"
      >
        Back Home
      </Link>
    </div>
  );
}
