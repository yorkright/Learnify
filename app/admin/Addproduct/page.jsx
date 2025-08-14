"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Backend",
    author: "Adarsh Narayan",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    setLoading(true);

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
        toast.success(response.data.msg || "Blog added successfully.");
        setData({
          title: "",
          description: "",
          category: "Backend",
          author: "Adarsh Narayan",
          authorImg: "/author_img.png",
        });
        setImage(null);
      } else {
        toast.error(response.data.msg || "Error adding blog.");
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-5xl w-full mx-auto mt-10 p-6 sm:p-10 bg-white rounded-xl shadow-md"
    >
 <br /><br /><br />
      <a
        href="/admin"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 text-base"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Admin
      </a>
       <br /><br /><br />

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Blog Post</h2>

      {/* Upload Thumbnail */}
      <label htmlFor="image" className="block text-lg font-medium text-gray-800 cursor-pointer">
        Upload Thumbnail
        <div className="mt-3">
          {image && typeof image === "object" ? (
            <Image
              src={URL.createObjectURL(image)}
              width={200}
              height={100}
              alt="Thumbnail Preview"
              className="rounded-lg border-2 border-dashed border-gray-300 hover:opacity-80 transition duration-300"
            />
          ) : (
            <Image
              src={assets.upload_area}
              width={200}
              height={100}
              alt="Upload Placeholder"
              className="rounded-lg border-2 border-dashed border-gray-300 hover:opacity-80 transition duration-300"
            />
          )}
        </div>
      </label>

      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id="image"
        hidden
        accept="image/*"
      />

      {/* Blog Title */}
      <label className="block mt-6 text-lg font-medium text-gray-800">
        Blog Title
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="mt-2 w-full px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          type="text"
          placeholder="Enter blog title"
          required
        />
      </label>

      {/* Blog Description */}
      <label className="block mt-6 text-lg font-medium text-gray-800">
        Blog Description
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="mt-2 w-full px-4 py-3 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          rows={6}
          placeholder="Write blog content here"
          required
        />
      </label>

      {/* Blog Category */}
      <label className="block mt-6 text-lg font-medium text-gray-800">
        Blog Category <br />
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="mt-2 w-full sm:w-1/2 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Git/GitHub">Git/GitHub</option>
        </select>
      </label>

      {/* Submit Button */}
      <div className="mt-8 flex justify-center sm:justify-start">
        <button
          type="submit"
          disabled={loading}
          className={`w-full sm:w-40 py-3 rounded-md text-white transition duration-300 ${
            loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Posting..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default Page;
