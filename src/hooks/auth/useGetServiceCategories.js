import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../constants";

const useGetServiceCategories = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const getServiceCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/view_service_categories_user`);
      const data = res.data;
      setCategories(data.service_categories);
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
    getServiceCategories();
  }, []);

  return { loading, categories };
};

export default useGetServiceCategories;
