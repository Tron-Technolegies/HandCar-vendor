import React from "react";
import GoBack from "../../GoBack";

export default function EditServiceHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-2xl font-semibold">Edit Service</h4>
      <GoBack route={"/services"} />
    </div>
  );
}
