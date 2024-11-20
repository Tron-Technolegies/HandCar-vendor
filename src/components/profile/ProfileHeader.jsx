import React from "react";

export default function ProfileHeader() {
  return (
    <div className="flex gap-5 items-center bg-white p-5 rounded-lg mb-10">
      <img
        src="/profile.jpg"
        className="w-[100px] h-[100px] rounded-full"
      ></img>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold">Shafi Shahul</p>
        <p className="text-sm">shafishahuldq@gmail.com</p>
      </div>
    </div>
  );
}
