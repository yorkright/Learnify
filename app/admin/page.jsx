"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    const fetchTotalBlogs = async () => {
      try {
        const res = await fetch("/api/blog?count=true");
        const data = await res.json();
        if (data.success) {
          setTotalBlogs(data.total);
        }
      } catch (error) {
        console.error("Failed to fetch blog count:", error);
      }
    };

    fetchTotalBlogs();
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto pt-20">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Admin Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
            <h2 className="text-lg font-medium text-gray-600">Total Blogs</h2>
            <p className="text-4xl font-bold text-blue-600 mt-2">{totalBlogs}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
            <h2 className="text-lg font-medium text-gray-600">Active Users</h2>
            <p className="text-4xl font-bold text-green-500 mt-2">56</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
            <h2 className="text-lg font-medium text-gray-600">Total Views</h2>
            <p className="text-4xl font-bold text-purple-500 mt-2">0</p>
          </div>
        </div>

        {/* Functional Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Users",
              description: "Manage user accounts and permissions",
              icon: "👤",
            },
            {
              title: "Content",
              description: "Manage website content and posts",
              icon: "📝",
            },
            {
              title: "Settings",
              description: "Configure system settings",
              icon: "⚙️",
            },
            {
              title: "Blogs",
              description: "Manage blog posts, categories, and comments",
              icon: "📚",
            },
            {
              title: "Analytics",
              description: "View blog performance and user engagement",
              icon: "📊",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <span className="text-3xl">{card.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div className="flex items-start gap-4 p-6 bg-white border border-red-100 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <span className="text-3xl text-red-500">🚪</span>
            <div>
              <h3 className="text-lg font-semibold text-red-600">Logout</h3>
              <button
                onClick={() =>
                  fetch("/api/logout", { method: "POST" }).then(
                    () => (window.location.href = "/login")
                  )
                }
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
