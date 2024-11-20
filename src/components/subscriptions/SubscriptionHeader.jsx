import React from "react";
import SearchBox from "../SearchBox";

export default function SubscriptionHeader() {
  return (
    <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start mb-10">
      <h4 className="text-2xl font-semibold sm:mb-0 mb-5">All Subscribers</h4>
      <SearchBox />
    </div>
  );
}
