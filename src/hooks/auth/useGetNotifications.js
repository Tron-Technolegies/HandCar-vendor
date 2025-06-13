import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setNotifications(data.notifications);
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
    getNotifications();
  }, []);

  return { loading, notifications };
};

export default useGetNotifications;
