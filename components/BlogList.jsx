"use client";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Frontend", "Backend", "Git/GitHub", "Api"];

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs
    .filter((item) =>
      menu === "All" ? true : item.category.toLowerCase() === menu.toLowerCase()
    )
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-28 px-4 sm:pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl mb-4 font-extrabold text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-purple-500">
                For You
              </span>
            </h1>

          {/* Search bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 px-4 pr-12 rounded-full border text-black border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <span className="absolute top-2.5 right-4 text-gray-400 text-sm">
              🔍
            </span>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-start gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setMenu(cat)}
                className={`py-1.5 px-4 rounded-full border transition-all text-sm font-semibold
                  ${
                    menu === cat
                      ? "bg-blue-700 text-white border-blue-700"
                      : "text-gray-600 border-gray-300 hover:bg-gray-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Items */}
          <div className="flex flex-col gap-10 border-t border-green-600 pt-9 mb-16">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((item, index) => (
                <BlogItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  author={item.author}
                  date={item.date}
                />
              ))
            ) : (
<div className=" flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-4 border-black"></div>
      </div>            )}
          </div>
        </div>

      
{/* Right Sidebar (Trending) */}
<div className="w-full lg:w-[300px] flex-shrink-0">
  <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-5">
    <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white">
      📈 Trending
    </h2>

    <div className="space-y-5">
      {filteredBlogs.slice(0, 4).map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-xl transition"
        >
          <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-lg shadow-md">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 text-center text-xs flex items-center justify-center text-gray-500 rounded-lg">
                No Image
              </div>
            )}
          </div>
          <div className="flex-1">
            <Link
              href={`/Blog/${item._id}`}
              className="text-sm font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2"
            >
              {item.title}
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {item.date
                ? new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "No Date"}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default BlogList;
