import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetAllRequests = () => {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  const getAllRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setRequests(data.requests);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllRequests();
  }, []);

  return { loading, requests };
};

export default useGetAllRequests;
