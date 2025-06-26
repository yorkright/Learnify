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
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto pt-36">
        <h1 className="text-3xl font-bold mb-6 text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Admin Dashboard
        </h1>
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="  bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg shadow-lg hover:shadow-blue-700/90 p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              Total Blogs
            </h2>
            <p className="text-3xl font-bold text-blue-600">{totalBlogs}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg shadow-lg hover:shadow-blue-700/90 p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              Active Users
            </h2>
            <p className="text-3xl font-bold text-green-600">56</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg shadow-lg hover:shadow-blue-700/90 p-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">
              Total Views
            </h2>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
        </div>
        <div className="  p-6">
          <div className="grid gap-4">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 p-4 shadow-lg hover:shadow-blue-700/90 rounded-lg flex items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Users
                </h2>
                <p className="text-gray-300">
                  Manage user accounts and permissions
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 shadow-lg hover:shadow-blue-700/90 p-4 rounded-lg flex items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Content
                </h2>
                <p className="text-gray-300">
                  Manage website content and posts
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 shadow-lg hover:shadow-blue-700/90 p-4 rounded-lg flex items-center">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Settings
                </h2>
                <p className="text-gray-300">Configure system settings</p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 shadow-lg hover:shadow-blue-700/90 p-4 rounded-lg flex items-center">
              <span className="text-green-500 mr-2 text-3xl font-extrabold">
                ✓
              </span>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Blogs
                </h2>
                <p className="text-gray-300">
                  Manage blog posts, categories, and comments
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 shadow-lg hover:shadow-blue-700/90 p-4 rounded-lg flex items-center">
              <span className="text-green-500 mr-2 text-3xl font-extrabold">
                ✓
              </span>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Analytics
                </h2>
                <p className="text-gray-300">
                  View blog performance and user engagement
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 shadow-lg hover:shadow-blue-700/90 p-4 rounded-lg flex items-center">
              <span className="text-green-500 mr-2 text-3xl font-extrabold">
                🤔
              </span>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-blue-400">
                  Logout
                </h2>
                <button
                  onClick={() =>
                    fetch("/api/logout", { method: "POST" }).then(
                      () => (window.location.href = "/login")
                    )
                  }
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200 mb-6"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
