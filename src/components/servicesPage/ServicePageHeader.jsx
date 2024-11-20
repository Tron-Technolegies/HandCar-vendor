import React from "react";
import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function ServicePageHeader() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start mb-10">
        <h4 className="text-2xl font-semibold sm:mb-0 mb-5">All Services</h4>
        <div className="flex sm:w-fit w-full justify-between gap-2 sm:items-center items-start">
          <SearchBox />
          <AddButton route={"/services/new"} title={"Add Service"} />
        </div>
      </div>
    </div>
  );
}
