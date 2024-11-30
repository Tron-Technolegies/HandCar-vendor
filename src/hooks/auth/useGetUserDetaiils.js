import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useGetUserDetaiils = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get("url");
      const data = res.data;
      setUser(data.user);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return { loading, user };
};

export default useGetUserDetaiils;
