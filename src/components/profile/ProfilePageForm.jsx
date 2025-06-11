import React, { useEffect, useState } from "react";
import FormInput from "../FormInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormSelect from "../FormSelect";
import { FiUpload } from "react-icons/fi";

import useUpdateUserDetails from "../../hooks/auth/useUpdateUserDetails";
import Loading from "../Loading";
import useGetServiceCategories from "../../hooks/auth/useGetServiceCategories";

export default function ProfilePageForm({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [price, setPrice] = useState("");
  const { loading, updateUserDetails } = useUpdateUserDetails();
  const { loading: categoryLoading, categories } = useGetServiceCategories();

  useEffect(() => {
    if (user) {
      setName(user.vendor_name);
      setEmail(user.email);
      setMobile(user.phone_number);
      setWhatsapp(user.whatsapp_number);
      setAddress(user.address);
      setCategory(user.service_category);
      setDetails(user.service_details);
      setPrice(user.rate);
      setOldImages(user.image);
    }
  }, [user]);

  return categoryLoading ? (
    <Loading />
  ) : (
    <div className="p-5 rounded-lg bg-white">
      <FormInput
        title={"Full Name"}
        type={"text"}
        placeholder={"Enter Name"}
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <FormInput
        title={"Email"}
        type={"email"}
        placeholder={"Enter email"}
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm  text-[#344054]">Mobile No</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          value={mobile}
          onChange={setMobile}
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            backgroundColor: "#f5f6f9",
            width: "100%",
            borderColor: "#D0D5DD",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-sm  text-[#344054]">WhatsApp No</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          value={whatsapp}
          onChange={setWhatsapp}
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
        title={"Address"}
        type={"text"}
        placeholder={"Enter Address"}
        value={address}
        onchange={(e) => setAddress(e.target.value)}
      />
      <FormSelect
        title={"Service Category"}
        value={category}
        onchange={(e) => setCategory(e.target.value)}
        list={categories.map((x) => x.name)}
      />
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Service Details</label>
        <textarea
          rows={7}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Enter your description"
          className="px-3 py-2 bg-[#f5f6f9] rounded-lg border border-gray-300 text-gray-900"
        ></textarea>
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-sm mb-3">Service Image</label>
        <div className="flex gap-3 items-center">
          <label className="w-16 h-16 border rounded-lg border-[#959595] text-[#959595] text-3xl flex justify-center items-center cursor-pointer">
            <FiUpload />
            <input
              type="file"
              hidden
              multiple
              onChange={(e) => setImage([...e.target.files])}
            />
          </label>
          <div>{image.length > 0 && <p>{image.length} files uploaded</p>}</div>
        </div>
        <div className="flex flex-wrap gap-3 my-2">
          {oldImages?.length > 0 &&
            oldImages?.map((x) => (
              <img key={x} src={x} className="w-20 rounded-md object-cover" />
            ))}
        </div>
      </div>
      <FormInput
        title={"Price"}
        value={price}
        onchange={(e) => setPrice(e.target.value)}
        type={"number"}
        placeholder={"Enter Price"}
      />

      <div className="flex justify-end">
        <button
          onClick={() =>
            updateUserDetails({
              id: user.id,
              name,
              email,
              mobile,
              whatsapp,
              address,
              category,
              details,
              price,
              image,
            })
          }
          className="px-4 py-2 bg-[#06214E] rounded-lg text-white "
        >
          Update Profile
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
}
