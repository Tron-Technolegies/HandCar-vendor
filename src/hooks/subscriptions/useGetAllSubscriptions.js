import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { VendorContext } from "../../VendorContext";

const useGetAllSubscriptions = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const { user } = useContext(VendorContext);

  const getAllSubscribers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/get_vendor_subscribers/${user.id}/`,
        {
          withCredentials: true,
          params: {
            search,
          },
        }
      );
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

  const refetch = () => {
    getAllSubscribers();
  };

  return { loading, subscribers, refetch };
};

export default useGetAllSubscriptions;
