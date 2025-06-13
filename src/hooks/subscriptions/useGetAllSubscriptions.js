import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllSubscriptions = () => {
  const [loading, setLoading] = useState(false);
  const [subscribers, setSubscribers] = useState([]);

  const getAllSubscribers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/get_vendor_subscribers`, {
        withCredentials,
      });
      const data = res.data;
      setSubscribers(data.subscribers);
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
    getAllSubscribers();
  }, []);

  return { loading, subscribers };
};

export default useGetAllSubscriptions;
