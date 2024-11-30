import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useUpdateUserDetails = () => {
  const [loading, setLoading] = useState("");
  const updateUserDetails = async ({
    name,
    email,
    mobile,
    whatsapp,
    location,
    password,
    newPassword,
  }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", {
        name,
        email,
        mobile,
        whatsapp,
        location,
        password,
        newPassword,
      });
      const data = res.data;
      toast.success("Profile updated successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    }
  };
  return { loading, updateUserDetails };
};

export default useUpdateUserDetails;
