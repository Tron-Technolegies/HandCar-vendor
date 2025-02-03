import React, { useState } from "react";
import FormInput from "../../components/FormInput";

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-2xl font-semibold sm:mb-0 mb-5">Update Password</h4>
      <div className="p-5 rounded-lg bg-white">
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
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
