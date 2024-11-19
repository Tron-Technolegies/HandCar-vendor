import React from "react";
import SearchBox from "../SearchBox";

export default function SubscriptionHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-2xl font-semibold">All Subscribers</h4>
      <SearchBox />
    </div>
  );
}
