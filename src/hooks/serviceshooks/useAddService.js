import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddService = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addService = async ({ name, category, details, image, price }) => {
    setLoading(true);
    try {
      const res = await axios.post("url", {
        name,
        category,
        details,
        image,
        price,
      });
      const data = res.data;
      toast.success("Service added successfully");
      navigate("/services");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addService };
};

export default useAddService;
