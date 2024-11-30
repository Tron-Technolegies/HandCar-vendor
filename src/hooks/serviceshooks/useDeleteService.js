import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useDeleteService = () => {
  const [loading, setLoading] = useState(false);

  const deleteService = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete("url");
      const data = res.data;
      toast.success("service deleted successfully");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    }
  };
  return { loading, deleteService };
};

export default useDeleteService;
