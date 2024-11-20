import React from "react";

export default function NotificationHeader() {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-2xl font-semibold">All Notifications</h4>
      <button className="underline text-[#06214E]">Clear All</button>
    </div>
  );
}
