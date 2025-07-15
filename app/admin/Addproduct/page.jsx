"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { assets } from "@/Assets/assets"; // Make sure assets.upload_area is valid

const Page = () => {
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Backend",
    author: "Adarsh Narayan",
    authorImg: "/author_img.png",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        toast.success(result.msg || "Blog added successfully!");

        setForm({
          title: "",
          description: "",
          category: "Backend",
          author: "Adarsh Narayan",
          authorImg: "/author_img.png",
        });
        setImage(null);
      } else {
        toast.error(result.msg || "Failed to add blog.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl w-full mx-auto mt-10 p-6 sm:p-10 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Blog Post</h2>

      {/* Upload Thumbnail */}
      <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-2">
        Upload Thumbnail
      </label>
      <div className="mb-6 cursor-pointer">
        <Image
          src={image ? URL.createObjectURL(image) : assets.upload_area}
          alt="Thumbnail Preview"
          width={200}
          height={100}
          className="rounded-lg border-2 border-dashed border-gray-300 hover:opacity-80 transition duration-300"
          onClick={() => document.getElementById("imageInput").click()}
        />
        <input
          type="file"
          id="imageInput"
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      {/* Blog Title */}
      <label className="block text-lg font-medium text-gray-800 mb-2">Blog Title</label>
      <input
        name="title"
        type="text"
        placeholder="Enter blog title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md bg-white mb-6"
        required
      />

      {/* Blog Description */}
      <label className="block text-lg font-medium text-gray-800 mb-2">Blog Description</label>
      <textarea
        name="description"
        placeholder="Write your blog description here..."
        value={form.description}
        onChange={handleChange}
        rows={6}
        className="w-full p-3 border border-gray-300 rounded-md bg-white mb-6"
        required
      />

      {/* Blog Category */}
      <label className="block text-lg font-medium text-gray-800 mb-2">Blog Category</label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-md bg-white mb-6"
      >
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Git/GitHub">Git/GitHub</option>
        <option value="DevOps">DevOps</option>
        <option value="Other">Other</option>
      </select>

      {/* Submit Button */}
      <div className="mt-6 flex justify-center sm:justify-start">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default Page;
