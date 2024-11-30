import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const useRequestAction = () => {
  const [loading, setLoading] = useState(false);

  const requestAction = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("get");
      const data = res.data;
      toast.success("success");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, requestAction };
};

export default useRequestAction;
