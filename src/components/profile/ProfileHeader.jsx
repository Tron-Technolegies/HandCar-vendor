import React from "react";

export default function ProfileHeader({ user }) {
  return (
    <div className="flex gap-5 items-center bg-white p-5 rounded-lg mb-10">
      <img
        src="/profile.jpg"
        className="w-[100px] h-[100px] rounded-full"
      ></img>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold">{user?.vendor_name}</p>
        <p className="text-sm">{user?.email}</p>
      </div>
    </div>
  );
}
