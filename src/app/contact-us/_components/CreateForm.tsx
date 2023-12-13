"use client";
import React, { useEffect, useState } from "react";
import { connectToDatabase } from "../../(common)/_lib/db/mongodb";
import axios from "axios";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  mobile: string;
  address: string;
  contact_msg: string;
}

interface FormErrors {
  fname?: string;
  lname?: string;
  email?: string;
  mobile?: string;
  address?: string;
  contact_msg?: string;
}

const CreateForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    contact_msg: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "First Name is required";
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "Last Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      console.log("Form submitted:", formData);

      const response = await axios.post(
        `contact-us/api/contact-form-submit`,
        formData
      );
      console.log("response : ", response);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="container mx-auto bg-gray-500">
        <h1 className="text-center text-black text-4xl">
          {" "}
          Feel Free to Contact us{" "}
        </h1>
        <hr></hr>
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {/* ... */}
          <div className="mb-4">
            <label
              htmlFor="fname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.fname ? "border-red-500" : ""
              }`}
              id="fname"
              type="text"
              placeholder="First Name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && (
              <p className="text-red-500 text-xs italic">{errors.fname}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.fname ? "border-red-500" : ""
              }`}
              id="lname"
              type="text"
              placeholder="Last Name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
            {errors.lname && (
              <p className="text-red-500 text-xs italic">{errors.lname}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mobile
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.mobile ? "border-red-500" : ""
              }`}
              id="mobile"
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs italic">{errors.mobile}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.address ? "border-red-500" : ""
              }`}
              id="address"
              type="textarea"
              placeholder="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-500 text-xs italic">{errors.address}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="contact_msg"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.contact_msg ? "border-red-500" : ""
              }`}
              id="contact_msg"
              placeholder="Message"
              name="contact_msg"
              value={formData.contact_msg}
              onChange={handleChange}
            />
            {errors.contact_msg && (
              <p className="text-red-500 text-xs italic">
                {errors.contact_msg}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contact US
            </button>
          </div>
        </form>
      </div>

      <br></br>
      <h1 className="text-center text-black text-4xl">Form Request</h1>
      <hr></hr>

      <table className="table-fixed">
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CreateForm;
