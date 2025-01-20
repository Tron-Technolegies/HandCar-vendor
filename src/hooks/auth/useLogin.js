import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ phone, password }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("phone_number", phone);
    formData.append("password", password);
    try {
      const res = await axios.post(`${base_url}/Vendor_Login`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      const data = res.data;
      toast.success("successfully logged in");
      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
