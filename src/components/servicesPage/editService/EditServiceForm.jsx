import React, { useState } from "react";
import FormInput from "../../FormInput";
import FormSelect from "../../FormSelect";
import { FiUpload } from "react-icons/fi";

export default function EditServiceForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="bg-white p-5 rounded-lg">
      <FormInput
        title={"Name of Service"}
        type={"text"}
        value={name}
        onchange={(e) => setName(e.target.value)}
        placeholder={"Enter Name"}
      />
      <FormSelect
        title={"Service Category"}
        list={["Category 1", "Category 2", "Category 3"]}
        value={category}
        onchange={(e) => setCategory(e.target.value)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Service Details</label>
        <textarea
          rows={7}
          value={details}
          onchange={(e) => setDetails(e.target.value)}
          placeholder="Enter your description"
          className="px-3 py-2 bg-[#f5f6f9] rounded-lg border border-gray-300 text-gray-900"
        ></textarea>
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Service Image</label>
        <label className="w-16 h-16 border rounded-lg border-[#959595] text-[#959595] text-3xl flex justify-center items-center cursor-pointer">
          <FiUpload />
          <input
            type="file"
            hidden
            value={image}
            onchange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <FormInput
        title={"Price"}
        type={"number"}
        value={price}
        onchange={(e) => setPrice(e.target.value)}
        placeholder={"Enter Price"}
      />
      <div className="flex justify-end">
        <button className="px-4 py-2 rounded-lg bg-[#06214E] text-white">
          Update Service
        </button>
      </div>
    </div>
  );
}
