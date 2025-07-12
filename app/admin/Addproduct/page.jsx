"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "@/Assets/assets"; // Adjust path if needed

const Page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Backend",
    author: "Adarsh Narayan",
    authorImg: "/author_img.png",
  });

  // ✅ Handle input field changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle blog form submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("authorImg", data.authorImg);
      formData.append("image", image);

      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.msg || "Blog added successfully!");

        // ✅ Reset form
        setData({
          title: "",
          description: "",
          category: "Backend",
          author: "Adarsh Narayan",
          authorImg: "/author_img.png",
        });
        setImage(null);
      } else {
        toast.error(response.data.msg || "Failed to add blog.");
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Server error. Try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-5xl w-full mx-auto mt-10 p-6 sm:p-10 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Blog Post</h2>

      {/* ✅ Image Upload */}
      <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-2">
        Upload Thumbnail
      </label>
      <div className="mb-6 cursor-pointer">
        <Image
          src={image ? URL.createObjectURL(image) : assets.upload_area}
          width={200}
          height={100}
          alt="Thumbnail Preview"
          className="rounded-lg border-2 border-dashed border-gray-300 hover:opacity-80 transition duration-300"
        />
      </div>
      <input
        type="file"
        id="image"
        hidden
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      {/* ✅ Blog Title */}
      <label className="block text-lg font-medium text-gray-800 mt-4">
        Blog Title
      </label>
      <input
        type="text"
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        placeholder="Enter blog title"
        className="mt-2 w-full px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        required
      />

      {/* ✅ Blog Description */}
      <label className="block text-lg font-medium text-gray-800 mt-6">
        Blog Description
      </label>
      <textarea
        name="description"
        value={data.description}
        onChange={onChangeHandler}
        rows={6}
        placeholder="Write blog content here"
        className="mt-2 w-full px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        required
      />

      {/* ✅ Blog Category */}
      <label className="block text-lg font-medium text-gray-800 mt-6">
        Blog Category
      </label>
      <select
        name="category"
        value={data.category}
        onChange={onChangeHandler}
        className="mt-2 w-full sm:w-1/2 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Git/GitHub">Git/GitHub</option>
      </select>

      {/* ✅ Submit Button */}
      <div className="mt-8 flex justify-center sm:justify-start">
        <button
          type="submit"
          className="w-full sm:w-40 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Page;
