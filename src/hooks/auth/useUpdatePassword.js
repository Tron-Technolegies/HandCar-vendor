import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useUpdatePassword = () => {
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const updatePassword = async ({ old_password, new_password, vendor_id }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${base_url}/change_vendor_password`,
        {
          old_password,
          new_password,
          vendor_id,
        },
        { withCredentials: true }
      );
      const data = res.data;
      toast.success("Password updated successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, updatePassword };
};

export default useUpdatePassword;
