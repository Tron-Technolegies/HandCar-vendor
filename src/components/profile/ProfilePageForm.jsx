import React, { useState } from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ProfilePageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="p-5 rounded-lg bg-white">
      <FormInput
        title={"Full Name"}
        type={"text"}
        placeholder={"Enter Name"}
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <FormInput
        title={"Email"}
        type={"email"}
        placeholder={"Enter email"}
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm  text-[#344054]">Mobile No:</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          value={mobile}
          onChange={setMobile}
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
          value={whatsapp}
          onChange={setWhatsapp}
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
        value={location}
        onchange={(e) => setLocation(e.target.value)}
      />
      <FormInput
        title={"Password"}
        type={"password"}
        placeholder={"xxxxxxxxx"}
        value={password}
        onchange={(e) => setPassword(e.target.value)}
      />
      <FormInput
        title={"New Password"}
        type={"password"}
        value={newPassword}
        onchange={(e) => setNewPassword(e.target.value)}
        placeholder={"Enter your new Password"}
      />
      <FormInput
        title={"Confirm New Password"}
        type={"password"}
        value={confirmPassword}
        onchange={(e) => confirmPassword(e.target.value)}
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
