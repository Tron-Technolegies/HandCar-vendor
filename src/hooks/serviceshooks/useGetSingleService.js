import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetSingleService = () => {
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});

  const getSingleService = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setService(data.service);
    } catch (err) {
      console.log(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleService();
  }, []);

  return { loading, service };
};

export default useGetSingleService;
