import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useEditService = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editService = async ({ id, name, category, details, image, price }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url", {
        name,
        category,
        details,
        image,
        price,
      });
      const data = res.data;
      toast.success("service edited successfully");
      navigate("/services");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, editService };
};

export default useEditService;
