import { motion } from "framer-motion";
import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useLogin from "../../hooks/auth/useLogin";
import Loading from "../../components/Loading";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="xl:w-1/3 md:w-1/2 sm:w-3/4 w-11/12 mx-auto flex flex-col gap-5 items-center bg-gray-400 border border-[#A5A5A5] py-5"
      >
        <img src="/logo.png" className="w-[150px]"></img>
        <h4 className="text-xl font-semibold">VENDOR LOGIN</h4>
        <div className="w-full px-10 flex flex-col gap-3">
          <div className="flex flex-col gap-2 mb-2">
            <label className="text-sm  text-[#344054]">Mobile No:</label>
            <PhoneInput
              country={"ae"} // Set default country code (UAE in this case)
              value={phone}
              onChange={setPhone}
              inputStyle={{
                padding: "20px",
                paddingLeft: "40px",
                backgroundColor: "#f5f6f9",
                width: "100%",
                borderColor: "#D0D5DD",
              }}
            />
          </div>
          <FormInput
            placeholder={"Password"}
            type={"password"}
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full px-10 flex flex-col gap-3 items-center">
          <button
            className="px-5 py-3 bg-[#06214E] rounded-lg w-full text-white font-semibold"
            onClick={() => login({ phone, password })}
          >
            Login
          </button>
          {loading && <Loading />}
        </div>
      </motion.div>
    </motion.div>
  );
}
