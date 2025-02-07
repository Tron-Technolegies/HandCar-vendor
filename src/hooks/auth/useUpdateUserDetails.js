import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";
import { useNavigate } from "react-router-dom";

const useUpdateUserDetails = () => {
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const updateUserDetails = async ({
    name,
    email,
    mobile,
    whatsapp,
    address,
    category,
    details,
    price,
    image,
    id,
  }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("vendor_name", name);
    formData.append("email", email);
    formData.append("phone_number", mobile);
    formData.append("whatsapp_number", whatsapp);
    formData.append("address", address);
    formData.append("service_category", category);
    formData.append("rate", price);
    formData.append("service_details", details);
    image.forEach((element) => {
      formData.append("images", element);
    });

    try {
      const res = await axios.post(
        `${base_url}/edit_vendor_profile/${id}/`,
        formData,
        {
          headers: { "Content-Type": "multipart/formdata" },
          withCredentials: true,
        }
      );
      const data = res.data;
      toast.success("Profile updated successfully");
      navigate("/");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, updateUserDetails };
};

export default useUpdateUserDetails;
