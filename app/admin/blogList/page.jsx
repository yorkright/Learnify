"use client";
import BlogTableItem from "@/components/AdminCompopnents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      toast.error("Failed to fetch blogs");
      console.error(error);
    }
  };

  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('/api/blog', {
        params: {
          id: mongoId,
        },
      });
      toast.success(response.data.msg);
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to delete blog");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <br /><br /><br /> <br /><br /><br />
      <a
        href="/admin"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 text-base"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Admin
      </a>
      <h1 className="font-extrabold font-serif text-2xl mt-4">All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-3">
                Blog Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item) => (
              <BlogTableItem
                key={item._id}
                mongoId={item._id}
                title={item.title}
                author={item.author}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
