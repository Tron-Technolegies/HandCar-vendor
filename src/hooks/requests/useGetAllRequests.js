import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetAllRequests = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  const getAllRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${base_url}/get_service_interaction_logs_vendor`,
        { withCredentials: true, params: { search } }
      );
      const data = res.data;
      setRequests(data.logs);
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
    getAllRequests();
  }, []);

  const refetch = () => {
    getAllRequests();
  };

  return { loading, requests, refetch };
};

export default useGetAllRequests;
