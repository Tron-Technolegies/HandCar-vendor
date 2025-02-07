import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";
import { toast } from "react-toastify";

const useGetUpdateProfileDetails = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_vendor_profile/${id}/`, {
        withCredentials: true,
      });
      const data = res.data;
      setProfile(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return { loading, profile };
};

export default useGetUpdateProfileDetails;
