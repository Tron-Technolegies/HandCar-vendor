import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetDashBoardStats = () => {
  const [loading, setLoading] = useState(false);
  const [subscribers, setSubscribers] = useState(null);

  const getDashboardStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/vendor_dashboard`);
      const data = res.data;
      setSubscribers(data.total_subscribers);
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
    getDashboardStats();
  }, []);

  return { loading, subscribers };
};

export default useGetDashBoardStats;
