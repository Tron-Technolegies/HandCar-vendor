import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetDashBoardStats = () => {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState(null);

  const getDashboardStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setStats(data.stats);
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

  return { loading, stats };
};

export default useGetDashBoardStats;
