import React from "react";
import SearchBox from "../SearchBox";

export default function RequestHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-2xl font-semibold">All Requests</h4>
      <SearchBox />
    </div>
  );
}
