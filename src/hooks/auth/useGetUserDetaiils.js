import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { VendorContext } from "../../VendorContext";
import { useNavigate } from "react-router-dom";

const useGetUserDetaiils = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(VendorContext);
  const navigate = useNavigate();

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/Vendor_Profile`, {
        withCredentials: true,
      });
      const data = res.data;
      setUser(data);
    } catch (err) {
      console.log(err);
      // navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const refetch = () => {
    getUserDetails();
  };

  return { loading, user, refetch };
};

export default useGetUserDetaiils;
