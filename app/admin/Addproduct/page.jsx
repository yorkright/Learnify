"use client";

import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [image, setImage] = useState(null);
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
          category: "Frontend",
          author: "Rahul",
          authorImg: "/author_img.png",
        });
        setImage(null);
      } else {
        toast.error(response.data.msg || "Error adding blog.");
      }
    } catch (error) {
      toast.error("Server error. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
  onSubmit={onSubmitHandler}
  className="max-w-5xl w-full mx-auto mt-10 p-6 sm:p-10  dark:bg-slate-800 rounded-xl shadow-md"
>  <br /><br /><br />
  <h2 className="text-2xl font-bold text-gray-200 dark:text-white mb-6">Add New Blog Post</h2>

  {/* Thumbnail Upload */}
  <label htmlFor="image" className="block text-lg font-medium text-gray-100 dark:text-gray-200">
    Upload Thumbnail

  <div className="mt-3">
    <Image
      src={image ? URL.createObjectURL(image) : assets.upload_area}
      width={200}
      height={100}
      alt="Thumbnail Preview"
      className="rounded-lg border-2 border-dashed border-gray-400 cursor-pointer hover:opacity-80 transition duration-300"
    />
  </div>
    </label>

  <input
    onChange={(e) => setImage(e.target.files[0])}
    type="file"
    id="image"
    hidden
    accept="image/*"
    required
  />

  {/* Blog Title */}
  <label className="block mt-6 text-lg font-medium text-gray-100 dark:text-gray-200">
    Blog Title
  <input
    name="title"
    onChange={onChangeHandler}
    value={data.title}
    className="mt-2 w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white dark:border-gray-600"
    type="text"
    placeholder="Enter blog title"
    required
  />
  </label>

  {/* Blog Description */}
  <label className="block mt-6 text-lg font-medium text-gray-100 dark:text-gray-200">
    Blog Description
  <textarea
    name="description"
    onChange={onChangeHandler}
    value={data.description}
    className="mt-2 w-full px-4 py-3 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-900 dark:text-white dark:border-gray-600"
    rows={6}
    placeholder="Write blog content here"
    required
  />
  </label>

  {/* Blog Category */}
  <label className="block mt-6 text-lg font-medium text-gray-100 dark:text-gray-200">
    Blog Category <br />
  <select
    name="category"
    onChange={onChangeHandler}
    value={data.category}
    className="mt-2 w-full sm:w-1/2 px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-700 dark:bg-gray-900 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
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
      className="w-full sm:w-40 py-3 rounded-md bg-white text-black hover:bg-gray-900     transition duration-300"
    >
      Add
    </button>
  </div>
</form>

  );
};

export default Page;


 