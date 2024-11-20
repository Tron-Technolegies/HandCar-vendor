import React from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ProfilePageForm() {
  return (
    <div className="p-5 rounded-lg bg-white">
      <FormInput title={"Full Name"} type={"text"} placeholder={"Enter Name"} />
      <FormInput title={"Email"} type={"email"} placeholder={"Enter email"} />
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm  text-[#344054]">Mobile No:</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            backgroundColor: "#f5f6f9",
            width: "100%",
            borderColor: "#D0D5DD",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm  text-[#344054]">WhatsApp No:</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            backgroundColor: "#f5f6f9",
            width: "100%",
            borderColor: "#D0D5DD",
          }}
        />
      </div>
      <FormInput
        title={"Location"}
        type={"text"}
        placeholder={"Enter Location"}
      />
      <FormInput
        title={"Password"}
        type={"password"}
        placeholder={"xxxxxxxxx"}
      />
      <FormInput
        title={"New Password"}
        type={"password"}
        placeholder={"Enter your new Password"}
      />
      <FormInput
        title={"Confirm New Password"}
        type={"password"}
        placeholder={"Confirm your new Password"}
      />
      <div className="flex justify-end">
        <button className="px-4 py-2 bg-[#06214E] rounded-lg text-white ">
          Update Profile
        </button>
      </div>
    </div>
  );
}
