import React from "react";

export default function NotificationCard() {
  return (
    <div className="bg-white p-5 rounded-lg flex flex-col gap-5 shadow-md">
      <div className="flex gap-3 items-center">
        <p className="text-lg font-medium">Notification title</p>
        <p className="text-[#7C7C7C] text-sm">10 mins ago</p>
      </div>
      <p className="text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>
    </div>
  );
}
