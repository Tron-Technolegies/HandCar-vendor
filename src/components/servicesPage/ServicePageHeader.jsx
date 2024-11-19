import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function ServicePageHeader() {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-2xl font-semibold">All Services</h4>
        <div className="flex gap-2 items-center">
          <SearchBox />
          <AddButton route={"/services/new"} title={"Add Service"} />
        </div>
      </div>
    </div>
  );
}
