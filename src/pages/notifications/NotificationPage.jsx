import React from "react";
import NotificationHeader from "../../components/notifications/NotificationHeader";
import NotificationCard from "../../components/notifications/NotificationCard";

export default function NotificationPage() {
  return (
    <div>
      <NotificationHeader />
      <div className="flex flex-col gap-3 my-10">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
}
