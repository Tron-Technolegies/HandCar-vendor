import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useGetAllSubscriptions = () => {
  const [loading, setLoading] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  const getAllSubscribers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setSubscribers(data.subscribers);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllSubscribers();
  }, []);

  return { loading, subscribers };
};

export default useGetAllSubscriptions;
